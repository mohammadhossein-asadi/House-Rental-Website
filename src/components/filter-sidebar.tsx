'use client';

import { useState } from 'react';
import { Property, SearchFilters, PropertyType, Amenity } from '@/types';
import { SlidersHorizontal, X } from 'lucide-react';

interface FilterSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  properties: Property[];
}

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'house', label: 'House' },
  { value: 'hostel', label: 'Hostel' },
  { value: 'flat', label: 'Flat' },
  { value: 'villa', label: 'Villa' },
  { value: 'guest-suite', label: 'Guest Suite' },
];

const AMENITIES: { value: Amenity; label: string }[] = [
  { value: 'air-conditioning', label: 'Air Conditioning' },
  { value: 'wifi', label: 'Wifi' },
  { value: 'gym', label: 'Gym' },
  { value: 'pool', label: 'Pool' },
  { value: 'kitchen', label: 'Kitchen' },
];

function Checkbox({
  checked,
  onChange,
  label,
  count,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  count: number;
}) {
  return (
    <label className="flex items-center justify-between cursor-pointer py-1.5 group">
      <div className="flex items-center gap-2.5">
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            checked
              ? 'bg-text dark:bg-text-dark border-text dark:border-text-dark'
              : 'border-text-subtle dark:border-text-dark-subtle'
          }`}
          onClick={(e) => {
            e.preventDefault();
            onChange(!checked);
          }}
        >
          {checked && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span className="text-sm text-text dark:text-text-dark group-hover:text-text dark:group-hover:text-white">{label}</span>
      </div>
      <span className="text-sm text-text-subtle dark:text-text-dark-subtle">({count})</span>
    </label>
  );
}

function FilterContent({ filters, onFiltersChange, properties }: FilterSidebarProps) {
  const typeCounts = PROPERTY_TYPES.map((t) => ({
    ...t,
    count: properties.filter((p) => p.propertyType === t.value).length,
  }));

  const amenityCounts = AMENITIES.map((a) => ({
    ...a,
    count: properties.filter((p) => p.amenities.includes(a.value)).length,
  }));

  function toggleType(type: PropertyType) {
    const next = filters.propertyTypes.includes(type)
      ? filters.propertyTypes.filter((t) => t !== type)
      : [...filters.propertyTypes, type];
    onFiltersChange({ ...filters, propertyTypes: next, page: 1 });
  }

  function toggleAmenity(amenity: Amenity) {
    const next = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    onFiltersChange({ ...filters, amenities: next, page: 1 });
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-text dark:text-text-dark mb-6">Select Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-text-muted dark:text-text-dark-muted mb-3 uppercase tracking-wide">Property Type</h3>
        {typeCounts.map((t) => (
          <Checkbox
            key={t.value}
            checked={filters.propertyTypes.includes(t.value)}
            onChange={() => toggleType(t.value)}
            label={t.label}
            count={t.count}
          />
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-text-muted dark:text-text-dark-muted mb-3 uppercase tracking-wide">Amenities</h3>
        {amenityCounts.map((a) => (
          <Checkbox
            key={a.value}
            checked={filters.amenities.includes(a.value)}
            onChange={() => toggleAmenity(a.value)}
            label={a.label}
            count={a.count}
          />
        ))}
      </div>

      <button className="text-sm text-text-subtle dark:text-text-dark-subtle hover:text-text dark:hover:text-text-dark underline underline-offset-4">
        View More
      </button>
    </div>
  );
}

export function FilterSidebar(props: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile filter toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border dark:border-border-dark rounded-lg text-sm font-medium text-text dark:text-text-dark hover:bg-surface-muted dark:hover:bg-surface-dark-muted mb-4"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block border border-text-subtle dark:border-border-dark p-5 mt-8">
        <FilterContent {...props} />
      </aside>

      {/* Mobile dialog */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-surface-dark shadow-xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-text dark:text-text-dark">Filters</h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded hover:bg-surface-muted dark:hover:bg-surface-dark-muted text-text dark:text-text-dark"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterContent {...props} />
          </div>
        </div>
      )}
    </>
  );
}
