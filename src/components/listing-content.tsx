'use client';

import { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { SearchFilters } from '@/types';
import { filterProperties, paginateProperties } from '@/lib/queries';
import { ListingHeader } from './listing-header';
import { PropertyCard } from './property-card';
import { FilterSidebar } from './filter-sidebar';
import { Pagination } from './pagination';

interface ListingContentProps {
  initialFilters: SearchFilters;
}

export function ListingContent({ initialFilters }: ListingContentProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateURL(newFilters: SearchFilters) {
    const params = new URLSearchParams(searchParams.toString());

    params.set('query', newFilters.query);
    params.set('checkIn', newFilters.checkIn);
    params.set('checkOut', newFilters.checkOut);
    params.set('guests', String(newFilters.guests));
    params.set('page', String(newFilters.page));

    if (newFilters.propertyTypes.length > 0) {
      params.set('propertyTypes', newFilters.propertyTypes.join(','));
    } else {
      params.delete('propertyTypes');
    }

    if (newFilters.amenities.length > 0) {
      params.set('amenities', newFilters.amenities.join(','));
    } else {
      params.delete('amenities');
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  function handleFiltersChange(newFilters: SearchFilters) {
    setFilters(newFilters);
    updateURL(newFilters);
  }

  function handlePageChange(page: number) {
    const newFilters = { ...filters, page };
    setFilters(newFilters);
    updateURL(newFilters);
  }

  const filtered = filterProperties(filters);
  const { items, totalPages, total } = paginateProperties(filtered, filters.page, filters.pageSize);
  const location = filters.query || 'San Francisco';

  return (
    <div className="container mx-auto px-4 py-8">
      <ListingHeader total={total} location={location} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content - 70% */}
        <div className="lg:w-[70%]">
          {items.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No properties found matching your filters.
            </div>
          ) : (
            <div className="space-y-0">
              {items.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Filter sidebar - 25% */}
        <div className="lg:w-[25%]">
          <FilterSidebar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            properties={filtered}
          />
        </div>
      </div>
    </div>
  );
}
