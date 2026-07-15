export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  myRole: string;
  github: string;
  live: string;
  image: string;
  category: string;
  duration: string;
  client: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
}

export type TechCategory =
  | 'frontend'
  | 'styling'
  | 'state-management'
  | 'backend'
  | 'tools'
  | 'performance';

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
  rank?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  year: string;
  skills: string[];
  certificateUrl?: string;
  credentialUrl?: string;
  credentialId?: string;
  logoInitial?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
