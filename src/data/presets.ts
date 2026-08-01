import type { ContentType } from '@/types'

export interface Preset {
  id: string
  name: string
  icon: string
  apply: (zone: { enabled: boolean; sponsor: string; content: ContentType }) => void
}

export const presets: Preset[] = [
  { id: 'logos', name: 'Campaign Takeover', icon: '🏷️', apply: z => { z.content = 'logo'; z.enabled = true } },
  { id: 'scores', name: 'Live Game Broadcast', icon: '🏈', apply: z => { z.content = 'score'; z.enabled = true } },
  { id: 'halftime', name: 'Brand Film', icon: '✨', apply: z => { z.content = 'animation'; z.enabled = true } },
  { id: 'clear', name: 'Clear All Sponsors', icon: '🔄', apply: z => { z.sponsor = 'none'; z.enabled = true; z.content = 'logo' } },
  { id: 'allon', name: 'All Zones On', icon: '⚡', apply: z => { z.enabled = true } },
  { id: 'alloff', name: 'All Zones Off', icon: '💤', apply: z => { z.enabled = false } },
]
