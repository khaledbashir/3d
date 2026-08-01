/**
 * Design primitives for content rendered ON the LED surfaces.
 *
 * Everything a venue screen draws goes through here: one type ramp, one set of
 * colours, one safe area, one physical-LED finish. Keeping it in a single
 * module is what stops each content mode from inventing its own look.
 */

export const INK = '#02060C'
export const ANC_BLUE = '#0A52EF'
export const ANC_BLUE_HI = '#4D8DFF'
export const WHITE = '#FFFFFF'

export const DISPLAY_FONT = '"Work Sans", "Inter", system-ui, sans-serif'
export const MONO_FONT = '"JetBrains Mono", ui-monospace, monospace'

/** Weights the renderer actually asks for — must be preloaded or canvas fakes them. */
const REQUIRED_FACES = [
  '400 64px "Work Sans"',
  '600 64px "Work Sans"',
  '700 64px "Work Sans"',
  '800 64px "Work Sans"',
  '900 64px "Work Sans"',
  '500 64px "JetBrains Mono"',
  '700 64px "JetBrains Mono"',
]

let fontsReady = false
let fontPromise: Promise<void> | null = null

/**
 * Canvas silently falls back to a synthesised bold when a weight has not been
 * loaded, which is why the 900-weight headlines used to render soft. Resolve
 * this before the first paint.
 */
export function ensureLedFonts(): Promise<void> {
  if (fontsReady) return Promise.resolve()
  if (fontPromise) return fontPromise
  const fonts = (document as any).fonts
  if (!fonts?.load) {
    fontsReady = true
    return Promise.resolve()
  }
  fontPromise = Promise.allSettled(REQUIRED_FACES.map((f: string) => fonts.load(f)))
    .then(() => fonts.ready)
    .then(() => { fontsReady = true })
  return fontPromise
}

export function areLedFontsReady() {
  return fontsReady
}

// ─── Type ──────────────────────────────────────────────────────────

let letterSpacingSupport: boolean | null = null

function supportsLetterSpacing(ctx: CanvasRenderingContext2D) {
  if (letterSpacingSupport === null) {
    letterSpacingSupport = 'letterSpacing' in ctx
  }
  return letterSpacingSupport
}

export interface TypeSpec {
  size: number
  weight?: number
  /** Tracking in em. Venue type is set wide; broadcast numerals are set tight. */
  tracking?: number
  font?: string
}

export function setType(ctx: CanvasRenderingContext2D, spec: TypeSpec) {
  const weight = spec.weight ?? 800
  const font = spec.font ?? DISPLAY_FONT
  ctx.font = `${weight} ${Math.max(6, spec.size)}px ${font}`
  const tracking = spec.tracking ?? 0
  if (supportsLetterSpacing(ctx)) {
    ;(ctx as any).letterSpacing = `${tracking}em`
  }
}

export function resetType(ctx: CanvasRenderingContext2D) {
  if (supportsLetterSpacing(ctx)) (ctx as any).letterSpacing = '0em'
}

export function measureType(ctx: CanvasRenderingContext2D, text: string, spec: TypeSpec) {
  setType(ctx, spec)
  const width = ctx.measureText(text).width
  const fallbackTracking = supportsLetterSpacing(ctx) ? 0 : (spec.tracking ?? 0) * spec.size * text.length
  resetType(ctx)
  return width + fallbackTracking
}

/**
 * Draw text, shrinking the size until it fits `maxWidth`. Venue screens are
 * every aspect ratio under the sun, so nothing may assume it fits.
 */
export function drawFittedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  spec: TypeSpec,
): number {
  let size = spec.size
  let width = measureType(ctx, text, { ...spec, size })
  let guard = 0
  while (width > maxWidth && size > 6 && guard++ < 40) {
    size *= Math.max(0.6, Math.min(0.96, maxWidth / width))
    width = measureType(ctx, text, { ...spec, size })
  }
  setType(ctx, { ...spec, size })
  if (supportsLetterSpacing(ctx)) {
    ctx.fillText(text, x, y)
  } else {
    drawTrackedText(ctx, text, x, y, size, spec.tracking ?? 0)
  }
  resetType(ctx)
  return size
}

/** Manual tracking for engines without ctx.letterSpacing. */
function drawTrackedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
  tracking: number,
) {
  const gap = tracking * size
  if (!gap) { ctx.fillText(text, x, y); return }
  const align = ctx.textAlign
  const total = Array.from(text).reduce((sum, ch) => sum + ctx.measureText(ch).width + gap, 0) - gap
  let cursor = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x
  ctx.textAlign = 'left'
  for (const ch of text) {
    ctx.fillText(ch, cursor, y)
    cursor += ctx.measureText(ch).width + gap
  }
  ctx.textAlign = align
}

/** Word-wrap into at most `maxLines`, shrinking to fit the box. */
export function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  spec: TypeSpec,
  maxLines = 3,
  lineHeight = 1.06,
) {
  let size = spec.size
  let lines = layoutLines(ctx, text, maxWidth, { ...spec, size })
  let guard = 0
  while (lines.length > maxLines && size > 6 && guard++ < 30) {
    size *= 0.9
    lines = layoutLines(ctx, text, maxWidth, { ...spec, size })
  }
  setType(ctx, { ...spec, size })
  const step = size * lineHeight
  lines.forEach((line, i) => {
    if (supportsLetterSpacing(ctx)) ctx.fillText(line, x, y + i * step)
    else drawTrackedText(ctx, line, x, y + i * step, size, spec.tracking ?? 0)
  })
  resetType(ctx)
  return { size, lines: lines.length, height: (lines.length - 1) * step + size }
}

function layoutLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, spec: TypeSpec) {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (measureType(ctx, test, spec) > maxWidth && current) {
      lines.push(current)
      current = word
    } else current = test
  }
  if (current) lines.push(current)
  return lines
}

// ─── Surface primitives ────────────────────────────────────────────

/** Safe area — LED walls lose their outer rows to the frame and viewing angle. */
export function safeArea(w: number, h: number) {
  const inset = Math.max(4, Math.min(w, h) * 0.055)
  return { x: inset, y: inset, w: w - inset * 2, h: h - inset * 2, inset }
}

/** Directional scrim so type stays legible over photography. */
export function drawScrim(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  direction: 'left' | 'bottom' | 'full',
  strength = 1,
) {
  let grad: CanvasGradient
  if (direction === 'left') {
    grad = ctx.createLinearGradient(0, 0, w, 0)
    grad.addColorStop(0, `rgba(1,4,9,${0.94 * strength})`)
    grad.addColorStop(0.42, `rgba(1,4,9,${0.66 * strength})`)
    grad.addColorStop(0.78, `rgba(1,4,9,${0.14 * strength})`)
    grad.addColorStop(1, `rgba(1,4,9,${0.06 * strength})`)
  } else if (direction === 'bottom') {
    grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, `rgba(1,4,9,${0.1 * strength})`)
    grad.addColorStop(0.48, `rgba(1,4,9,${0.28 * strength})`)
    grad.addColorStop(1, `rgba(1,4,9,${0.95 * strength})`)
  } else {
    grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, `rgba(1,4,9,${0.86 * strength})`)
    grad.addColorStop(1, `rgba(1,4,9,${0.7 * strength})`)
  }
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)
}

/** The ANC accent rule that anchors every lockup. */
export function drawAccentRule(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  length: number,
  thickness: number,
  color: string,
  horizontal = true,
) {
  ctx.fillStyle = color
  if (horizontal) ctx.fillRect(x, y, length, Math.max(2, thickness))
  else ctx.fillRect(x, y, Math.max(2, thickness), length)
}

/** Exposure lift — an emissive wall is far brighter than the photo behind it. */
export function liftExposure(ctx: CanvasRenderingContext2D, w: number, h: number, amount: number) {
  if (amount <= 0) return
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  ctx.fillStyle = `rgba(122,150,196,${amount})`
  ctx.fillRect(0, 0, w, h)
  ctx.restore()
}

// ─── Physical LED finish ───────────────────────────────────────────

const bloomCanvases = new Map<string, HTMLCanvasElement>()

function bloomBuffer(w: number, h: number) {
  const key = `${w}x${h}`
  let c = bloomCanvases.get(key)
  if (!c) {
    c = document.createElement('canvas')
    c.width = w
    c.height = h
    bloomCanvases.set(key, c)
  }
  return c
}

export interface LedFinishOptions {
  /** Real LED pixels across the surface, from physical size ÷ pixel pitch. */
  pixelsAcross: number
  /** 0 disables the glow. Outdoor 10,000-nit walls bloom harder than indoor. */
  bloom?: number
  /** Black level lift — LED cabinets never reach true black under house light. */
  blackLevel?: number
}

/**
 * Final pass over every LED surface: diffusion glow, the physical pixel mask at
 * the product's real pitch, and a black-level lift. This is what separates "a
 * JPEG on a plane" from "an emissive LED wall".
 */
export function applyLedFinish(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  options: LedFinishOptions,
) {
  const bloom = options.bloom ?? 0.3
  const canvas = ctx.canvas

  // 1. Diffusion glow — downsample, blur via smoothing, add back.
  if (bloom > 0) {
    const bw = Math.max(2, Math.round(w / 10))
    const bh = Math.max(2, Math.round(h / 10))
    const buf = bloomBuffer(bw, bh)
    const bctx = buf.getContext('2d')!
    bctx.clearRect(0, 0, bw, bh)
    bctx.imageSmoothingEnabled = true
    bctx.drawImage(canvas, 0, 0, bw, bh)

    ctx.save()
    ctx.globalCompositeOperation = 'lighter'
    ctx.globalAlpha = bloom
    ctx.imageSmoothingEnabled = true
    ctx.drawImage(buf, 0, 0, w, h)
    ctx.restore()
  }

  // 2. Pixel mask at the product's real pitch. Below ~2.5 canvas px per LED
  //    pixel the true mask would alias, so it widens into a stylised weave.
  const truePitch = w / Math.max(1, options.pixelsAcross)
  const spacing = truePitch >= 2.5 ? truePitch : 3
  const alpha = truePitch >= 2.5 ? 0.2 : 0.1
  ctx.save()
  ctx.fillStyle = `rgba(0,0,0,${alpha})`
  for (let x = spacing - 1; x < w; x += spacing) ctx.fillRect(Math.round(x), 0, 1, h)
  for (let y = spacing - 1; y < h; y += spacing) ctx.fillRect(0, Math.round(y), w, 1)
  ctx.restore()

  // 3. Black level.
  const black = options.blackLevel ?? 0.035
  if (black > 0) {
    ctx.save()
    ctx.globalCompositeOperation = 'lighter'
    ctx.fillStyle = `rgba(14,26,48,${black})`
    ctx.fillRect(0, 0, w, h)
    ctx.restore()
  }
}

// ─── Small helpers ─────────────────────────────────────────────────

export function smoothStep(edge0: number, edge1: number, value: number) {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)))
  return x * x * (3 - 2 * x)
}

export function hexToRgb(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export function rgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r},${g},${b},${alpha})`
}

export function mixHex(a: string, b: string, t: number) {
  const ca = hexToRgb(a)
  const cb = hexToRgb(b)
  const r = Math.round(ca.r + (cb.r - ca.r) * t)
  const g = Math.round(ca.g + (cb.g - ca.g) * t)
  const bl = Math.round(ca.b + (cb.b - ca.b) * t)
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, '0')}`
}

/** Relative luminance — decides whether a brand colour needs white or ink type. */
export function isLightColor(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6
}

export type LayoutClass = 'tower' | 'tile' | 'hero' | 'band' | 'strip'

export function layoutClassFor(w: number, h: number): LayoutClass {
  const aspect = w / h
  if (aspect < 0.85) return 'tower'
  if (aspect < 1.6) return 'tile'
  if (aspect < 3.2) return 'hero'
  if (aspect < 9) return 'band'
  return 'strip'
}
