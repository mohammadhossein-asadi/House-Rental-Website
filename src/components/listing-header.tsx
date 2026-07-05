interface ListingHeaderProps {
  total: number;
  location: string;
}

export function ListingHeader({ total, location }: ListingHeaderProps) {
  return (
    <div className="mb-8 pt-24">
      <p className="text-sm text-text-muted dark:text-text-dark-muted mb-2">{total}+ Options</p>
      <h1 className="text-3xl font-semibold text-text dark:text-text-dark mb-8">
        Recommended Places In {location}
      </h1>
    </div>
  );
}
