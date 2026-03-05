import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">404</h1>
      <p className="text-white/50 text-lg mb-8">
        ページが見つかりませんでした。
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
