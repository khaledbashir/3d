import { useVenueStore } from '@/stores/venueStore'
import { VenueSwitcher } from './VenueSwitcher'
import type { CrowdMode } from '@/types'

interface HeaderProps {
  zonesOpen: boolean
  insightsOpen: boolean
  onToggleZones: () => void
  onToggleInsights: () => void
}

export function Header({
  zonesOpen,
  insightsOpen,
  onToggleZones,
  onToggleInsights,
}: HeaderProps) {
  const simulating = useVenueStore(s => s.simulating)
  const toggleSimulation = useVenueStore(s => s.toggleSimulation)
  const resetCamera = useVenueStore(s => s.resetCamera)
  const zones = useVenueStore(s => s.zones)
  const activeCount = zones.filter(z => z.enabled).length
  const crowdMode = useVenueStore(s => s.crowdMode)
  const setCrowdMode = useVenueStore(s => s.setCrowdMode)

  const crowdOptions: { id: CrowdMode; label: string }[] = [
    { id: 'empty', label: 'Empty' },
    { id: 'half', label: 'Half Full' },
    { id: 'full', label: 'Packed' },
  ]

  return (
    <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-3">
      <div className="anc-topbar flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <img src="/anc-logo-white.png" alt="ANC" className="h-8 object-contain" />
          <div className="min-w-0">
            <h1 className="text-sm font-bold uppercase" style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '15px', letterSpacing: '-0.045em' }}>
              ANC VENUE VISION
            </h1>
            <p className="text-[9px] uppercase" style={{ color: '#6888a8', fontFamily: "'Work Sans', sans-serif", letterSpacing: '0.1em' }}>
              Pick a venue, turn zones on, then click a zone to edit it
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <VenueSwitcher />

          <div className="flex items-center gap-1 rounded-full border px-1 py-1 anc-chip-strip">
            {crowdOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setCrowdMode(option.id)}
                className={`anc-toolbar-button ${crowdMode === option.id ? 'anc-toolbar-button--active' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button onClick={onToggleZones} className={`anc-toolbar-button ${zonesOpen ? 'anc-toolbar-button--active' : ''}`}>
            {zonesOpen ? 'Hide Zone List' : 'Show Zone List'}
          </button>

          <button onClick={onToggleInsights} className={`anc-toolbar-button ${insightsOpen ? 'anc-toolbar-button--active' : ''}`}>
            {insightsOpen ? 'Hide Revenue' : 'Show Revenue'}
          </button>

          <button onClick={toggleSimulation} className={`anc-toolbar-button ${simulating ? 'anc-toolbar-button--accent' : ''}`}>
            {simulating ? 'Stop Auto Demo' : 'Start Auto Demo'}
          </button>

          <button onClick={resetCamera} className="anc-toolbar-button">
            Reset View
          </button>

          <span className="anc-status-pill">
            {activeCount}/{zones.length} Active
          </span>

          {simulating && (
            <span className="anc-status-pill">
              Auto demo is cycling screen content
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
