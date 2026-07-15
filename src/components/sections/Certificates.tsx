import { useState, useMemo } from 'react';
import { GraduationCap, Building2, Calendar, Code2, ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertStatCard } from '@/components/certifications/CertStatCard';
import { CertFilterBar } from '@/components/certifications/CertFilterBar';
import { CertCard } from '@/components/certifications/CertCard';
import { certificatesData, organizations } from '@/data/certificates';

const INITIAL_COUNT = 6;

const stats = [
  { icon: GraduationCap, value: `${certificatesData.length}+`, label: 'Certifications' },
  { icon: Building2, value: `${organizations.length}`, label: 'Organizations' },
  { icon: Calendar, value: '2020 – 2024', label: 'Timeline' },
  { icon: Code2, value: 'Frontend • React • JS', label: 'Focus Areas' },
];

export function Certificates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredCerts = useMemo(() => {
    let result = certificatesData;

    if (selectedOrg) {
      result = result.filter((c) => c.issuer === selectedOrg);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          c.skills.some((s) => s.toLowerCase().includes(q))
      );
    }

    return result;
  }, [selectedOrg, searchQuery]);

  const visibleCerts = showAll ? filteredCerts : filteredCerts.slice(0, INITIAL_COUNT);
  const hasMore = filteredCerts.length > INITIAL_COUNT;

  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="section-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Learning"
          title="Certifications"
          description="Continuous learning and professional development milestones."
        />

        {/* Stats row */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <CertStatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>

        {/* Filter bar */}
        <CertFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedOrg={selectedOrg}
          onOrgChange={(org) => {
            setSelectedOrg(org);
            setShowAll(false);
          }}
          organizations={organizations}
        />

        {/* Results count */}
        {(searchQuery || selectedOrg) && (
          <p className="mb-6 text-sm text-text-muted">
            Showing {filteredCerts.length} of {certificatesData.length} certificates
          </p>
        )}

        {/* Certificate grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCerts.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filteredCerts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <GraduationCap size={28} className="text-accent/40" aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm font-medium text-text-muted">No certificates found</p>
            <p className="mt-1 text-xs text-text-muted/60">Try a different search or filter</p>
          </div>
        )}

        {/* Show more / less */}
        {hasMore && !searchQuery && !selectedOrg && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-sm font-medium text-text-muted transition-[border-color,color] duration-200 hover:border-accent/30 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              {showAll
                ? 'Show Less'
                : `View All ${filteredCerts.length} Certifications`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
