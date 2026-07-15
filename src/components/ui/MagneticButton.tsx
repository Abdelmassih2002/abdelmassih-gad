import { useState, useRef, memo, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const MagneticButton = memo(function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  size = 'md',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  }, []);

  const handleMouseLeave = useCallback(() => setPosition({ x: 0, y: 0 }), []);

  const variantStyles = {
    primary:
      'bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]',
    secondary:
      'border border-accent/40 bg-transparent text-[#60a5fa] hover:bg-accent/10 hover:border-accent/60',
    ghost:
      'bg-transparent text-text-muted hover:text-text-primary hover:bg-card',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const isInternal = href?.startsWith('#');
  const Component: 'a' | 'button' = href ? 'a' : 'button';

  const linkProps = href
    ? isInternal
      ? { href }
      : { href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Component
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-[transform,background-color,box-shadow,border-color,color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent will-change-transform ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transitionProperty: 'transform, background-color, box-shadow, border-color, color',
      }}
      {...linkProps}
    >
      {children}
    </Component>
  );
});
