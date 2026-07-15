import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);
  const idsRef = useRef(sectionIds);

  // Update ref when sectionIds change
  useEffect(() => {
    idsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    if (idsRef.current.length === 0) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    idsRef.current.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.current?.observe(element);
    });

    return () => observer.current?.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return activeSection;
}
