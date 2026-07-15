import { useState, useEffect, useRef, useCallback } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(0);
  const ticking = useRef(false);

  const updateProgress = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const next = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
    setProgress((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        rafId.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateProgress]);

  return progress;
}
