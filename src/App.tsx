import { lazy, Suspense } from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary animate-fade-in-up">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Divider />
          <About />
          <Divider />
          <WhatIBuild />
          <Divider />
          <TechStack />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Achievements />
          <Divider />
          <Certificates />
          <Divider />
          <GitHubStats />
          <Divider />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
