import { NextRequest } from "next/server";
import { DOCUMENT_TYPES, INDUSTRIES } from "@/lib/constants";
import { buildPrompt } from "@/lib/prompts";
import type { GenerateRequest, DocumentType, Industry } from "@/lib/types";

const TOOL_DEFINITION = {
  name: "generate_legal_document",
  description:
    "Webサービス向けの法務文書（プライバシーポリシー、利用規約、AI利用ポリシー等）をAI生成する。日本の法律に準拠。",
  inputSchema: {
    type: "object" as const,
    properties: {
      documentType: {
        type: "string",
        enum: Object.keys(DOCUMENT_TYPES),
        description: "生成する文書のタイプ",
      },
      industry: {
        type: "string",
        enum: Object.keys(INDUSTRIES),
        description: "サービスの業種",
      },
      serviceName: {
        type: "string",
        description: "サービス名",
      },
      serviceDescription: {
        type: "string",
        description: "サービスの概要説明",
      },
      companyName: {
        type: "string",
        description: "会社名・運営者名（任意）",
      },
      collectedData: {
        type: "array",
        items: {
          type: "string",
          enum: [
            "name",
            "email",
            "address",
            "phone",
            "payment",
            "cookie",
            "access_log",
          ],
        },
        description: "収集する個人情報の種類",
      },
      format: {
        type: "string",
        enum: ["text", "html", "markdown"],
        description: "出力形式（デフォルト: text）",
      },
    },
    required: ["documentType", "serviceName", "serviceDescription"],
  },
};

function createJsonRpcResponse(id: string | number | null, result: unknown) {
  return { jsonrpc: "2.0", id, result };
}

function createJsonRpcError(
  id: string | number | null,
  code: number,
  message: string
) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { method, id, params } = body;

    switch (method) {
      case "initialize":
        return Response.json(
          createJsonRpcResponse(id, {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: {
              name: "Policy AI MCP Server",
              version: "1.0.0",
            },
          })
        );

      case "tools/list":
        return Response.json(
          createJsonRpcResponse(id, {
            tools: [TOOL_DEFINITION],
          })
        );

      case "tools/call": {
        const toolName = params?.name;
        if (toolName !== "generate_legal_document") {
          return Response.json(
            createJsonRpcError(id, -32602, `Unknown tool: ${toolName}`)
          );
        }

        const args = params?.arguments || {};
        const documentType = args.documentType as DocumentType;
        const industry = (args.industry || "other") as Industry;

        if (
          !documentType ||
          !args.serviceName ||
          !args.serviceDescription
        ) {
          return Response.json(
            createJsonRpcError(
              id,
              -32602,
              "Required: documentType, serviceName, serviceDescription"
            )
          );
        }

        if (!DOCUMENT_TYPES[documentType]) {
          return Response.json(
            createJsonRpcError(id, -32602, `Invalid documentType: ${documentType}`)
          );
        }

        const generateReq: GenerateRequest = {
          documentType,
          industry,
          serviceName: args.serviceName,
          serviceDescription: args.serviceDescription,
          companyName: args.companyName,
          collectedData: args.collectedData || [],
          format: args.format || "text",
        };

        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
          return Response.json(
            createJsonRpcError(id, -32603, "API key not configured")
          );
        }

        const prompt = buildPrompt(generateReq);

        const anthropicRes = await fetch(
          "https://api.anthropic.com/v1/messages",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": apiKey,
              "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
              model: "claude-haiku-4-5-20251001",
              max_tokens: 4096,
              messages: [{ role: "user", content: prompt }],
            }),
          }
        );

        if (!anthropicRes.ok) {
          return Response.json(
            createJsonRpcError(id, -32603, "AI generation failed")
          );
        }

        const result = await anthropicRes.json();
        const text =
          result.content?.[0]?.text || "文書の生成に失敗しました。";

        return Response.json(
          createJsonRpcResponse(id, {
            content: [{ type: "text", text }],
          })
        );
      }

      default:
        return Response.json(
          createJsonRpcError(id, -32601, `Method not found: ${method}`)
        );
    }
  } catch (error) {
    console.error("MCP API error:", error);
    return Response.json(
      createJsonRpcError(null, -32603, "Internal server error")
    );
  }
}
