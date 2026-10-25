# 0211wohnen

0211wohnen is a furnished-apartment rental platform for Düsseldorf. It helps tenants find professionally managed, move-in-ready homes without agent fees and gives landlords a full-service way to market and rent their properties.

The website brings the complete rental journey into one place: discovering apartments, comparing locations and amenities, sending an inquiry, and following that inquiry from a personal account. It also introduces the 0211wohnen team, services, local guides, and resources for people moving to Düsseldorf.

## Main Features

- Search apartments by availability, district, rooms, price, and size
- Browse properties in list and interactive map views
- View photos, rent, deposit, amenities, location details, and availability
- Submit apartment inquiries and review inquiry details from an account
- Sign up, log in, recover passwords, and manage profile settings
- Landlord onboarding for property evaluation, marketing, tenant screening, and rental support
- Düsseldorf-focused blogs, neighborhood guides, FAQs, and contact forms
- English and German content with on-demand translation
- Responsive experience across mobile, tablet, and desktop

## Who It Is For

**Tenants** can quickly find furnished homes with clear property information and direct communication. The platform is especially useful for professionals, expats, and people relocating to Düsseldorf.

**Landlords** can submit their property and use 0211wohnen's managed rental service, covering presentation, marketing, tenant selection, contracts, handover, and ongoing operations.

## Tech Stack

- Next.js 14 App Router, React 18, and TypeScript
- Tailwind CSS and shadcn/ui
- TanStack Query and Axios for API data
- NextAuth for credential-based authentication
- React Hook Form and Zod for forms and validation
- Leaflet/React Leaflet and Google Maps for property maps
- Zustand for language preference

The frontend connects to a separate backend API for apartments, authentication, inquiries, landlord leads, blogs, and contact requests.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a `.env.local` file with the required configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Optional: enables the official Google Cloud Translation API
GOOGLE_TRANSLATE_API_KEY=
```

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run Next.js linting
```
