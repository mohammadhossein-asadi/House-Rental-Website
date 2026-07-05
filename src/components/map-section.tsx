interface MapSectionProps {
  embedUrl: string;
  address: string;
}

export default function MapSection({ embedUrl, address }: MapSectionProps) {
  return (
    <div>
      <h3 className="text-[26px] font-medium">Location on map</h3>
      <iframe
        src={embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-4"
      />
      <b className="mt-2 block">{address}</b>
      <p className="text-text-muted mt-1">It&apos;s like a home away from home.</p>
    </div>
  );
}
