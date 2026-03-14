import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVenueStore } from '@/stores/venueStore'
import { presets } from '@/data/presets'
import { venues } from '@/data/venues'

interface PresentationModeProps {
  active: boolean
  onExit: () => void
}

// Cinematic camera positions per venue
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

// Presentation scenarios — what a sales rep would click
const scenarios = [
  { id: 'gameday', label: 'Game Day', preset: 'scores', description: 'Live scores and stats across all displays' },
  { id: 'sponsors', label: 'Sponsors', preset: 'logos', description: 'All sponsor logos front and center' },
  { id: 'halftime', label: 'Halftime', preset: 'halftime', description: 'Dynamic animations and energy' },
  { id: 'dark', label: 'Lights Out', preset: 'alloff', description: 'Venue without LED — the before picture' },
  { id: 'full', label: 'Full Package', preset: 'allon', description: 'Every zone lit up and active' },
]

export function PresentationMode({ active, onExit }: PresentationModeProps) {
  const venueType = useVenueStore(s => s.venueType)
  const setTargetCamera = useVenueStore(s => s.setTargetCamera)
  const applyPreset = useVenueStore(s => s.applyPreset)
  const getRevenue = useVenueStore(s => s.getRevenue)
  const zones = useVenueStore(s => s.zones)
  const setVenueType = useVenueStore(s => s.setVenueType)

  const [activeScenario, setActiveScenario] = useState('full')
  const [activeShotIdx, setActiveShotIdx] = useState(0)
  const [autoRotate, setAutoRotate] = useState(false)
  const [showRevenue, setShowRevenue] = useState(true)
  const autoRotateRef = useRef<number>()
  const revenue = getRevenue()
  const shots = cameraShots[venueType] || cameraShots.nfl

  // Auto-rotate camera
  useEffect(() => {
    if (!active || !autoRotate) {
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
  }, [active, autoRotate, setTargetCamera])

  const handleScenario = useCallback((id: string) => {
    const scenario = scenarios.find(s => s.id === id)
    if (!scenario) return
    setActiveScenario(id)
    applyPreset(scenario.preset)
  }, [applyPreset])

  const handleShot = useCallback((idx: number) => {
    setActiveShotIdx(idx)
    const shot = shots[idx]
    if (shot) setTargetCamera(shot)
  }, [shots, setTargetCamera])

  // Keyboard shortcuts
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExit()
      if (e.key === 'r' || e.key === 'R') setAutoRotate(r => !r)
      if (e.key === 's' || e.key === 'S') setShowRevenue(r => !r)
      // Number keys for scenarios
      const num = parseInt(e.key)
      if (num >= 1 && num <= scenarios.length) handleScenario(scenarios[num - 1].id)
      // Arrow keys for camera shots
      if (e.key === 'ArrowRight') handleShot((activeShotIdx + 1) % shots.length)
      if (e.key === 'ArrowLeft') handleShot((activeShotIdx - 1 + shots.length) % shots.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, onExit, handleScenario, handleShot, activeShotIdx, shots.length])

  if (!active) return null

  const activeCount = zones.filter(z => z.enabled).length

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-30 pointer-events-none"
      >
        {/* Top bar — minimal branding */}
        <motion.div
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          className="absolute top-0 left-0 right-0 pointer-events-auto"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img src="/anc-logo-white.png" alt="ANC" className="h-7 object-contain opacity-80" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  Venue Vision
                </div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">
                  {venues.find(v => v.id === venueType)?.name || 'Venue'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Venue switcher — compact */}
              <div className="flex gap-1">
                {venues.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setVenueType(v.id)}
                    className="px-2.5 py-1 rounded-lg text-[9px] uppercase font-semibold transition-all"
                    style={{
                      background: venueType === v.id ? 'rgba(10,82,239,0.3)' : 'rgba(255,255,255,0.06)',
                      color: venueType === v.id ? '#fff' : 'rgba(255,255,255,0.4)',
                      border: venueType === v.id ? '1px solid rgba(10,82,239,0.4)' : '1px solid transparent',
                    }}
                  >
                    {v.id}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setAutoRotate(r => !r)}
                className="px-3 py-1.5 rounded-lg text-[9px] uppercase font-semibold transition-all"
                style={{
                  background: autoRotate ? 'rgba(10,82,239,0.25)' : 'rgba(255,255,255,0.06)',
                  color: autoRotate ? '#fff' : 'rgba(255,255,255,0.4)',
                }}
              >
                {autoRotate ? 'Stop Rotate' : 'Auto Rotate'}
              </button>

              <button
                onClick={onExit}
                className="px-3 py-1.5 rounded-lg text-[9px] uppercase font-semibold text-white/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                Exit · ESC
              </button>
            </div>
          </div>
        </motion.div>

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
                background: 'rgba(0,5,15,0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.06)',
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

        {/* Bottom control bar */}
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          className="absolute bottom-0 left-0 right-0 pointer-events-auto"
        >
          <div className="flex items-end justify-between px-6 pb-6">
            {/* Scenario buttons */}
            <div className="flex gap-2">
              {scenarios.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => handleScenario(s.id)}
                  className="group relative rounded-xl px-4 py-3 text-left transition-all"
                  style={{
                    background: activeScenario === s.id ? 'rgba(10,82,239,0.2)' : 'rgba(0,5,15,0.6)',
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${activeScenario === s.id ? 'rgba(10,82,239,0.35)' : 'rgba(255,255,255,0.06)'}`,
                    minWidth: '110px',
                  }}
                >
                  <div className="text-[11px] font-semibold text-white uppercase" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    {s.label}
                  </div>
                  <div className="text-[8px] mt-0.5 text-white/35">{s.description}</div>
                  <div className="absolute top-1 right-2 text-[8px] text-white/20">{i + 1}</div>
                </button>
              ))}
            </div>

            {/* Camera shots */}
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

          {/* Keyboard hints */}
          <div className="text-center pb-3">
            <span className="text-[8px] text-white/15 tracking-wider">
              1-5 Scenarios · Arrow keys Camera · R Rotate · S Revenue · ESC Exit
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
