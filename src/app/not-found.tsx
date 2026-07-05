import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-semibold text-text">404</h1>
      <p className="text-xl text-text-muted">Page not found</p>
      <Link
        href="/"
        className="bg-brand text-white px-6 py-3 rounded-pill hover:bg-brand-hover transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
