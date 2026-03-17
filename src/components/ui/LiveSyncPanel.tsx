import { useState, useEffect, useRef } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { fireLiveSyncTrigger, setLiveGameData, getLiveGameData } from '@/utils/ledRenderer'
import { getSponsor } from '@/data/sponsors'
import type { LiveSyncTrigger } from '@/types'

interface LiveSyncPanelProps {
  open: boolean
}

const triggers: { type: LiveSyncTrigger; label: string; color: string; description: string }[] = [
  { type: 'touchdown', label: 'TOUCHDOWN', color: '#C8102E', description: 'Synchronized celebration across all displays' },
  { type: 'goal', label: 'GOAL', color: '#0066CC', description: 'Arena-wide goal celebration sequence' },
  { type: 'sponsor-takeover', label: 'SPONSOR TAKEOVER', color: '#0A52EF', description: 'Full venue sponsor activation' },
  { type: 'timeout', label: 'TIMEOUT', color: '#5a7a9a', description: 'Commercial break with sponsor rotation' },
  { type: 'halftime-show', label: 'HALFTIME', color: '#9333EA', description: 'Dynamic entertainment visuals' },
  { type: 'weather-alert', label: 'WEATHER ALERT', color: '#D97706', description: 'Venue-wide weather notification' },
  { type: 'emergency', label: 'EMERGENCY', color: '#DC2626', description: 'Emergency evacuation messaging' },
]

export function LiveSyncPanel({ open }: LiveSyncPanelProps) {
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const [activeTriggerId, setActiveTriggerId] = useState<string | null>(null)
  const [selectedSponsor, setSelectedSponsor] = useState('nike')
  const [liveScore, setLiveScore] = useState(() => getLiveGameData())
  const scoreInterval = useRef<ReturnType<typeof setInterval>>()
  const [dataFeedActive, setDataFeedActive] = useState(false)

  // Simulated live data feed
  useEffect(() => {
    if (!dataFeedActive) {
      if (scoreInterval.current) clearInterval(scoreInterval.current)
      return
    }

    scoreInterval.current = setInterval(() => {
      const data = getLiveGameData()
      const rand = Math.random()

      // Simulate clock ticking
      const [min, sec] = data.clock.split(':').map(Number)
      let newSec = sec - Math.floor(Math.random() * 15 + 5)
      let newMin = min
      if (newSec < 0) { newSec += 60; newMin-- }
      if (newMin < 0) { newMin = 15; }
      const newClock = `${newMin}:${String(Math.max(0, newSec)).padStart(2, '0')}`

      const updates: Partial<typeof data> = { clock: newClock }

      // Occasional score change
      if (rand > 0.85) {
        if (Math.random() > 0.5) {
          updates.homeScore = data.homeScore + (Math.random() > 0.5 ? 7 : 3)
        } else {
          updates.awayScore = data.awayScore + (Math.random() > 0.5 ? 7 : 3)
        }
      }

      // Occasional down change
      if (rand > 0.4) {
        const downs = ['1st & 10', '2nd & 8', '2nd & 3', '3rd & 7', '3rd & 1', '4th & 2']
        updates.down = downs[Math.floor(Math.random() * downs.length)]
      }

      setLiveGameData(updates)
      setLiveScore({ ...data, ...updates })
    }, 4000)

    return () => { if (scoreInterval.current) clearInterval(scoreInterval.current) }
  }, [dataFeedActive])

  const handleTrigger = (type: LiveSyncTrigger) => {
    const sponsor = sponsors.find(s => s.id === selectedSponsor) ?? getSponsor('none')
    fireLiveSyncTrigger(type, sponsor)
    setActiveTriggerId(type)
    const duration = type === 'halftime-show' ? 10000 : type === 'sponsor-takeover' ? 8000 : type === 'emergency' ? 12000 : 6000
    setTimeout(() => setActiveTriggerId(null), duration)
  }

  const activeZones = zones.filter(z => z.enabled).length

  if (!open) return null

  return (
    <div className="absolute left-4 flex flex-col gap-3 pb-3 overflow-y-auto"
      style={{ top: '84px', width: '286px', maxHeight: 'calc(100vh - 160px)' }}>

      {/* LiveSync Header */}
      <div className="anc-panel rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] uppercase tracking-[2px] mb-0.5" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
              LiveSync
            </div>
            <div className="text-[9px]" style={{ color: '#4a6a8a' }}>
              Synchronized display control
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: activeTriggerId ? '#22C55E' : '#0A52EF', boxShadow: activeTriggerId ? '0 0 8px #22C55E' : 'none' }} />
            <span className="text-[9px] font-medium" style={{ color: activeTriggerId ? '#22C55E' : '#7d93ab' }}>
              {activeTriggerId ? 'ACTIVE' : `${activeZones} zones linked`}
            </span>
          </div>
        </div>

        {/* Sponsor selector for triggers */}
        <div className="mb-3">
          <label className="block text-[8px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Trigger Sponsor</label>
          <select
            value={selectedSponsor}
            onChange={e => setSelectedSponsor(e.target.value)}
            className="w-full h-[32px] rounded-xl px-3 text-[11px] text-white outline-none"
            style={{ background: 'rgba(8,14,22,0.92)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {sponsors.filter(s => s.id !== 'none').map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {/* Trigger buttons */}
        <div className="flex flex-col gap-1.5">
          {triggers.map(t => (
            <button
              key={t.type}
              onClick={() => handleTrigger(t.type)}
              disabled={activeTriggerId !== null}
              className="w-full text-left rounded-xl px-3 py-2.5 transition-all cursor-pointer"
              style={{
                background: activeTriggerId === t.type
                  ? `${t.color}30`
                  : 'rgba(8,14,22,0.88)',
                border: `1px solid ${activeTriggerId === t.type ? `${t.color}60` : 'rgba(255,255,255,0.05)'}`,
                opacity: activeTriggerId !== null && activeTriggerId !== t.type ? 0.4 : 1,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: t.color }} />
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#f4fbff', fontFamily: "'Work Sans', sans-serif" }}>
                    {t.label}
                  </span>
                </div>
                {activeTriggerId === t.type && (
                  <span className="text-[8px] font-medium uppercase tracking-wider animate-pulse" style={{ color: t.color }}>
                    LIVE
                  </span>
                )}
              </div>
              <div className="text-[8px] mt-0.5 pl-[18px]" style={{ color: '#5a7a9a' }}>
                {t.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Live Data Feeds */}
      <div className="anc-panel rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] uppercase tracking-[2px]" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
            Data Feeds
          </div>
          <button
            onClick={() => setDataFeedActive(a => !a)}
            className={`anc-mini-switch flex-shrink-0 ${dataFeedActive ? 'anc-mini-switch--on' : ''}`}
          >
            <span />
          </button>
        </div>

        {/* Live Score */}
        <div className="rounded-xl p-3 mb-2" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] uppercase tracking-wider" style={{ color: '#5a7a9a' }}>Live Score</span>
            {dataFeedActive && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[7px] uppercase" style={{ color: '#22C55E' }}>LIVE</span>
              </span>
            )}
          </div>
          <div className="flex items-center justify-center gap-3 text-white">
            <span className="text-[13px] font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>{liveScore.homeTeam}</span>
            <span className="text-[18px] font-bold" style={{ color: '#FFD700', fontFamily: "'Work Sans', sans-serif" }}>{liveScore.homeScore}</span>
            <span className="text-[10px]" style={{ color: '#5a7a9a' }}>—</span>
            <span className="text-[18px] font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>{liveScore.awayScore}</span>
            <span className="text-[13px] font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>{liveScore.awayTeam}</span>
          </div>
          <div className="text-center text-[9px] mt-1" style={{ color: '#5a7a9a' }}>
            Q{liveScore.quarter} · {liveScore.clock} · {liveScore.down}
          </div>
        </div>

        {/* Weather + Betting */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl p-2.5" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[7px] uppercase tracking-wider mb-1" style={{ color: '#5a7a9a' }}>Weather</div>
            <div className="text-[12px] font-semibold text-white">{liveScore.weather.icon} {liveScore.weather.temp}°F</div>
            <div className="text-[8px]" style={{ color: '#5a7a9a' }}>{liveScore.weather.condition}</div>
          </div>
          <div className="rounded-xl p-2.5" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[7px] uppercase tracking-wider mb-1" style={{ color: '#5a7a9a' }}>Lines</div>
            <div className="text-[11px] font-semibold text-white">{liveScore.betting.spread}</div>
            <div className="text-[8px]" style={{ color: '#5a7a9a' }}>O/U {liveScore.betting.overUnder}</div>
          </div>
        </div>
      </div>

      {/* Content Schedule */}
      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          Program Schedule
        </div>
        <div className="flex flex-col gap-1">
          {[
            { time: '5:00 PM', label: 'Gates Open', content: 'Welcome + Wayfinding', active: false },
            { time: '6:30 PM', label: 'Pre-Game', content: 'Sponsor Logos + Countdown', active: false },
            { time: '7:00 PM', label: 'Kickoff', content: 'Live Scores + Replays', active: true },
            { time: '7:45 PM', label: 'Halftime', content: 'Entertainment + Sponsors', active: false },
            { time: '8:30 PM', label: '2nd Half', content: 'Scores + Dynamic Ads', active: false },
            { time: '10:00 PM', label: 'Post-Game', content: 'Final Stats + Sponsor', active: false },
          ].map(item => (
            <div key={item.time} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg" style={{
              background: item.active ? 'rgba(10,82,239,0.08)' : 'transparent',
              border: item.active ? '1px solid rgba(10,82,239,0.15)' : '1px solid transparent',
            }}>
              <span className="text-[9px] font-medium w-[52px] flex-shrink-0" style={{ color: item.active ? '#0A52EF' : '#5a7a9a' }}>
                {item.time}
              </span>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.active ? '#0A52EF' : '#2a3a4a' }} />
              <div className="min-w-0">
                <div className="text-[9px] font-medium truncate" style={{ color: item.active ? '#fff' : '#8aa0b8' }}>{item.label}</div>
                <div className="text-[7px] truncate" style={{ color: '#4a6a8a' }}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
