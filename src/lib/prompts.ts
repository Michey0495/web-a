import {
  DOCUMENT_TYPES,
  INDUSTRIES,
  COLLECTED_DATA_OPTIONS,
} from "./constants";
import type { GenerateRequest } from "./types";

export function buildPrompt(req: GenerateRequest): string {
  const docLabel = DOCUMENT_TYPES[req.documentType].label;
  const industryLabel = INDUSTRIES[req.industry].label;
  const dataLabels = req.collectedData
    .map((d) => COLLECTED_DATA_OPTIONS[d])
    .join("、");

  const companyLine = req.companyName
    ? `運営者名: ${req.companyName}`
    : "運営者名: （未設定）";

  const formatInstruction =
    req.format === "html"
      ? "HTML形式（h2, h3, p, ul, liタグを使用）で出力してください。"
      : req.format === "markdown"
        ? "Markdown形式（##, ###, -, **等を使用）で出力してください。"
        : "プレーンテキスト形式（見出しの前後に空行、箇条書きは「・」）で出力してください。";

  return `あなたは日本の法務文書の専門家です。以下の情報に基づいて「${docLabel}」を生成してください。

## サービス情報
- サービス名: ${req.serviceName}
- サービス概要: ${req.serviceDescription}
- ${companyLine}
- 業種: ${industryLabel}
- 収集する個人情報: ${dataLabels || "なし"}

## 出力要件
- ${formatInstruction}
- 日本語で出力
- 日本の法律（個人情報保護法、特定商取引法等）に準拠した内容
- 具体的な条文番号や法律名を適切に引用
- サービス名や運営者名を文書内に適切に埋め込む
- 制定日は「令和○年○月○日」の形式で「（制定日を記入）」と記載
- 各セクションに適切な見出しを付ける
- 冗長な表現を避け、明確かつ簡潔に

## 文書タイプ別の注意事項
${getDocTypeInstructions(req.documentType)}

文書のみを出力してください。前置きや説明は不要です。`;
}

function getDocTypeInstructions(docType: string): string {
  const instructions: Record<string, string> = {
    "privacy-policy": `- 個人情報の利用目的を明確に記載
- 第三者提供の有無と条件
- 個人情報の管理・安全管理措置
- 開示・訂正・削除請求の手続き
- Cookieの使用に関する記載
- お問い合わせ窓口の記載`,
    terms: `- サービスの定義と範囲
- 利用者の義務と禁止事項
- 知的財産権の帰属
- 免責事項・責任制限
- サービスの変更・終了
- 準拠法と管轄裁判所`,
    tokushoho: `- 販売業者の名称・所在地・連絡先
- 販売価格・送料・手数料
- 代金の支払方法・支払時期
- 商品の引渡し時期
- 返品・交換の条件
- 特定商取引法第11条に基づく表記`,
    "ai-policy": `- AI技術の利用目的と範囲
- 使用するAIモデル・サービスの種類
- AI生成コンテンツの取り扱い方針
- データの学習利用に関する方針
- AI利用における倫理的配慮
- 著作権・知的財産権への配慮
- 人間による監督・レビュー体制
- 総務省・経産省のAI事業者ガイドラインへの準拠`,
    disclaimer: `- 情報の正確性に関する免責
- 外部リンクに関する免責
- サービス停止に関する免責
- 損害賠償の制限
- 適用範囲`,
    "cookie-policy": `- Cookieの定義と種類
- 使用目的（必須Cookie、分析Cookie、広告Cookie等）
- 第三者Cookieの使用
- Cookieの管理・無効化方法
- GDPR/個人情報保護法への対応`,
    "refund-policy": `- 返品・返金の対象条件
- 返品期限
- 返品手続きの方法
- 返金方法と時期
- 返品送料の負担
- 返品・返金不可の条件`,
  };

  return instructions[docType] || "";
}
