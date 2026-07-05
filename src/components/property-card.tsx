import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';
import { Star } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
      <span className="ml-1">
        {rating.toFixed(1)} ({count} Reviews)
      </span>
    </div>
  );
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.slug}`} className="block group">
      <div
        className="flex flex-col sm:flex-row gap-6"
        style={{ borderTop: '1px solid #ccc', padding: '30px 0' }}
      >
        <div className="w-full sm:w-2/5 relative aspect-[4/3] sm:aspect-auto sm:h-56 overflow-hidden rounded-xl">
          <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{property.subtitle}</p>
            <h3 className="text-xl font-bold mb-2" style={{ fontSize: 22 }}>
              {property.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {property.bedrooms} Bedroom / {property.bathrooms} Bathroom / Wifi / Kitchen
            </p>
            <StarRating rating={property.rating} count={property.reviewCount} />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">{property.guests} Guest</span>
            <span className="text-lg font-semibold text-[#333]">
              ${property.pricePerDay} / day
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
