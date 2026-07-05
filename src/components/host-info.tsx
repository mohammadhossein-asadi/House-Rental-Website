import Image from 'next/image';
import StarRating from '@/components/star-rating';
import type { Host } from '@/types';

interface HostInfoProps {
  host: Host;
}

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <div className="flex items-start gap-6">
      <Image
        src={host.avatarUrl}
        alt={host.name}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <div>
        <h2 className="text-xl font-semibold uppercase">
          Hosted by {host.name}
        </h2>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <StarRating rating={host.rating} size="sm" />
          <span>{host.reviewCount} reviews</span>
          <span>Response rate {host.responseRate}%</span>
          <span>Time: {host.responseTimeMinutes} min</span>
        </div>
      </div>
    </div>
  );
}
