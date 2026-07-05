import Image from 'next/image';
import Link from 'next/link';
import { trending } from '@/data/trending';

export function TrendingPlaces() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-8 text-center">
        Trending Places
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trending.map((place) => (
          <Link
            key={place.id}
            href={`/listing?location=${encodeURIComponent(place.city)}`}
            className="group"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={place.imageUrl}
                alt={place.city}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-2 font-semibold text-text dark:text-text-dark text-center">{place.city}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
