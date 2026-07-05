import Image from 'next/image';
import StarRating from '@/components/star-rating';
import type { Host } from '@/types';

interface HostInfoProps {
  host: Host;
}

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <>
      <div className="flex items-start gap-6 my-10">
        <Image
          src={host.avatarUrl}
          alt={host.name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold uppercase text-text dark:text-text-dark">
            Hosted by {host.name}
          </h2>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-text-muted dark:text-text-dark-muted">
            <StarRating rating={host.rating} size="sm" />
            <span>{host.reviewCount} reviews</span>
            <span>Response rate {host.responseRate}%</span>
            <span>Time: {host.responseTimeMinutes} min</span>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="inline-block mb-10 ml-[120px] max-md:ml-0 text-text dark:text-text-dark no-underline py-4 px-12 border border-brand rounded-lg hover:bg-brand hover:text-white transition-colors"
      >
        Contact Host
      </a>
    </>
  );
}
