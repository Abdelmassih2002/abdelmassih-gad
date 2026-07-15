import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectShowcaseCard } from '@/components/projects/ProjectShowcaseCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { projectsData } from '@/data/projects';
import type { Project } from '@/types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="A selection of projects that showcase my skills and passion for frontend development."
        />

        {/* Bento Grid */}
        <div className="bento-grid">
          {projectsData.map((project, i) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
