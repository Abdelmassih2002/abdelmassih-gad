import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import { techStackData, techCategories } from '@/data/techStack';

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="space-y-12">
          {techCategories.map((category, catIndex) => {
            const items = techStackData.filter((t) => t.category === category.key);
            if (items.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : catIndex * 0.05 }}
              >
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.label}
                  </h3>
                  <div className="hidden h-px flex-1 bg-border sm:block" />
                  <span className="text-xs text-text-muted">{category.description}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {items.map((tech, i) => (
                    <TechBadge
                      key={tech.name}
                      name={tech.name}
                      icon={tech.icon}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
