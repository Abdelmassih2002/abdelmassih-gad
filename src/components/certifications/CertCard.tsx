import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { TechPill } from '@/components/ui/TechPill';
import type { Certificate } from '@/types';

interface CertCardProps {
  cert: Certificate;
  index: number;
}

export function CertCard({ cert, index }: CertCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="cert-card group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
    >
      {/* Glass gradient top bar */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" aria-hidden="true" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Header: logo + org */}
        <div className="mb-4 flex items-start gap-3">
          {/* Logo placeholder */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background/50 text-xs font-bold text-accent transition-colors duration-200 group-hover:border-accent/30 group-hover:bg-accent/5">
            {cert.logoInitial}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold leading-snug text-text-primary line-clamp-2">
              {cert.title}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-accent-secondary">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* Date + credential ID */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] text-text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar size={11} className="text-accent/50" aria-hidden="true" />
            {cert.date}
          </span>
          {cert.credentialId && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-text-muted">
              ID: {cert.credentialId}
            </span>
          )}
        </div>

        {/* Skill tags */}
        {cert.skills.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {cert.skills.map((skill) => (
              <TechPill key={skill} name={skill} />
            ))}
          </div>
        )}

        {/* Spacer to push buttons down */}
        <div className="mt-auto" />

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {cert.certificateUrl && (
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-[background-color] duration-200 hover:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Award size={13} aria-hidden="true" />
              View Certificate
            </a>
          )}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-[border-color,color] duration-200 hover:border-accent/30 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ExternalLink size={12} aria-hidden="true" />
              Credential
            </a>
          )}
          {!cert.certificateUrl && !cert.credentialUrl && (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted/40 cursor-not-allowed">
              <Award size={13} aria-hidden="true" />
              Not Available
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
