import { useState } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { VenueSwitcher } from './VenueSwitcher'
import { SaveLoadModal } from './SaveLoadModal'
import { encodeConfigToUrl } from '@/utils/configUrl'
import type { CrowdMode } from '@/types'

interface HeaderProps {
  zonesOpen: boolean
  insightsOpen: boolean
  roiOpen: boolean
  onToggleZones: () => void
  onToggleInsights: () => void
  onToggleRoi: () => void
  onOpenWizard: () => void
  onPresent: () => void
}

export function Header({
  zonesOpen,
  insightsOpen,
  roiOpen,
  onToggleZones,
  onToggleInsights,
  onToggleRoi,
  onOpenWizard,
  onPresent,
}: HeaderProps) {
  const simulating = useVenueStore(s => s.simulating)
  const toggleSimulation = useVenueStore(s => s.toggleSimulation)
  const resetCamera = useVenueStore(s => s.resetCamera)
  const zones = useVenueStore(s => s.zones)
  const activeCount = zones.filter(z => z.enabled).length
  const crowdMode = useVenueStore(s => s.crowdMode)
  const setCrowdMode = useVenueStore(s => s.setCrowdMode)
  const [saveLoadOpen, setSaveLoadOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const venueType = useVenueStore(s => s.venueType)
  const sponsors = useVenueStore(s => s.sponsors)

  const crowdOptions: { id: CrowdMode; label: string }[] = [
    { id: 'empty', label: 'Empty' },
    { id: 'half', label: 'Half Full' },
    { id: 'full', label: 'Packed' },
  ]

  const handleShare = () => {
    const url = encodeConfigToUrl({ venueType, zones, sponsors })
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleExport = () => window.print()

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
              3D LED Configurator
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
            Zones
          </button>

          <button onClick={onToggleInsights} className={`anc-toolbar-button ${insightsOpen ? 'anc-toolbar-button--active' : ''}`}>
            Revenue
          </button>

          <button onClick={onToggleRoi} className={`anc-toolbar-button ${roiOpen ? 'anc-toolbar-button--active' : ''}`}>
            ROI
          </button>

          <button onClick={toggleSimulation} className={`anc-toolbar-button ${simulating ? 'anc-toolbar-button--accent' : ''}`}>
            {simulating ? 'Stop Demo' : 'Auto Demo'}
          </button>

          <button onClick={resetCamera} className="anc-toolbar-button">
            Reset View
          </button>

          <span className="w-px h-5 self-center" style={{ background: 'rgba(255,255,255,0.1)' }} />

          <button onClick={() => setSaveLoadOpen(true)} className="anc-toolbar-button">
            Save/Load
          </button>

          <button onClick={handleExport} className="anc-toolbar-button">
            Export
          </button>

          <button onClick={handleShare} className={`anc-toolbar-button ${copied ? 'anc-toolbar-button--active' : ''}`}>
            {copied ? 'Copied!' : 'Share'}
          </button>

          <button onClick={onOpenWizard} className="anc-toolbar-button">
            Guide
          </button>

          <button
            onClick={onPresent}
            className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all"
            style={{
              background: 'linear-gradient(135deg, #0A52EF, #03B8FF)',
              color: '#fff',
              fontFamily: "'Work Sans', sans-serif",
              letterSpacing: '0.05em',
              boxShadow: '0 0 20px rgba(10,82,239,0.3)',
            }}
          >
            Present
          </button>

          <span className="anc-status-pill">
            {activeCount}/{zones.length}
          </span>
        </div>
      </div>

      <SaveLoadModal open={saveLoadOpen} onClose={() => setSaveLoadOpen(false)} />
    </div>
  )
}
