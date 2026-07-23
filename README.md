<div align="center">

# House Rental Website

### Modern Property Rental Platform — Next.js + React Hook Form + Zod

A full-featured property rental listing platform built with Next.js 14, featuring advanced search and filtering, form validation, date picking, and a polished responsive UI with dark/light theme support.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Coming_Soon-0a0a0a?style=for-the-badge&labelColor=0a0a0a&color=3b82f6)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-0a0a0a?style=for-the-badge&labelColor=0a0a0a&color=22c55e)](#)

</div>

---

## Overview

House Rental Website is a property listing platform that enables users to browse, search, and filter rental properties. Built with Next.js App Router, it features a robust form system powered by React Hook Form and Zod, date-range selection for booking, and a clean shadcn/ui-based component architecture.

---

## Features

| Feature | Description |
|:--------|:------------|
| **Property Listings** | Browse rental properties with detailed views |
| **Advanced Filtering** | Filter by price, location, property type, and amenities |
| **Search** | Full-text search across property listings |
| **Property Detail Pages** | Individual property pages with images and details |
| **Form Validation** | React Hook Form + Zod schema validation |
| **Date Picker** | Booking date range selection with react-day-picker |
| **Dark/Light Theme** | System-aware theme switching |
| **Responsive Design** | Mobile-first layout with shadcn/ui components |
| **Error Handling** | Custom error and not-found pages |
| **Loading States** | Skeleton loading for async content |

---

## Tech Stack

| Layer | Technologies |
|:------|:-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **React** | React 18 |
| **Styling** | Tailwind CSS 3.4 |
| **UI** | shadcn/ui (Radix UI primitives) |
| **Forms** | React Hook Form 7.8, Zod 4.4 |
| **Date** | react-day-picker, date-fns 4 |
| **Theme** | next-themes 0.4 |
| **Icons** | Lucide React |

---

## Project Structure

```
House-Rental-Website/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Home/landing page
│   │   ├── listing/             # Property listings
│   │   ├── property/            # Individual property pages
│   │   ├── layout.tsx           # Root layout
│   │   ├── loading.tsx          # Loading state
│   │   ├── error.tsx            # Error boundary
│   │   ├── not-found.tsx        # 404 page
│   │   └── globals.css          # Global styles
│   ├── components/              # UI components
│   ├── data/                    # Mock property data
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utilities
│   └── types/                   # TypeScript types
├── components.json              # shadcn/ui config
├── tailwind.config.ts
├── postcss.config.mjs
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

## Author

**Mohammadhossein Asadi** — Frontend & Full-Stack Engineer

[![GitHub](https://img.shields.io/badge/GitHub-mohammadhossein--asadi-0a0a0a?style=flat-square&logo=github)](https://github.com/mohammadhossein-asadi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohammadhossein--asadi-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mohammadhossein-asadi)

---

## License

This project is licensed under the [MIT License](LICENSE).
