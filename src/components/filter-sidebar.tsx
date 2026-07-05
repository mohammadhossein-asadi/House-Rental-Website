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
          className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors"
          style={{
            borderColor: checked ? '#333' : '#999',
            backgroundColor: checked ? '#333' : 'transparent',
          }}
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
        <span className="text-sm text-gray-700 group-hover:text-gray-900">{label}</span>
      </div>
      <span className="text-sm text-gray-400">({count})</span>
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
      <h2 className="text-lg font-semibold mb-6">Select Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Property Type</h3>
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
        <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Amenities</h3>
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

      <button className="text-sm text-gray-500 hover:text-gray-800 underline underline-offset-4">
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
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 mb-4"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:block"
        style={{ border: '1px solid #999', padding: '20px 30px', marginTop: 30 }}
      >
        <FilterContent {...props} />
      </aside>

      {/* Mobile dialog */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded hover:bg-gray-100"
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
