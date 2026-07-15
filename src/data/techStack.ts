import type { TechItem } from '@/types';

export const techStackData: TechItem[] = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'JavaScript', icon: 'JS', category: 'frontend' },
  { name: 'TypeScript', icon: 'TS', category: 'frontend' },
  { name: 'HTML5', icon: '<>', category: 'frontend' },
  { name: 'CSS3', icon: '#', category: 'styling' },
  { name: 'SCSS', icon: '🎨', category: 'styling' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'styling' },
  { name: 'Bootstrap', icon: '🅱️', category: 'styling' },
  { name: 'Redux', icon: '🔄', category: 'state-management' },
  { name: 'Firebase', icon: '🔥', category: 'backend' },
  { name: 'REST APIs', icon: '🔌', category: 'backend' },
  { name: 'Git', icon: '📦', category: 'tools' },
  { name: 'GitHub', icon: '🐙', category: 'tools' },
  { name: 'Vite', icon: '⚡', category: 'performance' },
  { name: 'Performance Optimization', icon: '🚀', category: 'performance' },
];

export const techCategories = [
  { key: 'frontend' as const, label: 'Frontend', description: 'Core technologies for building modern user interfaces' },
  { key: 'styling' as const, label: 'Styling', description: 'Crafting beautiful, responsive, and maintainable styles' },
  { key: 'state-management' as const, label: 'State Management', description: 'Managing application state efficiently at scale' },
  { key: 'backend' as const, label: 'Backend & APIs', description: 'Integrating with services and handling data flow' },
  { key: 'tools' as const, label: 'Tools', description: 'Development tools for productivity and collaboration' },
  { key: 'performance' as const, label: 'Performance', description: 'Optimizing for speed and core web vitals' },
];
