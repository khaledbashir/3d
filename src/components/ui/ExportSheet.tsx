import { useVenueStore } from '@/stores/venueStore'
import { products } from '@/data/products'
import { calculateCabinetLayout } from '@/utils/cabinetLayout'

export function ExportSheet() {
  const venueType = useVenueStore(s => s.venueType)
  const zones = useVenueStore(s => s.zones)
  const sponsors = useVenueStore(s => s.sponsors)
  const getRevenue = useVenueStore(s => s.getRevenue)
  const revenue = getRevenue()

  return (
    <div className="anc-print-sheet hidden print:block" style={{
      background: '#fff', color: '#000', padding: '40px', fontFamily: "'Work Sans', sans-serif",
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '3px solid #0A52EF', paddingBottom: '16px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0A52EF', margin: 0 }}>ANC VENUE VISION</h1>
          <p style={{ fontSize: '12px', color: '#666', margin: '4px 0 0' }}>LED Configuration Spec Sheet</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>{venueType.toUpperCase()} Venue</div>
          <div style={{ fontSize: '11px', color: '#666' }}>{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      {/* Revenue Summary */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Active Zones</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#0A52EF' }}>{revenue.activeCount}/{revenue.totalCount}</div>
        </div>
        <div style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Revenue / Game</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#0A52EF' }}>${revenue.perGame.toLocaleString()}</div>
        </div>
        <div style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Revenue / Season</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#0A52EF' }}>${revenue.perSeason.toLocaleString()}</div>
        </div>
        <div style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Zone Coverage</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#0A52EF' }}>{revenue.occupancy}%</div>
        </div>
      </div>

      {/* Zone Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
        <thead>
          <tr style={{ background: '#0A52EF', color: '#fff' }}>
            <th style={{ padding: '8px 10px', textAlign: 'left' }}>Zone</th>
            <th style={{ padding: '8px 10px', textAlign: 'left' }}>Type</th>
            <th style={{ padding: '8px 10px', textAlign: 'left' }}>Product</th>
            <th style={{ padding: '8px 10px', textAlign: 'left' }}>Sponsor</th>
            <th style={{ padding: '8px 10px', textAlign: 'right' }}>Size (ft)</th>
            <th style={{ padding: '8px 10px', textAlign: 'right' }}>Cabinets</th>
            <th style={{ padding: '8px 10px', textAlign: 'right' }}>$/Game</th>
            <th style={{ padding: '8px 10px', textAlign: 'right' }}>$/Season</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((z, i) => {
            const product = products.find(p => p.id === z.product)
            const sponsor = sponsors.find(s => s.id === z.sponsor)
            const cabinet = product ? calculateCabinetLayout(z.width, z.height, product) : null
            return (
              <tr key={z.id} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', opacity: z.enabled ? 1 : 0.4 }}>
                <td style={{ padding: '6px 10px', fontWeight: 500 }}>{z.name}</td>
                <td style={{ padding: '6px 10px', textTransform: 'uppercase', fontSize: '9px' }}>{z.type}</td>
                <td style={{ padding: '6px 10px' }}>{product ? `${product.manufacturer} ${product.series}` : '—'}</td>
                <td style={{ padding: '6px 10px' }}>{sponsor && sponsor.id !== 'none' ? sponsor.name : '—'}</td>
                <td style={{ padding: '6px 10px', textAlign: 'right' }}>{z.width}×{z.height}</td>
                <td style={{ padding: '6px 10px', textAlign: 'right' }}>{cabinet ? cabinet.totalCabinets : z.panelCount}</td>
                <td style={{ padding: '6px 10px', textAlign: 'right' }}>${z.pricePerGame.toLocaleString()}</td>
                <td style={{ padding: '6px 10px', textAlign: 'right' }}>${z.pricePerSeason.toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* Footer */}
      <div style={{ marginTop: '24px', paddingTop: '12px', borderTop: '1px solid #ddd', fontSize: '9px', color: '#999', textAlign: 'center' }}>
        Generated by ANC Venue Vision · {new Date().toLocaleDateString()} · Confidential
      </div>
    </div>
  )
}
