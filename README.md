# Rhytech Global Solutions — premium Next.js rebuild

A multi-page Next.js App Router project using TypeScript, Tailwind CSS and Lucide icons. Visual direction: premium violet/purple, editorial typography, deep ink hero, spacious service architecture and responsive layouts.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production check: `npm run build`.

## Routes
- `/` — homepage
- `/services` — all services
- `/services/[slug]` — dedicated page for each of 12 services
- `/products/rhyvidya`, `/products/rhyshuttle`, `/products/rhyseva` — product pages with six FAQs each
- `/about`, `/insights`, `/contact`
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`

## SEO and structured data
- Unique page metadata, canonical URLs, Open Graph and Twitter cards
- Organization + LocalBusiness schema on homepage, including the supplied NAP and hours
- Service schema on service detail pages
- SoftwareApplication + FAQPage schema on product pages
- Sitemap, robots and an llms.txt endpoint
- H1 and heading hierarchy, service-specific copy, internal links and alt-free CSS artwork (decorative art is not an image element)

## Confirm before launch
- The contact form is a frontend demonstration and does not transmit or store submissions. Connect a secure server action/API or CRM before production.
- Replace the generic letter-symbol product marks with the supplied official product logos. RhySeva must not show the company name inside its logo; use the supplied RhyShuttle white logo and official tagline.
- Replace social profile placeholders in Organization schema with the verified official URLs.
- Verify all business claims, live product URLs, office details, hours and brand assets with the client.
- Add approved portfolio imagery and client logos with `object-fit: contain` for logos. Do not invent testimonials or performance statistics.
- Audit old GoDaddy URLs and set 301 redirects before switching DNS.

## Deploy
Compatible with standard Node.js hosting or Vercel. Keep domain registration with GoDaddy if desired; only update DNS after production verification.
