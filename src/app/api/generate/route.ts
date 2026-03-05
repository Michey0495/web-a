import { NextRequest } from "next/server";
import { buildPrompt } from "@/lib/prompts";
import { DOCUMENT_TYPES, INDUSTRIES } from "@/lib/constants";
import type { GenerateRequest } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body: GenerateRequest = await req.json();

    // Validate required fields
    if (!body.documentType || !body.serviceName || !body.serviceDescription) {
      return Response.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    if (!DOCUMENT_TYPES[body.documentType]) {
      return Response.json(
        { error: "無効な文書タイプです" },
        { status: 400 }
      );
    }

    if (body.industry && !INDUSTRIES[body.industry]) {
      return Response.json({ error: "無効な業種です" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "APIキーが設定されていません" },
        { status: 500 }
      );
    }

    const prompt = buildPrompt(body);

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
          stream: true,
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );

    if (!anthropicRes.ok) {
      const errorText = await anthropicRes.text();
      console.error("Anthropic API error:", errorText);
      return Response.json(
        { error: "AI生成に失敗しました。しばらく経ってから再度お試しください。" },
        { status: 502 }
      );
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = anthropicRes.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const text = decoder.decode(value, { stream: true });
            const lines = text.split("\n");

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const jsonStr = line.slice(6);
                if (jsonStr === "[DONE]") continue;

                try {
                  const event = JSON.parse(jsonStr);
                  if (
                    event.type === "content_block_delta" &&
                    event.delta?.text
                  ) {
                    controller.enqueue(
                      encoder.encode(
                        `data: ${JSON.stringify({ chunk: event.delta.text })}\n\n`
                      )
                    );
                  }
                } catch {
                  // skip malformed JSON
                }
              }
            }
          }
        } finally {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`)
          );
          controller.close();
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Generate API error:", error);
    return Response.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
