import { useRef, useEffect, useMemo } from 'react'
import { CanvasTexture, LinearFilter } from 'three'
import type { ContentType, Sponsor } from '@/types'
import { renderLEDContent } from '@/utils/ledRenderer'

export function useLEDTexture(
  width: number,
  height: number,
  content: ContentType,
  sponsor: Sponsor,
  selected: boolean,
  enabled: boolean,
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const frameRef = useRef(0)

  const canvas = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 512
    c.height = Math.max(64, Math.round(512 * (height / width)))
    canvasRef.current = c
    ctxRef.current = c.getContext('2d')!
    return c
  }, [width, height])

  const texture = useMemo(() => {
    const tex = new CanvasTexture(canvas)
    tex.minFilter = LinearFilter
    tex.generateMipmaps = false
    return tex
  }, [canvas])

  useEffect(() => {
    let animId: number
    let lastTime = 0
    const interval = 1000 / 30 // 30fps

    const tick = (time: number) => {
      animId = requestAnimationFrame(tick)
      if (time - lastTime < interval) return
      lastTime = time
      frameRef.current++

      const ctx = ctxRef.current
      const c = canvasRef.current
      if (!ctx || !c) return

      renderLEDContent(ctx, c.width, c.height, content, sponsor, frameRef.current, selected, enabled)
      texture.needsUpdate = true
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [content, sponsor, selected, enabled, texture])

  return texture
}
