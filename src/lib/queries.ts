import { Property, SearchFilters, PaginatedResult } from '../types';
import { properties } from '../data/properties';

export function filterProperties(filters: SearchFilters): Property[] {
  return properties.filter((property) => {
    if (filters.query) {
      const query = filters.query.toLowerCase();
      const matchesTitle = property.title.toLowerCase().includes(query);
      const matchesLocation = property.location.toLowerCase().includes(query);
      if (!matchesTitle && !matchesLocation) return false;
    }

    if (filters.guests > 0 && property.guests < filters.guests) {
      return false;
    }

    if (filters.propertyTypes.length > 0) {
      if (!filters.propertyTypes.includes(property.propertyType)) {
        return false;
      }
    }

    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
        property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }

    return true;
  });
}

export function paginateProperties<T>(
  items: T[],
  page: number,
  pageSize: number
): PaginatedResult<T> {
  const total = items.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedItems = items.slice(start, end);

  return {
    items: paginatedItems,
    totalPages,
    total,
  };
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function getPropertiesByLocation(location: string): Property[] {
  const lowerLocation = location.toLowerCase();
  return properties.filter((property) =>
    property.location.toLowerCase().includes(lowerLocation)
  );
}
