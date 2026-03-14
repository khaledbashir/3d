import { useVenueStore } from '@/stores/venueStore'
import { getSponsor } from '@/data/sponsors'

export function RevenuePanel() {
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const getRevenue = useVenueStore(s => s.getRevenue)
  const revenue = getRevenue()

  return (
    <div className="absolute right-2.5 flex flex-col gap-2 pb-2.5 overflow-y-auto"
      style={{ top: '58px', width: '260px', maxHeight: 'calc(100vh - 68px)' }}>

      {/* Revenue Dashboard */}
      <div className="rounded-lg p-3" style={{ background: 'rgba(13,21,32,0.92)', backdropFilter: 'blur(12px)', border: '1px solid #1a2a3a' }}>
        <div className="text-[10px] uppercase tracking-[2px] mb-2" style={{ fontFamily: 'Oswald, sans-serif', color: '#5a7a9a' }}>
          Revenue Dashboard
        </div>

        <div className="grid grid-cols-2 gap-1.5 mb-2">
          <div className="rounded-md p-2.5" style={{ background: '#0d1520', border: '1px solid #1a2a3a' }}>
            <div className="text-[9px] uppercase tracking-[2px] mb-1" style={{ color: '#5a7a9a' }}>Per Game</div>
            <div className="text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: '#00ff88' }}>
              ${revenue.perGame.toLocaleString()}
            </div>
          </div>
          <div className="rounded-md p-2.5" style={{ background: '#0d1520', border: '1px solid #1a2a3a' }}>
            <div className="text-[9px] uppercase tracking-[2px] mb-1" style={{ color: '#5a7a9a' }}>Per Season</div>
            <div className="text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: '#00ccff' }}>
              ${revenue.perSeason.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="rounded-md p-2.5" style={{ background: '#0d1520', border: '1px solid #1a2a3a' }}>
          <div className="flex justify-between items-center">
            <span className="text-[9px] uppercase tracking-[2px]" style={{ color: '#5a7a9a' }}>Zone Occupancy</span>
            <span className="text-xs font-bold">{revenue.occupancy}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full mt-1.5 overflow-hidden" style={{ background: '#1a2a3a' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${revenue.occupancy}%`, background: 'linear-gradient(90deg, #00ff88, #00ccff)' }} />
          </div>
        </div>
      </div>

      {/* Zone Breakdown */}
      <div className="rounded-lg p-3" style={{ background: 'rgba(13,21,32,0.92)', backdropFilter: 'blur(12px)', border: '1px solid #1a2a3a' }}>
        <div className="text-[10px] uppercase tracking-[2px] mb-2" style={{ fontFamily: 'Oswald, sans-serif', color: '#5a7a9a' }}>
          Zone Breakdown
        </div>
        <div className="flex flex-col gap-0.5">
          {zones.map(zone => {
            const sp = sponsors.find(s => s.id === zone.sponsor) ?? getSponsor('none')
            return (
              <div
                key={zone.id}
                className="flex items-center justify-between px-2 py-1.5 rounded text-[10px]"
                style={{ background: '#0d1520', opacity: zone.enabled ? 1 : 0.35 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: zone.enabled ? '#00ff88' : '#333' }} />
                  <span className="truncate max-w-[90px]" style={{ color: '#8aa0b8' }}>{zone.name}</span>
                </span>
                <span className="flex items-center gap-2">
                  {sp.id !== 'none' && <span className="font-semibold text-white">{sp.name}</span>}
                  <span style={{ color: '#5a7a9a' }}>${zone.pricePerGame.toLocaleString()}/g</span>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
