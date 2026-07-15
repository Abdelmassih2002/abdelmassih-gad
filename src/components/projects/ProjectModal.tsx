import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { X, ExternalLink, Calendar, Building2, User, AlertTriangle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { TechPill } from '@/components/ui/TechPill';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    closeButtonRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-200 flex items-start justify-center overflow-y-auto bg-background/80 p-4 pt-[5vh] pb-[5vh] backdrop-blur-xl sm:items-center sm:p-8 sm:pt-[8vh]"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      <motion.div
        ref={modalRef}
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl border border-border bg-card shadow-2xl shadow-background/50"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/90 px-6 py-4 backdrop-blur-md sm:px-8">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-text-primary">{project.title}</h2>
            <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} className="text-accent/60" aria-hidden="true" />
                {project.duration}
              </span>
              <span className="inline-flex items-center gap-1">
                <Building2 size={12} className="text-accent/60" aria-hidden="true" />
                {project.client}
              </span>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 sm:px-8">
          {/* Preview placeholder */}
          <div className="mb-8 flex aspect-video items-center justify-center rounded-xl bg-linear-to-br from-accent/5 via-card to-accent-secondary/5">
            <div className="text-center">
              <div className="text-6xl font-bold gradient-text opacity-15" aria-hidden="true">{project.title[0]}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted/40 font-medium">{project.category}</div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">Overview</h3>
            <p className="text-sm leading-relaxed text-text-muted">{project.longDescription}</p>
          </div>

          {/* My Role */}
          <div className="mt-6 rounded-xl border border-border bg-background/50 p-4">
            <h3 className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
              <User size={14} className="text-accent" aria-hidden="true" />
              My Role
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">{project.myRole}</p>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">Features</h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-primary">
                <AlertTriangle size={14} className="text-accent-secondary" aria-hidden="true" />
                Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" aria-hidden="true" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-primary">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechPill key={tech} name={tech} size="md" />
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-6 rounded-xl border border-border bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-text-primary">Timeline</h3>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>{project.duration}</span>
              <span className="text-border">—</span>
              <span>{project.client}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-[background-color,box-shadow] duration-200 hover:bg-accent/90 hover:shadow-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <GithubIcon className="h-4 w-4" />
              View Repository
            </a>
            {project.live !== '#' ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-accent/30 px-6 py-3 text-sm font-medium text-accent transition-[background-color,border-color] duration-200 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-text-muted/50 cursor-not-allowed">
                <ExternalLink size={16} aria-hidden="true" />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
