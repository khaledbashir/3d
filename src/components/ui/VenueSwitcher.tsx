import { useVenueStore } from '@/stores/venueStore'
import { venues } from '@/data/venues'
import type { VenueType } from '@/types'
import { StadiumIcon, ArenaIcon, RetailIcon, TransitIcon } from './icons'

const icons: Record<VenueType, (size: number) => JSX.Element> = {
  nfl: s => <StadiumIcon size={s} />,
  nba: s => <ArenaIcon size={s} />,
  mall: s => <RetailIcon size={s} />,
  transit: s => <TransitIcon size={s} />,
}

const shortNames: Record<VenueType, string> = {
  nfl: 'Stadium',
  nba: 'Arena',
  mall: 'Retail',
  transit: 'Transit',
}

/** Segmented venue picker — active segment expands with its label. */
export function VenueSwitcher() {
  const venueType = useVenueStore(s => s.venueType)
  const setVenueType = useVenueStore(s => s.setVenueType)

  return (
    <div className="anc-seg">
      {venues.map(v => {
        const active = venueType === v.id
        return (
          <button
            key={v.id}
            onClick={() => setVenueType(v.id)}
            data-tip={active ? undefined : v.name}
            className={`anc-seg-button ${active ? 'anc-seg-button--active' : ''}`}
          >
            {icons[v.id](15)}
            {active && <span className="anc-seg-label">{shortNames[v.id]}</span>}
          </button>
        )
      })}
    </div>
  )
}
