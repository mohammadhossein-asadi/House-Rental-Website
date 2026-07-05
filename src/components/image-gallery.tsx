import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [first, ...rest] = images;

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-2">
      {/* First image: spans 2 cols + 2 rows on desktop, full width on mobile */}
      <div className="col-span-2 row-span-2 relative aspect-[2/1] md:aspect-auto">
        <Image
          src={first}
          alt={title}
          fill
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Remaining 4 images: 2-col grid on mobile, fills remaining 2x2 on desktop */}
      {rest.slice(0, 4).map((img, i) => (
        <div key={i} className="relative aspect-square">
          <Image
            src={img}
            alt={`${title} ${i + 2}`}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
