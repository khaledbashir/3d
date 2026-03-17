import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { VenueScene } from '@/components/three/VenueScene'
import { Header } from '@/components/ui/Header'
import { ZonePanel } from '@/components/ui/ZonePanel'
import { RevenuePanel } from '@/components/ui/RevenuePanel'
import { DetailPanel } from '@/components/ui/DetailPanel'
import { RoiPanel } from '@/components/ui/RoiPanel'
import { LiveSyncPanel } from '@/components/ui/LiveSyncPanel'
import { AnalyticsOverlay } from '@/components/ui/AnalyticsOverlay'
import { SetupWizard } from '@/components/ui/SetupWizard'
import { ExportSheet } from '@/components/ui/ExportSheet'
import { PresentationMode } from '@/components/ui/PresentationMode'
import { useVenueStore } from '@/stores/venueStore'
import { decodeConfigFromUrl } from '@/utils/configUrl'
import { preloadSponsorLogos } from '@/utils/preloadLogos'

export default function App() {
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const hydrateFromSnapshot = useVenueStore(s => s.hydrateFromSnapshot)
  const [zonesOpen, setZonesOpen] = useState(true)
  const [insightsOpen, setInsightsOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(true)
  const [roiOpen, setRoiOpen] = useState(false)
  const [liveSyncOpen, setLiveSyncOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(false)
  const [wizardOpen, setWizardOpen] = useState(() => !localStorage.getItem('anc-wizard-seen'))
  const [presenting, setPresenting] = useState(false)

  // Preload sponsor logos + hydrate from URL hash on mount
  useEffect(() => {
    preloadSponsorLogos()
    const snapshot = decodeConfigFromUrl()
    if (snapshot) {
      hydrateFromSnapshot(snapshot)
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [hydrateFromSnapshot])

  useEffect(() => {
    if (selectedZoneId) {
      setDetailOpen(true)
    }
  }, [selectedZoneId])

  const handleCloseWizard = () => {
    setWizardOpen(false)
    localStorage.setItem('anc-wizard-seen', '1')
  }

  // Left panel logic: zones OR livesync
  const handleToggleZones = () => {
    setZonesOpen(o => !o)
    if (!zonesOpen) setLiveSyncOpen(false)
  }
  const handleToggleLiveSync = () => {
    setLiveSyncOpen(o => !o)
    if (!liveSyncOpen) setZonesOpen(false)
  }

  // Right panel logic: revenue OR analytics OR roi
  const handleToggleInsights = () => {
    setInsightsOpen(o => !o)
    if (!insightsOpen) { setRoiOpen(false); setAnalyticsOpen(false) }
  }
  const handleToggleAnalytics = () => {
    setAnalyticsOpen(o => !o)
    if (!analyticsOpen) { setInsightsOpen(false); setRoiOpen(false) }
  }
  const handleToggleRoi = () => {
    setRoiOpen(o => !o)
    if (!roiOpen) { setInsightsOpen(false); setAnalyticsOpen(false) }
  }

  return (
    <div className="w-screen h-screen overflow-hidden anc-app-shell">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ fov: 55, near: 0.1, far: 2000, position: [0, 120, 200] }}
          gl={{
            antialias: true,
            toneMapping: 4,
            toneMappingExposure: 1.1,
          }}
          shadows
          dpr={[1, 2]}
          onCreated={({ gl }) => {
            gl.setClearColor('#000a1a')
          }}
        >
          <VenueScene />
        </Canvas>
      </div>

      {/* Normal UI — hidden during presentation */}
      {!presenting && (
        <div className="absolute inset-0 z-10 pointer-events-none [&>*]:pointer-events-auto">
          <Header
            zonesOpen={zonesOpen}
            insightsOpen={insightsOpen}
            roiOpen={roiOpen}
            liveSyncOpen={liveSyncOpen}
            analyticsOpen={analyticsOpen}
            onToggleZones={handleToggleZones}
            onToggleInsights={handleToggleInsights}
            onToggleRoi={handleToggleRoi}
            onToggleLiveSync={handleToggleLiveSync}
            onToggleAnalytics={handleToggleAnalytics}
            onOpenWizard={() => setWizardOpen(true)}
            onPresent={() => setPresenting(true)}
          />

          {/* Left panels */}
          <ZonePanel open={zonesOpen && !liveSyncOpen} />
          <LiveSyncPanel open={liveSyncOpen} />

          {/* Right panels */}
          <RevenuePanel open={insightsOpen && !roiOpen && !analyticsOpen} />
          <AnalyticsOverlay open={analyticsOpen} />
          <RoiPanel open={roiOpen} />

          {/* Bottom */}
          <DetailPanel open={detailOpen} onClose={() => setDetailOpen(false)} />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] text-center pointer-events-none anc-help-chip"
            style={{ color: 'rgba(255,255,255,0.25)' }}>
            Drag to orbit · Scroll to zoom · Click zones to edit
          </div>
        </div>
      )}

      {/* Presentation mode overlay */}
      <PresentationMode active={presenting} onExit={() => setPresenting(false)} />

      <SetupWizard open={wizardOpen && !presenting} onClose={handleCloseWizard} />
      <ExportSheet />
    </div>
  )
}
