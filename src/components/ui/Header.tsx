import { useEffect, useRef, useState } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { VenueSwitcher } from './VenueSwitcher'
import { SaveLoadModal } from './SaveLoadModal'
import { encodeConfigToUrl } from '@/utils/configUrl'
import type { CrowdMode } from '@/types'
import {
  CrowdEmptyIcon,
  CrowdHalfIcon,
  CrowdFullIcon,
  SetupIcon,
  SaveIcon,
  ExportIcon,
  ShareIcon,
  ResetIcon,
  PresentIcon,
  DotsIcon,
  CheckIcon,
} from './icons'

interface HeaderProps {
  onOpenWizard: () => void
  onPresent: () => void
}

export function Header({ onOpenWizard, onPresent }: HeaderProps) {
  const resetCamera = useVenueStore(s => s.resetCamera)
  const zones = useVenueStore(s => s.zones)
  const activeCount = zones.filter(z => z.enabled).length
  const crowdMode = useVenueStore(s => s.crowdMode)
  const setCrowdMode = useVenueStore(s => s.setCrowdMode)
  const [saveLoadOpen, setSaveLoadOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const venueType = useVenueStore(s => s.venueType)
  const sponsors = useVenueStore(s => s.sponsors)

  useEffect(() => {
    if (!menuOpen) return
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    window.addEventListener('mousedown', close)
    return () => window.removeEventListener('mousedown', close)
  }, [menuOpen])

  const crowdOptions: { id: CrowdMode; tip: string; icon: JSX.Element }[] = [
    { id: 'empty', tip: 'Empty venue', icon: <CrowdEmptyIcon size={15} /> },
    { id: 'half', tip: 'Half full', icon: <CrowdHalfIcon size={15} /> },
    { id: 'full', tip: 'Packed house', icon: <CrowdFullIcon size={15} /> },
  ]

  const handleShare = () => {
    const url = encodeConfigToUrl({ venueType, zones, sponsors })
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const menuItems = [
    { label: 'Setup wizard', icon: <SetupIcon size={15} />, onClick: () => { setMenuOpen(false); onOpenWizard() } },
    { label: 'Save / load configs', icon: <SaveIcon size={15} />, onClick: () => { setMenuOpen(false); setSaveLoadOpen(true) } },
    { label: 'Export one-pager', icon: <ExportIcon size={15} />, onClick: () => { setMenuOpen(false); window.print() } },
    { label: copied ? 'Link copied' : 'Copy share link', icon: copied ? <CheckIcon size={15} /> : <ShareIcon size={15} />, onClick: handleShare },
    { label: 'Reset camera', icon: <ResetIcon size={15} />, onClick: () => { setMenuOpen(false); resetCamera() } },
  ]

  return (
    <div className="absolute top-0 left-0 right-0 z-30 px-4 pt-3">
      <div className="anc-topbar flex items-center justify-between gap-4 rounded-2xl pl-4 pr-2.5 py-2">
        {/* Brand */}
        <div className="flex min-w-0 items-center gap-3">
          <img src="/anc-logo-white.png" alt="ANC" className="h-6 object-contain" />
          <div className="min-w-0 hidden md:block">
            <div className="text-[11px] font-semibold tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif", color: '#e8f0fa' }}>
              Venue Vision
            </div>
            <div className="text-[7px] uppercase tracking-[0.22em]" style={{ color: '#5a7a9a' }}>
              LED Configurator
            </div>
          </div>
        </div>

        {/* Center — the two scene decisions: where, and how full */}
        <div className="flex items-center gap-2.5">
          <VenueSwitcher />
          <div className="anc-seg">
            {crowdOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setCrowdMode(option.id)}
                data-tip={option.tip}
                className={`anc-seg-button ${crowdMode === option.id ? 'anc-seg-button--active' : ''}`}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right — status, overflow, present */}
        <div className="flex items-center gap-2">
          <span className="anc-status-pill flex-shrink-0 hidden sm:inline-flex" title={`${activeCount} of ${zones.length} zones active`}>
            <span className="anc-status-dot" />
            {activeCount}/{zones.length}
          </span>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(o => !o)}
              data-tip={menuOpen ? undefined : 'More'}
              className={`anc-icon-button ${menuOpen ? 'anc-icon-button--active' : ''}`}
            >
              <DotsIcon size={16} />
            </button>
            {menuOpen && (
              <div className="anc-menu">
                {menuItems.map(item => (
                  <button key={item.label} onClick={item.onClick} className="anc-menu-item">
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={onPresent} className="anc-present-button">
            <PresentIcon size={15} />
            <span>Present</span>
          </button>
        </div>
      </div>

      <SaveLoadModal open={saveLoadOpen} onClose={() => setSaveLoadOpen(false)} />
    </div>
  )
}
