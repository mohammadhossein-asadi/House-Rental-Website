import StarRating from '@/components/star-rating';

interface PropertyHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

export default function PropertyHeader({
  title,
  rating,
  reviewCount,
  location,
}: PropertyHeaderProps) {
  return (
    <div className="mt-[50px]">
      <h1 className="text-3xl font-semibold text-text dark:text-text-dark">{title}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-4">
        <StarRating rating={rating} reviewCount={reviewCount} />
        <p className="text-text-muted dark:text-text-dark-muted text-sm">{location}</p>
      </div>
    </div>
  );
}
