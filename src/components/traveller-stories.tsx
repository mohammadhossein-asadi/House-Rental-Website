import Image from 'next/image';
import { stories } from '@/data/stories';

export function TravellerStories() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-8 text-center">
        Traveller Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src={story.imageUrl}
              alt="Traveller story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/20">
              <p className="text-white text-xl md:text-2xl font-medium text-center">
                {story.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
