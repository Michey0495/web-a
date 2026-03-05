import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-white tracking-tight cursor-pointer transition-all duration-200 hover:text-blue-500"
        >
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/generate"
            className="text-sm text-white/70 hover:text-white cursor-pointer transition-all duration-200"
          >
            文書を作成
          </Link>
          <Link
            href="/docs/privacy-policy"
            className="text-sm text-white/70 hover:text-white cursor-pointer transition-all duration-200"
          >
            対応文書
          </Link>
        </nav>
      </div>
    </header>
  );
}
