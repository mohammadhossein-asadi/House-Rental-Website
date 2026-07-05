'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

const sizeMap = {
  sm: 14,
  md: 18,
};

export default function StarRating({
  rating,
  reviewCount,
  size = 'md',
}: StarRatingProps) {
  const starSize = sizeMap[size];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={starSize}
          className="fill-brand text-brand"
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <div className="relative" style={{ width: starSize, height: starSize }}>
          <Star
            size={starSize}
            className="absolute inset-0 text-gray-300"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: '50%' }}
          >
            <Star
              size={starSize}
              className="fill-brand text-brand"
            />
          </div>
        </div>
      )}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={starSize}
          className="text-gray-300"
        />
      ))}

      {/* Review Count */}
      {reviewCount !== undefined && (
        <span
          className={`ml-1 text-text-muted ${
            size === 'sm' ? 'text-xs' : 'text-sm'
          }`}
        >
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
