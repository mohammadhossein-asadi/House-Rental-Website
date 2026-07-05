export type PropertyType = 'house' | 'hostel' | 'flat' | 'villa' | 'guest-suite';

export type Amenity =
  | 'air-conditioning'
  | 'wifi'
  | 'gym'
  | 'pool'
  | 'kitchen'
  | 'parking'
  | 'tv'
  | 'washer';

export interface Host {
  name: string;
  avatarUrl: string;
  rating: number;
  reviewCount: number;
  responseRate: number;
  responseTimeMinutes: number;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  pricePerDay: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  galleryImages: string[];
  propertyType: PropertyType;
  amenities: Amenity[];
  host: Host;
  mapEmbedUrl: string;
}

export interface Exclusive {
  id: string;
  city: string;
  startsAt: number;
  imageUrl: string;
}

export interface TrendingPlace {
  id: string;
  city: string;
  imageUrl: string;
}

export interface Story {
  id: string;
  imageUrl: string;
  excerpt: string;
}

export interface SearchFilters {
  query: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  propertyTypes: PropertyType[];
  amenities: Amenity[];
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  items: T[];
  totalPages: number;
  total: number;
}

export interface FilterOption {
  value: string;
  label: string;
}
