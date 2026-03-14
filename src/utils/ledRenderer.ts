import type { ContentType, Sponsor } from '@/types'

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
    // Dark powered-off look
    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, '#080808')
    grad.addColorStop(1, '#050505')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)

    // Subtle LED grid pattern (visible when zoomed in)
    ctx.fillStyle = 'rgba(255,255,255,0.008)'
    for (let x = 0; x < w; x += 6) {
      for (let y = 0; y < h; y += 6) {
        ctx.fillRect(x + 1, y + 1, 4, 4)
      }
    }
    return
  }

  // Background gradient
  if (sponsor.id !== 'none') {
    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, sponsor.color)
    grad.addColorStop(1, adjustBrightness(sponsor.color, -20))
    ctx.fillStyle = grad
  } else {
    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, '#0a1a2e')
    grad.addColorStop(1, '#06101e')
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

function renderScore(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  // Header bar
  ctx.fillStyle = 'rgba(0,0,0,0.3)'
  ctx.fillRect(0, 0, w, h * 0.25)

  ctx.fillStyle = '#fff'
  ctx.font = `600 ${h * 0.12}px Work Sans,sans-serif`
  ctx.fillText('SUNDAY NIGHT FOOTBALL', w / 2, h * 0.13)

  // Score area
  ctx.font = `700 ${h * 0.22}px Work Sans,sans-serif`

  // Home team
  ctx.fillStyle = '#fff'
  ctx.fillText('NYG', w * 0.2, h * 0.5)

  // Score
  ctx.fillStyle = '#FFD700'
  ctx.font = `700 ${h * 0.28}px Work Sans,sans-serif`
  ctx.fillText('24', w * 0.4, h * 0.5)
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = `400 ${h * 0.15}px Work Sans,sans-serif`
  ctx.fillText('–', w * 0.5, h * 0.48)
  ctx.fillStyle = '#fff'
  ctx.font = `700 ${h * 0.28}px Work Sans,sans-serif`
  ctx.fillText('17', w * 0.6, h * 0.5)

  // Away team
  ctx.font = `700 ${h * 0.22}px Work Sans,sans-serif`
  ctx.fillText('DAL', w * 0.8, h * 0.5)

  // Game info bar
  ctx.fillStyle = 'rgba(0,0,0,0.25)'
  ctx.fillRect(0, h * 0.65, w, h * 0.15)
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.font = `500 ${h * 0.08}px Work Sans,sans-serif`

  // Blinking clock
  const showColon = Math.floor(frame * 0.05) % 2 === 0
  ctx.fillText(`Q3  ·  4${showColon ? ':' : ' '}32  ·  2nd & 8  ·  NYG 45`, w / 2, h * 0.725)

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
      // Subtle glow behind logo
      ctx.shadowColor = 'rgba(255,255,255,0.15)'
      ctx.shadowBlur = 20
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
      ctx.shadowBlur = 0
      return
    }
  }

  if (sponsor.id !== 'none') {
    // Styled sponsor text
    ctx.fillStyle = '#fff'
    ctx.shadowColor = 'rgba(255,255,255,0.2)'
    ctx.shadowBlur = 15
    ctx.font = `700 ${h * 0.35}px Work Sans,sans-serif`
    ctx.textBaseline = 'middle'
    ctx.fillText(sponsor.logoText, w / 2, h * 0.48)
    ctx.shadowBlur = 0

    // Subtle underline
    const tw = ctx.measureText(sponsor.logoText).width
    ctx.fillStyle = 'rgba(255,255,255,0.15)'
    ctx.fillRect((w - tw) / 2, h * 0.65, tw, 2)
  } else if (clientLogoImg) {
    // Show client logo on unsponsored zones
    const maxW = w * 0.5
    const maxH = h * 0.5
    const scale = Math.min(maxW / clientLogoImg.width, maxH / clientLogoImg.height)
    const dw = clientLogoImg.width * scale
    const dh = clientLogoImg.height * scale
    ctx.globalAlpha = 0.5
    ctx.drawImage(clientLogoImg, (w - dw) / 2, (h - dh) / 2, dw, dh)
    ctx.globalAlpha = 1
  } else {
    // Available space indicator
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
    // Scrolling marquee with gradient fade
    ctx.fillStyle = '#fff'
    ctx.font = `700 ${h * 0.35}px Work Sans,sans-serif`
    const text = `   ${sponsor.name.toUpperCase()}   ★   OFFICIAL PARTNER   ★   ${sponsor.name.toUpperCase()}   ★   GAME DAY EXPERIENCE   ★   `
    const scrollX = ((frame * 3) % (w * 3)) - w
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, scrollX, h / 2)

    // Fade edges
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
  // Dark overlay
  ctx.fillStyle = 'rgba(0,0,0,0.5)'
  ctx.fillRect(0, 0, w, h)

  // Red "LIVE" indicator (blinking)
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

  // Main text
  ctx.textAlign = 'center'
  ctx.fillStyle = '#fff'
  ctx.font = `700 ${h * 0.18}px Work Sans,sans-serif`
  ctx.fillText('INSTANT REPLAY', w / 2, h * 0.42)

  // Tech specs
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.font = `500 ${h * 0.08}px Work Sans,sans-serif`
  ctx.fillText('4K HDR  ·  120fps  ·  Multi-Angle', w / 2, h * 0.58)

  // Progress bar
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
  // Dynamic wave bars
  const bars = 32
  for (let i = 0; i < bars; i++) {
    const barH = (Math.sin((frame + i * 4) * 0.06) * 0.5 + 0.5) * (h * 0.7)
    const hue = (i / bars * 60) + (frame * 0.5)
    const alpha = 0.25 + Math.sin((frame + i * 3) * 0.08) * 0.2

    // Gradient bar
    const barX = i * (w / bars) + 1
    const barW = w / bars - 2
    const grad = ctx.createLinearGradient(0, h - barH, 0, h)
    grad.addColorStop(0, `rgba(${10 + hue * 0.5},${82 + hue * 0.3},${239},${alpha})`)
    grad.addColorStop(1, `rgba(${3},${184},${255},${alpha * 0.5})`)
    ctx.fillStyle = grad
    ctx.fillRect(barX, h - barH - 5, barW, barH)
  }

  // Pulsing center circle
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
