import { SearchBar } from './search-bar';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[url('/images/banner.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-white text-[4vw] font-bold text-center mb-8">
          Find Your Next stay
        </h1>
        <SearchBar />
      </div>
    </section>
  );
}