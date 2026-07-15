import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Palette, Zap, Trophy } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

const highlights = [
  {
    icon: Code2,
    title: 'I write TypeScript',
    description:
      'Strongly typed everything. I use TypeScript not because I have to, but because catching bugs at compile time is better than debugging in production.',
  },
  {
    icon: Palette,
    title: 'I care about design',
    description:
      'Not a designer, but I have strong opinions about spacing, consistency, and visual hierarchy. I pixel-perfect implement designs and push back on bad ones.',
  },
  {
    icon: Zap,
    title: 'Performance is a feature',
    description:
      'Code splitting, lazy loading, optimized bundles. If your app feels slow, I will find out why and fix it.',
  },
  {
    icon: Trophy,
    title: 'Competitive programmer',
    description:
      'Participated in ECPC and IEEEXtreme. Algorithms and data structures are not just interview prep — they shape how I think about problems.',
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About"
          title="Who I am"
          description="Frontend developer from Cairo who cares about code quality and user experience."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                I&apos;m <span className="font-medium text-text-primary">Abdelmassih Gad</span>, a
                frontend developer based in Cairo, Egypt. I graduated from college in 2024 with a CS
                degree and a focus on web development.
              </p>
              <p>
                I work primarily with <span className="font-medium text-accent">React and TypeScript</span>.
                I&apos;ve built healthcare platforms, e-commerce UIs, and dashboards — mostly for
                learning, some for real users. I&apos;m honest about what I know and what I
                don&apos;t.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m usually doing competitive programming problems
                or reading about system design. I believe in writing code that other developers can
                actually read and maintain.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: 'B.Sc. CS', label: 'Degree (2024)' },
                { value: '20+', label: 'Repos on GitHub' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : i * 0.1 + 0.2 }}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <div className="text-lg font-bold text-accent">{stat.value}</div>
                  <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {highlights.map((item, i) => (
              <GlowCard key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
