import { useMemo, type CSSProperties } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { venues } from '@/data/venues'

interface GuidedPathProps {
  open: boolean
  onClose: () => void
  onReopen: () => void
  onOpenWizard: () => void
  onPresent: () => void
}

const packages = [
  { id: 'budget' as const, label: 'Essential', desc: 'Scoreboards and core boards', tone: '#8fb4d8' },
  { id: 'standard' as const, label: 'Game Day', desc: 'Boards, ribbons, fascia, courtside', tone: '#03B8FF' },
  { id: 'premium' as const, label: 'Full Venue', desc: 'Every visible LED opportunity', tone: '#0A52EF' },
]

function money(value: number) {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`
  if (value >= 1000) return `$${Math.round(value / 1000)}K`
  return `$${value.toLocaleString()}`
}

export function GuidedPath({ open, onClose, onReopen, onOpenWizard, onPresent }: GuidedPathProps) {
  const venueType = useVenueStore(s => s.venueType)
  const zones = useVenueStore(s => s.zones)
  const applyPackage = useVenueStore(s => s.applyPackage)
  const applyPreset = useVenueStore(s => s.applyPreset)
  const selectZone = useVenueStore(s => s.selectZone)
  const getRevenue = useVenueStore(s => s.getRevenue)

  const venue = venues.find(v => v.id === venueType) ?? venues[0]
  const revenue = getRevenue()
  const activeZones = zones.filter(zone => zone.enabled)
  const sponsoredZones = activeZones.filter(zone => zone.sponsor !== 'none')
  const topZone = useMemo(
    () => [...activeZones].sort((a, b) => b.pricePerSeason - a.pricePerSeason)[0] ?? zones[0],
    [activeZones, zones],
  )

  const steps = [
    { label: 'Venue selected', complete: true, detail: venue.name },
    { label: 'Package chosen', complete: activeZones.length > 0, detail: `${activeZones.length} active zones` },
    { label: 'Sponsors assigned', complete: sponsoredZones.length >= Math.min(activeZones.length, 3), detail: `${sponsoredZones.length} revenue zones` },
    { label: 'Ready to present', complete: revenue.perSeason > 0, detail: money(revenue.perSeason) },
  ]

  const progress = Math.round((steps.filter(step => step.complete).length / steps.length) * 100)

  if (!open) {
    return (
      <button
        onClick={onReopen}
        className="absolute right-4 top-[88px] z-20 anc-floating-guide"
      >
        Guided setup
      </button>
    )
  }

  return (
    <div className="absolute right-4 top-[88px] z-20 w-[318px] max-w-[calc(100vw-32px)] anc-panel anc-guide-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-[2px] anc-eyebrow">Client Path</div>
          <h2 className="mt-1 text-[18px] font-semibold leading-tight text-white">Build a clean venue story</h2>
          <p className="mt-1 text-[11px] leading-5 anc-muted">
            Pick a package, confirm the revenue story, then switch into presentation mode.
          </p>
        </div>
        <button onClick={onClose} className="anc-icon-button" aria-label="Hide guided path">×</button>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[10px] anc-muted">
          <span>Readiness</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="h-full rounded-full anc-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="anc-metric-tile">
          <span>Season value</span>
          <strong>{money(revenue.perSeason)}</strong>
        </div>
        <div className="anc-metric-tile">
          <span>Active zones</span>
          <strong>{revenue.activeCount}/{revenue.totalCount}</strong>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {steps.map((step, index) => (
          <div key={step.label} className="anc-step-row">
            <span className={step.complete ? 'anc-step-dot anc-step-dot--done' : 'anc-step-dot'}>{index + 1}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-medium text-white">{step.label}</span>
              <span className="block truncate text-[10px] anc-muted">{step.detail}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[2px] anc-eyebrow">Packages</span>
          <button onClick={() => applyPreset('logos')} className="text-[10px] font-semibold anc-link-button">
            Sponsor view
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {packages.map(pkg => (
            <button
              key={pkg.id}
              onClick={() => applyPackage(pkg.id)}
              className="anc-package-button"
              style={{ '--package-tone': pkg.tone } as CSSProperties}
            >
              <span>{pkg.label}</span>
              <small>{pkg.desc}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => topZone && selectZone(topZone.id)}
          className="anc-secondary-cta"
        >
          Review top zone
        </button>
        <button onClick={onPresent} className="anc-primary-cta">
          Present
        </button>
      </div>

      <button onClick={onOpenWizard} className="mt-2 w-full anc-quiet-button">
        Open step-by-step setup
      </button>
    </div>
  )
}
