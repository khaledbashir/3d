/**
 * Canvas resolution policy for LED surfaces.
 *
 * The old renderer used a flat 512px canvas for every screen. A 70ft ribbon
 * and a 3ft stanchion got the same pixel budget, so the ribbon rendered at
 * ~7px per foot and turned to mush the moment the camera came near it.
 *
 * Resolution now follows physical size: a fixed pixels-per-foot target with a
 * clamp on the long edge so a 70ft board stays affordable to repaint at 20fps.
 */

/** Canvas pixels drawn per physical foot of LED surface. */
const PX_PER_FOOT = 30

/** Long-edge bounds. Upper bound keeps per-frame repaint cost sane. */
const MIN_LONG_EDGE = 640
const MAX_LONG_EDGE = 2048

/** Short edge never drops below this or type has nowhere to live. */
const MIN_SHORT_EDGE = 72

export interface LedCanvasSize {
  width: number
  height: number
}

/**
 * @param widthFt  physical width of the LED surface in feet
 * @param heightFt physical height of the LED surface in feet
 */
export function ledCanvasSize(widthFt: number, heightFt: number): LedCanvasSize {
  const safeW = Math.max(0.1, widthFt)
  const safeH = Math.max(0.1, heightFt)
  const aspect = safeW / safeH

  const longFt = Math.max(safeW, safeH)
  const longEdge = clamp(Math.round(longFt * PX_PER_FOOT), MIN_LONG_EDGE, MAX_LONG_EDGE)

  let width: number
  let height: number
  if (aspect >= 1) {
    width = longEdge
    height = Math.max(MIN_SHORT_EDGE, Math.round(longEdge / aspect))
  } else {
    height = longEdge
    width = Math.max(MIN_SHORT_EDGE, Math.round(longEdge * aspect))
  }

  // Even dimensions keep the bloom downsample from drifting half a pixel.
  return { width: width + (width % 2), height: height + (height % 2) }
}

/**
 * Real LED pixel count across the surface, from physical size and pixel pitch.
 * Used to draw a true-to-product pixel mask rather than an invented grid.
 */
export function ledPixelCount(widthFt: number, pixelPitchMm: number): number {
  const mm = Math.max(0.1, widthFt) * 304.8
  return Math.max(1, Math.round(mm / Math.max(0.5, pixelPitchMm)))
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}
