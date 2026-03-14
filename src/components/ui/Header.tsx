import { useVenueStore } from '@/stores/venueStore'
import { VenueSwitcher } from './VenueSwitcher'

interface HeaderProps {
  zonesOpen: boolean
  insightsOpen: boolean
  detailOpen: boolean
  onToggleZones: () => void
  onToggleInsights: () => void
  onToggleDetail: () => void
}

export function Header({
  zonesOpen,
  insightsOpen,
  detailOpen,
  onToggleZones,
  onToggleInsights,
  onToggleDetail,
}: HeaderProps) {
  const simulating = useVenueStore(s => s.simulating)
  const toggleSimulation = useVenueStore(s => s.toggleSimulation)
  const resetCamera = useVenueStore(s => s.resetCamera)
  const zones = useVenueStore(s => s.zones)
  const activeCount = zones.filter(z => z.enabled).length

  return (
    <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-3">
      <div className="anc-topbar flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-black"
            style={{ background: 'linear-gradient(135deg, #00ff88, #00ccff)', fontFamily: 'Oswald, sans-serif' }}>
            V
          </div>
          <div className="min-w-0">
            <h1 className="text-sm font-semibold tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '15px' }}>
              ANC VENUE VISION
            </h1>
            <p className="text-[9px] uppercase tracking-[2px]" style={{ color: '#5a7a9a' }}>
              Cleaner control view for venue sales previews
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <VenueSwitcher />

          <button onClick={onToggleZones} className={`anc-toolbar-button ${zonesOpen ? 'anc-toolbar-button--active' : ''}`}>
            {zonesOpen ? 'Hide Zones' : 'Show Zones'}
          </button>

          <button onClick={onToggleInsights} className={`anc-toolbar-button ${insightsOpen ? 'anc-toolbar-button--active' : ''}`}>
            {insightsOpen ? 'Hide Insights' : 'Show Insights'}
          </button>

          <button onClick={onToggleDetail} className={`anc-toolbar-button ${detailOpen ? 'anc-toolbar-button--active' : ''}`}>
            {detailOpen ? 'Hide Editor' : 'Show Editor'}
          </button>

          <button onClick={toggleSimulation} className={`anc-toolbar-button ${simulating ? 'anc-toolbar-button--accent' : ''}`}>
            {simulating ? 'Stop Simulation' : 'Run Simulation'}
          </button>

          <button onClick={resetCamera} className="anc-toolbar-button">
            Reset View
          </button>

          <span className="anc-status-pill">
            {activeCount}/{zones.length} Active
          </span>
        </div>
      </div>
    </div>
  )
}
