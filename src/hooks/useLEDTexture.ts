import { useRef, useEffect, useMemo } from 'react'
import { CanvasTexture, LinearFilter, LinearMipmapLinearFilter, SRGBColorSpace } from 'three'
import type { ContentType, Sponsor } from '@/types'
import { renderLEDContent, type LedRenderOptions } from '@/utils/ledRenderer'
import { ledCanvasSize } from '@/utils/ledCanvasSize'
import { ensureLedFonts } from '@/utils/ledDesign'

export interface LedTextureSurface {
  /** Physical width of the LED surface, in feet. */
  widthFt: number
  /** Physical height of the LED surface, in feet. */
  heightFt: number
  /** Product pixel pitch in mm — drives the physical pixel mask. */
  pixelPitchMm?: number
  /** Outdoor cabinets run far brighter and bloom harder. */
  outdoor?: boolean
}

export function useLEDTexture(
  surface: LedTextureSurface,
  content: ContentType,
  sponsor: Sponsor,
  selected: boolean,
  enabled: boolean,
) {
  const frameRef = useRef(0)

  // Refs so the rAF loop always reads current values without restarting.
  const contentRef = useRef(content)
  const sponsorRef = useRef(sponsor)
  const selectedRef = useRef(selected)
  const enabledRef = useRef(enabled)
  const optionsRef = useRef<LedRenderOptions>({})

  contentRef.current = content
  sponsorRef.current = sponsor
  selectedRef.current = selected
  enabledRef.current = enabled
  optionsRef.current = {
    widthFt: surface.widthFt,
    pixelPitchMm: surface.pixelPitchMm,
    outdoor: surface.outdoor,
  }

  // Resolution follows physical size, so a 70ft ribbon is no longer given the
  // same 512px budget as a 3ft stanchion.
  const { width, height } = useMemo(
    () => ledCanvasSize(surface.widthFt, surface.heightFt),
    [surface.widthFt, surface.heightFt],
  )

  const canvas = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = width
    c.height = height
    return c
  }, [width, height])

  const context = useMemo(() => canvas.getContext('2d')!, [canvas])

  const texture = useMemo(() => {
    const tex = new CanvasTexture(canvas)
    tex.colorSpace = SRGBColorSpace
    tex.magFilter = LinearFilter
    // Ribbons and fascia are viewed at extreme grazing angles; without mipmaps
    // and anisotropy they shimmer into noise as the camera moves.
    tex.minFilter = LinearMipmapLinearFilter
    tex.generateMipmaps = true
    tex.anisotropy = 8
    return tex
  }, [canvas])

  useEffect(() => {
    let animId: number
    let lastTime = 0
    const interval = 1000 / 20 // venue displays stay fluid without starving the 3D scene

    // Fonts must land before the first paint or headlines render fake-bold.
    ensureLedFonts().then(() => { lastTime = 0 })

    const tick = (time: number) => {
      animId = requestAnimationFrame(tick)
      if (time - lastTime < interval) return
      lastTime = time
      frameRef.current++

      renderLEDContent(
        context, canvas.width, canvas.height,
        contentRef.current,
        sponsorRef.current,
        frameRef.current,
        selectedRef.current,
        enabledRef.current,
        optionsRef.current,
      )
      texture.needsUpdate = true
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [canvas, context, texture])

  return texture
}
