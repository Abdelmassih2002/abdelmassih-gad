import { MapPin } from 'lucide-react';
import { socialLinks, location } from '@/data/socials';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold text-text-primary">
              Abdelmassih Gad
            </a>
            <p className="mt-1 flex items-center justify-center gap-1 text-sm text-text-muted md:justify-start">
              <MapPin size={14} aria-hidden="true" />
              {location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition-[border-color,color,box-shadow] duration-300 hover:border-accent/30 hover:text-accent hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Abdelmassih Gad. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="text-accent">React</span> +{' '}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
