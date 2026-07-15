import { getTechIcon } from '@/data/techIcons';

interface TechPillProps {
  name: string;
  size?: 'sm' | 'md';
}

export function TechPill({ name, size = 'sm' }: TechPillProps) {
  const icon = getTechIcon(name);
  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-[11px]'
    : 'px-3 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-accent/10 font-medium text-accent transition-colors duration-200 hover:bg-accent/20 ${sizeClasses}`}
    >
      <span className="leading-none" aria-hidden="true">{icon}</span>
      {name}
    </span>
  );
}
