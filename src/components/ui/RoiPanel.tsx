import { useState } from 'react'
import { useRoiCalculation, DEFAULT_ROI_INPUTS } from '@/hooks/useRoiCalculation'
import type { RoiInputs } from '@/hooks/useRoiCalculation'

interface RoiPanelProps {
  open: boolean
}

const fmt = (n: number) => '$' + Math.round(n).toLocaleString()

function RoiInput({ label, value, onChange, prefix = '$' }: {
  label: string; value: number; onChange: (v: number) => void; prefix?: string
}) {
  return (
    <div>
      <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>{label}</label>
      <div className="flex items-center gap-1 rounded-xl px-3 h-[36px]" style={{ background: 'rgba(8,14,22,0.92)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {prefix && <span className="text-[10px]" style={{ color: '#5a7a9a' }}>{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={e => onChange(Number(e.target.value) || 0)}
          className="flex-1 bg-transparent text-white text-[12px] outline-none w-full"
        />
      </div>
    </div>
  )
}

export function RoiPanel({ open }: RoiPanelProps) {
  const [inputs, setInputs] = useState<RoiInputs>({ ...DEFAULT_ROI_INPUTS })
  const results = useRoiCalculation(inputs)

  if (!open) return null

  const update = (key: keyof RoiInputs, value: number) =>
    setInputs(prev => ({ ...prev, [key]: value }))

  return (
    <div className="absolute right-4 flex flex-col gap-3 pb-3 overflow-y-auto"
      style={{ top: '84px', width: '300px', maxHeight: 'calc(100vh - 160px)' }}>

      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          ROI Calculator
        </div>

        <div className="flex flex-col gap-2">
          <RoiInput label="Total Investment" value={inputs.projectCost} onChange={v => update('projectCost', v)} />
          <RoiInput label="Venue Capacity" value={inputs.venueCapacity} onChange={v => update('venueCapacity', v)} prefix="#" />
          <RoiInput label="Events per Year" value={inputs.eventsPerYear} onChange={v => update('eventsPerYear', v)} prefix="#" />
          <RoiInput label="Ad Rate (CPM)" value={inputs.adCpmRate} onChange={v => update('adCpmRate', v)} />
          <RoiInput label="Sponsor Packages" value={inputs.sponsorPackages} onChange={v => update('sponsorPackages', v)} prefix="#" />
          <RoiInput label="Avg Package Price" value={inputs.avgSponsorRate} onChange={v => update('avgSponsorRate', v)} />
        </div>
      </div>

      <div className="anc-panel rounded-2xl p-4">
        <div className="text-[10px] uppercase tracking-[2px] mb-3" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          Annual Revenue Projection
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-xl p-3" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] uppercase tracking-[1px] mb-1" style={{ color: '#5a7a9a' }}>Ad Revenue</div>
            <div className="text-sm font-bold" style={{ color: '#03B8FF' }}>{fmt(results.annualAdRevenue)}</div>
          </div>
          <div className="rounded-xl p-3" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] uppercase tracking-[1px] mb-1" style={{ color: '#5a7a9a' }}>Sponsor Rev</div>
            <div className="text-sm font-bold" style={{ color: '#0A52EF' }}>{fmt(results.annualSponsorRevenue)}</div>
          </div>
        </div>

        <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(10,82,239,0.08)', border: '1px solid rgba(10,82,239,0.2)' }}>
          <div className="text-[9px] uppercase tracking-[1px] mb-1" style={{ color: '#5a7a9a' }}>Total Annual Revenue</div>
          <div className="text-xl font-bold text-white">{fmt(results.totalAnnualRevenue)}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-xl p-3" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] uppercase tracking-[1px] mb-1" style={{ color: '#5a7a9a' }}>Break-Even</div>
            <div className="text-sm font-bold" style={{ color: results.paybackMonths <= 24 ? '#0A52EF' : results.paybackMonths <= 36 ? '#FFB020' : '#ff6b6b' }}>
              {results.paybackMonths} months
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] uppercase tracking-[1px] mb-1" style={{ color: '#5a7a9a' }}>5-Year Profit</div>
            <div className="text-sm font-bold" style={{ color: results.fiveYearProfit > 0 ? '#0A52EF' : '#ff6b6b' }}>
              {fmt(results.fiveYearProfit)}
            </div>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[2px] mb-2" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
          Year-by-Year
        </div>
        <div className="flex flex-col gap-1">
          {results.yearlyBreakdown.map(y => (
            <div key={y.year} className="flex items-center justify-between text-[10px] px-2 py-1.5 rounded-lg"
              style={{ background: 'rgba(8,14,22,0.9)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ color: '#6888a8' }}>Year {y.year}</span>
              <span className="font-semibold" style={{ color: y.profit > 0 ? '#0A52EF' : '#ff6b6b' }}>
                {fmt(y.profit)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
