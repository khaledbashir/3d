import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVenueStore } from '@/stores/venueStore'
import { venues } from '@/data/venues'
import type { VenueType } from '@/types'

interface SetupWizardProps {
  open: boolean
  onClose: () => void
}

const venueLabels: Record<VenueType, { name: string; desc: string }> = {
  nfl: { name: 'Stadium', desc: 'Football · Outdoor' },
  nba: { name: 'Arena', desc: 'Basketball · Indoor' },
  mall: { name: 'Retail', desc: 'Shopping · Commercial' },
  transit: { name: 'Transit', desc: 'Station · Public' },
}

export function SetupWizard({ open, onClose }: SetupWizardProps) {
  const [step, setStep] = useState(0)
  const venueType = useVenueStore(s => s.venueType)
  const setVenueType = useVenueStore(s => s.setVenueType)
  const zones = useVenueStore(s => s.zones)
  const setZoneEnabled = useVenueStore(s => s.setZoneEnabled)
  const setZoneSponsor = useVenueStore(s => s.setZoneSponsor)
  const sponsors = useVenueStore(s => s.sponsors)
  const getRevenue = useVenueStore(s => s.getRevenue)

  if (!open) return null

  const steps = ['Venue', 'Zones', 'Sponsors', 'Review']
  const revenue = getRevenue()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div className="relative w-[520px] max-h-[85vh] overflow-y-auto anc-panel rounded-2xl p-6">
        {/* Progress */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-[9px] uppercase tracking-wider" style={{ color: '#5a7a9a' }}>
            Step {step + 1} of {steps.length}
          </div>
          <div className="flex items-center gap-1.5">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i <= step ? '#0A52EF' : 'rgba(255,255,255,0.12)' }}
                />
                {i < steps.length - 1 && <div className="w-4 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 0 && (
              <div>
                <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>Pick Your Venue</h2>
                <p className="text-[11px] mb-4" style={{ color: '#6888a8' }}>What type of venue are you configuring?</p>
                <div className="grid grid-cols-2 gap-2">
                  {venues.map(v => {
                    const info = venueLabels[v.id]
                    return (
                      <button
                        key={v.id}
                        onClick={() => setVenueType(v.id)}
                        className="text-left rounded-xl px-4 py-3 cursor-pointer transition-all"
                        style={{
                          background: venueType === v.id ? 'rgba(10,82,239,0.12)' : 'rgba(8,14,22,0.9)',
                          border: `1px solid ${venueType === v.id ? 'rgba(10,82,239,0.3)' : 'rgba(255,255,255,0.06)'}`,
                        }}
                      >
                        <div className="text-sm font-semibold text-white">{info.name}</div>
                        <div className="text-[9px] mt-0.5" style={{ color: '#6888a8' }}>{info.desc}</div>
                        <div className="text-[8px] mt-1" style={{ color: '#5a7a9a' }}>{v.name}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>Activate Zones</h2>
                <p className="text-[11px] mb-4" style={{ color: '#6888a8' }}>Turn on the LED placements you want to include.</p>
                <div className="flex flex-col gap-2">
                  {zones.map(z => (
                    <div key={z.id} className="flex items-center justify-between rounded-xl px-3 py-2.5"
                      style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <div className="text-[12px] font-medium text-white">{z.name}</div>
                        <div className="text-[9px]" style={{ color: '#6888a8' }}>{z.type} · ${z.pricePerGame.toLocaleString()}/game</div>
                      </div>
                      <button
                        onClick={() => setZoneEnabled(z.id, !z.enabled)}
                        className={`anc-mini-switch ${z.enabled ? 'anc-mini-switch--on' : ''}`}
                      >
                        <span />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>Assign Sponsors</h2>
                <p className="text-[11px] mb-4" style={{ color: '#6888a8' }}>Choose a sponsor for each active zone.</p>
                <div className="flex flex-col gap-2">
                  {zones.filter(z => z.enabled).map(z => (
                    <div key={z.id} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5"
                      style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="text-[12px] font-medium text-white truncate min-w-0">{z.name}</span>
                      <select
                        value={z.sponsor}
                        onChange={e => setZoneSponsor(z.id, e.target.value)}
                        className="h-[32px] rounded-lg px-2 text-[11px] text-white outline-none flex-shrink-0"
                        style={{ background: 'rgba(8,14,22,0.92)', border: '1px solid rgba(255,255,255,0.06)', maxWidth: '180px' }}
                      >
                        {sponsors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      </select>
                    </div>
                  ))}
                  {zones.filter(z => z.enabled).length === 0 && (
                    <div className="text-center py-6 text-[11px]" style={{ color: '#6f88a0' }}>
                      No zones enabled. Go back and turn some on.
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>Configuration Complete</h2>
                <p className="text-[11px] mb-4" style={{ color: '#6888a8' }}>Here's your estimated revenue impact.</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="rounded-xl p-3 text-center" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-lg font-bold" style={{ color: '#0A52EF' }}>{revenue.activeCount}</div>
                    <div className="text-[9px] uppercase" style={{ color: '#5a7a9a' }}>Active Zones</div>
                  </div>
                  <div className="rounded-xl p-3 text-center" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-lg font-bold" style={{ color: '#03B8FF' }}>${revenue.perGame.toLocaleString()}</div>
                    <div className="text-[9px] uppercase" style={{ color: '#5a7a9a' }}>Per Game</div>
                  </div>
                  <div className="rounded-xl p-3 text-center" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-lg font-bold text-white">${revenue.perSeason.toLocaleString()}</div>
                    <div className="text-[9px] uppercase" style={{ color: '#5a7a9a' }}>Per Season</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {step > 0 ? (
            <button onClick={() => setStep(s => s - 1)} className="anc-toolbar-button">Back</button>
          ) : (
            <button onClick={onClose} className="anc-toolbar-button">Skip Setup</button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              className="px-4 py-2 rounded-xl text-sm font-semibold uppercase transition-all"
              style={{ background: '#0A52EF', color: '#fff', fontFamily: "'Work Sans', sans-serif" }}
            >
              Next
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold uppercase transition-all"
              style={{ background: '#0A52EF', color: '#fff', fontFamily: "'Work Sans', sans-serif" }}
            >
              Start Exploring
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
