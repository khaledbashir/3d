import { useEffect, useState } from 'react'
import {
  LinearFilter,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  VideoTexture,
} from 'three'

export function useZoneMediaTexture(
  url?: string,
  kind?: 'image' | 'video',
): Texture | null {
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    setTexture(null)
    if (!url || !kind) return

    if (kind === 'video') {
      const video = document.createElement('video')
      video.src = url
      video.loop = true
      video.muted = true
      video.playsInline = true
      video.preload = 'auto'
      video.crossOrigin = 'anonymous'

      const next = new VideoTexture(video)
      next.colorSpace = SRGBColorSpace
      next.minFilter = LinearFilter
      next.magFilter = LinearFilter
      next.generateMipmaps = false
      setTexture(next)
      void video.play().catch(() => {
        // Browsers may wait for the next user gesture before autoplaying.
        const resume = () => {
          void video.play()
          window.removeEventListener('pointerdown', resume)
        }
        window.addEventListener('pointerdown', resume, { once: true })
      })

      return () => {
        video.pause()
        video.removeAttribute('src')
        video.load()
        next.dispose()
      }
    }

    let disposed = false
    const next = new TextureLoader().load(url, loaded => {
      if (disposed) return
      loaded.colorSpace = SRGBColorSpace
      loaded.minFilter = LinearFilter
      loaded.magFilter = LinearFilter
      setTexture(loaded)
    })

    return () => {
      disposed = true
      next.dispose()
    }
  }, [url, kind])

  return texture
}
