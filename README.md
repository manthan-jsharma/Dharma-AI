# Artha AI — Next.js Website

Premium agency website for Artha AI (DharmaAI), an AI automation company for Indian professionals and SMEs.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript (strict)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── diagnostic/
│   │   └── page.tsx        # Free AI Diagnostic Test page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── about/
│   │   └── page.tsx        # About Us page
│   └── blog/
│       └── page.tsx        # Blog listing page
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   ├── Footer.tsx          # SEO-friendly footer
│   ├── DiagnosticForm.tsx  # Multi-step AI diagnostic form
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── FounderSection.tsx
│   │   ├── FeaturesGrid.tsx
│   │   └── BlogPreview.tsx
│   ├── services/
│   │   └── ServicesGrid.tsx
│   └── shared/
│       └── CTABanner.tsx
├── lib/
│   └── diagnostic.ts       # Scoring logic & question data
└── types/
    └── index.ts            # Shared TypeScript types
```

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

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Founder, Features, Blog Preview |
| `/diagnostic` | Free AI Diagnostic Test (multi-step form) |
| `/services` | Service cards grid with filter |
| `/about` | Mission, Founder bio, Team, Contact |
| `/blog` | Blog listing with category filters |

## Key Features

### Multi-Step Diagnostic Form
- 3 qualification questions with animated transitions
- Lead capture (Name, Email, Phone) with validation
- Computed AI Maturity Score (Early Stage / Growing / Advanced)
- Calendly CTA on success state
- All state managed with React `useState` (no external state library needed)

### Lead Capture Integration
Replace the `handleSubmit` function in `DiagnosticForm.tsx` to POST leads to your backend:

```typescript
async function handleSubmit() {
  if (!validateLead()) return;
  
  await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers, lead }),
  });
  
  setStep('result');
}
```

### Calendly Integration
Replace the placeholder href in `DiagnosticForm.tsx`:
```tsx
href="https://calendly.com/your-username/ai-consultation"
```

### Founder Photo
Replace the avatar placeholder in `FounderSection.tsx` with a real `<Image>` component:
```tsx
import Image from 'next/image';

<Image
  src="/founder-ashutosh.jpg"
  alt="Ashutosh Khadria, Founder of Artha AI"
  fill
  className="object-cover"
/>
```

## Customization

### Colors
Update `tailwind.config.ts` and the CSS variables in `globals.css` for brand color changes.

### Fonts
Fonts are loaded via Google Fonts in `globals.css`. Update the import and CSS variables to change.

### SEO
Each page has its own `metadata` export for page-specific titles and descriptions. Update `src/app/layout.tsx` for site-wide defaults.

## Deployment

Deploy to Vercel in one command:
```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Environment Variables

For production, create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://arthaai.in
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

## License
© 2025 Artha AI (DharmaAI). All rights reserved.
