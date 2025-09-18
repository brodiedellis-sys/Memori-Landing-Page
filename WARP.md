# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development Workflow
```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build  

# Start production server (requires build first)
npm start

# Lint code
npm run lint
```

### Development Server Details
- Development server runs on `http://localhost:3000`
- Next.js 14 with App Router provides hot reload and fast refresh
- Changes to components, pages, or styles are reflected immediately

## Architecture Overview

### Tech Stack Philosophy
This is a **Next.js 14 landing page** with a distinctive **pixelated, retro aesthetic** for Memori, an AI journaling companion. The design emphasizes:
- **VT323 monospace font** throughout (terminal-style)
- **Custom color palette**: mint (#9AE6B4), blue (#90CDF4), pink (#FBB6CE), dark (#0D0D0D)
- **CRT/retro effects** with hover glows and pixelated animations
- **Privacy-first messaging** aligned with local-first journaling concept

### Component Architecture
The site follows a **single-page component composition** pattern:

**Main Layout Flow** (`app/page.tsx`):
```
Navbar → Hero → Features → Roadmap → CTA → Footer
```

**Key Component Patterns**:
- **Hero**: Pixelated background grid (20x20) with random color placement
- **Features**: 3-card grid showcasing Memory/Reflection/Digest capabilities  
- **Roadmap**: RPG quest log-style timeline
- **Styling**: All components use `font-vt323` class and custom color system

### Styling Architecture
**Tailwind Configuration** (`tailwind.config.ts`):
- **Custom font setup**: VT323 via Google Fonts with CSS variable
- **Extended grid**: 20-column/row grids for pixelated backgrounds
- **Custom color system**: Memori brand colors alongside shadcn/ui defaults
- **Component framework**: shadcn/ui components (Button, Card) with custom theming

**Global Styling** (`app/globals.css`):
- **Pixel-perfect rendering**: `image-rendering: crisp-edges` 
- **CRT effects**: `.crt-glow` class with mint-colored shadows on hover
- **Retro animations**: `.flicker` keyframe animation
- **Border styling**: `.pixel-border` for sharp, pixelated edges

### Font and Typography System
- **Primary font**: VT323 (Google Fonts) loaded via Next.js font optimization
- **CSS variable**: `--font-vt323` allows consistent referencing  
- **Class usage**: `font-vt323` applied to all major components
- **Fallback**: Monospace system fonts maintain terminal aesthetic

### Color System Usage
```typescript
// Custom Memori brand colors in Tailwind config
colors: {
  dark: '#0D0D0D',    // Primary background
  mint: '#9AE6B4',    // Primary CTA, highlights  
  blue: '#90CDF4',    // Secondary elements
  pink: '#FBB6CE',    // Tertiary highlights
  gray: '#E2E8F0',    // Text content
}
```

**Color Application Patterns**:
- **Hero text**: Different colors per line (mint/gray/blue/pink rotation)
- **Feature cards**: Each feature has assigned brand color for borders/text
- **Buttons**: Mint primary, blue outline variants
- **Decorative elements**: Random color pixel grids throughout

### Component Design Patterns

**Pixelated Background Generation**:
```tsx
// 20x20 grid with random color placement (Hero component)
{Array.from({ length: 400 }).map((_, i) => (
  <div className={Math.random() > 0.8 ? randomBrandColor : 'transparent'} />
))}
```

**CRT Glow Effects**:
- Applied via `.crt-glow` class on interactive elements
- Hover state adds mint-colored box-shadow and slight transform
- Used consistently on buttons and cards

**Responsive Design**:
- Mobile-first Tailwind approach
- Text scales from `text-5xl` to `text-7xl` on larger screens
- Grid layouts adapt from single column to multi-column
- Button layouts stack vertically on mobile

## Project Structure

```
app/
├── layout.tsx           # Root layout with VT323 font setup
├── page.tsx            # Homepage composition
├── globals.css         # Custom CRT/pixel styles + Tailwind
└── favicon.ico

components/
├── ui/                 # shadcn/ui components (Button, Card, Input)
├── Hero.tsx           # Main hero with pixelated background
├── Features.tsx       # 3-card feature grid
├── Navbar.tsx         # Top navigation
├── Roadmap.tsx        # RPG-style development timeline
├── CTA.tsx            # Email signup section
└── Footer.tsx         # Terminal-style footer

lib/
└── utils.ts           # Utility functions (cn helper for classes)
```

## Key Development Considerations

### Visual Consistency
- **Always use VT323 font**: Apply `font-vt323` class to new components
- **Brand color system**: Use mint/blue/pink/dark/gray from Tailwind config  
- **Pixel-perfect elements**: Avoid border-radius, use sharp edges
- **CRT effects**: Apply `.crt-glow` to interactive elements

### Component Development
- **Follow composition pattern**: Components are self-contained sections
- **Responsive by default**: Use Tailwind's mobile-first breakpoint system
- **Consistent spacing**: Use Tailwind's spacing scale (py-20, px-4, mb-16, etc.)
- **Terminal aesthetic**: Bracket notation for headings `[ SECTION ]`

### Performance Considerations  
- **Next.js font optimization**: VT323 loaded via next/font/google
- **Static generation**: All pages are statically generated
- **Image optimization**: Use Next.js Image component for any added images

### Deployment
- **Vercel-optimized**: Project configured for Vercel deployment
- **Build output**: Static export compatible
- **Environment**: No environment variables or API routes currently used

### Brand Messaging Alignment
When adding content or features, maintain consistency with:
- **Local-first philosophy**: Emphasize privacy and local data storage
- **AI journaling focus**: Memory, reflection, and personal growth themes  
- **Retro aesthetic**: Terminal/CRT/pixelated design language
- **Friendly but technical tone**: Accessible but acknowledging technical users
