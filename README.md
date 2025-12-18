# 28 Holidays - Sri Lanka Travel Website

A modern, responsive website for 28 Holidays travel agency, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional design matching the original mockups
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Pages**:
  - Home page with hero section, vehicle quote form, about section, services, testimonials, and itineraries
  - About Us page with company information and experiences
  - Gallery page with beautiful image grid
  - Itineraries page with tour packages
- **Custom Styling**:
  - Primary color: #0056D8
  - Font families: Lora (headings) and Cabin (body text)
- **Interactive Components**:
  - Mobile-responsive navigation
  - WhatsApp integration
  - Contact forms
  - Image galleries

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd 28holidays-remake
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
28holidays-remake/
├── app/                      # Next.js app directory
│   ├── about/               # About Us page
│   ├── gallery/             # Gallery page
│   ├── itinerary/           # Itineraries page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── VehicleQuoteForm.tsx # Quote request form
│   ├── AboutSection.tsx     # About section
│   ├── ServicesSection.tsx  # Services cards
│   ├── TestimonialsSection.tsx # Customer reviews
│   ├── ItinerarySection.tsx # Tour packages
│   └── PartnersSection.tsx  # Partner logos
├── public/                  # Static assets
│   └── logo.png            # Company logo
└── package.json            # Dependencies

```

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Lora & Cabin)

## Customization

### Colors
The primary color (#0056D8) can be changed in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#0056D8",
}
```

### Fonts
Fonts are imported in `app/globals.css` and configured in `tailwind.config.ts`.

### Contact Information
Update contact details in:
- `components/Header.tsx`
- `components/Footer.tsx`

## Pages

- **Home** (`/`) - Main landing page with all sections
- **About Us** (`/about`) - Company information and experiences
- **Gallery** (`/gallery`) - Image gallery with categories
- **Itineraries** (`/itinerary`) - Tour packages and details

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using Vercel:
```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Contact

28 Holidays
- Phone: (94) 70 888 8761
- Email: info@28holidays.com
- Location: Colombo, Sri Lanka

## License

Copyright © 2024 28holidays
