interface PropertyQuickInfoProps {
  hostName: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  pricePerDay: number;
}

export default function PropertyQuickInfo({
  hostName,
  guests,
  bedrooms,
  bathrooms,
  pricePerDay,
}: PropertyQuickInfoProps) {
  return (
    <div className="py-4">
      <h2 className="text-xl font-medium">
        Enter rental unit hosted by {hostName}
      </h2>
      <p className="text-text-muted mt-1">
        {guests} guests &nbsp;&nbsp; {bedrooms} beds &nbsp;&nbsp; {bathrooms}{' '}
        bathroom
      </p>
      <h4 className="mt-2 text-lg font-semibold">${pricePerDay} / day</h4>
    </div>
  );
}
