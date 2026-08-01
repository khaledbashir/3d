import type { ContentType, Sponsor, LiveSyncTrigger, LiveGameData } from '@/types'
import { getCampaignForSponsor, type VenueCampaign } from '@/data/campaigns'
import {
  ANC_BLUE,
  ANC_BLUE_HI,
  MONO_FONT,
  WHITE,
  applyLedFinish,
  drawAccentRule,
  drawFittedText,
  drawScrim,
  drawWrappedText,
  ensureLedFonts,
  isLightColor,
  layoutClassFor,
  liftExposure,
  measureType,
  mixHex,
  resetType,
  rgba,
  safeArea,
  setType,
  smoothStep,
  type LayoutClass,
} from './ledDesign'

const logoImages = new Map<string, HTMLImageElement>()

export function loadLogoImage(url: string): Promise<HTMLImageElement> {
  if (logoImages.has(url)) return Promise.resolve(logoImages.get(url)!)
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => { logoImages.set(url, img); resolve(img) }
    img.onerror = reject
    img.src = url
  })
}

// Client logo support
let clientLogoImg: HTMLImageElement | null = null
let clientLogoUrl: string | null = null

export function setClientLogoForRenderer(url: string | null) {
  if (url === clientLogoUrl) return
  clientLogoUrl = url
  clientLogoImg = null
  if (url) {
    loadLogoImage(url).then(img => { clientLogoImg = img }).catch(() => {})
  }
}

// ─── LiveSync Trigger System ───────────────────────────────────────
interface TriggerState {
  type: LiveSyncTrigger
  startTime: number
  duration: number
  sponsor?: Sponsor
}

let activeTrigger: TriggerState | null = null

const TRIGGER_DURATIONS: Record<string, number> = {
  'touchdown': 6000,
  'goal': 5000,
  'sponsor-takeover': 8000,
  'weather-alert': 7000,
  'timeout': 6000,
  'halftime-show': 10000,
  'emergency': 12000,
}

export function fireLiveSyncTrigger(type: LiveSyncTrigger, sponsor?: Sponsor) {
  activeTrigger = {
    type,
    startTime: Date.now(),
    duration: TRIGGER_DURATIONS[type] || 5000,
    sponsor,
  }
}

export function clearTrigger() {
  activeTrigger = null
}

export function getActiveTrigger() {
  if (!activeTrigger) return null
  if (Date.now() - activeTrigger.startTime > activeTrigger.duration) {
    activeTrigger = null
    return null
  }
  return activeTrigger
}

// ─── Live Game Data ────────────────────────────────────────────────
let liveGameData: LiveGameData = {
  homeTeam: 'NYG',
  awayTeam: 'DAL',
  homeScore: 24,
  awayScore: 17,
  quarter: 3,
  clock: '4:32',
  down: '2nd & 8',
  weather: { temp: 72, condition: 'Clear', icon: '☀' },
  betting: { spread: 'NYG -3.5', overUnder: 44.5 },
}

export function setLiveGameData(data: Partial<LiveGameData>) {
  liveGameData = { ...liveGameData, ...data }
}

export function getLiveGameData() {
  return liveGameData
}

/** Broadcast graphics key off the matchup, not the sponsor's brand colour. */
const TEAM_COLORS: Record<string, [string, string]> = {
  NYG: ['#0B2265', '#A71930'],
  DAL: ['#041E42', '#7F9195'],
}

function teamColor(abbr: string, index: 0 | 1) {
  return (TEAM_COLORS[abbr] ?? ['#12315F', '#0A52EF'])[index]
}

// ─── Render options ────────────────────────────────────────────────

export interface LedRenderOptions {
  /** Product pixel pitch in mm — drives the physical pixel mask. */
  pixelPitchMm?: number
  /** Physical width in feet; with pitch this gives the real LED pixel count. */
  widthFt?: number
  /** Outdoor walls run 10,000 nits and bloom harder than indoor cabinets. */
  outdoor?: boolean
  /** Deterministic timeline position, for previews and captures. */
  phase?: number
}

// ─── Main Render Function ──────────────────────────────────────────

export function renderLEDContent(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  content: ContentType,
  sponsor: Sponsor,
  frame: number,
  selected: boolean,
  enabled: boolean,
  options: LedRenderOptions = {},
) {
  ensureLedFonts()

  if (!enabled) {
    renderDarkPanel(ctx, w, h, options)
    if (selected) drawSelection(ctx, w, h, frame)
    return
  }

  const layout = layoutClassFor(w, h)
  const trigger = getActiveTrigger()

  if (trigger) {
    const progress = (Date.now() - trigger.startTime) / trigger.duration
    renderTriggerContent(ctx, w, h, layout, trigger, progress, frame, sponsor)
  } else {
    switch (content) {
      case 'score': renderScheduledScore(ctx, w, h, layout, sponsor, frame, options.phase); break
      case 'logo': renderCampaign(ctx, w, h, layout, sponsor, frame, 'lockup', options.phase); break
      case 'ad': renderCampaign(ctx, w, h, layout, sponsor, frame, 'spot', options.phase); break
      case 'replay': renderCinematicReplay(ctx, w, h, layout, sponsor, frame, options.phase); break
      case 'animation': renderCampaign(ctx, w, h, layout, sponsor, frame, 'film', options.phase); break
    }
  }

  finishSurface(ctx, w, h, options)
  if (selected) drawSelection(ctx, w, h, frame)
}

/** A dark cabinet still shows its pixel structure under house light. */
function renderDarkPanel(ctx: CanvasRenderingContext2D, w: number, h: number, options: LedRenderOptions) {
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, '#0A0C11')
  grad.addColorStop(1, '#050608')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)
  applyLedFinish(ctx, w, h, { pixelsAcross: pixelsAcross(w, options), bloom: 0, blackLevel: 0.02 })
}

function finishSurface(ctx: CanvasRenderingContext2D, w: number, h: number, options: LedRenderOptions) {
  applyLedFinish(ctx, w, h, {
    pixelsAcross: pixelsAcross(w, options),
    bloom: options.outdoor ? 0.34 : 0.26,
    blackLevel: options.outdoor ? 0.05 : 0.035,
  })
}

function pixelsAcross(canvasW: number, options: LedRenderOptions) {
  if (options.widthFt && options.pixelPitchMm) {
    return Math.max(1, Math.round((options.widthFt * 304.8) / options.pixelPitchMm))
  }
  // Without product data, assume a 4mm-class wall at the canvas's own scale.
  return Math.max(1, Math.round(canvasW / 3))
}

function drawSelection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: number) {
  ctx.save()
  ctx.strokeStyle = ANC_BLUE_HI
  ctx.lineWidth = Math.max(2, Math.min(w, h) * 0.012)
  ctx.setLineDash([Math.max(8, w * 0.02), Math.max(5, w * 0.012)])
  ctx.lineDashOffset = -frame * 3
  ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, w - ctx.lineWidth, h - ctx.lineWidth)
  ctx.restore()
}

// ─── Sponsor marks ─────────────────────────────────────────────────

function sponsorImage(sponsor: Sponsor) {
  if (sponsor.logoUrl) return logoImages.get(sponsor.logoUrl) ?? null
  if (sponsor.id === 'none') return clientLogoImg
  return null
}

interface MarkBox { x: number; y: number; w: number; h: number }

/**
 * Draw a sponsor mark inside a box, returning the box it actually occupied so
 * callers can stack against it. Logos are never stretched, never overflow, and
 * fall back to a properly tracked wordmark rather than raw fillText.
 */
function drawSponsorMark(
  ctx: CanvasRenderingContext2D,
  sponsor: Sponsor,
  box: MarkBox,
  align: 'left' | 'center' | 'right' = 'left',
  alpha = 1,
  glow = true,
): MarkBox {
  const image = sponsorImage(sponsor)
  ctx.save()
  ctx.globalAlpha = alpha

  if (image && image.naturalWidth) {
    const scale = Math.min(box.w / image.naturalWidth, box.h / image.naturalHeight)
    const dw = image.naturalWidth * scale
    const dh = image.naturalHeight * scale
    const dx = align === 'left' ? box.x : align === 'right' ? box.x + box.w - dw : box.x + (box.w - dw) / 2
    const dy = box.y + (box.h - dh) / 2
    if (glow) {
      ctx.shadowColor = 'rgba(220,236,255,0.35)'
      ctx.shadowBlur = Math.max(4, dh * 0.16)
    }
    ctx.drawImage(image, dx, dy, dw, dh)
    ctx.restore()
    return { x: dx, y: dy, w: dw, h: dh }
  }

  const text = sponsor.id === 'none' ? 'YOUR BRAND' : (sponsor.logoText || sponsor.name.toUpperCase())
  const spec = { size: box.h * 0.78, weight: 900, tracking: -0.005 }
  ctx.fillStyle = WHITE
  ctx.textBaseline = 'middle'
  ctx.textAlign = align === 'center' ? 'center' : align
  if (glow) {
    ctx.shadowColor = 'rgba(220,236,255,0.3)'
    ctx.shadowBlur = Math.max(3, box.h * 0.14)
  }
  const x = align === 'left' ? box.x : align === 'right' ? box.x + box.w : box.x + box.w / 2
  const size = drawFittedText(ctx, text, x, box.y + box.h / 2, box.w, spec)
  ctx.restore()

  const width = Math.min(box.w, measureType(ctx, text, { ...spec, size }))
  const dx = align === 'left' ? box.x : align === 'right' ? box.x + box.w - width : box.x + (box.w - width) / 2
  return { x: dx, y: box.y + (box.h - size) / 2, w: width, h: size }
}

// ─── Campaign renderer ─────────────────────────────────────────────

type CampaignMode = 'spot' | 'lockup' | 'film' | 'takeover'

/**
 * A campaign plays as a three-beat spot: ESTABLISH → PUSH → LOCKUP. Each beat
 * is its own composition, not the same frame with the crop nudged — that is
 * what made the old loop read as a static photo with text sitting on it.
 */
function renderCampaign(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  sponsor: Sponsor,
  frame: number,
  mode: CampaignMode,
  phaseOverride?: number,
) {
  const campaign = getCampaignForSponsor(sponsor.id)
  const duration = mode === 'film' ? 10000 : 8000
  const progress = phaseOverride !== undefined
    ? clamp01(phaseOverride)
    : (Date.now() % duration) / duration

  const beat = Math.min(2, Math.floor(progress * 3)) as 0 | 1 | 2
  const beatT = clamp01((progress * 3) % 1)

  ctx.fillStyle = '#03070E'
  ctx.fillRect(0, 0, w, h)

  switch (layout) {
    case 'strip': renderStripCampaign(ctx, w, h, sponsor, campaign, progress); break
    case 'band': renderBandCampaign(ctx, w, h, sponsor, campaign, beat, beatT); break
    case 'tower': renderTowerCampaign(ctx, w, h, sponsor, campaign, beat, beatT, progress); break
    case 'tile': renderTileCampaign(ctx, w, h, sponsor, campaign, beat); break
    default: renderHeroCampaign(ctx, w, h, sponsor, campaign, mode, beat, beatT, progress); break
  }

  // One clean luminance snap on the cut, instead of a constant flicker.
  if (beatT < 0.05 && progress > 0.02) {
    ctx.fillStyle = `rgba(206,226,255,${(1 - beatT / 0.05) * 0.28})`
    ctx.fillRect(0, 0, w, h)
  }

  // Loop in and out so the spot never hard-cuts against itself.
  const opacity = Math.min(smoothStep(0, 0.05, progress), 1 - smoothStep(0.95, 1, progress))
  if (opacity < 1) {
    ctx.fillStyle = `rgba(2,5,10,${1 - opacity})`
    ctx.fillRect(0, 0, w, h)
  }
  void frame
}

/** Photographic plate with a per-beat crop, exposed for an emissive wall. */
function drawCampaignPlate(
  ctx: CanvasRenderingContext2D,
  campaign: VenueCampaign,
  w: number,
  h: number,
  beat: 0 | 1 | 2,
  beatT: number,
  focalBias = 0,
) {
  const image = logoImages.get(campaign.imageUrl)
  if (!image || !image.naturalWidth) {
    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, mixHex('#03070E', campaign.accent, 0.3))
    grad.addColorStop(1, '#03070E')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)
    return
  }

  const zoom = beat === 0 ? 1.02 : beat === 1 ? 1.26 : 1.06
  const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight) * (zoom + beatT * 0.05)
  const dw = image.naturalWidth * scale
  const dh = image.naturalHeight * scale
  const focalX = clamp01(campaign.focalX + focalBias + (beat === 1 ? 0.05 : 0) + (beatT - 0.5) * 0.02)
  ctx.drawImage(image, (w - dw) * focalX, (h - dh) * campaign.focalY, dw, dh)

  // Venue LED is emissive: push the plate past photographic exposure.
  liftExposure(ctx, w, h, 0.1)
}

/** Small, wide-tracked support line used across every layout. */
function drawKicker(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  size: number,
  color = 'rgba(226,238,255,0.72)',
) {
  ctx.fillStyle = color
  ctx.textBaseline = 'middle'
  drawFittedText(ctx, text, x, y, maxWidth, { size, weight: 700, tracking: 0.2 })
}

function sponsorKicker(sponsor: Sponsor) {
  return sponsor.id === 'none'
    ? 'PREMIUM PLACEMENT AVAILABLE'
    : `OFFICIAL PARTNER  ·  ${sponsor.name.toUpperCase()}`
}

function beatTwoLine(campaign: VenueCampaign) {
  switch (campaign.id) {
    case 'ice': return 'POURED COLD ALL NIGHT'
    case 'drive': return 'ENGINEERED FOR GAME NIGHT'
    case 'access': return 'FRONT OF THE LINE'
    default: return 'THE NIGHT STARTS NOW'
  }
}

// ── HERO: main boards, endzone boards, mall walls ──────────────────

function renderHeroCampaign(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sponsor: Sponsor,
  campaign: VenueCampaign,
  mode: CampaignMode,
  beat: 0 | 1 | 2,
  beatT: number,
  progress: number,
) {
  const area = safeArea(w, h)
  drawCampaignPlate(ctx, campaign, w, h, beat, beatT)

  if (beat === 2) {
    // LOCKUP — the frame the sponsor is actually paying for.
    drawScrim(ctx, w, h, 'full', 1)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const mark = drawSponsorMark(ctx, sponsor, { x: w * 0.2, y: h * 0.22, w: w * 0.6, h: h * 0.28 }, 'center', 1)
    const ruleY = mark.y + mark.h + h * 0.08
    drawAccentRule(ctx, w / 2 - w * 0.09, ruleY, w * 0.18, Math.max(2, h * 0.014), campaign.accent)

    ctx.fillStyle = WHITE
    drawFittedText(ctx, campaign.line, w / 2, ruleY + h * 0.14, area.w * 0.86, {
      size: h * 0.115, weight: 900, tracking: 0.01,
    })
    drawKicker(ctx, sponsorKicker(sponsor), w / 2, h - area.inset - h * 0.04, area.w * 0.8, h * 0.048)
    return
  }

  // ESTABLISH / PUSH — type in a left column over a directional scrim.
  drawScrim(ctx, w, h, 'left', beat === 1 ? 0.82 : 1)

  const colX = area.x + w * 0.028
  const colW = w * 0.5

  drawAccentRule(ctx, area.x, h * 0.2, h * 0.58, Math.max(3, w * 0.006), campaign.accent, false)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'

  const markH = beat === 1 ? h * 0.1 : h * 0.16
  const markY = beat === 1 ? h * 0.14 : h * 0.22
  drawSponsorMark(ctx, sponsor, { x: colX, y: markY, w: colW * 0.6, h: markH }, 'left', 1)

  ctx.fillStyle = WHITE
  drawWrappedText(
    ctx,
    beat === 1 ? beatTwoLine(campaign) : campaign.line,
    colX,
    beat === 1 ? h * 0.6 : h * 0.55,
    colW,
    { size: h * (mode === 'film' ? 0.15 : 0.13), weight: 900, tracking: -0.005 },
    2,
    1.02,
  )

  drawKicker(
    ctx,
    beat === 1 ? 'LIVE IN VENUE TONIGHT' : sponsorKicker(sponsor),
    colX,
    h - area.inset - h * 0.045,
    colW,
    h * 0.048,
  )

  drawLightSweep(ctx, w, h, progress, 0.1)
}

// ── BAND: fascia runs, tunnel headers (aspect 3.2–9) ───────────────

function renderBandCampaign(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sponsor: Sponsor,
  campaign: VenueCampaign,
  beat: 0 | 1 | 2,
  beatT: number,
) {
  drawCampaignPlate(ctx, campaign, w, h, beat, beatT, 0.1)
  drawScrim(ctx, w, h, 'left', 0.95)

  const area = safeArea(w, h)
  const plateW = w * 0.24
  const brandColor = sponsor.id === 'none' ? ANC_BLUE : sponsor.color

  const plate = ctx.createLinearGradient(0, 0, plateW, 0)
  plate.addColorStop(0, rgba(brandColor, 0.96))
  plate.addColorStop(1, rgba(brandColor, 0))
  ctx.fillStyle = plate
  ctx.fillRect(0, 0, plateW, h)

  drawSponsorMark(ctx, sponsor, { x: area.x, y: h * 0.22, w: plateW * 0.74, h: h * 0.56 }, 'left', 1)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = WHITE
  drawFittedText(ctx, campaign.line, plateW + w * 0.03, h * 0.42, w * 0.5, {
    size: h * 0.36, weight: 900, tracking: 0.005,
  })
  drawKicker(ctx, sponsorKicker(sponsor), plateW + w * 0.03, h * 0.74, w * 0.5, h * 0.14)

  drawAccentRule(ctx, w - area.inset, h * 0.18, h * 0.64, Math.max(3, w * 0.004), campaign.accent, false)
}

// ── STRIP: ribbons, courtside tables, long fascia (aspect > 9) ─────

/**
 * A ribbon is one seamless message loop. The old version tiled from a fixed x
 * with a mismatched modulo, so copies printed over each other and the board
 * read as noise. Here the repeat unit is measured once and tiling starts from a
 * negative offset, which guarantees exactly one clean pass.
 */
function renderStripCampaign(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sponsor: Sponsor,
  campaign: VenueCampaign,
  progress: number,
) {
  const brandColor = sponsor.id === 'none' ? ANC_BLUE : sponsor.color
  const field = ctx.createLinearGradient(0, 0, w, 0)
  field.addColorStop(0, mixHex('#03070E', brandColor, 0.55))
  field.addColorStop(0.5, mixHex('#03070E', brandColor, 0.2))
  field.addColorStop(1, mixHex('#03070E', brandColor, 0.55))
  ctx.fillStyle = field
  ctx.fillRect(0, 0, w, h)

  // Machined edges — what makes a strip read as hardware at distance.
  ctx.fillStyle = rgba(campaign.accent, 0.9)
  ctx.fillRect(0, 0, w, Math.max(1, h * 0.06))
  ctx.fillStyle = rgba(campaign.accent, 0.32)
  ctx.fillRect(0, h - Math.max(1, h * 0.04), w, Math.max(1, h * 0.04))

  const message = campaign.line.toUpperCase()
  const spec = { size: h * 0.62, weight: 900, tracking: 0.05 }
  const textW = measureType(ctx, message, spec)
  const gap = h * 1.5
  const markW = h * 3.4
  const diamond = h * 0.34
  const unitW = markW + gap + textW + gap + diamond + gap

  const travel = (progress * unitW * 3) % unitW

  ctx.save()
  ctx.beginPath()
  ctx.rect(0, 0, w, h)
  ctx.clip()
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'left'

  for (let x = -travel; x < w; x += unitW) {
    let cursor = x
    drawSponsorMark(ctx, sponsor, { x: cursor, y: h * 0.2, w: markW, h: h * 0.6 }, 'left', 1, false)
    cursor += markW + gap

    ctx.fillStyle = WHITE
    setType(ctx, spec)
    ctx.fillText(message, cursor, h * 0.54)
    resetType(ctx)
    cursor += textW + gap

    ctx.save()
    ctx.translate(cursor + diamond / 2, h * 0.52)
    ctx.rotate(Math.PI / 4)
    ctx.fillStyle = rgba(campaign.accent, 0.95)
    ctx.fillRect(-diamond / 2.6, -diamond / 2.6, diamond / 1.3, diamond / 1.3)
    ctx.restore()
  }
  ctx.restore()
}

// ── TOWER: totems, column wraps, wayfinding ────────────────────────

function renderTowerCampaign(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sponsor: Sponsor,
  campaign: VenueCampaign,
  beat: 0 | 1 | 2,
  beatT: number,
  progress: number,
) {
  const area = safeArea(w, h)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (beat === 2) {
    // LOCKUP — a totem's third beat drops the photography for a clean plate,
    // the same way the hero boards resolve.
    const brandColor = sponsor.id === 'none' ? ANC_BLUE : sponsor.color
    const field = ctx.createLinearGradient(0, 0, w, h)
    field.addColorStop(0, mixHex('#050A14', brandColor, 0.42))
    field.addColorStop(1, '#03060C')
    ctx.fillStyle = field
    ctx.fillRect(0, 0, w, h)

    const mark = drawSponsorMark(ctx, sponsor, { x: area.x, y: h * 0.3, w: area.w, h: h * 0.16 }, 'center', 1)
    drawAccentRule(ctx, w / 2 - area.w * 0.22, mark.y + mark.h + h * 0.05, area.w * 0.44, Math.max(2, h * 0.006), campaign.accent)

    ctx.fillStyle = WHITE
    drawWrappedText(ctx, campaign.line, w / 2, h * 0.62, area.w, {
      size: w * 0.16, weight: 900, tracking: 0,
    }, 3, 1.05)
    drawKicker(ctx, sponsorKicker(sponsor), w / 2, h - area.inset - h * 0.015, area.w, w * 0.055)
    drawLightSweep(ctx, w, h, progress, 0.08)
    return
  }

  drawCampaignPlate(ctx, campaign, w, h, beat, beatT)
  drawScrim(ctx, w, h, 'bottom', 1)

  drawAccentRule(ctx, area.x, h * 0.57, area.w, Math.max(2, h * 0.006), campaign.accent)
  drawSponsorMark(ctx, sponsor, { x: area.x, y: h * 0.61, w: area.w, h: h * 0.12 }, 'center', 1)

  ctx.fillStyle = WHITE
  drawWrappedText(ctx, beat === 1 ? beatTwoLine(campaign) : campaign.line, w / 2, h * 0.82, area.w, {
    size: w * 0.15, weight: 900, tracking: 0,
  }, 3, 1.05)

  drawKicker(ctx, sponsorKicker(sponsor), w / 2, h - area.inset - h * 0.015, area.w, w * 0.055)
  drawLightSweep(ctx, w, h, progress, 0.08)
}

// ── TILE: stanchions, small panels ─────────────────────────────────

function renderTileCampaign(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sponsor: Sponsor,
  campaign: VenueCampaign,
  beat: 0 | 1 | 2,
) {
  // Too small for photography — a brand field is what reads across a bowl.
  const brandColor = sponsor.id === 'none' ? ANC_BLUE : sponsor.color
  const field = ctx.createLinearGradient(0, 0, w, h)
  field.addColorStop(0, mixHex(brandColor, '#FFFFFF', 0.2))
  field.addColorStop(0.55, brandColor)
  field.addColorStop(1, mixHex(brandColor, '#000000', 0.42))
  ctx.fillStyle = field
  ctx.fillRect(0, 0, w, h)

  const area = safeArea(w, h)
  const onLight = isLightColor(brandColor)
  const ink = onLight ? 'rgba(3,7,14,' : 'rgba(226,238,255,'

  // A raking highlight keeps a flat panel from reading as dead colour.
  const rake = ctx.createLinearGradient(0, h, w, 0)
  rake.addColorStop(0, 'rgba(255,255,255,0)')
  rake.addColorStop(0.5, `rgba(255,255,255,${onLight ? 0.06 : 0.09})`)
  rake.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = rake
  ctx.fillRect(0, 0, w, h)

  // Base bar — the panel's ANC-built signature at the bottom edge.
  ctx.fillStyle = rgba(campaign.accent, 0.95)
  ctx.fillRect(0, h - Math.max(2, h * 0.035), w, Math.max(2, h * 0.035))

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (beat === 2) {
    ctx.fillStyle = onLight ? 'rgba(3,7,14,0.94)' : WHITE
    drawWrappedText(ctx, campaign.line, w / 2, h * 0.48, area.w, {
      size: h * 0.2, weight: 900, tracking: 0.01,
    }, 3, 1.05)
    return
  }

  if (beat === 1) {
    // Second beat inverts to a knocked-out plate so the panel visibly cycles.
    ctx.fillStyle = onLight ? 'rgba(255,255,255,0.9)' : 'rgba(2,6,13,0.82)'
    ctx.fillRect(area.x, h * 0.16, area.w, h * 0.52)
    drawSponsorMark(ctx, sponsor, { x: area.x, y: h * 0.22, w: area.w * 0.86, h: h * 0.4 }, 'center', 1)
    drawKicker(ctx, beatTwoLine(campaign), w / 2, h * 0.8, area.w, h * 0.09, `${ink}0.82)`)
    return
  }

  drawSponsorMark(ctx, sponsor, { x: area.x, y: h * 0.18, w: area.w, h: h * 0.4 }, 'center', 1)
  drawAccentRule(ctx, w / 2 - area.w * 0.2, h * 0.68, area.w * 0.4, Math.max(2, h * 0.022), campaign.accent)
  drawKicker(ctx, 'OFFICIAL PARTNER', w / 2, h * 0.81, area.w, h * 0.085, `${ink}0.72)`)
}

/** Specular sweep — reads as a real panel catching light, at low cost. */
function drawLightSweep(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, strength: number) {
  const x = (progress * 1.5 - 0.25) * w
  const grad = ctx.createLinearGradient(x - w * 0.14, 0, x + w * 0.14, 0)
  grad.addColorStop(0, 'rgba(255,255,255,0)')
  grad.addColorStop(0.5, `rgba(226,240,255,${strength})`)
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)
}

// ─── Scoreboard ────────────────────────────────────────────────────

function renderScheduledScore(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  sponsor: Sponsor,
  frame: number,
  phaseOverride?: number,
) {
  const cycle = phaseOverride !== undefined ? clamp01(phaseOverride) * 16000 : Date.now() % 16000
  if (cycle > 9500) {
    renderCampaign(ctx, w, h, layout, sponsor, frame, 'spot', (cycle - 9500) / 6500)
    return
  }
  if (layout === 'strip' || layout === 'band') renderScoreStrip(ctx, w, h, sponsor)
  else renderBroadcastScore(ctx, w, h, sponsor, frame)
}

/**
 * Broadcast scorebug. Every column is measured and the cluster is centred as
 * one group, so the two scores can never run together the way "24" and "17"
 * used to collide into "2417".
 */
function renderBroadcastScore(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  const data = liveGameData
  const area = safeArea(w, h)

  const bg = ctx.createLinearGradient(0, 0, w * 0.6, h)
  bg.addColorStop(0, '#040B18')
  bg.addColorStop(0.55, '#0A1E3C')
  bg.addColorStop(1, '#02060D')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  // Each team's colour washes in from its own edge.
  const homeWash = ctx.createLinearGradient(0, 0, w * 0.42, 0)
  homeWash.addColorStop(0, rgba(teamColor(data.homeTeam, 0), 0.9))
  homeWash.addColorStop(1, rgba(teamColor(data.homeTeam, 0), 0))
  ctx.fillStyle = homeWash
  ctx.fillRect(0, 0, w * 0.42, h)
  const awayWash = ctx.createLinearGradient(w, 0, w * 0.58, 0)
  awayWash.addColorStop(0, rgba(teamColor(data.awayTeam, 0), 0.9))
  awayWash.addColorStop(1, rgba(teamColor(data.awayTeam, 0), 0))
  ctx.fillStyle = awayWash
  ctx.fillRect(w * 0.58, 0, w * 0.42, h)

  // Header rail
  const railH = h * 0.15
  ctx.fillStyle = 'rgba(2,6,13,0.72)'
  ctx.fillRect(0, 0, w, railH)
  drawAccentRule(ctx, 0, 0, railH, Math.max(3, w * 0.008), ANC_BLUE, false)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  const liveOn = Math.floor(frame * 0.12) % 2 === 0
  ctx.fillStyle = liveOn ? '#FF3B4E' : 'rgba(255,59,78,0.4)'
  ctx.beginPath()
  ctx.arc(area.x + h * 0.05, railH / 2, Math.max(2, h * 0.022), 0, Math.PI * 2)
  ctx.fill()
  drawKicker(ctx, 'LIVE  ·  NIGHT GAME', area.x + h * 0.1, railH / 2, w * 0.4, railH * 0.42, 'rgba(206,226,255,0.88)')

  // Score cluster — measured as one group, then scaled to the safe width so it
  // can neither collide in the middle nor clip the team abbreviations off the
  // ends, at any board aspect.
  const homeScore = String(data.homeScore)
  const awayScore = String(data.awayScore)
  let scoreSpec = { size: h * 0.4, weight: 900, tracking: -0.03 }
  let abbrSpec = { size: h * 0.15, weight: 800, tracking: 0.09 }
  let chipW = Math.max(3, w * 0.006)
  let colGap = w * 0.03
  let centreGap = w * 0.055

  const clusterWidth = () =>
    chipW + colGap * 0.5 + measureType(ctx, data.homeTeam, abbrSpec) + colGap + measureType(ctx, homeScore, scoreSpec)
    + centreGap
    + measureType(ctx, awayScore, scoreSpec) + colGap + measureType(ctx, data.awayTeam, abbrSpec) + colGap * 0.5 + chipW

  let total = clusterWidth()
  if (total > area.w) {
    const k = area.w / total
    scoreSpec = { ...scoreSpec, size: scoreSpec.size * k }
    abbrSpec = { ...abbrSpec, size: abbrSpec.size * k }
    chipW *= k
    colGap *= k
    centreGap *= k
    total = clusterWidth()
  }

  const homeScoreW = measureType(ctx, homeScore, scoreSpec)
  const awayScoreW = measureType(ctx, awayScore, scoreSpec)
  const homeAbbrW = measureType(ctx, data.homeTeam, abbrSpec)
  const awayAbbrW = measureType(ctx, data.awayTeam, abbrSpec)
  const midY = h * 0.52
  let cursor = (w - total) / 2

  ctx.fillStyle = teamColor(data.homeTeam, 1)
  ctx.fillRect(cursor, midY - h * 0.16, chipW, h * 0.32)
  cursor += chipW + colGap * 0.5

  ctx.textAlign = 'left'
  ctx.fillStyle = 'rgba(226,238,255,0.92)'
  setType(ctx, abbrSpec)
  ctx.fillText(data.homeTeam, cursor, midY)
  resetType(ctx)
  cursor += homeAbbrW + colGap

  ctx.fillStyle = WHITE
  setType(ctx, scoreSpec)
  ctx.fillText(homeScore, cursor, midY)
  resetType(ctx)
  cursor += homeScoreW

  const sepX = cursor + centreGap / 2
  ctx.fillStyle = 'rgba(143,182,255,0.45)'
  ctx.fillRect(sepX - Math.max(1, w * 0.0015), midY - h * 0.1, Math.max(2, w * 0.003), h * 0.2)
  cursor += centreGap

  ctx.fillStyle = WHITE
  setType(ctx, scoreSpec)
  ctx.fillText(awayScore, cursor, midY)
  resetType(ctx)
  cursor += awayScoreW + colGap

  ctx.fillStyle = 'rgba(226,238,255,0.92)'
  setType(ctx, abbrSpec)
  ctx.fillText(data.awayTeam, cursor, midY)
  resetType(ctx)
  cursor += awayAbbrW + colGap * 0.5

  ctx.fillStyle = teamColor(data.awayTeam, 1)
  ctx.fillRect(cursor, midY - h * 0.16, chipW, h * 0.32)

  // Situation rail
  const railY = h * 0.82
  ctx.fillStyle = 'rgba(2,6,13,0.68)'
  ctx.fillRect(0, railY, w, h - railY)
  ctx.fillStyle = 'rgba(255,255,255,0.1)'
  ctx.fillRect(0, railY, w, Math.max(1, h * 0.004))

  ctx.textAlign = 'left'
  ctx.fillStyle = 'rgba(215,228,248,0.94)'
  drawFittedText(
    ctx,
    `Q${data.quarter}   ${data.clock}   ·   ${data.down.toUpperCase()}   ·   BALL ON 45`,
    area.x,
    railY + (h - railY) / 2,
    w * 0.62,
    { size: h * 0.075, weight: 700, tracking: 0.1, font: MONO_FONT },
  )

  if (sponsor.id !== 'none') {
    const markW = w * 0.13
    drawSponsorMark(
      ctx,
      sponsor,
      { x: w - area.inset - markW, y: railY + (h - railY) * 0.18, w: markW, h: (h - railY) * 0.64 },
      'right',
      0.9,
      false,
    )
  }
}

/** Score reduced to one readable line for ribbons and fascia. */
function renderScoreStrip(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor) {
  const data = liveGameData
  const bg = ctx.createLinearGradient(0, 0, w, 0)
  bg.addColorStop(0, mixHex('#03070E', teamColor(data.homeTeam, 0), 0.65))
  bg.addColorStop(0.5, '#050C18')
  bg.addColorStop(1, mixHex('#03070E', teamColor(data.awayTeam, 0), 0.65))
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = rgba(ANC_BLUE_HI, 0.85)
  ctx.fillRect(0, 0, w, Math.max(1, h * 0.06))

  const line = `${data.homeTeam} ${data.homeScore}   ·   ${data.awayTeam} ${data.awayScore}   ·   Q${data.quarter} ${data.clock}   ·   ${data.down.toUpperCase()}`

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = WHITE
  drawFittedText(ctx, line, w / 2, h * 0.55, w * 0.8, { size: h * 0.5, weight: 900, tracking: 0.04 })

  if (sponsor.id !== 'none') {
    drawSponsorMark(ctx, sponsor, { x: w * 0.87, y: h * 0.22, w: w * 0.1, h: h * 0.56 }, 'right', 0.85, false)
  }
}

// ─── Replay ────────────────────────────────────────────────────────

function renderCinematicReplay(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  sponsor: Sponsor,
  frame: number,
  phaseOverride?: number,
) {
  renderCampaign(ctx, w, h, layout, sponsor, frame, 'spot', phaseOverride)
  if (layout === 'strip') return

  const area = safeArea(w, h)
  const flagH = h * 0.13
  const label = 'REPLAY'
  const labelSpec = { size: flagH * 0.6, weight: 900, tracking: 0.14 }
  const labelW = measureType(ctx, label, labelSpec)
  const dotR = flagH * 0.15
  const pad = flagH * 0.42
  const flagW = pad + dotR * 2 + pad * 0.6 + labelW + pad

  ctx.save()
  ctx.fillStyle = 'rgba(3,7,14,0.86)'
  ctx.fillRect(area.x, area.y, flagW, flagH)
  ctx.fillStyle = '#FF2E43'
  ctx.fillRect(area.x, area.y, Math.max(3, w * 0.005), flagH)

  const on = Math.floor(frame * 0.14) % 2 === 0
  ctx.fillStyle = on ? '#FF2E43' : 'rgba(255,46,67,0.35)'
  ctx.beginPath()
  ctx.arc(area.x + pad + dotR, area.y + flagH / 2, dotR, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = WHITE
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  setType(ctx, labelSpec)
  ctx.fillText(label, area.x + pad + dotR * 2 + pad * 0.6, area.y + flagH / 2)
  resetType(ctx)
  ctx.restore()

  // Scrub bar — sells it as footage rather than a still.
  const barY = h - area.inset - h * 0.02
  const scrub = phaseOverride !== undefined ? clamp01(phaseOverride) : ((frame * 0.6) % 100) / 100
  ctx.fillStyle = 'rgba(255,255,255,0.14)'
  ctx.fillRect(area.x, barY, area.w, Math.max(2, h * 0.012))
  ctx.fillStyle = '#FF2E43'
  ctx.fillRect(area.x, barY, area.w * scrub, Math.max(2, h * 0.012))
}

// ─── Trigger renderers ─────────────────────────────────────────────

function renderTriggerContent(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  trigger: TriggerState,
  progress: number,
  frame: number,
  zoneSponsor: Sponsor,
) {
  switch (trigger.type) {
    case 'touchdown':
      renderBigMoment(ctx, w, h, layout, 'TOUCHDOWN', progress, frame, trigger.sponsor); break
    case 'goal':
      renderBigMoment(ctx, w, h, layout, 'GOAL', progress, frame, trigger.sponsor); break
    case 'sponsor-takeover':
      renderCampaign(ctx, w, h, layout, trigger.sponsor || zoneSponsor, frame, 'takeover', progress); break
    case 'halftime-show':
      renderCampaign(ctx, w, h, layout, trigger.sponsor || zoneSponsor, frame, 'film', progress); break
    case 'timeout':
      renderTimeout(ctx, w, h, layout, progress, trigger.sponsor || zoneSponsor); break
    case 'weather-alert':
      renderAlert(ctx, w, h, layout, 'WEATHER ALERT',
        `${liveGameData.weather.icon}  ${liveGameData.weather.temp}°F · ${liveGameData.weather.condition}`,
        'Move to the nearest enclosed concourse', '#C8901A', progress, frame); break
    case 'emergency':
      renderAlert(ctx, w, h, layout, 'EVACUATE', 'PROCEED TO NEAREST EXIT',
        'Follow staff direction · Do not run', '#C81028', progress, frame); break
    default: break
  }
}

/**
 * Big-moment take: white flash, team-coloured burst, headline, then the
 * sponsor credit the moment was sold with.
 */
function renderBigMoment(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  word: string,
  progress: number,
  frame: number,
  sponsor?: Sponsor,
) {
  const data = liveGameData
  const base = teamColor(data.homeTeam, 0)
  const accent = teamColor(data.homeTeam, 1)

  const pulse = Math.sin(frame * 0.11) * 0.12 + 0.88
  const grad = ctx.createRadialGradient(w / 2, h * 0.45, 0, w / 2, h * 0.45, Math.max(w, h) * 0.75)
  grad.addColorStop(0, rgba(accent, pulse))
  grad.addColorStop(0.45, rgba(base, pulse * 0.92))
  grad.addColorStop(1, '#01050C')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  ctx.save()
  ctx.translate(w / 2, h * 0.45)
  for (let i = 0; i < 14; i++) {
    ctx.save()
    ctx.rotate((i / 14) * Math.PI * 2 + frame * 0.012)
    const beam = ctx.createLinearGradient(0, 0, Math.max(w, h), 0)
    beam.addColorStop(0, 'rgba(255,255,255,0.16)')
    beam.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = beam
    ctx.fillRect(0, -h * 0.012, Math.max(w, h), h * 0.024)
    ctx.restore()
  }
  ctx.restore()

  if (progress < 0.14) {
    ctx.fillStyle = `rgba(255,255,255,${(1 - progress / 0.14) * 0.85})`
    ctx.fillRect(0, 0, w, h)
  }

  const area = safeArea(w, h)
  const alpha = smoothStep(0.08, 0.24, progress)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (layout === 'strip' || layout === 'band') {
    ctx.fillStyle = `rgba(255,255,255,${alpha})`
    drawFittedText(
      ctx,
      `${word}   ·   ${data.homeTeam} ${data.homeScore} — ${data.awayTeam} ${data.awayScore}`,
      w / 2, h * 0.55, area.w,
      { size: h * 0.5, weight: 900, tracking: 0.05 },
    )
    return
  }

  ctx.save()
  ctx.translate(w / 2, h * 0.42)
  const scale = 1 + Math.sin(frame * 0.09) * 0.02
  ctx.scale(scale, scale)
  ctx.fillStyle = `rgba(255,255,255,${alpha})`
  ctx.shadowColor = rgba(accent, 0.7)
  ctx.shadowBlur = Math.max(8, h * 0.1)
  drawFittedText(ctx, word, 0, 0, area.w * 0.96, { size: h * 0.34, weight: 900, tracking: 0.02 })
  ctx.restore()

  ctx.fillStyle = `rgba(255,255,255,${alpha * 0.92})`
  drawFittedText(
    ctx,
    `${data.homeTeam} ${data.homeScore}   —   ${data.awayTeam} ${data.awayScore}`,
    w / 2, h * 0.67, area.w * 0.7,
    { size: h * 0.12, weight: 800, tracking: 0.04 },
  )

  if (progress > 0.45 && sponsor && sponsor.id !== 'none') {
    const credit = smoothStep(0.45, 0.62, progress)
    drawKicker(ctx, `PRESENTED BY ${sponsor.name.toUpperCase()}`, w / 2, h * 0.83, area.w * 0.7, h * 0.048,
      `rgba(226,238,255,${credit * 0.8})`)
    const markW = w * 0.16
    drawSponsorMark(ctx, sponsor, { x: (w - markW) / 2, y: h * 0.87, w: markW, h: h * 0.08 }, 'center', credit * 0.9, false)
  }
}

function renderAlert(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  title: string,
  detail: string,
  instruction: string,
  color: string,
  progress: number,
  frame: number,
) {
  const flash = Math.sin(frame * 0.16) * 0.1 + 0.9
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, rgba(color, flash))
  grad.addColorStop(1, rgba(mixHex(color, '#000000', 0.45), flash))
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Hazard chevrons top and bottom.
  const bandH = Math.max(2, h * 0.07)
  const stripe = Math.max(6, h * 0.18)
  ctx.save()
  ctx.fillStyle = 'rgba(2,6,13,0.55)'
  for (let x = -stripe * 2 + ((frame * 2) % (stripe * 2)); x < w + stripe * 2; x += stripe * 2) {
    for (const y of [0, h - bandH]) {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + stripe, y)
      ctx.lineTo(x + stripe * 0.5, y + bandH)
      ctx.lineTo(x - stripe * 0.5, y + bandH)
      ctx.closePath()
      ctx.fill()
    }
  }
  ctx.restore()

  const area = safeArea(w, h)
  const alpha = smoothStep(0.04, 0.14, progress)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = `rgba(3,7,14,${alpha * 0.95})`

  if (layout === 'strip' || layout === 'band') {
    drawFittedText(ctx, `${title}   ·   ${instruction.toUpperCase()}`, w / 2, h * 0.55, area.w, {
      size: h * 0.46, weight: 900, tracking: 0.05,
    })
    return
  }

  drawFittedText(ctx, title, w / 2, h * 0.4, area.w * 0.94, { size: h * 0.24, weight: 900, tracking: 0.03 })
  ctx.fillStyle = `rgba(3,7,14,${alpha * 0.82})`
  drawFittedText(ctx, detail, w / 2, h * 0.6, area.w * 0.8, { size: h * 0.11, weight: 800, tracking: 0.05 })
  ctx.fillStyle = `rgba(3,7,14,${alpha * 0.62})`
  drawFittedText(ctx, instruction, w / 2, h * 0.76, area.w * 0.86, { size: h * 0.07, weight: 700, tracking: 0.06 })
}

function renderTimeout(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  layout: LayoutClass,
  progress: number,
  sponsor: Sponsor,
) {
  const brandColor = sponsor.id === 'none' ? ANC_BLUE : sponsor.color
  const grad = ctx.createLinearGradient(0, 0, w, h)
  grad.addColorStop(0, mixHex('#050A14', brandColor, 0.35))
  grad.addColorStop(1, '#03060C')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  const area = safeArea(w, h)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (layout === 'strip' || layout === 'band') {
    ctx.fillStyle = WHITE
    drawFittedText(
      ctx,
      `OFFICIAL TIMEOUT   ·   ${sponsor.id === 'none' ? 'ANC' : sponsor.name.toUpperCase()}`,
      w / 2, h * 0.55, area.w,
      { size: h * 0.46, weight: 900, tracking: 0.05 },
    )
    return
  }

  drawKicker(ctx, 'OFFICIAL TIMEOUT', w / 2, h * 0.15, area.w * 0.7, h * 0.065)
  drawSponsorMark(ctx, sponsor, { x: w * 0.22, y: h * 0.28, w: w * 0.56, h: h * 0.32 }, 'center', 1)
  drawAccentRule(ctx, w / 2 - w * 0.08, h * 0.69, w * 0.16, Math.max(2, h * 0.014), brandColor)
  drawKicker(
    ctx,
    sponsor.id === 'none' ? 'TIMEOUT SPONSORSHIP AVAILABLE' : `BROUGHT TO YOU BY ${sponsor.name.toUpperCase()}`,
    w / 2, h * 0.79, area.w * 0.86, h * 0.055,
  )

  const barY = h - area.inset - h * 0.03
  ctx.fillStyle = 'rgba(255,255,255,0.1)'
  ctx.fillRect(area.x, barY, area.w, Math.max(2, h * 0.026))
  ctx.fillStyle = brandColor
  ctx.fillRect(area.x, barY, area.w * (1 - clamp01(progress)), Math.max(2, h * 0.026))
}

// ─── Utility ───────────────────────────────────────────────────────

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}
