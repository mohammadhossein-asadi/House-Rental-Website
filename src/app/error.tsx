"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-semibold text-text">Something went wrong</h1>
      <p className="text-lg text-text-muted">{error.message}</p>
      <button
        onClick={reset}
        className="bg-brand text-white px-6 py-3 rounded-pill hover:bg-brand-hover transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
