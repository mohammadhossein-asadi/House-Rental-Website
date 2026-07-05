interface ListingHeaderProps {
  total: number;
  location: string;
}

export function ListingHeader({ total, location }: ListingHeaderProps) {
  return (
    <div className="mb-8">
      <p className="text-sm text-gray-500 mb-2">{total}+ Options</p>
      <h1 className="text-3xl font-semibold" style={{ color: '#333', fontWeight: 600, marginBottom: 30 }}>
        Recommended Places In {location}
      </h1>
    </div>
  );
}
