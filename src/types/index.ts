export type VenueType = 'nfl' | 'nba' | 'mall' | 'transit'
export type ContentType = 'logo' | 'ad' | 'score' | 'replay' | 'animation'
export type ZoneType = 'videoboard' | 'ribbon' | 'fascia' | 'endzone' | 'stanchion' | 'courtside' | 'scoring' | 'totem' | 'wayfinding' | 'column'
export type Environment = 'indoor' | 'outdoor' | 'both'
export type CrowdMode = 'empty' | 'half' | 'full'
export type LiveSyncTrigger = 'touchdown' | 'goal' | 'sponsor-takeover' | 'weather-alert' | 'timeout' | 'halftime-show' | 'emergency'

export interface Product {
  id: string
  manufacturer: string
  series: string
  sku: string
  pixelPitch: number
  panelWidth: number
  panelHeight: number
  nits: number
  watts: number
  environment: Environment
  pricePerPanel?: number
}

export interface Sponsor {
  id: string
  name: string
  color: string
  logoUrl?: string
  logoText: string
}

export interface LEDZone {
  id: string
  name: string
  type: ZoneType
  enabled: boolean
  sponsor: string
  content: ContentType
  product: string
  panelCount: number
  pricePerGame: number
  pricePerSeason: number
  position: [number, number, number]
  rotation: [number, number, number]
  width: number
  height: number
  description: string
}

export interface VenueConfig {
  id: VenueType
  name: string
  description: string
  zones: LEDZone[]
  cameraDefault: { angle: number; pitch: number; distance: number }
}

export interface CameraState {
  angle: number
  pitch: number
  distance: number
}

export interface SavedConfig {
  id: string
  name: string
  venueType: VenueType
  zones: LEDZone[]
  sponsors: Sponsor[]
  timestamp: number
}

export interface CabinetLayout {
  cols: number
  rows: number
  totalCabinets: number
  actualWidthFt: number
  actualHeightFt: number
  totalWeightLbs: number
  totalPowerW: number
  heatLoadBtu: number
  resolutionW: number
  resolutionH: number
}

export interface LiveGameData {
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  quarter: number
  clock: string
  down: string
  weather: { temp: number; condition: string; icon: string }
  betting: { spread: string; overUnder: number }
}
