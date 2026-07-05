'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { label: 'Properties', value: 500, suffix: '+' },
  { label: 'Happy Guests', value: 10, suffix: 'K+' },
  { label: 'Cities', value: 50, suffix: '+' },
  { label: 'Average Rating', value: 4.8, suffix: '', prefix: '' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          const stepDuration = duration / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const displayValue = target % 1 !== 0 ? count.toFixed(1) : Math.round(count);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-brand mb-2">
      {displayValue}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-surface-muted dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="text-text-muted dark:text-text-dark-muted text-sm md:text-base font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
