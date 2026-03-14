import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { VenueType, LEDZone, ContentType, CameraState, Sponsor, CrowdMode, SavedConfig } from '@/types'
import { getVenue } from '@/data/venues'
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

  // Attendance
  crowdMode: CrowdMode
  setCrowdMode: (mode: CrowdMode) => void

  // Presets
  applyPreset: (presetId: string) => void

  // Sponsors (with custom uploads)
  sponsors: Sponsor[]
  updateSponsorLogo: (sponsorId: string, logoUrl: string) => void
  addCustomSponsor: (sponsor: Sponsor) => void

  // Save/Load configs
  savedConfigs: SavedConfig[]
  saveConfig: (name: string) => void
  loadConfig: (id: string) => void
  deleteConfig: (id: string) => void

  // Hydrate from snapshot (for shareable links)
  hydrateFromSnapshot: (snapshot: { venueType: VenueType; zones: LEDZone[]; sponsors: Sponsor[] }) => void

  // Revenue calculations
  getRevenue: () => { perGame: number; perSeason: number; occupancy: number; activeCount: number; totalCount: number }
}

const initialVenue = getVenue('nfl')

export const useVenueStore = create<VenueStore>()(
  persist(
    (set, get) => ({
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

      crowdMode: 'half',
      setCrowdMode: (mode) => set({ crowdMode: mode }),

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

      // Save/Load
      savedConfigs: [],
      saveConfig: (name) => set(state => ({
        savedConfigs: [...state.savedConfigs, {
          id: crypto.randomUUID(),
          name,
          venueType: state.venueType,
          zones: structuredClone(state.zones),
          sponsors: structuredClone(state.sponsors),
          timestamp: Date.now(),
        }],
      })),
      loadConfig: (id) => {
        const config = get().savedConfigs.find(c => c.id === id)
        if (!config) return
        const venue = getVenue(config.venueType)
        set({
          venueType: config.venueType,
          zones: structuredClone(config.zones),
          sponsors: structuredClone(config.sponsors),
          selectedZoneId: null,
          targetCamera: { ...venue.cameraDefault },
        })
      },
      deleteConfig: (id) => set(state => ({
        savedConfigs: state.savedConfigs.filter(c => c.id !== id),
      })),

      // Hydrate from snapshot
      hydrateFromSnapshot: (snapshot) => {
        const venue = getVenue(snapshot.venueType)
        set({
          venueType: snapshot.venueType,
          zones: structuredClone(snapshot.zones),
          sponsors: structuredClone(snapshot.sponsors),
          selectedZoneId: null,
          targetCamera: { ...venue.cameraDefault },
        })
      },

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
    }),
    {
      name: 'anc-venue-vision',
      partialize: (state) => ({ savedConfigs: state.savedConfigs }),
    },
  ),
)
