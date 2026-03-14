import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import type { VenueType, LEDZone, Sponsor } from '@/types'

export interface ConfigSnapshot {
  venueType: VenueType
  zones: LEDZone[]
  sponsors: Sponsor[]
}

const validVenueTypes = ['nfl', 'nba', 'mall', 'transit']

export function encodeConfigToUrl(snapshot: ConfigSnapshot): string {
  const json = JSON.stringify(snapshot)
  const compressed = compressToEncodedURIComponent(json)
  return `${window.location.origin}${window.location.pathname}#config=${compressed}`
}

export function decodeConfigFromUrl(): ConfigSnapshot | null {
  const hash = window.location.hash
  if (!hash.startsWith('#config=')) return null

  try {
    const compressed = hash.slice('#config='.length)
    const json = decompressFromEncodedURIComponent(compressed)
    if (!json) return null

    const data = JSON.parse(json)
    if (!validVenueTypes.includes(data.venueType)) return null
    if (!Array.isArray(data.zones)) return null
    if (!Array.isArray(data.sponsors)) return null

    return data as ConfigSnapshot
  } catch {
    return null
  }
}
