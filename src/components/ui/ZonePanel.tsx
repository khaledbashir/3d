import { useVenueStore } from '@/stores/venueStore'
import { presets } from '@/data/presets'

interface ZonePanelProps {
  open: boolean
}

export function ZonePanel({ open }: ZonePanelProps) {
  const zones = useVenueStore(s => s.zones)
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const selectZone = useVenueStore(s => s.selectZone)
  const applyPreset = useVenueStore(s => s.applyPreset)
  const setZoneEnabled = useVenueStore(s => s.setZoneEnabled)
  const activeCount = zones.filter(zone => zone.enabled).length

  if (!open) return null

  return (
    <div className="absolute left-4 flex flex-col gap-3 pb-3 overflow-y-auto"
      style={{ top: '84px', width: '286px', maxHeight: 'calc(100vh - 160px)' }}>

      <div className="anc-panel rounded-2xl p-4">
        <div className="rounded-2xl px-3 py-3 mb-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-[10px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
            How To Demo This
          </div>
          <div className="text-[11px] leading-5" style={{ color: '#c9d9e7' }}>
            1. Choose a venue at the top.
          </div>
          <div className="text-[11px] leading-5" style={{ color: '#c9d9e7' }}>
            2. Turn zones on with the switch.
          </div>
          <div className="text-[11px] leading-5" style={{ color: '#c9d9e7' }}>
            3. Click a zone name to edit sponsor, content, and product.
          </div>
        </div>

        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[2px] mb-1" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
              LED Zones
            </div>
            <div className="text-sm font-semibold text-white">{activeCount} active placements</div>
          </div>
          <div className="text-right">
            <div className="text-[10px]" style={{ color: '#5a7a9a' }}>Coverage</div>
            <div className="text-lg font-semibold" style={{ color: '#d0e4ff', fontFamily: "'Work Sans', sans-serif" }}>
              {Math.round((activeCount / Math.max(zones.length, 1)) * 100)}%
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {zones.map(zone => (
            <div
              key={zone.id}
              className="rounded-2xl border p-3 transition-all"
              style={{
                background: selectedZoneId === zone.id ? 'rgba(9, 18, 29, 0.98)' : 'rgba(8, 14, 22, 0.88)',
                borderColor: selectedZoneId === zone.id ? 'rgba(0,255,136,0.22)' : 'rgba(255,255,255,0.05)',
                boxShadow: selectedZoneId === zone.id ? '0 0 0 1px rgba(0,255,136,0.06) inset' : 'none',
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <button
                  onClick={() => selectZone(selectedZoneId === zone.id ? null : zone.id)}
                  className="min-w-0 flex-1 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: zone.enabled ? '#0A52EF' : '#314454' }} />
                    <span className="truncate text-[12px] font-medium" style={{ color: '#f4fbff' }}>{zone.name}</span>
                  </div>
                  <div className="mt-1 text-[10px] leading-4" style={{ color: '#6f88a0' }}>
                    Click to edit this placement
                  </div>
                </button>

                <button
                  onClick={() => setZoneEnabled(zone.id, !zone.enabled)}
                  className={`anc-mini-switch ${zone.enabled ? 'anc-mini-switch--on' : ''}`}
                  aria-label={`${zone.enabled ? 'Disable' : 'Enable'} ${zone.name}`}
                >
                  <span />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-[8px] px-2 py-1 rounded-full border uppercase"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    letterSpacing: '1px',
                    borderColor: zone.enabled ? 'rgba(0,255,136,0.2)' : 'rgba(255,255,255,0.08)',
                    color: zone.enabled ? '#7db8ff' : '#6b7d90',
                  }}>
                  {zone.type}
                </span>
                <span className="text-[10px]" style={{ color: '#7d93ab' }}>
                  ${zone.pricePerGame.toLocaleString()}/game
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          Presets
        </div>
        <div className="grid grid-cols-2 gap-2">
          {presets.map(preset => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset.id)}
              className="w-full text-left px-3 py-2.5 rounded-2xl border text-[11px] transition-all cursor-pointer anc-preset-button"
            >
              <div className="text-[13px] mb-1">{preset.icon}</div>
              <div>{preset.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
