import { sponsors } from '@/data/sponsors'
import { venueCampaigns } from '@/data/campaigns'
import { loadLogoImage } from './ledRenderer'

export function preloadSponsorLogos() {
  for (const sponsor of sponsors) {
    if (sponsor.logoUrl) {
      loadLogoImage(sponsor.logoUrl).catch(() => {
        console.warn(`Failed to preload logo for ${sponsor.name}`)
      })
    }
  }

  for (const campaign of venueCampaigns) {
    loadLogoImage(campaign.imageUrl).catch(() => {
      console.warn(`Failed to preload campaign plate ${campaign.id}`)
    })
  }
}
