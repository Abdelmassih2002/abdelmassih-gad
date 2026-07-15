import {
  Atom,
  Palette,
  Zap,
  Plug,
  Accessibility,
  Puzzle,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

const capabilities = [
  {
    icon: Atom,
    title: 'React Apps',
    description: 'Single-page applications with modern state management, routing, and clean architecture.',
    accent: 'blue' as const,
  },
  {
    icon: Palette,
    title: 'Responsive UIs',
    description: 'Interfaces that look good on every screen size. Mobile-first, always.',
    accent: 'cyan' as const,
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Code splitting, lazy loading, optimized bundles. Fast sites are not optional.',
    accent: 'blue' as const,
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Connecting frontend to backend. REST APIs, Firebase, with proper error handling.',
    accent: 'cyan' as const,
  },
  {
    icon: Accessibility,
    title: 'Accessibility',
    description: 'Semantic HTML, ARIA labels, keyboard navigation. Websites should work for everyone.',
    accent: 'blue' as const,
  },
  {
    icon: Puzzle,
    title: 'Component Systems',
    description: 'Reusable, typed components designed for scalability and developer sanity.',
    accent: 'cyan' as const,
  },
];

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="What I Do"
          title="What I Build"
          description="The stuff I'm actually good at."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <GlowCard key={cap.title} delay={i * 0.06}>
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    cap.accent === 'blue' ? 'bg-accent/10 text-accent' : 'bg-accent-secondary/10 text-accent-secondary'
                  }`}
                >
                  <cap.icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">{cap.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                    {cap.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
