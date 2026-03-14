import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { VenueScene } from '@/components/three/VenueScene'
import { Header } from '@/components/ui/Header'
import { ZonePanel } from '@/components/ui/ZonePanel'
import { RevenuePanel } from '@/components/ui/RevenuePanel'
import { DetailPanel } from '@/components/ui/DetailPanel'
import { useVenueStore } from '@/stores/venueStore'

export default function App() {
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const [zonesOpen, setZonesOpen] = useState(true)
  const [insightsOpen, setInsightsOpen] = useState(true)
  const [detailOpen, setDetailOpen] = useState(false)

  useEffect(() => {
    if (selectedZoneId) {
      setDetailOpen(true)
    }
  }, [selectedZoneId])

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
            gl.setClearColor('#080c12')
          }}
        >
          <VenueScene />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none [&>*]:pointer-events-auto">
        <Header
          zonesOpen={zonesOpen}
          insightsOpen={insightsOpen}
          detailOpen={detailOpen}
          onToggleZones={() => setZonesOpen(open => !open)}
          onToggleInsights={() => setInsightsOpen(open => !open)}
          onToggleDetail={() => setDetailOpen(open => !open)}
        />
        <ZonePanel open={zonesOpen} />
        <RevenuePanel open={insightsOpen} />
        <DetailPanel open={detailOpen} onClose={() => setDetailOpen(false)} />

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] opacity-70 text-center pointer-events-none anc-help-chip">
          Click & drag to orbit · Scroll to zoom · Click LED zones to configure
        </div>
      </div>
    </div>
  )
}
