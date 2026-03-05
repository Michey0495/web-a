import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/50">
          <div>
            <p className="text-white font-bold mb-2">{SITE_NAME}</p>
            <p className="leading-relaxed">
              法務文書をAIで自動生成。
              <br />
              プライバシーポリシー、利用規約、AI利用ポリシーに対応。
            </p>
          </div>
          <div>
            <p className="text-white/70 font-medium mb-2">文書タイプ</p>
            <ul className="space-y-1">
              <li>
                <Link href="/docs/privacy-policy" className="hover:text-white cursor-pointer transition-all duration-200">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/docs/terms" className="hover:text-white cursor-pointer transition-all duration-200">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/docs/tokushoho" className="hover:text-white cursor-pointer transition-all duration-200">
                  特定商取引法表記
                </Link>
              </li>
              <li>
                <Link href="/docs/ai-policy" className="hover:text-white cursor-pointer transition-all duration-200">
                  AI利用ポリシー
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white/70 font-medium mb-2">リンク</p>
            <ul className="space-y-1">
              <li>
                <Link href="/generate" className="hover:text-white cursor-pointer transition-all duration-200">
                  無料で作成
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Michey0495/web-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer transition-all duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href={`${SITE_URL}/llms.txt`} className="hover:text-white cursor-pointer transition-all duration-200">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Ghostfee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
