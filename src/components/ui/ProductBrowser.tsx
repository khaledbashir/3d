import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import type { Environment } from '@/types'

interface ProductBrowserProps {
  open: boolean
  onClose: () => void
  onSelect: (productId: string) => void
  currentProductId: string
  venueEnvironment: 'indoor' | 'outdoor'
}

const manufacturers = [...new Set(products.map(p => p.manufacturer))]

export function ProductBrowser({ open, onClose, onSelect, currentProductId, venueEnvironment }: ProductBrowserProps) {
  const [search, setSearch] = useState('')
  const [mfgFilter, setMfgFilter] = useState<string | null>(null)
  const [envFilter, setEnvFilter] = useState<Environment | null>(null)

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (search && !`${p.manufacturer} ${p.series} ${p.sku}`.toLowerCase().includes(search.toLowerCase())) return false
      if (mfgFilter && p.manufacturer !== mfgFilter) return false
      if (envFilter && p.environment !== envFilter && p.environment !== 'both') return false
      return true
    }).sort((a, b) => {
      // ANC first, then alphabetical, then by pixel pitch
      if (a.manufacturer === 'ANC' && b.manufacturer !== 'ANC') return -1
      if (b.manufacturer === 'ANC' && a.manufacturer !== 'ANC') return 1
      if (a.manufacturer !== b.manufacturer) return a.manufacturer.localeCompare(b.manufacturer)
      return a.pixelPitch - b.pixelPitch
    })
  }, [search, mfgFilter, envFilter])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative anc-panel rounded-2xl p-5 w-[640px] max-h-[80vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[2px]" style={{ fontFamily: "'Work Sans', sans-serif", color: '#5a7a9a' }}>
            Product Catalog
          </div>
          <button onClick={onClose} className="text-sm" style={{ color: '#6888a8' }}>Close</button>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full h-[36px] rounded-xl px-3 text-sm text-white outline-none mb-3"
          style={{ background: 'rgba(8,14,22,0.92)', border: '1px solid rgba(255,255,255,0.06)' }}
        />

        {/* Filters */}
        <div className="flex gap-2 mb-3 flex-wrap">
          <button
            onClick={() => setMfgFilter(null)}
            className={`anc-toolbar-button ${!mfgFilter ? 'anc-toolbar-button--active' : ''}`}
          >All</button>
          {manufacturers.map(m => (
            <button
              key={m}
              onClick={() => setMfgFilter(mfgFilter === m ? null : m)}
              className={`anc-toolbar-button ${mfgFilter === m ? 'anc-toolbar-button--active' : ''}`}
            >{m}</button>
          ))}
          <span className="w-px h-6 self-center" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <button
            onClick={() => setEnvFilter(envFilter === 'indoor' ? null : 'indoor')}
            className={`anc-toolbar-button ${envFilter === 'indoor' ? 'anc-toolbar-button--active' : ''}`}
          >Indoor</button>
          <button
            onClick={() => setEnvFilter(envFilter === 'outdoor' ? null : 'outdoor')}
            className={`anc-toolbar-button ${envFilter === 'outdoor' ? 'anc-toolbar-button--active' : ''}`}
          >Outdoor</button>
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-2">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-[11px]" style={{ color: '#6f88a0' }}>
              No products match your filters.
            </div>
          ) : (
            filtered.map(p => {
              const isRecommended = p.environment === venueEnvironment || p.environment === 'both'
              const isCurrent = p.id === currentProductId
              return (
                <button
                  key={p.id}
                  onClick={() => { onSelect(p.id); onClose() }}
                  className="w-full text-left rounded-xl px-3 py-2.5 transition-all cursor-pointer"
                  style={{
                    background: isCurrent ? 'rgba(10,82,239,0.12)' : 'rgba(8,14,22,0.9)',
                    border: `1px solid ${isCurrent ? 'rgba(10,82,239,0.3)' : 'rgba(255,255,255,0.05)'}`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-medium text-white">{p.manufacturer} {p.series}</span>
                        {isRecommended && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded-full uppercase font-semibold"
                            style={{ background: 'rgba(10,82,239,0.15)', color: '#0A52EF', border: '1px solid rgba(10,82,239,0.25)' }}>
                            Recommended
                          </span>
                        )}
                        {isCurrent && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded-full uppercase font-semibold"
                            style={{ background: 'rgba(3,184,255,0.15)', color: '#03B8FF', border: '1px solid rgba(3,184,255,0.25)' }}>
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-[9px] mt-0.5" style={{ color: '#6888a8', fontFamily: 'monospace' }}>
                        {p.sku}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-1.5 text-[9px]" style={{ color: '#8aa0b8' }}>
                    <span>{p.pixelPitch}mm pitch</span>
                    <span>{p.nits.toLocaleString()} nits</span>
                    <span>{p.watts}W</span>
                    <span>{p.panelWidth}×{p.panelHeight}mm</span>
                    <span className="uppercase">{p.environment}</span>
                  </div>
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
