# Abdelmassih Gad - Portfolio

A world-class personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVG Icons
- **Fonts:** Inter (Google Fonts)

## Features

- Dark mode first design
- Bento grid layouts
- Framer Motion animations & micro-interactions
- Magnetic buttons with hover effects
- Glow card effects
- Scroll progress indicator
- Active section navigation
- Responsive across all devices
- Fully accessible (ARIA labels, keyboard navigation, focus states)
- SEO optimized (meta tags, OpenGraph, Twitter Cards, structured data)
- Performance optimized (Lighthouse 100 target)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WhatIBuild.tsx
│   │   ├── TechStack.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certificates.tsx
│   │   ├── GitHubStats.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── GlowCard.tsx
│       ├── Icons.tsx
│       ├── MagneticButton.tsx
│       ├── ScrollProgress.tsx
│       ├── SectionHeading.tsx
│       └── TechBadge.tsx
├── data/
│   ├── achievements.ts
│   ├── certificates.ts
│   ├── navigation.ts
│   ├── projects.ts
│   └── techStack.ts
├── hooks/
│   ├── useActiveSection.ts
│   ├── useMousePosition.ts
│   └── useScrollProgress.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Import repository on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual

```bash
npm run build
# Upload the `dist/` folder to your hosting provider
```

## Customization

- **Personal Info:** Edit files in `src/data/`
- **Colors:** Modify CSS variables in `src/index.css`
- **Fonts:** Update the Google Fonts link in `index.html`
- **Projects:** Add/edit projects in `src/data/projects.ts`

## License

MIT