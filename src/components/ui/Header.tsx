import { useVenueStore } from '@/stores/venueStore'
import { VenueSwitcher } from './VenueSwitcher'
import type { VenueType } from '@/types'

export function Header() {
  const simulating = useVenueStore(s => s.simulating)
  const toggleSimulation = useVenueStore(s => s.toggleSimulation)
  const resetCamera = useVenueStore(s => s.resetCamera)
  const zones = useVenueStore(s => s.zones)
  const activeCount = zones.filter(z => z.enabled).length

  return (
    <div className="absolute top-0 left-0 right-0 h-12 z-20 flex items-center justify-between px-5"
      style={{ background: 'rgba(10,16,24,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1a2a3a' }}>

      <div className="flex items-center gap-3">
        {/* ANC Logo area */}
        <div className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm text-black"
          style={{ background: 'linear-gradient(135deg, #00ff88, #00ccff)', fontFamily: 'Oswald, sans-serif' }}>
          V
        </div>
        <div>
          <h1 className="text-sm font-semibold tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '15px' }}>
            ANC VENUE VISION
          </h1>
          <p className="text-[9px] uppercase tracking-[2px]" style={{ color: '#5a7a9a' }}>
            Powered by Forge Engine
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <VenueSwitcher />

        <button
          onClick={toggleSimulation}
          className="text-[10px] px-3.5 py-1.5 rounded-md border cursor-pointer transition-all"
          style={{
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '0.5px',
            ...(simulating
              ? { background: 'linear-gradient(135deg, #00ff88, #00ccff)', color: '#000', borderColor: 'transparent', fontWeight: 600 }
              : { background: 'transparent', color: '#8aa0b8', borderColor: '#1a2a3a' }
            ),
          }}
        >
          {simulating ? '■ STOP SIMULATION' : '► GAME SIMULATION'}
        </button>

        <button
          onClick={resetCamera}
          className="text-[10px] px-3.5 py-1.5 rounded-md border cursor-pointer transition-all"
          style={{ fontFamily: 'Oswald, sans-serif', background: 'transparent', color: '#8aa0b8', borderColor: '#1a2a3a' }}
        >
          ⟳ Reset View
        </button>

        <span className="text-[9px] px-2 py-0.5 rounded-full border" style={{ borderColor: '#1a2a3a', color: '#5a7a9a' }}>
          {activeCount}/{zones.length} Active
        </span>
      </div>
    </div>
  )
}
