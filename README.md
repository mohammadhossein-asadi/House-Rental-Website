# Staybnb - House Rental Website

A modern house rental platform built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## About the Project

Staybnb is a dynamic and user-friendly platform for discovering rental properties. Built with modern web technologies, it provides a seamless user experience for browsing and searching rental homes.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4+
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation

## Features

- **Homepage:** Hero section with search, exclusive destinations, trending places, CTA, traveller stories
- **Property Listings:** Filterable grid with property type and amenity filters, pagination
- **Property Details:** Image gallery, booking form, host info, Google Maps embed
- **Responsive Design:** Mobile-first approach with hamburger navigation
- **Type Safety:** Full TypeScript coverage
- **SEO Optimized:** Static generation with metadata

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── listing/page.tsx      # Property listings
│   └── property/[slug]/page.tsx  # Property details
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer
│   ├── hero.tsx              # Hero section
│   ├── search-bar.tsx        # Search form
│   ├── property-card.tsx     # Property card
│   ├── filter-sidebar.tsx    # Filter sidebar
│   ├── booking-form.tsx      # Booking form
│   └── ...                   # More components
├── data/
│   ├── properties.ts         # Property data
│   ├── exclusives.ts         # Exclusive destinations
│   ├── trending.ts           # Trending places
│   └── stories.ts            # Traveller stories
├── lib/
│   ├── queries.ts            # Data filtering/pagination
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript interfaces
```

## Pages

- `/` - Homepage with hero, search, exclusives, trending, CTA, stories
- `/listing` - Property listings with filters and pagination
- `/property/[slug]` - Property details with gallery, booking form, host info

## Deployment

Deployed on Vercel: [Staybnb](https://houserental.mohammadhs.com)

## Author

**Mohammadhossein**
