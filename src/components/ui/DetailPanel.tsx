import { useVenueStore } from '@/stores/venueStore'
import { products, getProductsByEnvironment } from '@/data/products'
import { LogoUpload } from './LogoUpload'
import type { ContentType } from '@/types'

const contentOptions: { value: ContentType; label: string }[] = [
  { value: 'logo', label: '🏷️ Sponsor Logo' },
  { value: 'ad', label: '📺 Advertisement' },
  { value: 'score', label: '🏈 Live Score' },
  { value: 'replay', label: '🔄 Instant Replay' },
  { value: 'animation', label: '✨ Animation' },
]

export function DetailPanel() {
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const toggleZone = useVenueStore(s => s.toggleZone)
  const setZoneSponsor = useVenueStore(s => s.setZoneSponsor)
  const setZoneContent = useVenueStore(s => s.setZoneContent)
  const setZoneProduct = useVenueStore(s => s.setZoneProduct)
  const venueType = useVenueStore(s => s.venueType)

  if (!selectedZoneId) return null

  const zone = zones.find(z => z.id === selectedZoneId)
  if (!zone) return null

  const envFilter = venueType === 'nfl' ? 'outdoor' : 'indoor'
  const filteredProducts = products.filter(p => p.environment === envFilter || p.environment === 'both')
  const currentProduct = products.find(p => p.id === zone.product)

  const selectStyle: React.CSSProperties = {
    width: '100%', height: '30px', background: '#0a1018', border: '1px solid #1a2a3a',
    borderRadius: '4px', color: '#fff', fontSize: '11px', padding: '0 8px', outline: 'none',
  }

  return (
    <div className="absolute bottom-2.5 rounded-lg p-3.5"
      style={{
        left: '260px', right: '280px',
        background: 'rgba(13,21,32,0.95)', backdropFilter: 'blur(12px)',
        border: '1px solid #1a2a3a',
      }}>

      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-sm tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>{zone.name}</div>
          <div className="text-[10px] mt-0.5" style={{ color: '#5a7a9a' }}>{zone.description}</div>
        </div>
        <div
          onClick={() => toggleZone(zone.id)}
          className="relative w-9 h-5 rounded-full cursor-pointer transition-colors"
          style={{ background: zone.enabled ? '#00ff88' : '#1a2a3a' }}
        >
          <div className="absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform"
            style={{ left: '2px', transform: zone.enabled ? 'translateX(16px)' : 'translateX(0)' }} />
        </div>
      </div>

      {/* Fields grid */}
      <div className="grid gap-2.5" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 0.8fr 0.8fr' }}>
        {/* Sponsor */}
        <div>
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Sponsor</label>
          <select
            value={zone.sponsor}
            onChange={e => setZoneSponsor(zone.id, e.target.value)}
            style={selectStyle}
          >
            {sponsors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <LogoUpload sponsorId={zone.sponsor} />
        </div>

        {/* Content */}
        <div>
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Content</label>
          <select
            value={zone.content}
            onChange={e => setZoneContent(zone.id, e.target.value as ContentType)}
            style={selectStyle}
          >
            {contentOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>

        {/* Product */}
        <div>
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Product</label>
          <select
            value={zone.product}
            onChange={e => setZoneProduct(zone.id, e.target.value)}
            style={selectStyle}
          >
            {filteredProducts.map(p => (
              <option key={p.id} value={p.id}>
                {p.manufacturer} {p.series}
              </option>
            ))}
          </select>
          {currentProduct && (
            <div className="text-[8px] mt-1" style={{ color: '#3a5a7a', fontFamily: 'monospace' }}>
              {currentProduct.sku} · {currentProduct.pixelPitch}mm · {currentProduct.nits.toLocaleString()} nits
            </div>
          )}
        </div>

        {/* Pricing */}
        <div>
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Pricing</label>
          <div className="rounded p-1.5" style={{ background: '#0a1018', border: '1px solid #1a2a3a' }}>
            <div className="text-xs font-semibold" style={{ color: '#00ff88' }}>
              ${zone.pricePerGame.toLocaleString()}/game
            </div>
            <div className="text-[9px]" style={{ color: '#5a7a9a' }}>
              ${zone.pricePerSeason.toLocaleString()}/season
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div>
          <label className="block text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: '#5a7a9a' }}>Dimensions</label>
          <div className="rounded p-1.5" style={{ background: '#0a1018', border: '1px solid #1a2a3a' }}>
            <div className="text-xs font-semibold" style={{ color: '#00ccff' }}>
              {zone.width} × {zone.height}
            </div>
            <div className="text-[9px]" style={{ color: '#5a7a9a' }}>
              {zone.panelCount} panels
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
