import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { socialLinks, location } from '@/data/socials';
import { MagneticButton } from '@/components/ui/MagneticButton';

const heroWords = ['Hi,', "I'm", 'Abdelmassih'];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-blob-1 absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        <div className="hero-blob-2 absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-accent-secondary/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="hero-enter hero-enter-delay-1 mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-linear-to-r from-accent to-transparent" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Frontend Developer
              </span>
            </div>

            {/* Staggered word reveal */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {heroWords.map((word, i) => (
                <span key={i} className="reveal-word mr-[0.3em]">
                  <span
                    style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                    className={word === 'Abdelmassih' ? 'gradient-text' : ''}
                  >
                    {word}
                  </span>
                </span>
              ))}
              <br />
              <span className="reveal-word">
                <span
                  style={{ animationDelay: '0.7s' }}
                  className="text-text-primary"
                >
                  Frontend Engineer
React • Next.js
                </span>
              </span>
            </h1>

            <p className="hero-enter hero-enter-delay-2 mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
              Frontend developer from Cairo, Egypt. I specialize in React and
              TypeScript, and I care deeply about performance, accessibility, and
              clean code.
            </p>

            <div className="hero-enter hero-enter-delay-3 mt-4 flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={14} className="text-accent" aria-hidden="true" />
              <span>{location}</span>
            </div>

            <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-4">
              <MagneticButton href="#projects" variant="primary" size="lg">
                View My Work
              </MagneticButton>
              <MagneticButton
                href="#contact"
                variant="secondary"
                size="lg"
              >
                <Mail size={18} aria-hidden="true" />
                Get in Touch
              </MagneticButton>
            </div>

            <div className="hero-enter hero-enter-delay-5 mt-10 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition-[border-color,color,box-shadow] duration-300 hover:border-accent/30 hover:text-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hero-enter hero-enter-delay-6 relative hidden lg:flex lg:justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 flex h-80 w-80 items-center justify-center overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-sm xl:h-96 xl:w-96">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent-secondary/5" aria-hidden="true" />
                <div className="relative text-center">
                  <div className="text-6xl font-bold gradient-text xl:text-7xl">AG</div>
                  <div className="mt-2 text-sm font-medium text-text-muted">
                    Frontend Developer
                  </div>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      React
                    </span>
                    <span className="rounded-full bg-accent-secondary/10 px-3 py-1 text-xs font-medium text-accent-secondary">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>

              <div className="hero-float-react absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card/90 text-2xl shadow-xl">
                <span role="img" aria-label="React">⚛️</span>
              </div>
              <div className="hero-float-ts absolute -bottom-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/90 text-xl shadow-xl">
                <span role="img" aria-label="TypeScript">TS</span>
              </div>
              {/* Orbital rings */}
              <div className="absolute -inset-4 rounded-4xl border border-accent/5" aria-hidden="true" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-accent/3" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-enter hero-enter-delay-7 mt-16 flex justify-center pb-8 lg:mt-24">
          <a
            href="#about"
            className="hero-scroll-bounce flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
