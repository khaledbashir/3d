import { Canvas } from '@react-three/fiber'
import { VenueScene } from '@/components/three/VenueScene'
import { Header } from '@/components/ui/Header'
import { ZonePanel } from '@/components/ui/ZonePanel'
import { RevenuePanel } from '@/components/ui/RevenuePanel'
import { DetailPanel } from '@/components/ui/DetailPanel'

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden" style={{ background: '#080c12', fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ fov: 55, near: 0.1, far: 2000, position: [0, 120, 200] }}
          gl={{
            antialias: true,
            toneMapping: 4, // ACESFilmic
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

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none [&>*]:pointer-events-auto">
        <Header />
        <ZonePanel />
        <RevenuePanel />
        <DetailPanel />

        {/* Hint */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[10px] opacity-60 text-center pointer-events-none"
          style={{ color: '#5a7a9a' }}>
          Click & drag to orbit · Scroll to zoom · Click LED zones to configure
        </div>
      </div>
    </div>
  )
}
