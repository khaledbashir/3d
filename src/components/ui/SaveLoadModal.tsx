import { useState } from 'react'
import { useVenueStore } from '@/stores/venueStore'

interface SaveLoadModalProps {
  open: boolean
  onClose: () => void
}

const formatDate = (ts: number) => new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export function SaveLoadModal({ open, onClose }: SaveLoadModalProps) {
  const [tab, setTab] = useState<'save' | 'load'>('save')
  const [name, setName] = useState('')
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const savedConfigs = useVenueStore(s => s.savedConfigs)
  const saveConfig = useVenueStore(s => s.saveConfig)
  const loadConfig = useVenueStore(s => s.loadConfig)
  const deleteConfig = useVenueStore(s => s.deleteConfig)

  if (!open) return null

  const handleSave = () => {
    if (!name.trim()) return
    saveConfig(name.trim())
    setName('')
    setTab('load')
  }

  const handleLoad = (id: string) => {
    loadConfig(id)
    onClose()
  }

  const handleDelete = (id: string) => {
    if (confirmDeleteId === id) {
      deleteConfig(id)
      setConfirmDeleteId(null)
    } else {
      setConfirmDeleteId(id)
      setTimeout(() => setConfirmDeleteId(null), 3000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative anc-panel rounded-2xl p-5 w-[400px] max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('save')}
              className={`anc-toolbar-button ${tab === 'save' ? 'anc-toolbar-button--active' : ''}`}
            >
              Save
            </button>
            <button
              onClick={() => setTab('load')}
              className={`anc-toolbar-button ${tab === 'load' ? 'anc-toolbar-button--active' : ''}`}
            >
              Saved Setups ({savedConfigs.length})
            </button>
          </div>
          <button onClick={onClose} className="text-[10px] uppercase" style={{ color: '#6888a8' }}>Close</button>
        </div>

        {tab === 'save' && (
          <div>
            <label className="block text-[9px] uppercase tracking-[1.5px] mb-2" style={{ color: '#5a7a9a' }}>
              Name this configuration
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSave()}
              placeholder="e.g. MetLife Game Day Setup"
              className="w-full h-[40px] rounded-xl px-3 text-sm text-white outline-none"
              style={{ background: 'rgba(8, 14, 22, 0.92)', border: '1px solid rgba(255,255,255,0.06)' }}
              autoFocus
            />
            <button
              onClick={handleSave}
              disabled={!name.trim()}
              className="mt-3 w-full py-2.5 rounded-xl text-[11px] font-semibold uppercase transition-all"
              style={{
                background: name.trim() ? '#0A52EF' : 'rgba(255,255,255,0.06)',
                color: name.trim() ? '#fff' : '#5a7a9a',
                fontFamily: "'Work Sans', sans-serif",
              }}
            >
              Save
            </button>
          </div>
        )}

        {tab === 'load' && (
          <div className="flex flex-col gap-2">
            {savedConfigs.length === 0 ? (
              <div className="text-center py-8 text-[11px]" style={{ color: '#6f88a0' }}>
                No saved configurations yet. Save your current setup to get started.
              </div>
            ) : (
              savedConfigs
                .slice()
                .sort((a, b) => b.timestamp - a.timestamp)
                .map(config => (
                  <div
                    key={config.id}
                    className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5"
                    style={{ background: 'rgba(8, 14, 22, 0.9)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <button
                      onClick={() => handleLoad(config.id)}
                      className="flex-1 text-left min-w-0 cursor-pointer"
                    >
                      <div className="text-[12px] font-medium text-white truncate">{config.name}</div>
                      <div className="text-[9px] mt-0.5" style={{ color: '#6888a8' }}>
                        {config.venueType.toUpperCase()} · {formatDate(config.timestamp)}
                      </div>
                    </button>
                    <button
                      onClick={() => handleDelete(config.id)}
                      className="text-[9px] px-2 py-1 rounded-lg transition-all flex-shrink-0"
                      style={{
                        color: confirmDeleteId === config.id ? '#ff6b6b' : '#6f88a0',
                        background: confirmDeleteId === config.id ? 'rgba(255,100,100,0.1)' : 'rgba(255,255,255,0.04)',
                      }}
                    >
                      {confirmDeleteId === config.id ? 'Confirm?' : 'Delete'}
                    </button>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
