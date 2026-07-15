import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';
import { Code2, Trophy, GraduationCap, Users } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

const stats = [
  { icon: Code2, label: 'Public Repos', value: '20+' },
  { icon: Trophy, label: 'Competitions', value: '2' },
  { icon: GraduationCap, label: 'B.Sc. CS', value: '2024' },
  { icon: Users, label: 'Team Projects', value: '3+' },
];

export function GitHubStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Activity"
          title="GitHub"
          description="Where I keep my code. Some of it is even good."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>

          {/* GitHub Profile Card */}
          <GlowCard className="flex h-full flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <GithubIcon className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Abdelmassih2002</h3>
                <p className="text-sm text-text-muted">Frontend Developer</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              I push code regularly. Most repos are frontend projects — React apps, TypeScript
              experiments, and the occasional competitive programming solution. Take a look and
              judge the code for yourself.
            </p>

            <div className="mt-6">
              <a
                href="https://github.com/Abdelmassih2002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-[background-color,box-shadow] hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <GithubIcon className="h-4 w-4" />
                View Profile
              </a>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  shouldReduceMotion,
}: {
  stat: (typeof stats)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  const { ref, inView } = useInView({ disabled: shouldReduceMotion });

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-5 text-center transition-[border-color] duration-300 hover:border-accent/20 anim-fade-up-sm ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
        <stat.icon size={20} className="text-accent" aria-hidden="true" />
      </div>
      <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
      <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
    </div>
  );
}
