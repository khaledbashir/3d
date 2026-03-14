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
    <div className="flex items-center gap-1 rounded-full border px-1 py-1 anc-chip-strip">
      {venues.map(v => (
        <button
          key={v.id}
          onClick={() => setVenueType(v.id)}
          className="text-[10px] px-2.5 py-1 rounded-full border cursor-pointer transition-all whitespace-nowrap"
          style={{
            fontFamily: 'Oswald, sans-serif',
            ...(venueType === v.id
              ? { background: 'rgba(0,255,136,0.14)', borderColor: 'rgba(0,255,136,0.24)', color: '#dfffee', fontWeight: 600 }
              : { background: 'transparent', borderColor: 'transparent', color: '#7d93ab' }
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
