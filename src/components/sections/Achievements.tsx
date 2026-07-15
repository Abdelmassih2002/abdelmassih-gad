import { Trophy, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { achievementsData } from '@/data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Competitions"
          title="What I've Done"
          description="Not trophies on a shelf — proof that I can perform under pressure."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {achievementsData.map((achievement, i) => (
            <GlowCard key={achievement.title} delay={i * 0.1} className="flex flex-col">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  {i === 0 ? (
                    <Trophy size={22} className="text-accent" aria-hidden="true" />
                  ) : (
                    <Award size={22} className="text-accent-secondary" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary">{achievement.title}</h3>
                  <p className="text-sm font-medium text-accent-secondary">
                    {achievement.event}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                {achievement.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {achievement.rank}
                </span>
                <span className="text-xs text-text-muted">{achievement.year}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
