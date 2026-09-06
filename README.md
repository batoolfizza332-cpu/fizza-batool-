# HARVO ORGANIC

Premium organic products website.

## Project Setup

This is a Next.js 15 frontend application with TypeScript and Tailwind CSS.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Validation

```bash
npm run type-check
npm run lint
npm run build
```

## Project Structure

```
src/
├── app/           # Next.js App Router
├── components/    # Reusable React components
├── data/          # Static data (products)
├── lib/           # Utilities and helpers
├── types/         # TypeScript types
└── public/        # Static assets
```

## Configuration

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `src/lib/site-config.ts` - Site metadata

## Notes

- Product data is currently stored in `src/data/products.ts`
- Product access layer in `src/lib/products.ts` is designed to support future CMS/API integration
- SEO is configured via Next.js Metadata API
- Robots and sitemap are auto-generated
