import { useVenueStore } from '@/stores/venueStore'
import { presets } from '@/data/presets'

export function ZonePanel() {
  const zones = useVenueStore(s => s.zones)
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const selectZone = useVenueStore(s => s.selectZone)
  const applyPreset = useVenueStore(s => s.applyPreset)

  return (
    <div className="absolute left-2.5 flex flex-col gap-2 pb-2.5 overflow-y-auto"
      style={{ top: '58px', width: '240px', maxHeight: 'calc(100vh - 68px)' }}>

      {/* Zone List */}
      <div className="rounded-lg p-3" style={{ background: 'rgba(13,21,32,0.92)', backdropFilter: 'blur(12px)', border: '1px solid #1a2a3a' }}>
        <div className="text-[10px] uppercase tracking-[2px] mb-2" style={{ fontFamily: 'Oswald, sans-serif', color: '#5a7a9a' }}>
          LED Zones
        </div>
        <div className="flex flex-col gap-0.5">
          {zones.map(zone => (
            <button
              key={zone.id}
              onClick={() => selectZone(selectedZoneId === zone.id ? null : zone.id)}
              className="w-full text-left flex items-center justify-between px-2.5 py-2 rounded-md border transition-all cursor-pointer text-[11px]"
              style={{
                background: selectedZoneId === zone.id ? 'rgba(0,255,136,0.08)' : '#0a1018',
                borderColor: selectedZoneId === zone.id ? 'rgba(0,255,136,0.3)' : 'transparent',
                color: selectedZoneId === zone.id ? '#00ff88' : '#8aa0b8',
              }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: zone.enabled ? '#00ff88' : '#333' }} />
                <span className="truncate max-w-[130px]">{zone.name}</span>
              </span>
              <span className="text-[8px] px-1.5 py-0.5 rounded border uppercase"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  borderColor: zone.enabled ? 'rgba(0,255,136,0.2)' : '#333',
                  color: zone.enabled ? '#00ff88' : '#555',
                }}>
                {zone.type}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Presets */}
      <div className="rounded-lg p-3" style={{ background: 'rgba(13,21,32,0.92)', backdropFilter: 'blur(12px)', border: '1px solid #1a2a3a' }}>
        <div className="text-[10px] uppercase tracking-[2px] mb-2" style={{ fontFamily: 'Oswald, sans-serif', color: '#5a7a9a' }}>
          Presets
        </div>
        <div className="flex flex-col gap-0.5">
          {presets.map(preset => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset.id)}
              className="w-full text-left px-2.5 py-1.5 rounded border text-[10px] transition-all cursor-pointer"
              style={{ background: 'transparent', borderColor: '#1a2a3a', color: '#8aa0b8' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#1a2a3a'; (e.target as HTMLElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#8aa0b8' }}
            >
              {preset.icon} {preset.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
