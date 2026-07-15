import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import type { ComponentType, SVGProps } from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Abdelmassih2002', icon: GithubIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelmassih-gad/', icon: LinkedinIcon },
  { name: 'Email', url: 'mailto:abdelmassihramsis@gmail.com', icon: Mail },
];

export const email = 'abdelmassihramsis@gmail.com';
export const phone = '+201040595504';
export const location = 'Cairo, Egypt';
