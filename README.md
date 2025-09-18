# Memori Landing Website

A pixelated, retro-styled landing website for **Memori**, an AI journaling companion that prioritizes privacy and local-first design.

## 🎨 Design Philosophy

- **Pixelated Aesthetic**: Inspired by old journaling apps and retro terminals
- **VT323 Font**: Monospaced, terminal-style typography throughout
- **Dark Theme**: Deep background (#0D0D0D) with neon accent colors
- **CRT Effects**: Subtle glow effects and retro animations
- **Privacy-First**: Emphasizing local-first, encrypted journaling

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom color palette
- **Components**: shadcn/ui for buttons, cards, and inputs  
- **Font**: Google Fonts VT323
- **Hosting**: Vercel-ready deployment

## 🎨 Color Palette

- **Background**: `#0D0D0D` (dark)
- **Text**: `#E2E8F0` (gray)
- **Mint Accent**: `#9AE6B4` (primary CTA, highlights)
- **Blue Accent**: `#90CDF4` (secondary elements)
- **Pink Accent**: `#FBB6CE` (tertiary highlights)

## 📁 Project Structure

```
memori-landing/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Memori page
│   ├── blog/
│   │   └── page.tsx          # Blog listing page
│   ├── globals.css           # Global styles & pixel effects
│   ├── layout.tsx            # Root layout with VT323 font
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── CTA.tsx               # Call-to-action section
│   ├── Features.tsx          # Feature cards section
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Hero section
│   ├── Navbar.tsx            # Navigation bar
│   └── Roadmap.tsx           # Development roadmap
├── lib/
│   └── utils.ts              # Utility functions
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies
```

## 🏃‍♀️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd memori-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages Overview

### Homepage (`/`)
- **Hero Section**: Main value proposition with pixelated gradient background
- **Features**: Three core capabilities (Memory, Reflection, Digest)
- **Roadmap**: Development timeline styled like an RPG quest log  
- **CTA**: Email signup with social proof
- **Footer**: Terminal-style links and status

### About Page (`/about`)
- **Philosophy**: Why Memori is local-first and privacy-focused
- **Privacy**: Detailed explanation of data handling
- **Waitlist Signup**: Email collection form

### Blog Page (`/blog`)
- **Post Listing**: 3 placeholder blog posts with excerpts
- **Future-Ready**: Prepared for MDX integration
- **Coming Soon**: Notification for additional content

## 🎯 Key Features

### Pixelated Design Elements
- Custom pixel borders via CSS
- Retro color gradients
- CRT glow effects on hover
- Terminal-style decorative elements
- Quest log-inspired roadmap design

### Typography
- **VT323** font family throughout
- Large, bold headlines
- Monospaced feel for authenticity
- Consistent sizing hierarchy

### Responsive Layout
- Mobile-first approach
- Adaptive grid layouts
- Responsive navigation
- Touch-friendly interactive elements

### Accessibility
- High contrast color combinations
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Follow the prompts**
   - Link to your Git repository
   - Configure build settings (auto-detected)
   - Deploy!

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server  
npm start

# Linting
npm run lint
```

### Adding New Components

1. Create component in `components/` directory
2. Import and use in pages
3. Follow existing patterns for styling
4. Use VT323 font and custom color palette

### Customizing Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  dark: '#0D0D0D',
  mint: '#9AE6B4', 
  blue: '#90CDF4',
  pink: '#FBB6CE',
  gray: '#E2E8F0',
}
```

### Adding Pixelated Effects

Use these CSS classes for consistent styling:
- `.pixel-border` - Pixel-style borders
- `.crt-glow` - Hover glow effects  
- `.flicker` - Retro flicker animation

## 🔮 Future Enhancements

- **MDX Integration**: Dynamic blog content
- **Email Signup**: Backend integration
- **Animations**: Enhanced pixel transitions
- **Mobile Menu**: Collapsible navigation
- **Dark/Light Toggle**: Theme switching (optional)
- **Analytics**: Privacy-focused tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

For questions about this landing site or Memori itself:
- Email: contact@memori.dev
- GitHub: [Repository Issues](link-to-issues)

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.

---

**Built with ❤️ for the Memori community**

*A local-first journaling companion that remembers, reflects, and grows with you.*
