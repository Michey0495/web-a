import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeedbackWidget } from "@/components/feedback-widget";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - 法務文書をAIで自動生成｜プライバシーポリシー・利用規約・AI利用ポリシー`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "プライバシーポリシー、利用規約、AI利用ポリシーなど7種類の法務文書をAIが30秒で自動生成。業種別にカスタマイズ。無料・登録不要。日本法準拠。",
  keywords: [
    "プライバシーポリシー テンプレート",
    "利用規約 作成",
    "AI利用ポリシー 作り方",
    "特定商取引法 表記 テンプレート",
    "法務文書 自動生成",
    "プライバシーポリシー 無料",
    "利用規約 テンプレート 無料",
    "Cookieポリシー 作成",
    "生成AI ガイドライン テンプレート",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Policy AI - 法務文書をAIで自動生成",
    description:
      "プライバシーポリシー、利用規約、AI利用ポリシーなど7種類の法務文書をAIが30秒で自動生成。業種別にカスタマイズ。無料・登録不要。",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Policy AI - 法務文書をAIで自動生成",
    description:
      "プライバシーポリシー、利用規約、AI利用ポリシーなど7種類の法務文書をAIが30秒で自動生成。無料・登録不要。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FeedbackWidget repoName="web-a" />
      </body>
    </html>
  );
}
