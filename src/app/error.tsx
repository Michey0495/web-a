"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        エラーが発生しました
      </h1>
      <p className="text-white/50 text-lg mb-8">
        予期しないエラーが発生しました。再度お試しください。
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600"
      >
        再試行
      </button>
    </div>
  );
}
