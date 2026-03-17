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
  liveSyncOpen: boolean
  analyticsOpen: boolean
  onToggleZones: () => void
  onToggleInsights: () => void
  onToggleRoi: () => void
  onToggleLiveSync: () => void
  onToggleAnalytics: () => void
  onOpenWizard: () => void
  onPresent: () => void
}

export function Header({
  zonesOpen,
  insightsOpen,
  roiOpen,
  liveSyncOpen,
  analyticsOpen,
  onToggleZones,
  onToggleInsights,
  onToggleRoi,
  onToggleLiveSync,
  onToggleAnalytics,
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

  return (
    <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-3">
      <div className="anc-topbar flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5">
        {/* Brand */}
        <div className="flex min-w-0 items-center gap-3">
          <img src="/anc-logo-white.png" alt="ANC" className="h-7 object-contain" />
          <div className="min-w-0 hidden sm:block">
            <h1 className="text-sm font-bold uppercase" style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14px', letterSpacing: '-0.045em' }}>
              ANC Venue Vision
            </h1>
            <div className="text-[7px] uppercase tracking-widest" style={{ color: '#5a7a9a' }}>
              3D LED Configurator
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {/* Venue + Scene controls */}
          <VenueSwitcher />

          <div className="flex items-center gap-0.5 rounded-full border px-0.5 py-0.5 anc-chip-strip">
            {crowdOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setCrowdMode(option.id)}
                className={`anc-toolbar-button ${crowdMode === option.id ? 'anc-toolbar-button--active' : ''}`}
                style={{ padding: '6px 8px', fontSize: '9px' }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <span className="w-px h-4 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* Panel toggles */}
          <button onClick={onToggleZones} className={`anc-toolbar-button ${zonesOpen ? 'anc-toolbar-button--active' : ''}`}>
            Zones
          </button>
          <button onClick={onToggleLiveSync} className={`anc-toolbar-button ${liveSyncOpen ? 'anc-toolbar-button--accent' : ''}`}>
            LiveSync
          </button>
          <button onClick={onToggleInsights} className={`anc-toolbar-button ${insightsOpen ? 'anc-toolbar-button--active' : ''}`}>
            Revenue
          </button>
          <button onClick={onToggleAnalytics} className={`anc-toolbar-button ${analyticsOpen ? 'anc-toolbar-button--active' : ''}`}>
            Analytics
          </button>
          <button onClick={onToggleRoi} className={`anc-toolbar-button ${roiOpen ? 'anc-toolbar-button--active' : ''}`}>
            ROI
          </button>

          <span className="w-px h-4 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* Scene controls */}
          <button onClick={toggleSimulation} className={`anc-toolbar-button ${simulating ? 'anc-toolbar-button--accent' : ''}`}>
            {simulating ? 'Stop' : 'Auto Demo'}
          </button>
          <button onClick={resetCamera} className="anc-toolbar-button">
            Reset View
          </button>

          <span className="w-px h-4 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* Actions */}
          <button onClick={() => setSaveLoadOpen(true)} className="anc-toolbar-button">Save/Load</button>
          <button onClick={() => window.print()} className="anc-toolbar-button">Export</button>
          <button onClick={handleShare} className={`anc-toolbar-button ${copied ? 'anc-toolbar-button--active' : ''}`}>
            {copied ? 'Copied!' : 'Share'}
          </button>

          {/* Present — Primary CTA */}
          <button
            onClick={onPresent}
            className="px-3.5 py-1.5 rounded-xl text-[9px] font-bold uppercase transition-all flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #0A52EF, #03B8FF)',
              color: '#fff',
              fontFamily: "'Work Sans', sans-serif",
              letterSpacing: '0.05em',
              boxShadow: '0 0 16px rgba(10,82,239,0.25)',
            }}
          >
            Present
          </button>

          {/* Status */}
          <span className="anc-status-pill flex-shrink-0" title={`${activeCount} of ${zones.length} zones active`}>
            {activeCount}/{zones.length}
          </span>
        </div>
      </div>

      <SaveLoadModal open={saveLoadOpen} onClose={() => setSaveLoadOpen(false)} />
    </div>
  )
}
