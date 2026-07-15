import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const activeSection = useActiveSection(navItems.map((item) => item.href.replace('#', '')));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen, closeMobile]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-500 ${
          isScrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{
          animation: shouldReduceMotion ? undefined : 'slideDown 0.5s ease-out',
        }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
          <a href="#" className="flex items-center gap-2" aria-label="Abdelmassih Gad - Home">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <span className="text-sm font-bold text-accent">AG</span>
            </div>
            <span className="hidden text-sm font-semibold text-text-primary sm:block">
              Abdelmassih
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-accent bg-accent/10' : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-lg bg-[#2563eb] px-4 py-2 text-sm font-medium text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#1d4ed8] hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] md:block"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-card hover:text-text-primary md:hidden"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu-overlay fixed top-16 right-0 bottom-0 left-0 z-[9999] bg-background/95 backdrop-blur-xl md:hidden ${
          isMobileOpen ? 'open' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex h-full flex-col items-center justify-start gap-6 pt-12 pb-8 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="mobile-menu-item text-2xl font-semibold text-text-primary transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="mobile-menu-item mt-4 rounded-xl bg-[#2563eb] px-8 py-3 text-lg font-medium text-white"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </>
  );
}
