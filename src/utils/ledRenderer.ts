import type { ContentType, Sponsor, LiveSyncTrigger, LiveGameData } from '@/types'

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
) {
  if (!enabled) {
    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, '#080808')
    grad.addColorStop(1, '#050505')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)
    ctx.fillStyle = 'rgba(255,255,255,0.008)'
    for (let x = 0; x < w; x += 6) {
      for (let y = 0; y < h; y += 6) {
        ctx.fillRect(x + 1, y + 1, 4, 4)
      }
    }
    return
  }

  // Check for active LiveSync trigger
  const trigger = getActiveTrigger()
  if (trigger) {
    const elapsed = Date.now() - trigger.startTime
    const progress = elapsed / trigger.duration
    renderTriggerContent(ctx, w, h, trigger, progress, frame, sponsor)

    if (selected) {
      ctx.strokeStyle = '#0A52EF'
      ctx.lineWidth = 3
      ctx.setLineDash([8, 4])
      ctx.lineDashOffset = -frame * 2
      ctx.strokeRect(1, 1, w - 2, h - 2)
      ctx.setLineDash([])
    }
    return
  }

  // Background gradient — brightened for visibility at distance
  if (sponsor.id !== 'none') {
    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, adjustBrightness(sponsor.color, 30))
    grad.addColorStop(1, sponsor.color)
    ctx.fillStyle = grad
  } else {
    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, '#1a3a5e')
    grad.addColorStop(1, '#0d2040')
    ctx.fillStyle = grad
  }
  ctx.fillRect(0, 0, w, h)

  // Subtle scan line
  const scanY = (frame * 2) % h
  ctx.fillStyle = 'rgba(255,255,255,0.025)'
  ctx.fillRect(0, scanY, w, 2)

  // LED pixel grid (subtle)
  ctx.fillStyle = 'rgba(0,0,0,0.04)'
  for (let x = 0; x < w; x += 8) {
    ctx.fillRect(x, 0, 1, h)
  }

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  switch (content) {
    case 'score': renderScore(ctx, w, h, sponsor, frame); break
    case 'logo': renderLogo(ctx, w, h, sponsor); break
    case 'ad': renderAd(ctx, w, h, sponsor, frame); break
    case 'replay': renderReplay(ctx, w, h, sponsor, frame); break
    case 'animation': renderAnimation(ctx, w, h, sponsor, frame); break
  }

  // Selection indicator
  if (selected) {
    ctx.strokeStyle = '#0A52EF'
    ctx.lineWidth = 3
    ctx.setLineDash([8, 4])
    ctx.lineDashOffset = -frame * 2
    ctx.strokeRect(1, 1, w - 2, h - 2)
    ctx.setLineDash([])
  }
}

// ─── Trigger Renderers ─────────────────────────────────────────────
function renderTriggerContent(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  trigger: TriggerState,
  progress: number,
  frame: number,
  zoneSponsor: Sponsor,
) {
  switch (trigger.type) {
    case 'touchdown': renderTouchdown(ctx, w, h, progress, frame, trigger.sponsor); break
    case 'goal': renderGoal(ctx, w, h, progress, frame, trigger.sponsor); break
    case 'sponsor-takeover': renderSponsorTakeover(ctx, w, h, progress, frame, trigger.sponsor || zoneSponsor); break
    case 'weather-alert': renderWeatherAlert(ctx, w, h, progress, frame); break
    case 'timeout': renderTimeout(ctx, w, h, progress, frame, trigger.sponsor || zoneSponsor); break
    case 'halftime-show': renderHalftimeShow(ctx, w, h, progress, frame); break
    case 'emergency': renderEmergency(ctx, w, h, progress, frame); break
    default: break
  }
}

function renderTouchdown(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number, sponsor?: Sponsor) {
  // Phase 1: Flash (0-15%)
  if (progress < 0.15) {
    const flashIntensity = Math.sin((progress / 0.15) * Math.PI * 4) * 0.5 + 0.5
    ctx.fillStyle = `rgba(255,255,255,${flashIntensity})`
    ctx.fillRect(0, 0, w, h)
  }

  // Background: pulsing team gradient
  const pulse = Math.sin(frame * 0.1) * 0.15 + 0.85
  const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.8)
  grad.addColorStop(0, `rgba(200,16,46,${pulse})`)
  grad.addColorStop(0.5, `rgba(0,48,135,${pulse * 0.8})`)
  grad.addColorStop(1, '#000a1a')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Particle burst effect
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2 + frame * 0.02
    const dist = (progress * w * 0.5) + Math.sin(frame * 0.05 + i) * 20
    const px = w / 2 + Math.cos(angle) * dist
    const py = h / 2 + Math.sin(angle) * dist * 0.5
    const size = Math.max(1, 4 - progress * 4)
    ctx.fillStyle = `rgba(255,215,0,${0.6 - progress * 0.5})`
    ctx.beginPath()
    ctx.arc(px, py, size, 0, Math.PI * 2)
    ctx.fill()
  }

  // Phase 2: Main text (15-70%)
  if (progress > 0.1) {
    const textAlpha = Math.min(1, (progress - 0.1) / 0.15)
    const scale = 1 + Math.sin(frame * 0.08) * 0.03

    ctx.save()
    ctx.translate(w / 2, h * 0.42)
    ctx.scale(scale, scale)

    ctx.fillStyle = `rgba(255,215,0,${textAlpha})`
    ctx.shadowColor = 'rgba(255,215,0,0.6)'
    ctx.shadowBlur = 30
    ctx.font = `900 ${h * 0.32}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('TOUCHDOWN!', 0, 0)
    ctx.shadowBlur = 0

    ctx.restore()

    // Score update
    ctx.fillStyle = `rgba(255,255,255,${textAlpha * 0.8})`
    ctx.font = `600 ${h * 0.1}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(`${liveGameData.homeTeam} ${liveGameData.homeScore}  —  ${liveGameData.awayTeam} ${liveGameData.awayScore}`, w / 2, h * 0.65)
  }

  // Phase 3: Sponsor credit (50%+)
  if (progress > 0.5 && sponsor && sponsor.id !== 'none') {
    const creditAlpha = Math.min(1, (progress - 0.5) / 0.2)
    ctx.fillStyle = `rgba(255,255,255,${creditAlpha * 0.5})`
    ctx.font = `400 ${h * 0.06}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(`Presented by ${sponsor.name}`, w / 2, h * 0.82)

    // Draw sponsor logo if available
    if (sponsor.logoUrl) {
      const img = logoImages.get(sponsor.logoUrl)
      if (img) {
        const logoH = h * 0.12
        const logoW = (img.width / img.height) * logoH
        ctx.globalAlpha = creditAlpha * 0.7
        ctx.drawImage(img, (w - logoW) / 2, h * 0.86, logoW, logoH)
        ctx.globalAlpha = 1
      }
    }
  }
}

function renderGoal(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number, sponsor?: Sponsor) {
  // Flash
  if (progress < 0.12) {
    const flash = Math.sin((progress / 0.12) * Math.PI * 5) * 0.5 + 0.5
    ctx.fillStyle = `rgba(255,255,255,${flash})`
    ctx.fillRect(0, 0, w, h)
  }

  // Pulsing arena colors
  const pulse = Math.sin(frame * 0.12) * 0.2 + 0.8
  const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7)
  grad.addColorStop(0, `rgba(0,100,200,${pulse})`)
  grad.addColorStop(0.6, `rgba(255,100,0,${pulse * 0.7})`)
  grad.addColorStop(1, '#000')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Spotlight beams
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 + frame * 0.015
    ctx.save()
    ctx.translate(w / 2, h / 2)
    ctx.rotate(angle)
    const beamGrad = ctx.createLinearGradient(0, 0, w * 0.6, 0)
    beamGrad.addColorStop(0, 'rgba(255,255,255,0.08)')
    beamGrad.addColorStop(1, 'transparent')
    ctx.fillStyle = beamGrad
    ctx.fillRect(0, -2, w * 0.6, 4)
    ctx.restore()
  }

  if (progress > 0.08) {
    const textAlpha = Math.min(1, (progress - 0.08) / 0.12)
    ctx.fillStyle = `rgba(255,255,255,${textAlpha})`
    ctx.shadowColor = 'rgba(255,255,255,0.5)'
    ctx.shadowBlur = 25
    ctx.font = `900 ${h * 0.35}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('GOAL!', w / 2, h * 0.42)
    ctx.shadowBlur = 0

    ctx.fillStyle = `rgba(255,255,255,${textAlpha * 0.7})`
    ctx.font = `600 ${h * 0.1}px Work Sans,sans-serif`
    ctx.fillText(`${liveGameData.homeTeam} ${liveGameData.homeScore}  —  ${liveGameData.awayTeam} ${liveGameData.awayScore}`, w / 2, h * 0.63)
  }

  if (progress > 0.5 && sponsor && sponsor.id !== 'none') {
    const a = Math.min(1, (progress - 0.5) / 0.2)
    ctx.fillStyle = `rgba(255,255,255,${a * 0.4})`
    ctx.font = `400 ${h * 0.06}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(`Replay by ${sponsor.name}`, w / 2, h * 0.82)
  }
}

function renderSponsorTakeover(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number, sponsor: Sponsor) {
  // Wipe transition
  const wipeX = progress < 0.15 ? (progress / 0.15) * w : w
  const grad = ctx.createLinearGradient(0, 0, w, h)
  grad.addColorStop(0, sponsor.color)
  grad.addColorStop(1, adjustBrightness(sponsor.color, -30))
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, wipeX, h)

  // Remaining area dark
  if (wipeX < w) {
    ctx.fillStyle = '#0a0a12'
    ctx.fillRect(wipeX, 0, w - wipeX, h)
  }

  if (progress > 0.12) {
    const a = Math.min(1, (progress - 0.12) / 0.15)

    // Sponsor logo
    if (sponsor.logoUrl) {
      const img = logoImages.get(sponsor.logoUrl)
      if (img) {
        const maxW = w * 0.55
        const maxH = h * 0.5
        const scale = Math.min(maxW / img.width, maxH / img.height)
        const dw = img.width * scale
        const dh = img.height * scale
        ctx.globalAlpha = a
        ctx.shadowColor = 'rgba(255,255,255,0.2)'
        ctx.shadowBlur = 25
        ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2 - h * 0.05, dw, dh)
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      } else {
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.font = `900 ${h * 0.3}px Work Sans,sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(sponsor.logoText, w / 2, h * 0.42)
      }
    } else {
      ctx.fillStyle = `rgba(255,255,255,${a})`
      ctx.font = `900 ${h * 0.3}px Work Sans,sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(sponsor.logoText, w / 2, h * 0.42)
    }

    // "OFFICIAL PARTNER" text
    ctx.fillStyle = `rgba(255,255,255,${a * 0.45})`
    ctx.font = `600 ${h * 0.07}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.letterSpacing = '4px'
    ctx.fillText('★  OFFICIAL PARTNER  ★', w / 2, h * 0.78)
  }

  // Scrolling bottom ticker
  if (progress > 0.25) {
    ctx.fillStyle = 'rgba(0,0,0,0.3)'
    ctx.fillRect(0, h * 0.88, w, h * 0.12)
    ctx.fillStyle = 'rgba(255,255,255,0.6)'
    ctx.font = `600 ${h * 0.06}px Work Sans,sans-serif`
    ctx.textAlign = 'left'
    const tickerText = `    ${sponsor.name.toUpperCase()}  ·  PREMIUM SPONSOR  ·  ${sponsor.name.toUpperCase()}  ·  GAME DAY PARTNER  ·  `
    const scrollX = ((frame * 2) % (w * 2)) - w
    ctx.fillText(tickerText, scrollX, h * 0.94)
  }
}

function renderWeatherAlert(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number) {
  // Amber/yellow warning background
  const flash = Math.sin(frame * 0.15) * 0.15 + 0.85
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, `rgba(200,150,0,${flash * 0.9})`)
  grad.addColorStop(1, `rgba(180,80,0,${flash * 0.7})`)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Warning stripes at top and bottom
  ctx.fillStyle = 'rgba(0,0,0,0.3)'
  const stripeW = 20
  for (let x = -stripeW + ((frame * 2) % (stripeW * 2)); x < w + stripeW; x += stripeW * 2) {
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x + stripeW, 0)
    ctx.lineTo(x + stripeW * 0.6, h * 0.08)
    ctx.lineTo(x - stripeW * 0.4, h * 0.08)
    ctx.fill()
    ctx.restore()
  }

  if (progress > 0.08) {
    const a = Math.min(1, (progress - 0.08) / 0.1)

    // Warning icon
    ctx.fillStyle = `rgba(0,0,0,${a * 0.7})`
    ctx.font = `${h * 0.18}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('⚠', w / 2, h * 0.25)

    // Alert text
    ctx.fillStyle = `rgba(0,0,0,${a * 0.9})`
    ctx.font = `800 ${h * 0.2}px Work Sans,sans-serif`
    ctx.fillText('WEATHER ALERT', w / 2, h * 0.48)

    // Weather details
    ctx.font = `500 ${h * 0.09}px Work Sans,sans-serif`
    ctx.fillStyle = `rgba(0,0,0,${a * 0.7})`
    ctx.fillText(`${liveGameData.weather.icon}  ${liveGameData.weather.temp}°F · ${liveGameData.weather.condition}`, w / 2, h * 0.65)

    // Instructions
    ctx.font = `500 ${h * 0.07}px Work Sans,sans-serif`
    ctx.fillStyle = `rgba(0,0,0,${a * 0.5})`
    ctx.fillText('Please seek shelter in nearest concourse area', w / 2, h * 0.8)
  }
}

function renderTimeout(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number, sponsor: Sponsor) {
  // Dark background with sponsor accent
  const grad = ctx.createLinearGradient(0, 0, w, h)
  grad.addColorStop(0, '#0a0e16')
  grad.addColorStop(1, '#06090f')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Sponsor color accent bar at top
  const barGrad = ctx.createLinearGradient(0, 0, w, 0)
  barGrad.addColorStop(0, 'transparent')
  barGrad.addColorStop(0.2, sponsor.id !== 'none' ? sponsor.color : '#0A52EF')
  barGrad.addColorStop(0.8, sponsor.id !== 'none' ? sponsor.color : '#0A52EF')
  barGrad.addColorStop(1, 'transparent')
  ctx.fillStyle = barGrad
  ctx.fillRect(0, 0, w, h * 0.04)

  // "OFFICIAL TIMEOUT" text
  ctx.fillStyle = 'rgba(255,255,255,0.3)'
  ctx.font = `600 ${h * 0.07}px Work Sans,sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('OFFICIAL TIMEOUT', w / 2, h * 0.15)

  // Sponsor display
  if (sponsor.id !== 'none') {
    if (sponsor.logoUrl) {
      const img = logoImages.get(sponsor.logoUrl)
      if (img) {
        const maxW = w * 0.5
        const maxH = h * 0.4
        const scale = Math.min(maxW / img.width, maxH / img.height)
        const dw = img.width * scale
        const dh = img.height * scale
        ctx.shadowColor = 'rgba(255,255,255,0.15)'
        ctx.shadowBlur = 20
        ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2 - h * 0.03, dw, dh)
        ctx.shadowBlur = 0
      }
    } else {
      ctx.fillStyle = '#fff'
      ctx.font = `700 ${h * 0.28}px Work Sans,sans-serif`
      ctx.fillText(sponsor.logoText, w / 2, h * 0.48)
    }

    ctx.fillStyle = 'rgba(255,255,255,0.25)'
    ctx.font = `500 ${h * 0.06}px Work Sans,sans-serif`
    ctx.fillText(`This timeout brought to you by ${sponsor.name}`, w / 2, h * 0.78)
  }

  // Countdown bar
  const remaining = 1 - progress
  ctx.fillStyle = 'rgba(255,255,255,0.06)'
  ctx.fillRect(w * 0.1, h * 0.88, w * 0.8, h * 0.04)
  ctx.fillStyle = sponsor.id !== 'none' ? sponsor.color : '#0A52EF'
  ctx.fillRect(w * 0.1, h * 0.88, w * 0.8 * remaining, h * 0.04)
}

function renderHalftimeShow(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number) {
  // Dynamic gradient background
  const hue1 = (frame * 0.5) % 360
  const hue2 = (hue1 + 120) % 360
  const grad = ctx.createLinearGradient(
    w * (0.3 + Math.sin(frame * 0.02) * 0.2),
    0,
    w * (0.7 + Math.cos(frame * 0.02) * 0.2),
    h
  )
  grad.addColorStop(0, `hsla(${hue1},70%,30%,1)`)
  grad.addColorStop(0.5, `hsla(${(hue1 + hue2) / 2},60%,20%,1)`)
  grad.addColorStop(1, `hsla(${hue2},70%,25%,1)`)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Animated wave bars
  const bars = 48
  for (let i = 0; i < bars; i++) {
    const barH = (Math.sin((frame + i * 3) * 0.08) * 0.5 + 0.5) * (h * 0.6)
    const barX = i * (w / bars) + 1
    const barW = w / bars - 2
    const alpha = 0.15 + Math.sin((frame + i * 2) * 0.06) * 0.1
    ctx.fillStyle = `rgba(255,255,255,${alpha})`
    ctx.fillRect(barX, h - barH, barW, barH)
  }

  // Pulsing rings
  for (let r = 0; r < 3; r++) {
    const radius = (Math.sin(frame * 0.04 + r * 1.5) * 0.3 + 0.5) * Math.min(w, h) * 0.4
    ctx.strokeStyle = `rgba(255,255,255,${0.06 - r * 0.015})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(w / 2, h / 2, radius, 0, Math.PI * 2)
    ctx.stroke()
  }

  // Text
  ctx.fillStyle = 'rgba(255,255,255,0.9)'
  ctx.shadowColor = 'rgba(255,255,255,0.3)'
  ctx.shadowBlur = 20
  ctx.font = `900 ${h * 0.22}px Work Sans,sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('HALFTIME', w / 2, h * 0.38)
  ctx.shadowBlur = 0

  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = `500 ${h * 0.08}px Work Sans,sans-serif`
  ctx.fillText('ENTERTAINMENT', w / 2, h * 0.55)
}

function renderEmergency(ctx: CanvasRenderingContext2D, w: number, h: number, progress: number, frame: number) {
  // Flashing red background
  const flash = Math.sin(frame * 0.2) * 0.3 + 0.7
  ctx.fillStyle = `rgba(200,0,0,${flash})`
  ctx.fillRect(0, 0, w, h)

  // White border flash
  if (Math.floor(frame * 0.1) % 2 === 0) {
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 4
    ctx.strokeRect(4, 4, w - 8, h - 8)
  }

  // Emergency text
  ctx.fillStyle = '#fff'
  ctx.font = `900 ${h * 0.2}px Work Sans,sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('EMERGENCY', w / 2, h * 0.3)

  ctx.font = `600 ${h * 0.1}px Work Sans,sans-serif`
  ctx.fillText('PLEASE PROCEED TO', w / 2, h * 0.5)
  ctx.fillText('NEAREST EXIT', w / 2, h * 0.64)

  // Directional arrows
  ctx.font = `${h * 0.15}px sans-serif`
  ctx.fillText('← EXIT    EXIT →', w / 2, h * 0.84)
}

// ─── Standard Content Renderers ────────────────────────────────────
function renderScore(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  const data = liveGameData

  // Header bar
  ctx.fillStyle = 'rgba(0,0,0,0.3)'
  ctx.fillRect(0, 0, w, h * 0.25)

  ctx.fillStyle = '#fff'
  ctx.font = `600 ${h * 0.12}px Work Sans,sans-serif`
  ctx.fillText('SUNDAY NIGHT FOOTBALL', w / 2, h * 0.13)

  // Score area
  ctx.font = `700 ${h * 0.22}px Work Sans,sans-serif`
  ctx.fillStyle = '#fff'
  ctx.fillText(data.homeTeam, w * 0.2, h * 0.5)

  ctx.fillStyle = '#FFD700'
  ctx.font = `700 ${h * 0.28}px Work Sans,sans-serif`
  ctx.fillText(String(data.homeScore), w * 0.4, h * 0.5)
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = `400 ${h * 0.15}px Work Sans,sans-serif`
  ctx.fillText('–', w * 0.5, h * 0.48)
  ctx.fillStyle = '#fff'
  ctx.font = `700 ${h * 0.28}px Work Sans,sans-serif`
  ctx.fillText(String(data.awayScore), w * 0.6, h * 0.5)

  ctx.font = `700 ${h * 0.22}px Work Sans,sans-serif`
  ctx.fillText(data.awayTeam, w * 0.8, h * 0.5)

  // Game info bar
  ctx.fillStyle = 'rgba(0,0,0,0.25)'
  ctx.fillRect(0, h * 0.65, w, h * 0.15)
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.font = `500 ${h * 0.08}px Work Sans,sans-serif`

  const showColon = Math.floor(frame * 0.05) % 2 === 0
  const clockDisplay = data.clock.replace(':', showColon ? ':' : ' ')
  ctx.fillText(`Q${data.quarter}  ·  ${clockDisplay}  ·  ${data.down}  ·  ${data.homeTeam} 45`, w / 2, h * 0.725)

  // Sponsor credit
  if (sponsor.id !== 'none') {
    ctx.fillStyle = 'rgba(255,255,255,0.35)'
    ctx.font = `400 ${h * 0.06}px Work Sans,sans-serif`
    ctx.textAlign = 'right'
    ctx.fillText('Presented by ' + sponsor.name, w - 16, h * 0.92)
  }
}

function renderLogo(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor) {
  if (sponsor.id !== 'none' && sponsor.logoUrl) {
    const img = logoImages.get(sponsor.logoUrl)
    if (img) {
      const maxW = w * 0.65
      const maxH = h * 0.6
      const scale = Math.min(maxW / img.width, maxH / img.height)
      const dw = img.width * scale
      const dh = img.height * scale
      ctx.shadowColor = 'rgba(255,255,255,0.15)'
      ctx.shadowBlur = 20
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
      ctx.shadowBlur = 0
      return
    }
  }

  if (sponsor.id !== 'none') {
    ctx.fillStyle = '#fff'
    ctx.shadowColor = 'rgba(255,255,255,0.2)'
    ctx.shadowBlur = 15
    ctx.font = `700 ${h * 0.35}px Work Sans,sans-serif`
    ctx.textBaseline = 'middle'
    ctx.fillText(sponsor.logoText, w / 2, h * 0.48)
    ctx.shadowBlur = 0

    const tw = ctx.measureText(sponsor.logoText).width
    ctx.fillStyle = 'rgba(255,255,255,0.15)'
    ctx.fillRect((w - tw) / 2, h * 0.65, tw, 2)
  } else if (clientLogoImg) {
    const maxW = w * 0.5
    const maxH = h * 0.5
    const scale = Math.min(maxW / clientLogoImg.width, maxH / clientLogoImg.height)
    const dw = clientLogoImg.width * scale
    const dh = clientLogoImg.height * scale
    ctx.globalAlpha = 0.5
    ctx.drawImage(clientLogoImg, (w - dw) / 2, (h - dh) / 2, dw, dh)
    ctx.globalAlpha = 1
  } else {
    ctx.strokeStyle = 'rgba(255,255,255,0.08)'
    ctx.lineWidth = 1
    ctx.setLineDash([6, 4])
    ctx.strokeRect(w * 0.15, h * 0.25, w * 0.7, h * 0.5)
    ctx.setLineDash([])

    ctx.fillStyle = 'rgba(255,255,255,0.2)'
    ctx.font = `500 ${h * 0.12}px Work Sans,sans-serif`
    ctx.textBaseline = 'middle'
    ctx.fillText('AVAILABLE', w / 2, h * 0.48)
    ctx.fillStyle = 'rgba(255,255,255,0.1)'
    ctx.font = `400 ${h * 0.07}px Work Sans,sans-serif`
    ctx.fillText('Premium placement', w / 2, h * 0.6)
  }
}

function renderAd(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  if (sponsor.id !== 'none') {
    ctx.fillStyle = '#fff'
    ctx.font = `700 ${h * 0.35}px Work Sans,sans-serif`
    const text = `   ${sponsor.name.toUpperCase()}   ★   OFFICIAL PARTNER   ★   ${sponsor.name.toUpperCase()}   ★   GAME DAY EXPERIENCE   ★   `
    const scrollX = ((frame * 3) % (w * 3)) - w
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, scrollX, h / 2)

    const fadeW = w * 0.12
    const leftGrad = ctx.createLinearGradient(0, 0, fadeW, 0)
    leftGrad.addColorStop(0, sponsor.color)
    leftGrad.addColorStop(1, 'transparent')
    ctx.fillStyle = leftGrad
    ctx.fillRect(0, 0, fadeW, h)

    const rightGrad = ctx.createLinearGradient(w - fadeW, 0, w, 0)
    rightGrad.addColorStop(0, 'transparent')
    rightGrad.addColorStop(1, sponsor.color)
    ctx.fillStyle = rightGrad
    ctx.fillRect(w - fadeW, 0, fadeW, h)
  } else {
    ctx.fillStyle = 'rgba(255,255,255,0.15)'
    ctx.font = `500 ${h * 0.14}px Work Sans,sans-serif`
    ctx.textBaseline = 'middle'
    ctx.fillText('AD SPACE AVAILABLE', w / 2, h / 2)
  }
}

function renderReplay(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  ctx.fillStyle = 'rgba(0,0,0,0.5)'
  ctx.fillRect(0, 0, w, h)

  if (Math.floor(frame * 0.03) % 2 === 0) {
    ctx.fillStyle = '#ff2222'
    ctx.beginPath()
    ctx.arc(w * 0.08, h * 0.12, h * 0.03, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.fillStyle = '#ff4444'
  ctx.font = `700 ${h * 0.08}px Work Sans,sans-serif`
  ctx.textAlign = 'left'
  ctx.fillText('REPLAY', w * 0.12, h * 0.13)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#fff'
  ctx.font = `700 ${h * 0.18}px Work Sans,sans-serif`
  ctx.fillText('INSTANT REPLAY', w / 2, h * 0.42)

  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.font = `500 ${h * 0.08}px Work Sans,sans-serif`
  ctx.fillText('4K HDR  ·  120fps  ·  Multi-Angle', w / 2, h * 0.58)

  const progress = (frame * 0.5 % 100) / 100
  ctx.fillStyle = 'rgba(255,255,255,0.1)'
  ctx.fillRect(w * 0.1, h * 0.72, w * 0.8, h * 0.03)
  ctx.fillStyle = '#ff4444'
  ctx.fillRect(w * 0.1, h * 0.72, w * 0.8 * progress, h * 0.03)

  if (sponsor.id !== 'none') {
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.font = `400 ${h * 0.06}px Work Sans,sans-serif`
    ctx.fillText('Replay by ' + sponsor.name, w / 2, h * 0.88)
  }
}

function renderAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  const bars = 32
  for (let i = 0; i < bars; i++) {
    const barH = (Math.sin((frame + i * 4) * 0.06) * 0.5 + 0.5) * (h * 0.7)
    const hue = (i / bars * 60) + (frame * 0.5)
    const alpha = 0.25 + Math.sin((frame + i * 3) * 0.08) * 0.2

    const barX = i * (w / bars) + 1
    const barW = w / bars - 2
    const grad = ctx.createLinearGradient(0, h - barH, 0, h)
    grad.addColorStop(0, `rgba(${10 + hue * 0.5},${82 + hue * 0.3},${239},${alpha})`)
    grad.addColorStop(1, `rgba(${3},${184},${255},${alpha * 0.5})`)
    ctx.fillStyle = grad
    ctx.fillRect(barX, h - barH - 5, barW, barH)
  }

  const pulse = Math.sin(frame * 0.05) * 0.3 + 0.7
  const radius = Math.min(w, h) * 0.15 * pulse
  ctx.strokeStyle = `rgba(10,82,239,${0.15 * pulse})`
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(w / 2, h / 2, radius, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(w / 2, h / 2, radius * 0.6, 0, Math.PI * 2)
  ctx.stroke()

  if (sponsor.id !== 'none') {
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.shadowColor = 'rgba(255,255,255,0.2)'
    ctx.shadowBlur = 12
    ctx.font = `700 ${h * 0.28}px Work Sans,sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(sponsor.logoText, w / 2, h / 2)
    ctx.shadowBlur = 0
  }
}

// Utility: darken/lighten a hex color
function adjustBrightness(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, (num >> 16) + amount))
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amount))
  const b = Math.max(0, Math.min(255, (num & 0xff) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}
