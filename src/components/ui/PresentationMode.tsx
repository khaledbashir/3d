import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVenueStore } from '@/stores/venueStore'
import { venues } from '@/data/venues'
import { setClientLogoForRenderer, fireLiveSyncTrigger } from '@/utils/ledRenderer'
import type { VenueType, LiveSyncTrigger } from '@/types'

interface PresentationModeProps {
  active: boolean
  onExit: () => void
}

const cameraShots: Record<string, { angle: number; pitch: number; distance: number; label: string }[]> = {
  nfl: [
    { angle: 0.3, pitch: 0.4, distance: 250, label: 'Overview' },
    { angle: 0, pitch: 0.15, distance: 120, label: 'Field Level' },
    { angle: Math.PI / 2, pitch: 0.3, distance: 180, label: 'Sideline' },
    { angle: -0.5, pitch: 0.6, distance: 140, label: 'Scoreboard' },
    { angle: Math.PI, pitch: 0.25, distance: 200, label: 'Endzone' },
    { angle: 0.8, pitch: 0.5, distance: 100, label: 'Close Up' },
  ],
  nba: [
    { angle: 0.3, pitch: 0.45, distance: 80, label: 'Overview' },
    { angle: 0, pitch: 0.12, distance: 45, label: 'Courtside' },
    { angle: Math.PI / 2, pitch: 0.25, distance: 60, label: 'Camera Side' },
    { angle: -0.4, pitch: 0.55, distance: 55, label: 'Scoreboard' },
    { angle: Math.PI, pitch: 0.2, distance: 70, label: 'Baseline' },
    { angle: 1.2, pitch: 0.35, distance: 40, label: 'Close Up' },
  ],
  mall: [
    { angle: 0.3, pitch: 0.4, distance: 80, label: 'Overview' },
    { angle: 0, pitch: 0.15, distance: 50, label: 'Ground Level' },
    { angle: Math.PI / 2, pitch: 0.3, distance: 60, label: 'Side View' },
    { angle: -0.5, pitch: 0.5, distance: 40, label: 'Main Wall' },
  ],
  transit: [
    { angle: 0.3, pitch: 0.4, distance: 80, label: 'Overview' },
    { angle: 0, pitch: 0.1, distance: 45, label: 'Platform' },
    { angle: Math.PI / 2, pitch: 0.25, distance: 55, label: 'Side View' },
    { angle: -0.3, pitch: 0.5, distance: 35, label: 'Main Board' },
  ],
}

const scenarios = [
  { id: 'gameday', label: 'Game Day', preset: 'scores', description: 'Live scores on all displays' },
  { id: 'sponsors', label: 'Sponsors', preset: 'logos', description: 'Sponsor logos front and center' },
  { id: 'halftime', label: 'Halftime', preset: 'halftime', description: 'Dynamic energy and animations' },
  { id: 'dark', label: 'Before', preset: 'alloff', description: 'Venue without LED screens' },
  { id: 'full', label: 'Full Build', preset: 'allon', description: 'Every zone active' },
]

const packages = [
  { id: 'budget' as const, label: 'Budget', description: 'Scoreboards only', color: '#5a7a9a' },
  { id: 'standard' as const, label: 'Standard', description: 'Boards + ribbons + fascia', color: '#03B8FF' },
  { id: 'premium' as const, label: 'Premium', description: 'Full venue coverage', color: '#0A52EF' },
]

const liveSyncTriggers: { type: LiveSyncTrigger; label: string; color: string; key: string }[] = [
  { type: 'touchdown', label: 'TD!', color: '#C8102E', key: 'T' },
  { type: 'goal', label: 'GOAL', color: '#0066CC', key: 'G' },
  { type: 'sponsor-takeover', label: 'SPONSOR', color: '#0A52EF', key: 'X' },
  { type: 'timeout', label: 'T/O', color: '#5a7a9a', key: 'O' },
  { type: 'halftime-show', label: 'SHOW', color: '#9333EA', key: 'H' },
]

export function PresentationMode({ active, onExit }: PresentationModeProps) {
  const venueType = useVenueStore(s => s.venueType)
  const setTargetCamera = useVenueStore(s => s.setTargetCamera)
  const applyPreset = useVenueStore(s => s.applyPreset)
  const applyPackage = useVenueStore(s => s.applyPackage)
  const getRevenue = useVenueStore(s => s.getRevenue)
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const setVenueType = useVenueStore(s => s.setVenueType)
  const clientLogo = useVenueStore(s => s.clientLogo)
  const clientName = useVenueStore(s => s.clientName)
  const setClientLogo = useVenueStore(s => s.setClientLogo)
  const setClientName = useVenueStore(s => s.setClientName)

  const [activeScenario, setActiveScenario] = useState('full')
  const [activePackage, setActivePackage] = useState<string | null>(null)
  const [activeShotIdx, setActiveShotIdx] = useState(0)
  const [autoRotate, setAutoRotate] = useState(false)
  const [flythrough, setFlythrough] = useState(false)
  const [showRevenue, setShowRevenue] = useState(true)
  const [showBranding, setShowBranding] = useState(false)
  const [activeTrigger, setActiveTrigger] = useState<string | null>(null)
  const autoRotateRef = useRef<number>()
  const flythroughRef = useRef<{ shotIdx: number; timer: number }>({ shotIdx: 0, timer: 0 })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const revenue = getRevenue()
  const shots = cameraShots[venueType] || cameraShots.nfl
  const activeCount = zones.filter(z => z.enabled).length

  useEffect(() => {
    setClientLogoForRenderer(clientLogo)
  }, [clientLogo])

  useEffect(() => {
    if (!active || !autoRotate || flythrough) {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current)
      return
    }
    let angle = useVenueStore.getState().targetCamera.angle
    const tick = () => {
      angle += 0.003
      setTargetCamera({ angle })
      autoRotateRef.current = requestAnimationFrame(tick)
    }
    autoRotateRef.current = requestAnimationFrame(tick)
    return () => { if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current) }
  }, [active, autoRotate, flythrough, setTargetCamera])

  useEffect(() => {
    if (!active || !flythrough) return
    const ref = flythroughRef.current
    ref.shotIdx = 0

    const shot = shots[0]
    if (shot) setTargetCamera(shot)
    setActiveShotIdx(0)

    const interval = setInterval(() => {
      ref.shotIdx = (ref.shotIdx + 1) % shots.length
      const nextShot = shots[ref.shotIdx]
      if (nextShot) {
        setTargetCamera(nextShot)
        setActiveShotIdx(ref.shotIdx)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [active, flythrough, shots, setTargetCamera])

  const handleScenario = useCallback((id: string) => {
    const scenario = scenarios.find(s => s.id === id)
    if (!scenario) return
    setActiveScenario(id)
    setActivePackage(null)
    applyPreset(scenario.preset)
  }, [applyPreset])

  const handlePackage = useCallback((tier: 'budget' | 'standard' | 'premium') => {
    setActivePackage(tier)
    setActiveScenario('')
    applyPackage(tier)
  }, [applyPackage])

  const handleShot = useCallback((idx: number) => {
    setActiveShotIdx(idx)
    setFlythrough(false)
    const shot = shots[idx]
    if (shot) setTargetCamera(shot)
  }, [shots, setTargetCamera])

  const handleTrigger = useCallback((type: LiveSyncTrigger) => {
    if (activeTrigger) return
    const sponsor = sponsors.find(s => s.id !== 'none')
    fireLiveSyncTrigger(type, sponsor)
    setActiveTrigger(type)
    const duration = type === 'halftime-show' ? 10000 : type === 'sponsor-takeover' ? 8000 : 6000
    setTimeout(() => setActiveTrigger(null), duration)
  }, [activeTrigger, sponsors])

  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const url = ev.target?.result as string
      if (url) setClientLogo(url)
    }
    reader.readAsDataURL(file)
  }, [setClientLogo])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExit()
      if (e.key === 'r' || e.key === 'R') setAutoRotate(r => !r)
      if (e.key === 's' || e.key === 'S') setShowRevenue(r => !r)
      if (e.key === 'f' || e.key === 'F') setFlythrough(f => !f)
      if (e.key === 'b' || e.key === 'B') setShowBranding(b => !b)
      if (e.key === 't' || e.key === 'T') handleTrigger('touchdown')
      if (e.key === 'g' || e.key === 'G') handleTrigger('goal')
      if (e.key === 'x' || e.key === 'X') handleTrigger('sponsor-takeover')
      const num = parseInt(e.key)
      if (num >= 1 && num <= scenarios.length) handleScenario(scenarios[num - 1].id)
      if (e.key === 'ArrowRight') handleShot((activeShotIdx + 1) % shots.length)
      if (e.key === 'ArrowLeft') handleShot((activeShotIdx - 1 + shots.length) % shots.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, onExit, handleScenario, handleShot, handleTrigger, activeShotIdx, shots.length])

  if (!active) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-30 pointer-events-none"
      >
        {/* Top bar */}
        <motion.div initial={{ y: -60 }} animate={{ y: 0 }} className="absolute top-0 left-0 right-0 pointer-events-auto">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img src="/anc-logo-white.png" alt="ANC" className="h-7 object-contain opacity-80" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {clientName || 'ANC Venue Vision'}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">
                  {venues.find(v => v.id === venueType)?.name || 'Venue'}
                </div>
              </div>
              {clientLogo && (
                <img src={clientLogo} alt="" className="h-6 object-contain opacity-70 ml-2" />
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Venue switcher */}
              <div className="flex gap-1">
                {venues.map(v => (
                  <button key={v.id} onClick={() => setVenueType(v.id)}
                    className="px-2.5 py-1 rounded-lg text-[9px] uppercase font-semibold transition-all"
                    style={{
                      background: venueType === v.id ? 'rgba(10,82,239,0.3)' : 'rgba(255,255,255,0.06)',
                      color: venueType === v.id ? '#fff' : 'rgba(255,255,255,0.4)',
                      border: venueType === v.id ? '1px solid rgba(10,82,239,0.4)' : '1px solid transparent',
                    }}>
                    {v.id}
                  </button>
                ))}
              </div>

              <span className="w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />

              <button onClick={() => setShowBranding(b => !b)}
                className="px-3 py-1.5 rounded-lg text-[9px] uppercase font-semibold transition-all"
                style={{ background: showBranding ? 'rgba(10,82,239,0.25)' : 'rgba(255,255,255,0.06)', color: showBranding ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                Client
              </button>

              <button onClick={() => setFlythrough(f => !f)}
                className="px-3 py-1.5 rounded-lg text-[9px] uppercase font-semibold transition-all"
                style={{ background: flythrough ? 'rgba(10,82,239,0.25)' : 'rgba(255,255,255,0.06)', color: flythrough ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                {flythrough ? 'Stop Tour' : 'Tour'}
              </button>

              <button onClick={() => setAutoRotate(r => !r)}
                className="px-3 py-1.5 rounded-lg text-[9px] uppercase font-semibold transition-all"
                style={{ background: autoRotate ? 'rgba(10,82,239,0.25)' : 'rgba(255,255,255,0.06)', color: autoRotate ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                Rotate
              </button>

              <button onClick={onExit}
                className="px-3 py-1.5 rounded-lg text-[9px] uppercase font-semibold text-white/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.06)' }}>
                Exit
              </button>
            </div>
          </div>
        </motion.div>

        {/* Client branding panel */}
        <AnimatePresence>
          {showBranding && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute top-20 left-6 pointer-events-auto"
            >
              <div className="rounded-2xl px-4 py-4 w-[220px]" style={{
                background: 'rgba(0,5,15,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div className="text-[8px] uppercase tracking-[3px] mb-3 text-white/30">Client Branding</div>

                <input
                  type="text"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                  placeholder="Client name..."
                  className="w-full h-[32px] rounded-lg px-2.5 text-[11px] text-white outline-none mb-2"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                />

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full rounded-lg px-2.5 py-2 text-[10px] text-center transition-all cursor-pointer"
                  style={{
                    background: clientLogo ? 'rgba(10,82,239,0.15)' : 'rgba(255,255,255,0.04)',
                    border: `1px dashed ${clientLogo ? 'rgba(10,82,239,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    color: clientLogo ? '#0A52EF' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {clientLogo ? (
                    <div className="flex items-center justify-center gap-2">
                      <img src={clientLogo} alt="" className="h-4 object-contain" />
                      <span>Change Logo</span>
                    </div>
                  ) : (
                    'Upload Client Logo'
                  )}
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />

                {clientLogo && (
                  <button
                    onClick={() => setClientLogo(null)}
                    className="w-full mt-1.5 text-[9px] py-1 text-white/30 transition-all hover:text-white/50"
                  >
                    Remove logo
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revenue overlay */}
        <AnimatePresence>
          {showRevenue && activeScenario !== 'dark' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-20 right-6 pointer-events-none"
            >
              <div className="rounded-2xl px-5 py-4" style={{
                background: 'rgba(0,5,15,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div className="text-[8px] uppercase tracking-[3px] mb-2 text-white/30">Revenue Impact</div>
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Work Sans', sans-serif", letterSpacing: '-0.03em' }}>
                  ${revenue.perSeason.toLocaleString()}
                </div>
                <div className="text-[10px] text-white/40 mt-0.5">per season · {activeCount} zones active</div>
                <div className="flex gap-4 mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div>
                    <div className="text-[8px] uppercase tracking-wider text-white/30">Per Game</div>
                    <div className="text-sm font-semibold" style={{ color: '#03B8FF' }}>${revenue.perGame.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[8px] uppercase tracking-wider text-white/30">Coverage</div>
                    <div className="text-sm font-semibold" style={{ color: '#0A52EF' }}>{revenue.occupancy}%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom controls */}
        <motion.div initial={{ y: 80 }} animate={{ y: 0 }} className="absolute bottom-0 left-0 right-0 pointer-events-auto">
          <div className="flex items-end justify-between px-6 pb-5">
            {/* Left: LiveSync triggers + Scenarios + Packages */}
            <div className="flex flex-col gap-2">
              {/* LiveSync triggers — the showstopper */}
              <div className="flex gap-1.5">
                <div className="rounded-lg px-2 py-1.5 text-[7px] uppercase tracking-wider font-bold flex items-center"
                  style={{ color: activeTrigger ? '#22C55E' : 'rgba(255,255,255,0.25)' }}>
                  LiveSync
                </div>
                {liveSyncTriggers.map(t => (
                  <button
                    key={t.type}
                    onClick={() => handleTrigger(t.type)}
                    disabled={activeTrigger !== null}
                    className="rounded-lg px-3 py-2 transition-all"
                    style={{
                      background: activeTrigger === t.type ? `${t.color}40` : 'rgba(0,5,15,0.6)',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${activeTrigger === t.type ? `${t.color}70` : 'rgba(255,255,255,0.06)'}`,
                      opacity: activeTrigger && activeTrigger !== t.type ? 0.3 : 1,
                    }}
                  >
                    <div className="text-[10px] font-bold uppercase" style={{
                      color: activeTrigger === t.type ? '#fff' : 'rgba(255,255,255,0.6)',
                      fontFamily: "'Work Sans', sans-serif",
                    }}>
                      {t.label}
                    </div>
                    <div className="text-[6px] text-white/20 text-center mt-0.5">{t.key}</div>
                  </button>
                ))}
              </div>

              {/* Package tiers */}
              <div className="flex gap-1.5">
                {packages.map(pkg => (
                  <button
                    key={pkg.id}
                    onClick={() => handlePackage(pkg.id)}
                    className="rounded-lg px-3 py-2 transition-all"
                    style={{
                      background: activePackage === pkg.id ? `${pkg.color}22` : 'rgba(0,5,15,0.5)',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${activePackage === pkg.id ? `${pkg.color}55` : 'rgba(255,255,255,0.04)'}`,
                    }}
                  >
                    <div className="text-[10px] font-semibold uppercase" style={{ color: activePackage === pkg.id ? pkg.color : 'rgba(255,255,255,0.5)', fontFamily: "'Work Sans', sans-serif" }}>
                      {pkg.label}
                    </div>
                    <div className="text-[7px] text-white/25">{pkg.description}</div>
                  </button>
                ))}
              </div>

              {/* Scenarios */}
              <div className="flex gap-1.5">
                {scenarios.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => handleScenario(s.id)}
                    className="group relative rounded-xl px-4 py-2.5 text-left transition-all"
                    style={{
                      background: activeScenario === s.id ? 'rgba(10,82,239,0.2)' : 'rgba(0,5,15,0.6)',
                      backdropFilter: 'blur(16px)',
                      border: `1px solid ${activeScenario === s.id ? 'rgba(10,82,239,0.35)' : 'rgba(255,255,255,0.06)'}`,
                      minWidth: '100px',
                    }}
                  >
                    <div className="text-[10px] font-semibold text-white uppercase" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                      {s.label}
                    </div>
                    <div className="text-[7px] mt-0.5 text-white/30">{s.description}</div>
                    <div className="absolute top-1 right-1.5 text-[7px] text-white/15">{i + 1}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Camera shots */}
            <div className="flex gap-1.5">
              {shots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() => handleShot(idx)}
                  className="rounded-lg px-3 py-2 text-[9px] uppercase font-semibold transition-all"
                  style={{
                    background: activeShotIdx === idx ? 'rgba(10,82,239,0.25)' : 'rgba(0,5,15,0.5)',
                    backdropFilter: 'blur(12px)',
                    color: activeShotIdx === idx ? '#fff' : 'rgba(255,255,255,0.35)',
                    border: `1px solid ${activeShotIdx === idx ? 'rgba(10,82,239,0.3)' : 'rgba(255,255,255,0.04)'}`,
                  }}
                >
                  {shot.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pb-2.5">
            <span className="text-[7px] text-white/12 tracking-wider">
              T Touchdown · G Goal · X Sponsor · 1-5 Scenarios · Arrows Camera · F Tour · R Rotate · B Branding · S Revenue · ESC Exit
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
