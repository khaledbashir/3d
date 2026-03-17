import { sponsors } from '@/data/sponsors'
import { loadLogoImage } from './ledRenderer'

export function preloadSponsorLogos() {
  for (const sponsor of sponsors) {
    if (sponsor.logoUrl) {
      loadLogoImage(sponsor.logoUrl).catch(() => {
        console.warn(`Failed to preload logo for ${sponsor.name}`)
      })
    }
  }
}
