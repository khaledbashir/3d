import { create } from 'zustand'
import type { VenueType, LEDZone, ContentType, CameraState, Sponsor } from '@/types'
import { venues, getVenue } from '@/data/venues'
import { sponsors as defaultSponsors } from '@/data/sponsors'
import { presets } from '@/data/presets'

interface VenueStore {
  // Venue
  venueType: VenueType
  zones: LEDZone[]
  setVenueType: (type: VenueType) => void

  // Selection
  selectedZoneId: string | null
  selectZone: (id: string | null) => void

  // Zone mutations
  toggleZone: (id: string) => void
  setZoneSponsor: (id: string, sponsorId: string) => void
  setZoneContent: (id: string, content: ContentType) => void
  setZoneProduct: (id: string, productId: string) => void
  setZoneEnabled: (id: string, enabled: boolean) => void

  // Camera
  camera: CameraState
  targetCamera: CameraState
  setTargetCamera: (cam: Partial<CameraState>) => void
  resetCamera: () => void

  // Simulation
  simulating: boolean
  toggleSimulation: () => void

  // Presets
  applyPreset: (presetId: string) => void

  // Sponsors (with custom uploads)
  sponsors: Sponsor[]
  updateSponsorLogo: (sponsorId: string, logoUrl: string) => void
  addCustomSponsor: (sponsor: Sponsor) => void

  // Revenue calculations
  getRevenue: () => { perGame: number; perSeason: number; occupancy: number; activeCount: number; totalCount: number }
}

const initialVenue = getVenue('nfl')

export const useVenueStore = create<VenueStore>((set, get) => ({
  venueType: 'nfl',
  zones: structuredClone(initialVenue.zones),

  setVenueType: (type) => {
    const venue = getVenue(type)
    set({
      venueType: type,
      zones: structuredClone(venue.zones),
      selectedZoneId: null,
      targetCamera: { ...venue.cameraDefault },
    })
  },

  selectedZoneId: null,
  selectZone: (id) => set({ selectedZoneId: id }),

  toggleZone: (id) => set(state => ({
    zones: state.zones.map(z => z.id === id ? { ...z, enabled: !z.enabled } : z),
  })),

  setZoneSponsor: (id, sponsorId) => set(state => ({
    zones: state.zones.map(z => z.id === id ? { ...z, sponsor: sponsorId } : z),
  })),

  setZoneContent: (id, content) => set(state => ({
    zones: state.zones.map(z => z.id === id ? { ...z, content } : z),
  })),

  setZoneProduct: (id, productId) => set(state => ({
    zones: state.zones.map(z => z.id === id ? { ...z, product: productId } : z),
  })),

  setZoneEnabled: (id, enabled) => set(state => ({
    zones: state.zones.map(z => z.id === id ? { ...z, enabled } : z),
  })),

  camera: { ...initialVenue.cameraDefault },
  targetCamera: { ...initialVenue.cameraDefault },
  setTargetCamera: (cam) => set(state => ({
    targetCamera: { ...state.targetCamera, ...cam },
  })),
  resetCamera: () => {
    const venue = getVenue(get().venueType)
    set({ targetCamera: { ...venue.cameraDefault } })
  },

  simulating: false,
  toggleSimulation: () => set(state => ({ simulating: !state.simulating })),

  applyPreset: (presetId) => {
    const preset = presets.find(p => p.id === presetId)
    if (!preset) return
    set(state => ({
      zones: state.zones.map(z => {
        const copy = { ...z }
        preset.apply(copy as any)
        return copy
      }),
    }))
  },

  sponsors: [...defaultSponsors],
  updateSponsorLogo: (sponsorId, logoUrl) => set(state => ({
    sponsors: state.sponsors.map(s =>
      s.id === sponsorId ? { ...s, logoUrl } : s
    ),
  })),
  addCustomSponsor: (sponsor) => set(state => ({
    sponsors: [...state.sponsors, sponsor],
  })),

  getRevenue: () => {
    const { zones } = get()
    const active = zones.filter(z => z.enabled && z.sponsor !== 'none')
    const enabledCount = zones.filter(z => z.enabled).length
    return {
      perGame: active.reduce((s, z) => s + z.pricePerGame, 0),
      perSeason: active.reduce((s, z) => s + z.pricePerSeason, 0),
      occupancy: zones.length > 0 ? Math.round((enabledCount / zones.length) * 100) : 0,
      activeCount: enabledCount,
      totalCount: zones.length,
    }
  },
}))
