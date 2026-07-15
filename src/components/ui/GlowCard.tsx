import { useRef, useCallback, memo, useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlowCard = memo(function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || !ref.current) {
      setInView(true);
      return;
    }
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -10px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    ref.current.style.setProperty('--glow-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--glow-opacity', '0');
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glow-card border-glow group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-hover ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
      style={{
        transitionProperty: 'opacity, transform, border-color, background-color',
        transitionDuration: shouldReduceMotion ? '0ms' : '400ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
});
