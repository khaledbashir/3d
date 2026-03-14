import { useVenueStore } from '@/stores/venueStore'
import { venues } from '@/data/venues'
import type { VenueType } from '@/types'

const icons: Record<VenueType, string> = {
  nfl: '🏈',
  nba: '🏀',
  mall: '🏬',
  transit: '🚇',
}

export function VenueSwitcher() {
  const venueType = useVenueStore(s => s.venueType)
  const setVenueType = useVenueStore(s => s.setVenueType)

  return (
    <div className="flex items-center gap-1">
      {venues.map(v => (
        <button
          key={v.id}
          onClick={() => setVenueType(v.id)}
          className="text-[10px] px-2.5 py-1 rounded-md border cursor-pointer transition-all"
          style={{
            fontFamily: 'Oswald, sans-serif',
            ...(venueType === v.id
              ? { background: 'rgba(0,255,136,0.12)', borderColor: 'rgba(0,255,136,0.3)', color: '#00ff88', fontWeight: 600 }
              : { background: 'transparent', borderColor: '#1a2a3a', color: '#5a7a9a' }
            ),
          }}
          title={v.description}
        >
          {icons[v.id]} {v.name}
        </button>
      ))}
    </div>
  )
}
