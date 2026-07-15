import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';
import type { LucideIcon } from 'lucide-react';

interface CertStatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export function CertStatCard({ icon: Icon, value, label, index }: CertStatCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ disabled: shouldReduceMotion, rootMargin: '-40px' });

  return (
    <div
      ref={ref}
      className={`flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 anim-fade-up-sm ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
        <Icon size={18} className="text-accent" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-lg font-bold leading-tight text-text-primary">{value}</div>
        <div className="text-[11px] leading-tight text-text-muted">{label}</div>
      </div>
    </div>
  );
}
