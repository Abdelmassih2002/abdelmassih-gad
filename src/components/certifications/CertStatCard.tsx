import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface CertStatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export function CertStatCard({ icon: Icon, value, label, index }: CertStatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
        <Icon size={18} className="text-accent" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-lg font-bold leading-tight text-text-primary">{value}</div>
        <div className="text-[11px] leading-tight text-text-muted">{label}</div>
      </div>
    </motion.div>
  );
}
