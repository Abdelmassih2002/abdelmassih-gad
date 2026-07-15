import { motion, useReducedMotion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  icon: string;
  index: number;
}

export function TechBadge({ name, icon, index }: TechBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : Math.min(index * 0.03, 0.3) }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
      className="group relative flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-lg font-bold text-accent transition-colors duration-300 group-hover:bg-accent/20">
        {icon}
      </div>
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </motion.div>
  );
}
