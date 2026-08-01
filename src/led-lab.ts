/**
 * LED Content Lab — offline harness for iterating on what actually renders
 * INSIDE the LED screens. Dev-only: visit /led-lab.html.
 *
 * Each row is one real venue-zone aspect ratio at the canvas resolution the
 * 3D scene actually uses, sampled at fixed points in the campaign timeline so
 * before/after captures line up exactly.
 */
import { renderLEDContent, loadLogoImage } from '@/utils/ledRenderer'
import { ledCanvasSize } from '@/utils/ledCanvasSize'
import { ensureLedFonts } from '@/utils/ledDesign'
import { getSponsor } from '@/data/sponsors'
import { venueCampaigns } from '@/data/campaigns'
import { sponsorLogos } from '@/data/sponsorLogos'
import type { ContentType } from '@/types'

interface Case {
  label: string
  wFt: number
  hFt: number
  content: ContentType
  sponsor: string
  /** Product pixel pitch in mm, matching the zone's specified product. */
  pitch: number
  outdoor?: boolean
}

const CASES: Case[] = [
  { label: 'Main scoreboard 40x22 — score', wFt: 40, hFt: 22, content: 'score', sponsor: 'nike', pitch: 3.91, outdoor: true },
  { label: 'Main scoreboard 40x22 — spot', wFt: 40, hFt: 22, content: 'ad', sponsor: 'toyota', pitch: 3.91, outdoor: true },
  { label: 'Endzone 30x12 — film', wFt: 30, hFt: 12, content: 'animation', sponsor: 'visa', pitch: 3.91, outdoor: true },
  { label: 'Endzone 30x12 — replay', wFt: 30, hFt: 12, content: 'replay', sponsor: 'pepsi', pitch: 3.91, outdoor: true },
  { label: 'Fascia 60x4 — lockup', wFt: 60, hFt: 4, content: 'logo', sponsor: 'att', pitch: 8.33, outdoor: true },
  { label: 'Ribbon 70x2.5 — spot', wFt: 70, hFt: 2.5, content: 'ad', sponsor: 'chase', pitch: 5.95, outdoor: true },
  { label: 'Courtside 40x1.2 — lockup', wFt: 40, hFt: 1.2, content: 'logo', sponsor: 'cocacola', pitch: 2.9 },
  { label: 'Totem 3x8 — spot', wFt: 3, hFt: 8, content: 'ad', sponsor: 'mcdonalds', pitch: 2.7 },
  { label: 'Stanchion 3x2 — lockup', wFt: 3, hFt: 2, content: 'logo', sponsor: 'delta', pitch: 2.9 },
  { label: 'Mall wall 24x14 — spot (unsold)', wFt: 24, hFt: 14, content: 'ad', sponsor: 'none', pitch: 2.5 },
]

const PHASES = [0.08, 0.42, 0.78]

// The lab uses the exact sizing the 3D scene uses, so it is a true preview.
const sizeFor = ledCanvasSize

async function boot() {
  await Promise.allSettled([
    ...Object.values(sponsorLogos).map(u => loadLogoImage(u)),
    ...venueCampaigns.map(c => loadLogoImage(c.imageUrl)),
  ])
  await ensureLedFonts()

  const root = document.getElementById('lab')!
  for (const c of CASES) {
    const { width, height } = sizeFor(c.wFt, c.hFt)

    const row = document.createElement('div')
    row.className = 'row'
    const lbl = document.createElement('div')
    lbl.className = 'lbl'
    lbl.textContent = `${c.label}   ·   ${width}x${height}px`
    row.appendChild(lbl)

    const strip = document.createElement('div')
    strip.style.display = 'flex'
    strip.style.gap = '10px'
    strip.style.flexWrap = 'wrap'

    for (const phase of PHASES) {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.style.width = Math.min(600, width) + 'px'
      canvas.style.height = 'auto'
      const ctx = canvas.getContext('2d')!
      renderLEDContent(ctx, width, height, c.content, getSponsor(c.sponsor), Math.round(phase * 220), false, true, {
        widthFt: c.wFt,
        pixelPitchMm: c.pitch,
        outdoor: c.outdoor,
        phase,
      })
      strip.appendChild(canvas)
    }
    row.appendChild(strip)
    root.appendChild(row)
  }
  document.body.dataset.ready = '1'
}

boot()
