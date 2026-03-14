import { useState } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { products } from '@/data/products'
import { LogoUpload } from './LogoUpload'
import { ProductBrowser } from './ProductBrowser'
import { calculateCabinetLayout } from '@/utils/cabinetLayout'
import type { ContentType } from '@/types'

const contentOptions: { value: ContentType; label: string }[] = [
  { value: 'logo', label: 'Sponsor Logo' },
  { value: 'ad', label: 'Advertisement' },
  { value: 'score', label: 'Live Score' },
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

  if (!open) return null

  const zone = zones.find(z => z.id === selectedZoneId)

  const selectStyle: React.CSSProperties = {
    width: '100%',
    height: '42px',
    background: 'rgba(8, 14, 22, 0.92)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '14px',
    color: '#fff',
    fontSize: '12px',
    padding: '0 12px',
    outline: 'none',
  }

  if (!zone) {
    return (
      <div className="absolute bottom-4 rounded-[24px] p-4 anc-detail-panel" style={{ left: '320px', right: '320px' }}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[2px] mb-1" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
              Zone Editor
            </div>
            <div className="text-lg tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Select a zone to edit
            </div>
            <div className="text-[11px] mt-1" style={{ color: '#6f88a0' }}>
              Use the zone list to switch a placement on, then click its name to update sponsor, content, and product.
            </div>
          </div>
          <button onClick={onClose} className="anc-toolbar-button">
            Hide Editor
          </button>
        </div>
      </div>
    )
  }

  const envFilter = venueType === 'nfl' ? 'outdoor' : 'indoor'
  const currentProduct = products.find(p => p.id === zone.product)
  const cabinet = currentProduct ? calculateCabinetLayout(zone.width, zone.height, currentProduct) : null

  return (
    <div className="absolute bottom-4 rounded-[24px] p-4 anc-detail-panel" style={{ left: '320px', right: '320px' }}>
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[2px] mb-1" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
            Zone Editor
          </div>
          <div className="text-lg tracking-wide truncate" style={{ fontFamily: "'Work Sans', sans-serif" }}>{zone.name}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleZone(zone.id)}
            className={`anc-mini-switch ${zone.enabled ? 'anc-mini-switch--on' : ''}`}
            aria-label={`${zone.enabled ? 'Disable' : 'Enable'} ${zone.name}`}
          >
            <span />
          </button>
          <button onClick={onClose} className="anc-toolbar-button">
            Hide Editor
          </button>
        </div>
      </div>

      <div className="grid gap-3 anc-detail-grid">
        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Sponsor</label>
          <select value={zone.sponsor} onChange={e => setZoneSponsor(zone.id, e.target.value)} style={selectStyle}>
            {sponsors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <LogoUpload sponsorId={zone.sponsor} />
        </div>

        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Content</label>
          <select value={zone.content} onChange={e => setZoneContent(zone.id, e.target.value as ContentType)} style={selectStyle}>
            {contentOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>

        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Product</label>
          <button
            onClick={() => setBrowserOpen(true)}
            className="w-full h-[42px] rounded-xl px-3 text-left text-[12px] text-white cursor-pointer transition-all"
            style={{ background: 'rgba(8,14,22,0.92)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {currentProduct ? `${currentProduct.manufacturer} ${currentProduct.series}` : 'Select product...'}
          </button>
          {currentProduct && (
            <div className="text-[8px] mt-1" style={{ color: '#3a5a7a', fontFamily: 'monospace' }}>
              {currentProduct.sku} · {currentProduct.pixelPitch}mm · {currentProduct.nits.toLocaleString()} nits
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

        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Pricing</label>
          <div className="rounded-2xl p-3" style={{ background: 'rgba(8, 14, 22, 0.92)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-semibold" style={{ color: '#0A52EF' }}>
              ${zone.pricePerGame.toLocaleString()}/game
            </div>
            <div className="text-[9px]" style={{ color: '#5a7a9a' }}>
              ${zone.pricePerSeason.toLocaleString()}/season
            </div>
          </div>
        </div>

        <div className="anc-field-card">
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Specs</label>
          <div className="rounded-2xl p-3" style={{ background: 'rgba(8, 14, 22, 0.92)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-semibold" style={{ color: '#03B8FF' }}>
              {zone.width} × {zone.height} ft
            </div>
            {cabinet ? (
              <div className="text-[8px] mt-1 flex flex-col gap-0.5" style={{ color: '#6888a8' }}>
                <span>{cabinet.cols}×{cabinet.rows} grid · {cabinet.totalCabinets} cabinets</span>
                <span>{cabinet.resolutionW}×{cabinet.resolutionH}px</span>
                <span>{cabinet.totalWeightLbs.toLocaleString()} lbs · {(cabinet.totalPowerW / 1000).toFixed(1)} kW</span>
              </div>
            ) : (
              <div className="text-[9px]" style={{ color: '#5a7a9a' }}>
                {zone.panelCount} panels
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
