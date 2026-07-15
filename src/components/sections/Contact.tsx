import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/Icons';
import { socialLinks, email, phone, location } from '@/data/socials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgqgjrl';

const contactInfo = [
  { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
  { icon: Phone, label: 'Phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: location, href: '#' },
];

function SocialIconByName({ name, className }: { name: string; className?: string }) {
  if (name === 'GitHub') return <GithubIcon className={className} />;
  if (name === 'LinkedIn') return <LinkedinIcon className={className} />;
  if (name === 'Email') return <MailIcon className={className} />;
  return null;
}

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const shouldReduceMotion = useReducedMotion();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('sent');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Have a question or want to work together? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-bold text-text-primary">Say Hello</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                The easiest way to reach me is by email. I typically respond within 24 hours.
              </p>
            </motion.div>

            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-[border-color] duration-300 hover:border-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <info.icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-text-muted">{info.label}</div>
                  <div className="truncate text-sm font-medium text-text-primary">{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="mt-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-muted">
                Find me on
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition-[border-color,color,box-shadow] duration-300 hover:border-accent/30 hover:text-accent hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                  >
                    <SocialIconByName name={social.name} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <GlowCard className="h-full">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-text-muted">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full rounded-xl border bg-background/50 px-4 py-3 text-sm text-text-primary outline-none input-focus placeholder:text-text-muted/50 ${
                        errors.name ? 'border-red-500/50' : 'border-border'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-text-muted">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full rounded-xl border bg-background/50 px-4 py-3 text-sm text-text-primary outline-none input-focus placeholder:text-text-muted/50 ${
                        errors.email ? 'border-red-500/50' : 'border-border'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    autoComplete="off"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full resize-none rounded-xl border bg-background/50 px-4 py-3 text-sm text-text-primary outline-none input-focus placeholder:text-text-muted/50 ${
                      errors.message ? 'border-red-500/50' : 'border-border'
                    }`}
                    placeholder="What's on your mind?"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">{errors.message}</p>
                  )}
                </div>

                <div aria-live="polite" aria-atomic="true">
                  <button
                    type="submit"
                    disabled={formState !== 'idle'}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[background-color,box-shadow] duration-300 hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formState === 'idle' && (
                      <>
                        <Send size={16} aria-hidden="true" />
                        Send Message
                      </>
                    )}
                    {formState === 'sending' && 'Sending...'}
                    {formState === 'sent' && 'Message Sent!'}
                    {formState === 'error' && 'Something went wrong. Try again.'}
                  </button>
                </div>

                {formState === 'error' && (
                  <p className="text-center text-xs text-red-400" role="alert">
                    Could not send message. Please email me directly at{' '}
                    <a href={`mailto:${email}`} className="underline hover:text-accent">
                      {email}
                    </a>
                  </p>
                )}
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
