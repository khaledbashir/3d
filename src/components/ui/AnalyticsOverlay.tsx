import { useState, useEffect } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { getSponsor } from '@/data/sponsors'
import type { CrowdMode } from '@/types'

interface AnalyticsOverlayProps {
  open: boolean
}

const crowdMultiplier: Record<CrowdMode, number> = {
  empty: 0,
  half: 0.55,
  full: 0.97,
}

const venueCapacity: Record<string, number> = {
  nfl: 82500,
  nba: 19200,
  mall: 45000,
  transit: 120000,
}

const avgDwellMinutes: Record<string, number> = {
  nfl: 195,
  nba: 150,
  mall: 72,
  transit: 8,
}

export function AnalyticsOverlay({ open }: AnalyticsOverlayProps) {
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const venueType = useVenueStore(s => s.venueType)
  const crowdMode = useVenueStore(s => s.crowdMode)
  const [tick, setTick] = useState(0)

  // Animate numbers
  useEffect(() => {
    if (!open) return
    const interval = setInterval(() => setTick(t => t + 1), 2000)
    return () => clearInterval(interval)
  }, [open])

  if (!open) return null

  const activeZones = zones.filter(z => z.enabled)
  const sponsoredZones = activeZones.filter(z => z.sponsor !== 'none')
  const capacity = venueCapacity[venueType] || 82500
  const attendance = Math.round(capacity * crowdMultiplier[crowdMode])
  const dwell = avgDwellMinutes[venueType] || 150
  const zoneCoverage = activeZones.length / Math.max(zones.length, 1)

  // Impressions calculation: attendance × zone coverage × avg views per zone × dwell factor
  const viewsPerZone = 4.2
  const dwellFactor = dwell / 60
  const totalImpressions = Math.round(attendance * zoneCoverage * viewsPerZone * dwellFactor)
  const jitter = Math.sin(tick * 0.7) * 0.02
  const displayImpressions = Math.round(totalImpressions * (1 + jitter))

  // CPM calculation
  const totalRevPerGame = activeZones.reduce((s, z) => s + z.pricePerGame, 0)
  const cpm = totalImpressions > 0 ? (totalRevPerGame / (totalImpressions / 1000)) : 0

  // Sponsor share of voice
  const sponsorSOV = new Map<string, number>()
  sponsoredZones.forEach(z => {
    const area = z.width * z.height
    sponsorSOV.set(z.sponsor, (sponsorSOV.get(z.sponsor) || 0) + area)
  })
  const totalArea = sponsoredZones.reduce((s, z) => s + z.width * z.height, 0)

  // Engagement score (composite)
  const engagementScore = Math.min(100, Math.round(
    (zoneCoverage * 35) +
    (crowdMultiplier[crowdMode] * 30) +
    (sponsoredZones.length / Math.max(zones.length, 1) * 25) +
    (10 * (1 + Math.sin(tick * 0.3) * 0.1))
  ))

  const fmt = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
    return n.toLocaleString()
  }

  // Top sponsors by SOV
  const topSponsors = Array.from(sponsorSOV.entries())
    .map(([id, area]) => ({
      sponsor: sponsors.find(s => s.id === id) ?? getSponsor(id),
      sov: Math.round((area / Math.max(totalArea, 1)) * 100),
    }))
    .sort((a, b) => b.sov - a.sov)
    .slice(0, 5)

  return (
    <div className="absolute right-4 flex flex-col gap-3 pb-3 overflow-y-auto"
      style={{ top: '84px', width: '300px', maxHeight: 'calc(100vh - 160px)' }}>

      {/* Key Metrics */}
      <div className="anc-panel rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] uppercase tracking-[2px]" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
            Real-Time Analytics
          </div>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[7px] uppercase font-medium" style={{ color: '#22C55E' }}>LIVE</span>
          </span>
        </div>

        {/* Impressions — hero metric */}
        <div className="rounded-xl p-4 mb-3" style={{ background: 'rgba(10,82,239,0.08)', border: '1px solid rgba(10,82,239,0.2)' }}>
          <div className="text-[8px] uppercase tracking-[2px] mb-1" style={{ color: '#5a7a9a' }}>Est. Impressions / Event</div>
          <div className="text-3xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#fff', letterSpacing: '-0.03em' }}>
            {fmt(displayImpressions)}
          </div>
          <div className="text-[9px] mt-1" style={{ color: '#4a6a8a' }}>
            Based on {attendance.toLocaleString()} attendance · {dwell}min avg dwell
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="rounded-xl p-2.5" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[7px] uppercase tracking-wider mb-1" style={{ color: '#5a7a9a' }}>CPM</div>
            <div className="text-sm font-bold" style={{ color: '#03B8FF', fontFamily: "'Work Sans', sans-serif" }}>
              ${cpm.toFixed(2)}
            </div>
          </div>
          <div className="rounded-xl p-2.5" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[7px] uppercase tracking-wider mb-1" style={{ color: '#5a7a9a' }}>Engagement</div>
            <div className="text-sm font-bold" style={{ color: engagementScore > 70 ? '#22C55E' : engagementScore > 40 ? '#FFB020' : '#ff6b6b', fontFamily: "'Work Sans', sans-serif" }}>
              {engagementScore}%
            </div>
          </div>
          <div className="rounded-xl p-2.5" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[7px] uppercase tracking-wider mb-1" style={{ color: '#5a7a9a' }}>Dwell</div>
            <div className="text-sm font-bold text-white" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              {dwell}m
            </div>
          </div>
        </div>

        {/* Attendance bar */}
        <div className="rounded-xl p-2.5" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] uppercase tracking-wider" style={{ color: '#5a7a9a' }}>Attendance</span>
            <span className="text-[10px] font-semibold text-white">{attendance.toLocaleString()} / {capacity.toLocaleString()}</span>
          </div>
          <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full rounded-full transition-all duration-700" style={{
              width: `${crowdMultiplier[crowdMode] * 100}%`,
              background: 'linear-gradient(90deg, #0A52EF, #03B8FF)',
            }} />
          </div>
        </div>
      </div>

      {/* Sponsor Share of Voice */}
      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          Sponsor Share of Voice
        </div>

        {topSponsors.length === 0 ? (
          <div className="text-[10px] text-center py-3" style={{ color: '#4a6a8a' }}>
            No sponsors assigned
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {topSponsors.map(({ sponsor, sov }) => (
              <div key={sponsor.id} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: sponsor.color }} />
                <span className="text-[10px] font-medium text-white flex-1 truncate">{sponsor.name}</span>
                <div className="w-20 h-1.5 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: `${sov}%`, background: sponsor.color }} />
                </div>
                <span className="text-[9px] font-semibold w-8 text-right" style={{ color: '#7d93ab' }}>{sov}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Performance Metrics */}
      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          Venue Performance
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { label: 'Zone Utilization', value: `${Math.round(zoneCoverage * 100)}%`, color: zoneCoverage > 0.7 ? '#22C55E' : '#FFB020' },
            { label: 'Sponsor Fill Rate', value: `${Math.round((sponsoredZones.length / Math.max(activeZones.length, 1)) * 100)}%`, color: '#03B8FF' },
            { label: 'Total Display Area', value: `${Math.round(activeZones.reduce((s, z) => s + z.width * z.height, 0)).toLocaleString()} sq ft`, color: '#fff' },
            { label: 'Annual Revenue Potential', value: `$${(activeZones.reduce((s, z) => s + z.pricePerSeason, 0)).toLocaleString()}`, color: '#0A52EF' },
            { label: 'Revenue per Sq Ft', value: totalArea > 0 ? `$${Math.round(activeZones.reduce((s, z) => s + z.pricePerSeason, 0) / totalArea).toLocaleString()}` : '$0', color: '#03B8FF' },
          ].map(m => (
            <div key={m.label} className="flex items-center justify-between px-2 py-1.5 rounded-lg" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <span className="text-[9px]" style={{ color: '#6888a8' }}>{m.label}</span>
              <span className="text-[10px] font-semibold" style={{ color: m.color }}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
