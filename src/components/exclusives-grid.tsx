import Image from 'next/image';
import { exclusives } from '@/data/exclusives';

export function ExclusivesGrid() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-text mb-8 text-center">
        Exclusive Destinations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-8">
        {exclusives.map((item) => (
          <div key={item.id} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.city}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-lg font-semibold">{item.city}</p>
                <p className="text-sm">starts @ ${item.startsAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}