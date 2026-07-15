import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';

interface TechBadgeProps {
  name: string;
  icon: string;
  index: number;
}

export function TechBadge({ name, icon, index }: TechBadgeProps) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ disabled: shouldReduceMotion, threshold: 0 });

  return (
    <div
      ref={ref}
      className={`group relative flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-[transform,opacity,border-color,box-shadow] duration-300 hover:scale-[1.03] hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] anim-scale-in ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${Math.min(index * 0.03, 0.3)}s` }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-lg font-bold text-accent transition-colors duration-300 group-hover:bg-accent/20">
        {icon}
      </div>
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </div>
  );
}
