import { lazy, Suspense, useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Hero } from '@/components/sections/Hero';

const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })));
const WhatIBuild = lazy(() => import('@/components/sections/WhatIBuild').then((m) => ({ default: m.WhatIBuild })));
const TechStack = lazy(() => import('@/components/sections/TechStack').then((m) => ({ default: m.TechStack })));
const Experience = lazy(() => import('@/components/sections/Experience').then((m) => ({ default: m.Experience })));
const Projects = lazy(() => import('@/components/sections/Projects').then((m) => ({ default: m.Projects })));
const Achievements = lazy(() => import('@/components/sections/Achievements').then((m) => ({ default: m.Achievements })));
const Certificates = lazy(() => import('@/components/sections/Certificates').then((m) => ({ default: m.Certificates })));
const GitHubStats = lazy(() => import('@/components/sections/GitHubStats').then((m) => ({ default: m.GitHubStats })));
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })));

function SectionLoader() {
  return (
    <div className="flex min-h-[20vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

function Divider() {
  return <div className="section-divider" role="presentation" aria-hidden="true" />;
}

function LazySection({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [sentinel, setSentinel] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinel]);

  return (
    <>
      <div ref={setSentinel} style={{ height: 0 }} />
      {isVisible && (
        <Suspense fallback={<SectionLoader />}>
          {children}
        </Suspense>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LazySection><Divider /><About /></LazySection>
        <LazySection><Divider /><WhatIBuild /></LazySection>
        <LazySection><Divider /><TechStack /></LazySection>
        <LazySection><Divider /><Experience /></LazySection>
        <LazySection><Divider /><Projects /></LazySection>
        <LazySection><Divider /><Achievements /></LazySection>
        <LazySection><Divider /><Certificates /></LazySection>
        <LazySection><Divider /><GitHubStats /></LazySection>
        <LazySection><Divider /><Contact /></LazySection>
      </main>
      <Footer />
    </div>
  );
}
