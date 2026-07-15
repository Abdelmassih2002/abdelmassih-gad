const techIcons: Record<string, string> = {
  React: '⚛️',
  'Next.js': '▲',
  JavaScript: 'JS',
  TypeScript: 'TS',
  HTML5: '<>',
  CSS3: '#',
  SCSS: '🎨',
  'Tailwind CSS': '🌊',
  Bootstrap: '🅱️',
  Redux: '🔄',
  Firebase: '🔥',
  'REST APIs': '🔌',
  Git: '📦',
  GitHub: '🐙',
  Vite: '⚡',
  Flutter: '💙',
  'Express.js': '🚂',
  C: '©',
  PHP: '🐘',
  Angular: '🅰️',
  'Performance Optimization': '🚀',
};

export function getTechIcon(name: string): string {
  return techIcons[name] ?? name.slice(0, 2).toUpperCase();
}
