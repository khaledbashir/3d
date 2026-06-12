import { useVenueStore } from '@/stores/venueStore'
import {
  CompassIcon,
  GridIcon,
  BoltIcon,
  RevenueIcon,
  AnalyticsIcon,
  RoiIcon,
  PlayIcon,
  StopIcon,
} from './icons'

interface ControlRailProps {
  zonesOpen: boolean
  insightsOpen: boolean
  roiOpen: boolean
  liveSyncOpen: boolean
  analyticsOpen: boolean
  guideOpen: boolean
  onToggleZones: () => void
  onToggleInsights: () => void
  onToggleRoi: () => void
  onToggleLiveSync: () => void
  onToggleAnalytics: () => void
  onToggleGuide: () => void
}

/**
 * Right-edge icon dock — the single place to open/close every workspace
 * panel. Icon-only with hover tooltips; active panel gets the accent state.
 */
export function ControlRail(props: ControlRailProps) {
  const simulating = useVenueStore(s => s.simulating)
  const toggleSimulation = useVenueStore(s => s.toggleSimulation)

  const items = [
    { tip: 'Guided path', icon: <CompassIcon size={17} />, active: props.guideOpen, onClick: props.onToggleGuide },
    { tip: 'LED zones', icon: <GridIcon size={17} />, active: props.zonesOpen, onClick: props.onToggleZones },
    { tip: 'LiveSync triggers', icon: <BoltIcon size={17} />, active: props.liveSyncOpen, onClick: props.onToggleLiveSync },
    { tip: 'Revenue', icon: <RevenueIcon size={17} />, active: props.insightsOpen, onClick: props.onToggleInsights },
    { tip: 'Analytics', icon: <AnalyticsIcon size={17} />, active: props.analyticsOpen, onClick: props.onToggleAnalytics },
    { tip: 'ROI calculator', icon: <RoiIcon size={17} />, active: props.roiOpen, onClick: props.onToggleRoi },
  ]

  return (
    <div className="anc-rail">
      {items.map(item => (
        <button
          key={item.tip}
          data-tip={item.tip}
          onClick={item.onClick}
          className={`anc-rail-button ${item.active ? 'anc-rail-button--active' : ''}`}
        >
          {item.icon}
        </button>
      ))}

      <div className="anc-rail-divider" />

      <button
        data-tip={simulating ? 'Stop demo loop' : 'Auto demo loop'}
        onClick={toggleSimulation}
        className={`anc-rail-button ${simulating ? 'anc-rail-button--live' : ''}`}
      >
        {simulating ? <StopIcon size={17} /> : <PlayIcon size={17} />}
      </button>
    </div>
  )
}
