import { CanvasTexture, RepeatWrapping, LinearMipMapLinearFilter, LinearFilter } from 'three'

function makeCanvas(w: number, h: number) {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  return { canvas, ctx: canvas.getContext('2d')! }
}

function finishTexture(canvas: HTMLCanvasElement, repeatX = 1, repeatY = 1) {
  const tex = new CanvasTexture(canvas)
  tex.wrapS = RepeatWrapping
  tex.wrapT = RepeatWrapping
  tex.repeat.set(repeatX, repeatY)
  tex.anisotropy = 8
  tex.minFilter = LinearMipMapLinearFilter
  tex.magFilter = LinearFilter
  return tex
}

// Mulberry32 — deterministic so textures are stable across renders
function rng(seed: number) {
  let s = seed
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Tiered seating texture — rows of individual seats with aisles and riser
 * shadows. One horizontal repeat covers `seatsPerRepeat` seats, so the
 * geometry sets texture.repeat.x to (totalSeats / seatsPerRepeat).
 */
export function makeSeatTexture(opts: {
  rows: number
  seatsPerRepeat?: number
  aisleEvery?: number
  palette?: string[]
  seed?: number
}) {
  const { rows, seatsPerRepeat = 48, aisleEvery = 16, palette = ['#16345e', '#1a3a68', '#122c52', '#1e4070'], seed = 7 } = opts
  const seatW = 22
  const rowH = 34
  const { canvas, ctx } = makeCanvas(seatsPerRepeat * seatW, rows * rowH)
  const rand = rng(seed)

  for (let r = 0; r < rows; r++) {
    const y = (rows - 1 - r) * rowH
    // Tread concrete
    ctx.fillStyle = '#202632'
    ctx.fillRect(0, y, canvas.width, rowH)
    // Riser shadow at the back of each tread
    const riser = ctx.createLinearGradient(0, y, 0, y + rowH)
    riser.addColorStop(0, 'rgba(0,0,0,0.55)')
    riser.addColorStop(0.35, 'rgba(0,0,0,0.0)')
    ctx.fillStyle = riser
    ctx.fillRect(0, y, canvas.width, rowH)

    for (let s = 0; s < seatsPerRepeat; s++) {
      // Aisle gap
      if (s % aisleEvery === 0) {
        ctx.fillStyle = '#262c3a'
        ctx.fillRect(s * seatW, y, seatW, rowH)
        continue
      }
      const base = palette[Math.floor(rand() * palette.length)]
      ctx.fillStyle = base
      // Seat back
      ctx.fillRect(s * seatW + 2, y + 6, seatW - 4, rowH - 14)
      // Seat highlight
      ctx.fillStyle = 'rgba(255,255,255,0.07)'
      ctx.fillRect(s * seatW + 2, y + 6, seatW - 4, 5)
      // Occasional brighter seat (worn / different batch)
      if (rand() > 0.93) {
        ctx.fillStyle = 'rgba(120,150,200,0.25)'
        ctx.fillRect(s * seatW + 2, y + 6, seatW - 4, rowH - 14)
      }
      // Gap shadow between seats
      ctx.fillStyle = 'rgba(0,0,0,0.4)'
      ctx.fillRect(s * seatW, y + 6, 2, rowH - 14)
    }
  }
  return { texture: finishTexture(canvas), seatsPerRepeat }
}

/** Suite-level band: dark mullions with warm lit glass. */
export function makeSuiteBandTexture(opts: { panels?: number; seed?: number } = {}) {
  const { panels = 24, seed = 21 } = opts
  const panelW = 64
  const { canvas, ctx } = makeCanvas(panels * panelW, 128)
  const rand = rng(seed)

  ctx.fillStyle = '#11151f'
  ctx.fillRect(0, 0, canvas.width, 128)

  for (let p = 0; p < panels; p++) {
    const x = p * panelW
    const lit = rand() > 0.35
    if (lit) {
      const warm = rand() > 0.5
      const g = ctx.createLinearGradient(0, 20, 0, 108)
      g.addColorStop(0, warm ? 'rgba(255,214,150,0.85)' : 'rgba(170,200,255,0.55)')
      g.addColorStop(1, warm ? 'rgba(190,140,80,0.45)' : 'rgba(90,120,180,0.3)')
      ctx.fillStyle = g
    } else {
      ctx.fillStyle = 'rgba(40,55,85,0.35)'
    }
    ctx.fillRect(x + 6, 20, panelW - 12, 88)
    // Silhouettes in some lit suites
    if (lit && rand() > 0.6) {
      ctx.fillStyle = 'rgba(10,12,20,0.8)'
      const px = x + 10 + rand() * (panelW - 30)
      ctx.beginPath()
      ctx.arc(px + 6, 80, 7, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillRect(px, 86, 13, 22)
    }
    // Mullion
    ctx.fillStyle = '#0a0d14'
    ctx.fillRect(x, 0, 6, 128)
  }
  // Top/bottom frame
  ctx.fillStyle = '#0a0d14'
  ctx.fillRect(0, 0, canvas.width, 18)
  ctx.fillRect(0, 110, canvas.width, 18)
  return finishTexture(canvas)
}

/** Stadium exterior: vertical ribs, glass strips, some interior glow. */
export function makeFacadeTexture(opts: { seed?: number } = {}) {
  const { seed = 33 } = opts
  const { canvas, ctx } = makeCanvas(1024, 512)
  const rand = rng(seed)

  const g = ctx.createLinearGradient(0, 0, 0, 512)
  g.addColorStop(0, '#171c28')
  g.addColorStop(1, '#0d1018')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 1024, 512)

  // Vertical glass strips between ribs
  for (let x = 0; x < 1024; x += 64) {
    const lit = rand()
    const glass = ctx.createLinearGradient(0, 0, 0, 512)
    if (lit > 0.55) {
      glass.addColorStop(0, 'rgba(255,200,130,0.05)')
      glass.addColorStop(0.5, 'rgba(255,190,120,0.28)')
      glass.addColorStop(1, 'rgba(255,170,90,0.45)')
    } else {
      glass.addColorStop(0, 'rgba(90,130,200,0.04)')
      glass.addColorStop(1, 'rgba(70,100,160,0.16)')
    }
    ctx.fillStyle = glass
    ctx.fillRect(x + 14, 30, 36, 460)
    // Floor lines inside glass
    ctx.fillStyle = 'rgba(8,10,16,0.7)'
    for (let fy = 90; fy < 512; fy += 84) ctx.fillRect(x + 14, fy, 36, 6)
    // Rib
    const rib = ctx.createLinearGradient(x, 0, x + 14, 0)
    rib.addColorStop(0, '#2a3344')
    rib.addColorStop(0.5, '#39455c')
    rib.addColorStop(1, '#1a2130')
    ctx.fillStyle = rib
    ctx.fillRect(x, 0, 14, 512)
  }
  // Top band
  ctx.fillStyle = '#1f2736'
  ctx.fillRect(0, 0, 1024, 26)
  return finishTexture(canvas)
}

/** City skyline silhouette with lit windows. Drawn opaque-on-transparent. */
export function makeSkylineTexture(opts: { seed?: number } = {}) {
  const { seed = 51 } = opts
  const { canvas, ctx } = makeCanvas(4096, 512)
  const rand = rng(seed)

  let x = 0
  while (x < 4096) {
    const w = 60 + rand() * 180
    const h = 90 + rand() * (rand() > 0.85 ? 360 : 210)
    const bx = x
    const by = 512 - h
    ctx.fillStyle = `rgba(${10 + rand() * 8},${13 + rand() * 8},${24 + rand() * 10},1)`
    ctx.fillRect(bx, by, w, h)
    // Rooftop details
    if (rand() > 0.7) {
      ctx.fillRect(bx + w * 0.3, by - 14, w * 0.18, 14)
      ctx.fillStyle = 'rgba(255,60,60,0.9)'
      ctx.fillRect(bx + w * 0.38, by - 20, 4, 6)
    }
    // Windows
    const cols = Math.floor(w / 18)
    const rows = Math.floor(h / 22)
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (rand() > 0.45) continue
        const warm = rand() > 0.4
        ctx.fillStyle = warm
          ? `rgba(255,${190 + rand() * 50},${110 + rand() * 60},${0.5 + rand() * 0.5})`
          : `rgba(${140 + rand() * 60},${180 + rand() * 50},255,${0.35 + rand() * 0.45})`
        ctx.fillRect(bx + 8 + c * 18, by + 10 + r * 22, 8, 11)
      }
    }
    x += w + rand() * 50
  }
  const tex = finishTexture(canvas)
  return tex
}

/** Bank of stadium floodlight lamps — bright dots on dark housing. */
export function makeLampBankTexture(opts: { cols?: number; rowsN?: number } = {}) {
  const { cols = 7, rowsN = 3 } = opts
  const { canvas, ctx } = makeCanvas(cols * 36, rowsN * 36)
  ctx.fillStyle = '#10131a'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rowsN; r++) {
      const cx = c * 36 + 18
      const cy = r * 36 + 18
      const g = ctx.createRadialGradient(cx, cy, 1, cx, cy, 15)
      g.addColorStop(0, 'rgba(255,255,250,1)')
      g.addColorStop(0.4, 'rgba(255,244,214,0.95)')
      g.addColorStop(0.75, 'rgba(255,220,160,0.35)')
      g.addColorStop(1, 'rgba(255,220,160,0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(cx, cy, 15, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  return finishTexture(canvas)
}

/** Steel lattice truss pattern — used as alphaMap so beams read as trusswork. */
export function makeTrussAlphaTexture() {
  const { canvas, ctx } = makeCanvas(256, 64)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, 256, 64)
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 7
  // Chords
  ctx.beginPath(); ctx.moveTo(0, 5); ctx.lineTo(256, 5); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(0, 59); ctx.lineTo(256, 59); ctx.stroke()
  // Diagonals
  ctx.lineWidth = 5
  for (let x = 0; x <= 256; x += 64) {
    ctx.beginPath(); ctx.moveTo(x, 59); ctx.lineTo(x + 32, 5); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(x + 32, 5); ctx.lineTo(x + 64, 59); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(x, 5); ctx.lineTo(x, 59); ctx.stroke()
  }
  const tex = finishTexture(canvas)
  return tex
}

/** Asphalt with parking rings + painted lines for the stadium surroundings. */
export function makeGroundTexture(opts: { seed?: number } = {}) {
  const { seed = 77 } = opts
  const { canvas, ctx } = makeCanvas(2048, 2048)
  const rand = rng(seed)

  ctx.fillStyle = '#0b0d11'
  ctx.fillRect(0, 0, 2048, 2048)

  // Asphalt noise
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = `rgba(${20 + rand() * 35},${22 + rand() * 35},${30 + rand() * 35},${0.05 + rand() * 0.08})`
    ctx.fillRect(rand() * 2048, rand() * 2048, 2 + rand() * 5, 2 + rand() * 5)
  }

  const cx = 1024
  const cy = 1024
  // Ring road
  ctx.strokeStyle = 'rgba(60,65,75,0.5)'
  ctx.lineWidth = 60
  ctx.beginPath()
  ctx.ellipse(cx, cy, 700, 600, 0, 0, Math.PI * 2)
  ctx.stroke()
  ctx.strokeStyle = 'rgba(200,190,120,0.18)'
  ctx.lineWidth = 3
  ctx.setLineDash([26, 30])
  ctx.beginPath()
  ctx.ellipse(cx, cy, 700, 600, 0, 0, Math.PI * 2)
  ctx.stroke()
  ctx.setLineDash([])

  // Parking rows in four quadrants
  ctx.strokeStyle = 'rgba(180,185,200,0.12)'
  ctx.lineWidth = 3
  for (const [qx, qy] of [[330, 330], [1718, 330], [330, 1718], [1718, 1718]] as const) {
    for (let row = 0; row < 5; row++) {
      const y = qy - 130 + row * 62
      for (let s = 0; s < 14; s++) {
        const x = qx - 200 + s * 30
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 44); ctx.stroke()
      }
    }
  }
  return finishTexture(canvas)
}

/** NFL field — richer grass, full markings, numbers with direction arrows. */
export function makeFieldTexture(opts: { seed?: number } = {}) {
  const { seed = 99 } = opts
  const W = 2048
  const H = 1024
  const { canvas, ctx } = makeCanvas(W, H)
  const rand = rng(seed)

  // Playing surface spans 120yd horizontally. 1yd = W/120 px.
  const YD = W / 120
  const gx = (yd: number) => yd * YD

  // Base grass
  const grad = ctx.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, '#1d6b35')
  grad.addColorStop(0.5, '#247a3f')
  grad.addColorStop(1, '#1d6b35')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  // Mowing stripes every 5 yards
  for (let i = 0; i < 24; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.05)'
    ctx.fillRect(gx(i * 5), 0, gx(5), H)
  }

  // Grass noise — blade clumps
  for (let i = 0; i < 14000; i++) {
    const g = 90 + rand() * 70
    ctx.fillStyle = `rgba(${g * 0.25},${g},${g * 0.38},${0.04 + rand() * 0.05})`
    ctx.fillRect(rand() * W, rand() * H, 2 + rand() * 3, 2 + rand() * 3)
  }

  const fieldTop = H * 0.06
  const fieldBot = H * 0.94

  // Endzones — painted, with team-color base
  ctx.fillStyle = 'rgba(8,38,90,0.85)'
  ctx.fillRect(0, fieldTop, gx(10), fieldBot - fieldTop)
  ctx.fillStyle = 'rgba(110,16,28,0.85)'
  ctx.fillRect(gx(110), fieldTop, gx(10), fieldBot - fieldTop)
  // Endzone wordmarks
  ctx.fillStyle = 'rgba(255,255,255,0.9)'
  ctx.font = `bold ${Math.round(H * 0.13)}px "Work Sans", sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.save(); ctx.translate(gx(5), H / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('HOME', 0, 0); ctx.restore()
  ctx.save(); ctx.translate(gx(115), H / 2); ctx.rotate(Math.PI / 2); ctx.fillText('VISITORS', 0, 0); ctx.restore()

  // Sidelines + end lines (6ft white border)
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'
  ctx.lineWidth = 8
  ctx.strokeRect(gx(0) + 4, fieldTop, gx(120) - 8, fieldBot - fieldTop)

  // Yard lines every 5 yards (between goal lines)
  for (let yd = 10; yd <= 110; yd += 5) {
    ctx.strokeStyle = yd === 10 || yd === 110 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)'
    ctx.lineWidth = yd === 60 ? 6 : 4
    ctx.beginPath()
    ctx.moveTo(gx(yd), fieldTop)
    ctx.lineTo(gx(yd), fieldBot)
    ctx.stroke()
  }

  // Hash marks — two inboard rows + sideline ticks, every yard
  ctx.strokeStyle = 'rgba(255,255,255,0.55)'
  ctx.lineWidth = 2
  for (let yd = 11; yd < 110; yd++) {
    if (yd % 5 === 0) continue
    const x = gx(yd)
    for (const hy of [H * 0.385, H * 0.615]) {
      ctx.beginPath(); ctx.moveTo(x, hy - 7); ctx.lineTo(x, hy + 7); ctx.stroke()
    }
    ctx.beginPath(); ctx.moveTo(x, fieldTop + 4); ctx.lineTo(x, fieldTop + 18); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(x, fieldBot - 18); ctx.lineTo(x, fieldBot - 4); ctx.stroke()
  }

  // Yard numbers with direction arrows
  ctx.font = `bold ${Math.round(H * 0.066)}px "Work Sans", sans-serif`
  const numbers: Array<[number, string, number]> = [
    [20, '1 0', 1], [30, '2 0', 1], [40, '3 0', 1], [50, '4 0', 1], [60, '5 0', 0],
    [70, '4 0', -1], [80, '3 0', -1], [90, '2 0', -1], [100, '1 0', -1],
  ]
  for (const [yd, label, dir] of numbers) {
    for (const [ny, flip] of [[H * 0.825, 0], [H * 0.175, 1]] as const) {
      ctx.save()
      ctx.translate(gx(yd), ny)
      if (flip) ctx.rotate(Math.PI)
      ctx.fillStyle = 'rgba(255,255,255,0.82)'
      ctx.fillText(label, 0, 0)
      if (dir !== 0) {
        ctx.beginPath()
        const ax = dir * (H * 0.052)
        ctx.moveTo(ax, -H * 0.022)
        ctx.lineTo(ax + dir * H * 0.02, 0)
        ctx.lineTo(ax, H * 0.022)
        ctx.closePath()
        ctx.fill()
      }
      ctx.restore()
    }
  }

  // Midfield logo — ANC mark
  ctx.save()
  ctx.translate(gx(60), H / 2)
  ctx.globalAlpha = 0.9
  ctx.fillStyle = 'rgba(255,255,255,0.12)'
  ctx.beginPath(); ctx.arc(0, 0, H * 0.13, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = 'rgba(255,255,255,0.5)'
  ctx.lineWidth = 5
  ctx.beginPath(); ctx.arc(0, 0, H * 0.13, 0, Math.PI * 2); ctx.stroke()
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.font = `800 ${Math.round(H * 0.085)}px "Work Sans", sans-serif`
  ctx.fillText('ANC', 0, 4)
  ctx.restore()

  const tex = finishTexture(canvas)
  tex.anisotropy = 16
  return tex
}

/** Polished hardwood court with finish sheen and richer planks. */
export function makeCourtTexture(opts: { seed?: number } = {}) {
  const { seed = 13 } = opts
  const W = 2048
  const H = 1228
  const { canvas, ctx } = makeCanvas(W, H)
  const rand = rng(seed)

  // Maple base
  const base = ctx.createLinearGradient(0, 0, W, 0)
  base.addColorStop(0, '#c89050')
  base.addColorStop(0.5, '#d49c58')
  base.addColorStop(1, '#c08a4a')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, W, H)

  // Plank strips with varied tone
  const plankH = 26
  for (let y = 0; y < H; y += plankH) {
    const tone = (rand() - 0.5) * 26
    ctx.fillStyle = `rgba(${150 + tone},${100 + tone * 0.7},${40 + tone * 0.4},0.22)`
    ctx.fillRect(0, y, W, plankH)
    // Plank joints — staggered
    ctx.fillStyle = 'rgba(70,45,15,0.35)'
    let jx = rand() * 300
    while (jx < W) {
      ctx.fillRect(jx, y, 3, plankH)
      jx += 260 + rand() * 340
    }
    ctx.fillStyle = 'rgba(60,38,12,0.25)'
    ctx.fillRect(0, y, W, 2)
  }

  // Wood grain streaks
  for (let i = 0; i < 600; i++) {
    const y = rand() * H
    ctx.strokeStyle = `rgba(${110 + rand() * 50},${70 + rand() * 35},${25 + rand() * 18},${0.05 + rand() * 0.07})`
    ctx.lineWidth = 1 + rand() * 1.5
    ctx.beginPath()
    const x0 = rand() * W
    ctx.moveTo(x0, y)
    ctx.bezierCurveTo(x0 + 60, y + (rand() - 0.5) * 6, x0 + 140, y + (rand() - 0.5) * 6, x0 + 220, y)
    ctx.stroke()
  }

  const court = { x: W * 0.055, y: H * 0.075, w: W * 0.89, h: H * 0.85 }
  const cx = W / 2
  const cy = H / 2

  // Painted key areas
  ctx.fillStyle = 'rgba(12,46,110,0.85)'
  const keyW = court.w * 0.16
  const keyH = court.h * 0.42
  ctx.fillRect(court.x, cy - keyH / 2, keyW, keyH)
  ctx.fillRect(court.x + court.w - keyW, cy - keyH / 2, keyW, keyH)

  // Center circle fill
  ctx.fillStyle = 'rgba(12,46,110,0.85)'
  ctx.beginPath()
  ctx.arc(cx, cy, court.h * 0.115, 0, Math.PI * 2)
  ctx.fill()

  // Lines
  ctx.strokeStyle = 'rgba(255,255,255,0.92)'
  ctx.lineWidth = 6
  ctx.strokeRect(court.x, court.y, court.w, court.h)
  ctx.beginPath(); ctx.moveTo(cx, court.y); ctx.lineTo(cx, court.y + court.h); ctx.stroke()
  ctx.beginPath(); ctx.arc(cx, cy, court.h * 0.115, 0, Math.PI * 2); ctx.stroke()
  ctx.strokeRect(court.x, cy - keyH / 2, keyW, keyH)
  ctx.strokeRect(court.x + court.w - keyW, cy - keyH / 2, keyW, keyH)
  // Free throw circles
  ctx.beginPath(); ctx.arc(court.x + keyW, cy, court.h * 0.115, -Math.PI / 2, Math.PI / 2); ctx.stroke()
  ctx.beginPath(); ctx.arc(court.x + court.w - keyW, cy, court.h * 0.115, Math.PI / 2, Math.PI * 1.5); ctx.stroke()
  // 3pt arcs
  ctx.lineWidth = 5
  const r3 = court.h * 0.46
  ctx.beginPath(); ctx.arc(court.x + keyW * 0.35, cy, r3, -1.18, 1.18); ctx.stroke()
  ctx.beginPath(); ctx.arc(court.x + court.w - keyW * 0.35, cy, r3, Math.PI - 1.18, Math.PI + 1.18); ctx.stroke()

  // Center logo
  ctx.fillStyle = 'rgba(255,255,255,0.9)'
  ctx.font = `800 ${Math.round(H * 0.055)}px "Work Sans", sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('ANC', cx, cy)

  // Finish sheen streaks
  for (let i = 0; i < 5; i++) {
    const sx = rand() * W
    const sheen = ctx.createLinearGradient(sx, 0, sx + 300, H)
    sheen.addColorStop(0, 'rgba(255,255,255,0)')
    sheen.addColorStop(0.5, 'rgba(255,255,255,0.05)')
    sheen.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = sheen
    ctx.fillRect(0, 0, W, H)
  }

  const tex = finishTexture(canvas)
  tex.anisotropy = 16
  return tex
}

/** Polished stone / terrazzo floor for mall & transit interiors. */
export function makeStoneFloorTexture(opts: { tint?: [number, number, number]; tile?: number; seed?: number } = {}) {
  const { tint = [196, 192, 184], tile = 128, seed = 41 } = opts
  const { canvas, ctx } = makeCanvas(1024, 1024)
  const rand = rng(seed)

  ctx.fillStyle = `rgb(${tint[0]},${tint[1]},${tint[2]})`
  ctx.fillRect(0, 0, 1024, 1024)

  // Terrazzo speckle
  for (let i = 0; i < 5200; i++) {
    const v = (rand() - 0.5) * 56
    ctx.fillStyle = `rgba(${tint[0] + v},${tint[1] + v},${tint[2] + v},${0.25 + rand() * 0.4})`
    ctx.beginPath()
    ctx.arc(rand() * 1024, rand() * 1024, 1 + rand() * 3, 0, Math.PI * 2)
    ctx.fill()
  }
  // Tile grout
  ctx.strokeStyle = 'rgba(60,58,54,0.55)'
  ctx.lineWidth = 3
  for (let i = 0; i <= 1024; i += tile) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 1024); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(1024, i); ctx.stroke()
  }
  return finishTexture(canvas)
}

/** Storefront strip: glass, signage glow, interior light. */
export function makeStorefrontTexture(opts: { stores?: number; seed?: number } = {}) {
  const { stores = 6, seed = 63 } = opts
  const storeW = 256
  const { canvas, ctx } = makeCanvas(stores * storeW, 512)
  const rand = rng(seed)
  const signColors = ['#e8453c', '#3aa0ff', '#ffd23c', '#43d17c', '#ff7a2e', '#c46cff']

  for (let s = 0; s < stores; s++) {
    const x = s * storeW
    // Wall
    ctx.fillStyle = '#1c1f28'
    ctx.fillRect(x, 0, storeW, 512)
    // Interior glow through glass
    const open = rand() > 0.2
    const g = ctx.createLinearGradient(0, 140, 0, 470)
    if (open) {
      g.addColorStop(0, 'rgba(255,236,200,0.75)')
      g.addColorStop(1, 'rgba(255,214,160,0.35)')
    } else {
      g.addColorStop(0, 'rgba(80,95,130,0.25)')
      g.addColorStop(1, 'rgba(50,60,90,0.12)')
    }
    ctx.fillStyle = g
    ctx.fillRect(x + 16, 140, storeW - 32, 330)
    // Merchandise silhouettes
    if (open) {
      ctx.fillStyle = 'rgba(20,22,30,0.85)'
      for (let m = 0; m < 4; m++) {
        const mx = x + 30 + m * 50 + rand() * 12
        ctx.fillRect(mx, 300 + rand() * 80, 18 + rand() * 16, 90)
      }
    }
    // Glass mullions
    ctx.fillStyle = 'rgba(8,10,14,0.9)'
    ctx.fillRect(x + storeW / 2 - 3, 140, 6, 330)
    // Sign band
    ctx.fillStyle = '#10121a'
    ctx.fillRect(x + 8, 52, storeW - 16, 64)
    const color = signColors[Math.floor(rand() * signColors.length)]
    ctx.fillStyle = color
    ctx.font = '600 38px "Work Sans", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowColor = color
    ctx.shadowBlur = 22
    const names = ['ATELIER', 'NORDIC', 'VERTEX', 'KIOSK', 'LUMEN', 'ARCADE', 'ORBIT', 'CIVIC']
    ctx.fillText(names[Math.floor(rand() * names.length)], x + storeW / 2, 84)
    ctx.shadowBlur = 0
    // Pillar between stores
    ctx.fillStyle = '#232734'
    ctx.fillRect(x, 0, 10, 512)
  }
  return finishTexture(canvas)
}
