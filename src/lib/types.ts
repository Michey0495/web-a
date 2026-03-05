export type DocumentType =
  | "privacy-policy"
  | "terms"
  | "tokushoho"
  | "ai-policy"
  | "disclaimer"
  | "cookie-policy"
  | "refund-policy";

export type Industry =
  | "ec"
  | "saas"
  | "blog"
  | "app"
  | "freelance"
  | "other";

export type OutputFormat = "text" | "html" | "markdown";

export type CollectedData =
  | "name"
  | "email"
  | "address"
  | "phone"
  | "payment"
  | "cookie"
  | "access_log";

export interface GenerateRequest {
  documentType: DocumentType;
  industry: Industry;
  serviceName: string;
  serviceDescription: string;
  companyName?: string;
  collectedData: CollectedData[];
  format: OutputFormat;
}
