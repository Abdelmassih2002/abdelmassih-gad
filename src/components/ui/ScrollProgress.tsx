import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-100 h-0.5 w-full" role="presentation" aria-hidden="true">
      <div
        className="h-full bg-linear-to-r from-accent via-accent-secondary to-accent"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
