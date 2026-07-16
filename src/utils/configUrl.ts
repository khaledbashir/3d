import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import type { VenueType, LEDZone, Sponsor } from '@/types'

export interface ConfigSnapshot {
  venueType: VenueType
  zones: LEDZone[]
  sponsors: Sponsor[]
}

const validVenueTypes = ['nfl', 'nba', 'mall', 'transit']

export function encodeConfigToUrl(snapshot: ConfigSnapshot): string {
  // Blob URLs are browser-session handles and cannot be shared. Keep the
  // deterministic zone configuration while excluding local uploaded media.
  const shareable = {
    ...snapshot,
    zones: snapshot.zones.map(({ mediaUrl: _mediaUrl, mediaKind: _mediaKind, mediaName: _mediaName, ...zone }) => zone),
  }
  const json = JSON.stringify(shareable)
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
