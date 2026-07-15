import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const timeline = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Computer Science',
    organization: 'Future Academy',
    period: '2020 - 2024',
    description:
      'Graduated with a strong foundation in computer science principles, algorithms, data structures, and modern web development technologies.',
    tags: ['Computer Science', 'Algorithms', 'Web Development'],
  },
  {
    icon: Briefcase,
    title: 'Frontend Developer',
    organization: 'Personal & Freelance Projects',
    period: '2022 - Present',
    description:
      'Building modern web applications using React.js ecosystem. Focused on component architecture, performance optimization, and creating accessible user interfaces.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Journey"
          title="Experience & Education"
          description="My academic and professional journey in tech."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute top-0 h-full w-px bg-border left-5.75 sm:left-1/2" aria-hidden="true" />

          {timeline.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={i}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  shouldReduceMotion,
}: {
  item: (typeof timeline)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  const { ref, inView } = useInView({ disabled: shouldReduceMotion, rootMargin: '-60px' });
  const animClass = index % 2 === 0 ? 'anim-fade-left' : 'anim-fade-right';

  return (
    <div
      ref={ref}
      className={`relative mb-12 flex items-start gap-8 ${
        index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } flex-row ${animClass} ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-5.75 z-10 -translate-x-1/2 sm:left-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background">
          <item.icon size={20} className="text-accent" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div
        className={`ml-16 flex-1 sm:ml-0 ${
          index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
        }`}
      >
        <div className="rounded-2xl border border-border bg-card p-6 transition-[border-color] duration-300 hover:border-border-hover">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {item.period}
          </span>
          <h3 className="mt-2 text-lg font-bold text-text-primary">{item.title}</h3>
          <p className="mt-1 text-sm font-medium text-accent-secondary">
            {item.organization}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {item.description}
          </p>
          <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for other side */}
      <div className="hidden flex-1 sm:block" />
    </div>
  );
}
