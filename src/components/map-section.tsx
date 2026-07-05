interface MapSectionProps {
  embedUrl: string;
  address: string;
}

export default function MapSection({ embedUrl, address }: MapSectionProps) {
  return (
    <div className="my-12">
      <h3 className="text-[26px] font-medium text-text dark:text-text-dark">Location on map</h3>
      <iframe
        src={embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-4 rounded-xl"
      />
      <b className="mt-4 block text-text dark:text-text-dark">{address}</b>
      <p className="text-text-muted dark:text-text-dark-muted mt-1">It&apos;s like a home away from home.</p>
    </div>
  );
}
