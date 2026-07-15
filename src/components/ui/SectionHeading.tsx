import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) { setInView(true); return; }
    const timer = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <div
      className={`mb-16 transition-[opacity,transform] duration-500 ${align === 'center' ? 'text-center' : 'text-left'} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <span className="inline-block rounded-full border border-glass-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
