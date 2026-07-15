import { Search, X } from 'lucide-react';

interface CertFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedOrg: string;
  onOrgChange: (org: string) => void;
  organizations: string[];
}

export function CertFilterBar({
  searchQuery,
  onSearchChange,
  selectedOrg,
  onOrgChange,
  organizations,
}: CertFilterBarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
      {/* Search input */}
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          aria-hidden="true"
        />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search certificates..."
          aria-label="Search certificates by title"
          className="w-full rounded-xl border border-border bg-card/50 py-2.5 pl-9 pr-9 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Organization filter pills */}
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by organization">
        <button
          onClick={() => onOrgChange('')}
          role="radio"
          aria-checked={selectedOrg === ''}
          className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-[border-color,background-color,color] duration-200 ${
            selectedOrg === ''
              ? 'border-accent/40 bg-accent/10 text-accent'
              : 'border-border bg-card/50 text-text-muted hover:border-border-hover hover:text-text-primary'
          }`}
        >
          All
        </button>
        {organizations.map((org) => (
          <button
            key={org}
            onClick={() => onOrgChange(org)}
            role="radio"
            aria-checked={selectedOrg === org}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-[border-color,background-color,color] duration-200 ${
              selectedOrg === org
                ? 'border-accent/40 bg-accent/10 text-accent'
                : 'border-border bg-card/50 text-text-muted hover:border-border-hover hover:text-text-primary'
            }`}
          >
            {org}
          </button>
        ))}
      </div>
    </div>
  );
}
