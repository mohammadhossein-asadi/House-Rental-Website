<div align="center">

# House Rental Website

### Recipe Discovery Platform with Ad Monetization

A variant of the TelmaFood recipe discovery app with integrated ad monetization — featuring sponsored listings, contextual banners, premium promotions, and impression tracking. Built with Next.js 16, React 19, and Tailwind CSS 4.

[![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## Overview

House Rental Website is a recipe discovery platform (originally based on TelmaFood) extended with a comprehensive ad monetization system. It connects to the Edamam Recipe Search API and adds sponsored content slots, impression tracking, and premium promotional blocks — demonstrating how to integrate advertising into a content-focused application without compromising UX.

> **Note:** Despite the repository name, this project is a recipe discovery platform with ad integration. The name reflects an earlier iteration; the current codebase focuses on food/recipe content.

---

## Features

| Feature | Description |
|:--------|:------------|
| **Keyword Search** | Free-text recipe search via Edamam API |
| **8 Filter Categories** | Meal type, diet, health labels (34), cuisine (19), dish type (16), cooking time, ingredients, calories |
| **Infinite Pagination** | "Load more" pattern with React Query infinite queries |
| **Recipe Detail Pages** | Full recipe view with ingredients, nutrition, source link |
| **Save/Bookmark** | Persistent local storage via Zustand with toast notifications |
| **Saved Recipes Page** | View all bookmarked recipes |
| **Home Page** | Hero search, meal type tabs, cuisine slider carousels |
| **Dark/Light Theme** | System-aware with next-themes |
| **Mobile Navigation** | Bottom tab bar for mobile users |
| **Rate Limiting** | Client-side rate limiter (3 req/s, retry on 429) |
| **URL-as-State** | Filter state synced with URL params for shareable links |
| **Skeleton Loading** | Card and detail page loading skeletons |
| **Ad Monetization** | Sponsored cards, contextual banners, hero promos, premium blocks |
| **Impression Tracking** | Custom hook for ad viewability measurement |
| **Sponsored Labeling** | Clear "Sponsored" badges on promoted content |

---

## Tech Stack

| Layer | Technologies |
|:------|:-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **React** | React 19 |
| **Styling** | Tailwind CSS 4, shadcn/ui |
| **Data Fetching** | TanStack React Query 5.101 |
| **State** | Zustand 5 (persisted saved recipes) |
| **Theme** | next-themes 0.4 |
| **API** | Edamam Recipe Search API v2 |
| **Icons** | Lucide React |
| **Toast** | Sonner 2 |
| **Font** | DM Sans, DM Serif Display (Google Fonts) |

---

## Ad System Components

| Component | Purpose |
|:---|:---|
| `SponsoredCard` | In-feed sponsored recipe listings |
| `ContextualBanner` | Context-aware banner ads |
| `HeroPromo` | Hero section promotional block |
| `PremiumPromoBlock` | Premium upgrade call-to-action |
| `SponsoredLabel` | Accessible "Sponsored" badge |
| `AdContainer` | Layout wrapper with impression tracking |
| `AdCTA` | Call-to-action button for ads |
| `AdMedia` | Responsive ad media rendering |
| `AdSkeleton` | Loading placeholder for ad slots |
| `useAdImpression` | Hook for viewability tracking |

---

## Project Structure

```
House-Rental-Website/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Home (hero + meal tabs + cuisine sliders)
│   │   ├── recipes/page.tsx     # Search + filter + infinite grid
│   │   ├── recipe/[id]/page.tsx # Recipe detail
│   │   ├── saved/page.tsx       # Saved recipes
│   │   ├── api/recipes/         # API routes for recipes
│   │   └── layout.tsx           # Root layout
│   ├── components/
│   │   ├── ad/                  # Ad system components
│   │   ├── filters/             # FilterBar, FilterAccordion, checkboxes, radios
│   │   ├── home/                # Hero, MealTabs, CuisineSlider
│   │   ├── layout/              # Header, Footer, MobileNav
│   │   ├── recipe/              # RecipeCard, RecipeDetail, skeletons, SaveButton
│   │   ├── search/              # SearchBar
│   │   └── ui/                  # 14 shadcn/ui components
│   ├── lib/
│   │   ├── ad/                  # Ad mock data, types, utilities
│   │   ├── api/                 # Edamam client, rate limiter, types
│   │   ├── hooks/               # useRecipes, useRecipe, useDebounce, useAdImpression
│   │   ├── store/               # recipeStore, filterStore
│   │   └── utils/               # constants (filter options)
│   └── providers/               # QueryProvider, ThemeProvider
├── components.json
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start

### Prerequisites

- **Node.js** >= 18.0.0

### Installation

```bash
git clone https://github.com/mohammadhossein-asadi/House-Rental-Website.git
cd House-Rental-Website
npm install
```

### Environment Configuration

Create a `.env.local` file:

```env
NEXT_PUBLIC_EDAMAM_API_ID="your-api-id"
NEXT_PUBLIC_EDAMAM_API_KEY="your-api-key"
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

---

## Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

---

## Related Projects

- [TelmaFood](https://github.com/mohammadhossein-asadi/telmafood) — The base recipe discovery platform without ad integration

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Mohammadhossein Asadi** — Frontend & Full-Stack Engineer

[![GitHub](https://img.shields.io/badge/GitHub-mohammadhossein--asadi-0a0a0a?style=flat-square&logo=github)](https://github.com/mohammadhossein-asadi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohammadhossein--asadi-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mohammadhossein-asadi)

</div>