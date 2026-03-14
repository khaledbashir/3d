import { useVenueStore } from '@/stores/venueStore'
import { getSponsor } from '@/data/sponsors'

interface RevenuePanelProps {
  open: boolean
}

export function RevenuePanel({ open }: RevenuePanelProps) {
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const getRevenue = useVenueStore(s => s.getRevenue)
  const revenue = getRevenue()
  const activeZones = zones.filter(zone => zone.enabled)

  if (!open) return null

  return (
    <div className="absolute right-4 flex flex-col gap-3 pb-3 overflow-y-auto"
      style={{ top: '84px', width: '300px', maxHeight: 'calc(100vh - 160px)' }}>

      <div className="anc-panel rounded-2xl p-4">
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[2px] mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: '#5a7a9a' }}>
              Revenue Snapshot
            </div>
            <div className="text-sm font-semibold text-white">Fewer panels, clearer numbers</div>
          </div>
          <div className="text-right">
            <div className="text-[10px]" style={{ color: '#5a7a9a' }}>Booked</div>
            <div className="text-lg font-semibold" style={{ color: '#dfffee', fontFamily: 'Oswald, sans-serif' }}>
              {revenue.activeCount}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-2xl p-3" style={{ background: 'rgba(8, 14, 22, 0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] uppercase tracking-[2px] mb-1" style={{ color: '#5a7a9a' }}>Per Game</div>
            <div className="text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: '#00ff88' }}>
              ${revenue.perGame.toLocaleString()}
            </div>
          </div>
          <div className="rounded-2xl p-3" style={{ background: 'rgba(8, 14, 22, 0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] uppercase tracking-[2px] mb-1" style={{ color: '#5a7a9a' }}>Per Season</div>
            <div className="text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: '#00ccff' }}>
              ${revenue.perSeason.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-3" style={{ background: 'rgba(8, 14, 22, 0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
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

      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: 'Oswald, sans-serif', color: '#5a7a9a' }}>
          Active Breakdown
        </div>
        <div className="flex flex-col gap-2">
          {activeZones.length === 0 && (
            <div className="rounded-2xl border px-3 py-4 text-[11px]" style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#6f88a0' }}>
              Turn on a zone to see live revenue detail here.
            </div>
          )}
          {activeZones.map(zone => {
            const sp = sponsors.find(s => s.id === zone.sponsor) ?? getSponsor('none')
            return (
              <div
                key={zone.id}
                className="flex items-center justify-between px-3 py-2.5 rounded-2xl text-[10px]"
                style={{ background: 'rgba(8, 14, 22, 0.9)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#00ff88' }} />
                  <span className="truncate max-w-[105px]" style={{ color: '#d5e5f3' }}>{zone.name}</span>
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
