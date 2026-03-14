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
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, w, h)
    ctx.fillStyle = '#222'
    ctx.font = `bold ${h * 0.3}px Oswald,sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('OFF', w / 2, h / 2)
    return
  }

  // Background
  ctx.fillStyle = sponsor.id !== 'none' ? sponsor.color : '#0a1a2e'
  ctx.fillRect(0, 0, w, h)

  // Scan line
  const scanY = (frame * 3) % h
  ctx.fillStyle = 'rgba(255,255,255,0.04)'
  ctx.fillRect(0, scanY, w, 3)

  // LED grid overlay
  ctx.strokeStyle = 'rgba(0,0,0,0.06)'
  ctx.lineWidth = 0.5
  for (let i = 0; i < w; i += 8) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke() }
  for (let i = 0; i < h; i += 8) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke() }

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  switch (content) {
    case 'score': renderScore(ctx, w, h, sponsor, frame); break
    case 'logo': renderLogo(ctx, w, h, sponsor); break
    case 'ad': renderAd(ctx, w, h, sponsor, frame); break
    case 'replay': renderReplay(ctx, w, h, sponsor); break
    case 'animation': renderAnimation(ctx, w, h, sponsor, frame); break
  }

  // Selection border
  if (selected) {
    ctx.strokeStyle = '#00ff88'
    ctx.lineWidth = 4
    ctx.setLineDash([10, 5])
    ctx.lineDashOffset = -frame * 2
    ctx.strokeRect(2, 2, w - 4, h - 4)
    ctx.setLineDash([])
  }
}

function renderScore(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, _frame: number) {
  ctx.fillStyle = '#fff'
  ctx.font = `bold ${h * 0.16}px Oswald,sans-serif`
  ctx.textBaseline = 'middle'
  ctx.fillText('NFL SUNDAY', w / 2, h * 0.17)

  ctx.font = `bold ${h * 0.28}px Oswald,sans-serif`
  ctx.fillText('NYG', w * 0.22, h * 0.48)
  ctx.fillStyle = '#FFD700'
  ctx.fillText('24 – 17', w / 2, h * 0.48)
  ctx.fillStyle = '#fff'
  ctx.fillText('DAL', w * 0.78, h * 0.48)

  ctx.fillStyle = '#aaa'
  ctx.font = `${h * 0.1}px monospace`
  ctx.fillText('Q3 · 4:32 · 2nd & 8', w / 2, h * 0.68)

  if (sponsor.id !== 'none') {
    ctx.fillStyle = 'rgba(255,255,255,0.45)'
    ctx.font = `${h * 0.08}px Oswald,sans-serif`
    ctx.textAlign = 'right'
    ctx.fillText('Presented by ' + sponsor.name, w - 12, h * 0.88)
  }
}

function renderLogo(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor) {
  if (sponsor.id !== 'none' && sponsor.logoUrl) {
    const img = logoImages.get(sponsor.logoUrl)
    if (img) {
      const maxW = w * 0.7
      const maxH = h * 0.7
      const scale = Math.min(maxW / img.width, maxH / img.height)
      const dw = img.width * scale
      const dh = img.height * scale
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
      return
    }
  }

  if (sponsor.id !== 'none') {
    ctx.fillStyle = '#fff'
    ctx.font = `bold ${h * 0.4}px Oswald,sans-serif`
    ctx.textBaseline = 'middle'
    ctx.fillText(sponsor.logoText, w / 2, h / 2)
  } else {
    ctx.fillStyle = 'rgba(255,255,255,0.2)'
    ctx.font = `${h * 0.18}px monospace`
    ctx.textBaseline = 'middle'
    ctx.fillText('AVAILABLE', w / 2, h / 2)
  }
}

function renderAd(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  if (sponsor.id !== 'none') {
    ctx.fillStyle = '#fff'
    ctx.font = `bold ${h * 0.38}px Oswald,sans-serif`
    const scrollX = ((frame * 4) % (w * 2)) - w * 0.5
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    const adText = `★ ${sponsor.name.toUpperCase()} ★ OFFICIAL PARTNER ★ ${sponsor.name.toUpperCase()} ★ GAME DAY ★`
    ctx.fillText(adText, scrollX, h / 2)
  } else {
    ctx.fillStyle = 'rgba(255,255,255,0.2)'
    ctx.font = `${h * 0.18}px monospace`
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillText('AD SPACE AVAILABLE', w / 2, h / 2)
  }
}

function renderReplay(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor) {
  ctx.fillStyle = 'rgba(0,0,0,0.4)'
  ctx.fillRect(10, 10, w - 20, h - 20)

  ctx.fillStyle = '#ff3333'
  ctx.font = `bold ${h * 0.2}px Oswald,sans-serif`
  ctx.textBaseline = 'middle'
  ctx.fillText('► INSTANT REPLAY', w / 2, h * 0.38)

  ctx.fillStyle = 'rgba(255,255,255,0.6)'
  ctx.font = `${h * 0.1}px monospace`
  ctx.fillText('4K HDR • 120fps', w / 2, h * 0.58)

  if (sponsor.id !== 'none') {
    ctx.fillStyle = 'rgba(255,255,255,0.4)'
    ctx.font = `${h * 0.09}px Oswald,sans-serif`
    ctx.fillText('Replay by ' + sponsor.name, w / 2, h * 0.76)
  }
}

function renderAnimation(ctx: CanvasRenderingContext2D, w: number, h: number, sponsor: Sponsor, frame: number) {
  const bars = 24
  for (let i = 0; i < bars; i++) {
    const barH = (Math.sin((frame + i * 5) * 0.08) * 0.5 + 0.5) * (h * 0.75)
    const alpha = 0.3 + Math.sin((frame + i * 3) * 0.12) * 0.3
    ctx.fillStyle = `rgba(255,255,255,${alpha})`
    ctx.fillRect(i * (w / bars) + 2, h - barH - 5, w / bars - 4, barH)
  }

  if (sponsor.id !== 'none') {
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.font = `bold ${h * 0.32}px Oswald,sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(sponsor.logoText, w / 2, h / 2)
  }
}
