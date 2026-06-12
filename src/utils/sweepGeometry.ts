import { BufferGeometry, Float32BufferAttribute } from 'three'

export type SweepProfilePoint = [offset: number, y: number]

/**
 * Sweeps a 2D profile around an ellipse to build bowls, walls, fascia bands
 * and roof rings as a single mesh. Each profile point is an outward radial
 * offset from the base ellipse (rx, rz) plus a height.
 *
 * UVs: u runs around the ellipse (scaled by uRepeat), v runs along the
 * profile by arc length — so a seat texture maps rows correctly onto rakes.
 */
export function sweepEllipse(opts: {
  rx: number
  rz: number
  profile: SweepProfilePoint[]
  segments?: number
  uRepeat?: number
  thetaStart?: number
  thetaLength?: number
}): BufferGeometry {
  const {
    rx, rz, profile,
    segments = 128,
    uRepeat = 1,
    thetaStart = 0,
    thetaLength = Math.PI * 2,
  } = opts

  const P = profile.length
  const positions: number[] = []
  const uvs: number[] = []
  const indices: number[] = []

  // Cumulative profile arc length for v coordinates
  const vDist: number[] = [0]
  for (let j = 1; j < P; j++) {
    const [o0, y0] = profile[j - 1]
    const [o1, y1] = profile[j]
    vDist.push(vDist[j - 1] + Math.hypot(o1 - o0, y1 - y0))
  }
  const totalV = vDist[P - 1] || 1

  for (let i = 0; i <= segments; i++) {
    const a = thetaStart + (i / segments) * thetaLength
    const cos = Math.cos(a)
    const sin = Math.sin(a)
    for (let j = 0; j < P; j++) {
      const [off, y] = profile[j]
      positions.push((rx + off) * cos, y, (rz + off) * sin)
      uvs.push((i / segments) * uRepeat, vDist[j] / totalV)
    }
  }

  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < P - 1; j++) {
      const a = i * P + j
      const b = (i + 1) * P + j
      indices.push(a, b, a + 1, b, b + 1, a + 1)
    }
  }

  const geo = new BufferGeometry()
  geo.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geo.setAttribute('uv', new Float32BufferAttribute(uvs, 2))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return geo
}

/** Approximate ellipse circumference (Ramanujan) for texture repeat math. */
export function ellipseCircumference(rx: number, rz: number) {
  const h = ((rx - rz) ** 2) / ((rx + rz) ** 2)
  return Math.PI * (rx + rz) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)))
}
