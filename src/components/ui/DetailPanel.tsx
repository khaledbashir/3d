import { useState } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { products } from '@/data/products'
import { LogoUpload } from './LogoUpload'
import { ProductBrowser } from './ProductBrowser'
import { calculateCabinetLayout } from '@/utils/cabinetLayout'
import type { ContentType } from '@/types'

const contentOptions: { value: ContentType; label: string }[] = [
  { value: 'logo', label: 'Sponsor Logo' },
  { value: 'ad', label: 'Scrolling Ad' },
  { value: 'score', label: 'Live Scores' },
  { value: 'replay', label: 'Instant Replay' },
  { value: 'animation', label: 'Animation' },
]

interface DetailPanelProps {
  open: boolean
  onClose: () => void
}

export function DetailPanel({ open, onClose }: DetailPanelProps) {
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const toggleZone = useVenueStore(s => s.toggleZone)
  const setZoneSponsor = useVenueStore(s => s.setZoneSponsor)
  const setZoneContent = useVenueStore(s => s.setZoneContent)
  const setZoneProduct = useVenueStore(s => s.setZoneProduct)
  const venueType = useVenueStore(s => s.venueType)
  const [browserOpen, setBrowserOpen] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)

  if (!open) return null

  const zone = zones.find(z => z.id === selectedZoneId)

  const selectStyle: React.CSSProperties = {
    width: '100%',
    height: '38px',
    background: 'rgba(8, 14, 22, 0.92)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '12px',
    padding: '0 12px',
    outline: 'none',
  }

  if (!zone) {
    return (
      <div className="absolute bottom-4 rounded-[20px] p-4 anc-detail-panel" style={{ left: '320px', right: '320px' }}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[2px] mb-1" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
              Zone Editor
            </div>
            <div className="text-base tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Click a zone in the list to configure it
            </div>
          </div>
          <button onClick={onClose} className="anc-toolbar-button">Close</button>
        </div>
      </div>
    )
  }

  const envFilter = venueType === 'nfl' ? 'outdoor' : 'indoor'
  const currentProduct = products.find(p => p.id === zone.product)
  const cabinet = currentProduct ? calculateCabinetLayout(zone.width, zone.height, currentProduct) : null

  return (
    <div className="absolute bottom-4 rounded-[20px] p-4 anc-detail-panel" style={{ left: '320px', right: '320px' }}>
      {/* Header */}
      <div className="flex justify-between items-center gap-4 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => toggleZone(zone.id)}
            className={`anc-mini-switch flex-shrink-0 ${zone.enabled ? 'anc-mini-switch--on' : ''}`}
            aria-label={`${zone.enabled ? 'Disable' : 'Enable'} ${zone.name}`}
          >
            <span />
          </button>
          <div className="min-w-0">
            <div className="text-base font-semibold truncate" style={{ fontFamily: "'Work Sans', sans-serif" }}>{zone.name}</div>
            <div className="text-[9px] uppercase tracking-wider" style={{ color: '#5a7a9a' }}>{zone.type} · {zone.width}×{zone.height} ft</div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Revenue highlight */}
          <div className="text-right">
            <div className="text-sm font-bold" style={{ color: '#0A52EF' }}>${zone.pricePerGame.toLocaleString()}</div>
            <div className="text-[8px]" style={{ color: '#5a7a9a' }}>per game</div>
          </div>
          <button onClick={onClose} className="anc-toolbar-button">Close</button>
        </div>
      </div>

      {/* Core controls — 3 columns */}
      <div className="grid grid-cols-3 gap-3">
        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Sponsor</label>
          <select value={zone.sponsor} onChange={e => setZoneSponsor(zone.id, e.target.value)} style={selectStyle}>
            {sponsors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <LogoUpload sponsorId={zone.sponsor} />
        </div>

        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Display Content</label>
          <select value={zone.content} onChange={e => setZoneContent(zone.id, e.target.value as ContentType)} style={selectStyle}>
            {contentOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>

        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>LED Product</label>
          <button
            onClick={() => setBrowserOpen(true)}
            className="w-full h-[38px] rounded-xl px-3 text-left text-[11px] text-white cursor-pointer transition-all truncate"
            style={{ background: 'rgba(8,14,22,0.92)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {currentProduct ? `${currentProduct.manufacturer} ${currentProduct.series}` : 'Choose model...'}
          </button>
          {currentProduct && (
            <div className="text-[8px] mt-1 flex items-center justify-between" style={{ color: '#5a7a9a' }}>
              <span>{currentProduct.pixelPitch}mm · {currentProduct.nits.toLocaleString()} nits</span>
              <button
                onClick={() => setShowSpecs(s => !s)}
                className="underline cursor-pointer"
                style={{ color: '#0385DD' }}
              >
                {showSpecs ? 'Hide specs' : 'More specs'}
              </button>
            </div>
          )}
          <ProductBrowser
            open={browserOpen}
            onClose={() => setBrowserOpen(false)}
            onSelect={id => setZoneProduct(zone.id, id)}
            currentProductId={zone.product}
            venueEnvironment={envFilter}
          />
        </div>
      </div>

      {/* Expandable specs */}
      {showSpecs && cabinet && (
        <div className="mt-3 grid grid-cols-4 gap-2 text-[9px]">
          {[
            { label: 'Grid', value: `${cabinet.cols}×${cabinet.rows}` },
            { label: 'Cabinets', value: cabinet.totalCabinets.toString() },
            { label: 'Resolution', value: `${cabinet.resolutionW}×${cabinet.resolutionH}` },
            { label: 'Weight', value: `${cabinet.totalWeightLbs.toLocaleString()} lbs` },
            { label: 'Power', value: `${(cabinet.totalPowerW / 1000).toFixed(1)} kW` },
            { label: 'Heat Load', value: `${cabinet.heatLoadBtu.toLocaleString()} BTU` },
            { label: 'Season Rev', value: `$${zone.pricePerSeason.toLocaleString()}` },
            { label: 'Panels', value: zone.panelCount.toString() },
          ].map(spec => (
            <div key={spec.label} className="rounded-lg p-2" style={{ background: 'rgba(8,14,22,0.8)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="uppercase tracking-wider mb-0.5" style={{ color: '#5a7a9a', fontSize: '7px' }}>{spec.label}</div>
              <div className="font-semibold text-white">{spec.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
