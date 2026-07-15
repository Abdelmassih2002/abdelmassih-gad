import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Calendar, Building2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { TechPill } from '@/components/ui/TechPill';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}

export function ProjectShowcaseCard({ project, index, onSelect }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`project-card group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-accent/20 hover:shadow-[0_0_60px_rgba(59,130,246,0.06)] ${
        isFeatured ? 'bento-featured' : ''
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? 'aspect-video sm:aspect-16/8' : 'aspect-16/10'
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-card to-accent-secondary/5" />

        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Center initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="select-none text-center">
            <div
              className={`font-bold gradient-text opacity-15 transition-[opacity,transform] duration-500 group-hover:opacity-25 group-hover:scale-105 ${
                isFeatured ? 'text-7xl sm:text-8xl' : 'text-5xl sm:text-6xl'
              }`}
              aria-hidden="true"
            >
              {project.title[0]}
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-text-muted/40 font-medium">
              {project.category}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />

        {/* Hover overlay with actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-[background-color,box-shadow] duration-200 hover:bg-accent/90 hover:shadow-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View Details
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border bg-card/90 px-5 py-2.5 text-sm font-medium text-text-primary transition-[border-color,color] duration-200 hover:border-accent/30 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        </div>

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur-md">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Meta row */}
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={12} className="text-accent/60" aria-hidden="true" />
            {project.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Building2 size={12} className="text-accent/60" aria-hidden="true" />
            {project.client}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, isFeatured ? 5 : 4).map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
          {!isFeatured && project.technologies.length > 4 && (
            <span className="inline-flex items-center rounded-full bg-card px-2 py-0.5 text-[11px] font-medium text-text-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
