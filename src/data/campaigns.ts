export interface VenueCampaign {
  id: 'athlete' | 'ice' | 'drive' | 'access'
  imageUrl: string
  line: string
  accent: string
  focalX: number
  focalY: number
}

const campaignLibrary: Record<VenueCampaign['id'], Omit<VenueCampaign, 'line'>> = {
  athlete: {
    id: 'athlete',
    imageUrl: '/campaigns/athlete-night.webp',
    accent: '#4F86FF',
    focalX: 0.72,
    focalY: 0.52,
  },
  ice: {
    id: 'ice',
    imageUrl: '/campaigns/ice-impact.webp',
    accent: '#BDEEFF',
    focalX: 0.72,
    focalY: 0.5,
  },
  drive: {
    id: 'drive',
    imageUrl: '/campaigns/night-drive.webp',
    accent: '#3F8CFF',
    focalX: 0.73,
    focalY: 0.54,
  },
  access: {
    id: 'access',
    imageUrl: '/campaigns/stadium-access.webp',
    accent: '#65A4FF',
    focalX: 0.72,
    focalY: 0.5,
  },
}

const sponsorDirection: Record<string, { campaign: VenueCampaign['id']; line: string }> = {
  nike: { campaign: 'athlete', line: 'OWN THE MOMENT' },
  pepsi: { campaign: 'ice', line: 'ICE COLD. GAME READY.' },
  cocacola: { campaign: 'ice', line: 'ICE COLD. GAME READY.' },
  toyota: { campaign: 'drive', line: 'BUILT FOR THE BIG NIGHT' },
  bmw: { campaign: 'drive', line: 'BUILT FOR THE BIG NIGHT' },
  chase: { campaign: 'access', line: 'ACCESS THE MOMENT' },
  visa: { campaign: 'access', line: 'ACCESS THE MOMENT' },
  americanexpress: { campaign: 'access', line: 'ACCESS THE MOMENT' },
  delta: { campaign: 'access', line: 'ARRIVE FOR MORE' },
  att: { campaign: 'access', line: 'CONNECTED TO EVERY MOMENT' },
  verizon: { campaign: 'access', line: 'CONNECTED TO EVERY MOMENT' },
  microsoft: { campaign: 'access', line: 'CONNECTED TO EVERY MOMENT' },
  mcdonalds: { campaign: 'access', line: 'GAME NIGHT STARTS HERE' },
}

export const venueCampaigns = Object.values(campaignLibrary)

export function getCampaignForSponsor(sponsorId: string): VenueCampaign {
  // Unsold inventory is a sales frame, so its headline must not simply repeat
  // the "YOUR BRAND" mark the renderer already draws above it.
  const direction = sponsorDirection[sponsorId] ?? {
    campaign: 'athlete' as const,
    line: 'EVERY SEAT SEES IT',
  }
  return { ...campaignLibrary[direction.campaign], line: direction.line }
}
