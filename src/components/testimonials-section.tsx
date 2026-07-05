import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import StarRating from '@/components/star-rating';

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-surface-dark">
      <div className="container mx-auto px-[7%]">
        <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-surface-dark-muted rounded-xl shadow-md dark:shadow-dark-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-text dark:text-text-dark text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-subtle dark:text-text-dark-subtle text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} size="sm" />
              <p className="text-text-muted dark:text-text-dark-muted text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
