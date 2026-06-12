import { useMemo } from 'react'
import { DoubleSide } from 'three'
import { sweepEllipse, ellipseCircumference } from '@/utils/sweepGeometry'
import {
  makeSeatTexture,
  makeSuiteBandTexture,
  makeFacadeTexture,
  makeLampBankTexture,
  makeTrussAlphaTexture,
  makeGroundTexture,
  makeFieldTexture,
} from '@/utils/proceduralTextures'

// Bowl footprint — field is 160 × 80, inner edge of the stands sits just
// outside the apron. All tiers share these base radii plus radial offsets.
const RX = 92
const RZ = 58

/** Raked seating tier with individual-seat texture. */
function SeatingTier({ frontOffset, backOffset, frontY, backY, rows, seed }: {
  frontOffset: number; backOffset: number; frontY: number; backY: number; rows: number; seed: number
}) {
  const { geometry, texture } = useMemo(() => {
    const geometry = sweepEllipse({
      rx: RX, rz: RZ,
      profile: [[frontOffset, frontY], [backOffset, backY]],
      segments: 160,
      uRepeat: 1,
    })
    const { texture, seatsPerRepeat } = makeSeatTexture({ rows, seed })
    // Each texture repeat covers seatsPerRepeat seats ~0.55u wide each
    const circumference = ellipseCircumference(RX + frontOffset, RZ + frontOffset)
    texture.repeat.set(circumference / (seatsPerRepeat * 0.62), 1)
    return { geometry, texture }
  }, [frontOffset, backOffset, frontY, backY, rows, seed])

  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial map={texture} roughness={0.92} metalness={0.02} side={DoubleSide} />
    </mesh>
  )
}

/** Plain swept band — risers, walls, fascia structure. */
function SweptBand({ profile, color, segments = 128, metalness = 0.1, roughness = 0.85, emissive, emissiveIntensity, map, uRepeat = 1 }: {
  profile: [number, number][]; color: string; segments?: number
  metalness?: number; roughness?: number; emissive?: string; emissiveIntensity?: number; map?: any; uRepeat?: number
}) {
  const geometry = useMemo(
    () => sweepEllipse({ rx: RX, rz: RZ, profile, segments, uRepeat }),
    [profile, segments, uRepeat],
  )
  return (
    <mesh geometry={geometry} receiveShadow castShadow>
      <meshStandardMaterial
        map={map}
        color={color}
        metalness={metalness}
        roughness={roughness}
        emissive={emissive ?? '#000000'}
        emissiveIntensity={emissiveIntensity ?? 0}
        emissiveMap={emissive ? map : undefined}
        side={DoubleSide}
      />
    </mesh>
  )
}

function FieldSurface() {
  const fieldTexture = useMemo(() => makeFieldTexture(), [])
  return (
    <group>
      {/* Apron — rubberized surround */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.18, 0]} receiveShadow>
        <planeGeometry args={[182, 112]} />
        <meshStandardMaterial color="#16181d" roughness={0.95} />
      </mesh>
      {/* Playing surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.42, 0]} receiveShadow>
        <planeGeometry args={[160, 80]} />
        <meshStandardMaterial map={fieldTexture} roughness={0.88} metalness={0} />
      </mesh>
    </group>
  )
}

/** NFL goal posts — gooseneck base, crossbar, uprights. */
function GoalPost({ x, flip }: { x: number; flip: number }) {
  const yellow = '#f0c437'
  return (
    <group position={[x, 0, 0]}>
      {/* Base stem behind the end line */}
      <mesh position={[flip * 2.4, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.38, 3.2, 10]} />
        <meshStandardMaterial color={yellow} roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Gooseneck angled arm */}
      <mesh position={[flip * 1.2, 3.7, 0]} rotation={[0, 0, flip * 0.62]} castShadow>
        <cylinderGeometry args={[0.26, 0.3, 3.4, 10]} />
        <meshStandardMaterial color={yellow} roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Crossbar */}
      <mesh position={[0, 5.2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.22, 10.3, 10]} />
        <meshStandardMaterial color={yellow} roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Uprights */}
      {[-5.15, 5.15].map(z => (
        <mesh key={z} position={[0, 11.2, z]} castShadow>
          <cylinderGeometry args={[0.18, 0.22, 12, 10]} />
          <meshStandardMaterial color={yellow} roughness={0.4} metalness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

/** Roof-ring floodlight banks + the four spotlights that actually light the field. */
function RoofLighting() {
  const lampTexture = useMemo(() => makeLampBankTexture(), [])

  const banks = useMemo(() => {
    const out: Array<{ pos: [number, number, number]; rotY: number }> = []
    const n = 10
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.PI / n
      const x = (RX + 42) * Math.cos(a)
      const z = (RZ + 42) * Math.sin(a)
      out.push({ pos: [x, 44.5, z], rotY: -a + Math.PI / 2 })
    }
    return out
  }, [])

  const spots: Array<[number, number, number]> = [
    [-95, 60, -65], [95, 60, -65], [-95, 60, 65], [95, 60, 65],
  ]

  return (
    <group>
      {banks.map((b, i) => (
        <group key={i} position={b.pos} rotation={[0, b.rotY, 0]}>
          {/* Housing */}
          <mesh position={[0, 0, -0.4]}>
            <boxGeometry args={[10.5, 3.6, 0.7]} />
            <meshStandardMaterial color="#14161c" metalness={0.7} roughness={0.4} />
          </mesh>
          {/* Lamp face — angled down toward the field */}
          <mesh rotation={[-0.5, 0, 0]} position={[0, -0.3, 0.25]}>
            <planeGeometry args={[10, 3.2]} />
            <meshBasicMaterial map={lampTexture} toneMapped={false} />
          </mesh>
        </group>
      ))}
      {spots.map((pos, i) => (
        <spotLight
          key={i}
          position={pos}
          target-position={[pos[0] * 0.2, 0, pos[2] * 0.2]}
          color="#fff3dc"
          intensity={2600}
          distance={420}
          angle={0.72}
          penumbra={0.6}
          decay={1.6}
          castShadow={i === 0}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0004}
        />
      ))}
    </group>
  )
}

/** Center-hung videoboard housing with twin support towers + truss bridge. */
function ScoreboardStructure() {
  const trussTower = useMemo(() => {
    const t = makeTrussAlphaTexture()
    t.repeat.set(1, 14)
    return t
  }, [])
  const trussBridge = useMemo(() => {
    const t = makeTrussAlphaTexture()
    t.repeat.set(18, 1)
    return t
  }, [])

  // Bridge runs along X (the board's long axis) between towers riding the
  // outer facade, so the hangers land on the housing top.
  const towerX = RX + 47

  return (
    <group>
      {/* Housing around the two board zones at y=55, z=±4 */}
      <mesh position={[0, 55, 0]} castShadow>
        <boxGeometry args={[42.5, 24.5, 7.6]} />
        <meshStandardMaterial color="#0c0e14" metalness={0.85} roughness={0.3} />
      </mesh>
      {/* End caps with branded glow strip */}
      {[-21.5, 21.5].map(x => (
        <mesh key={x} position={[x, 55, 0]}>
          <boxGeometry args={[0.6, 23, 6.8]} />
          <meshStandardMaterial color="#0A52EF" emissive="#0A52EF" emissiveIntensity={0.8} metalness={0.5} roughness={0.4} />
        </mesh>
      ))}

      {/* Twin lattice towers on the bowl rim, east & west */}
      {[-1, 1].map(side => (
        <group key={side}>
          <mesh position={[side * towerX, 37, 0]} castShadow>
            <boxGeometry args={[5, 74, 5]} />
            <meshStandardMaterial
              color="#3a4254"
              metalness={0.85}
              roughness={0.35}
              alphaMap={trussTower}
              transparent
              alphaTest={0.45}
              side={DoubleSide}
            />
          </mesh>
          {/* Tower cap + aircraft beacon */}
          <mesh position={[side * towerX, 74.6, 0]}>
            <boxGeometry args={[5.5, 1.2, 5.5]} />
            <meshStandardMaterial color="#14161c" metalness={0.7} roughness={0.4} />
          </mesh>
          <mesh position={[side * towerX, 75.6, 0]}>
            <sphereGeometry args={[0.45, 8, 8]} />
            <meshBasicMaterial color="#ff3b30" toneMapped={false} />
          </mesh>
        </group>
      ))}

      {/* Truss bridge spanning the bowl along the board axis */}
      <mesh position={[0, 71.5, 0]} castShadow>
        <boxGeometry args={[towerX * 2, 4.5, 4.5]} />
        <meshStandardMaterial
          color="#3a4254"
          metalness={0.85}
          roughness={0.35}
          alphaMap={trussBridge}
          transparent
          alphaTest={0.45}
          side={DoubleSide}
        />
      </mesh>

      {/* Hanger cables from bridge to housing top */}
      {[-16, -8, 0, 8, 16].map(x => (
        <mesh key={x} position={[x, 68.3, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 2.4, 6]} />
          <meshStandardMaterial color="#494f5e" metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
    </group>
  )
}

/** Steel frames carrying the endzone boards above the upper deck. */
function EndzoneMounts() {
  return (
    <group>
      {[-1, 1].map(side => (
        <group key={side} position={[0, 0, side * 86.5]}>
          {/* Support posts rising from the upper-deck rake */}
          {[-11, 11].map(x => (
            <mesh key={x} position={[x, 29.5, 0]} castShadow>
              <boxGeometry args={[1, 13, 1]} />
              <meshStandardMaterial color="#262c38" metalness={0.8} roughness={0.35} />
            </mesh>
          ))}
          {/* Header beam */}
          <mesh position={[0, 36.4, 0]}>
            <boxGeometry args={[32, 1.2, 1.2]} />
            <meshStandardMaterial color="#262c38" metalness={0.8} roughness={0.35} />
          </mesh>
          {/* Catwalk under the board */}
          <mesh position={[0, 23.6, side * -1]}>
            <boxGeometry args={[31, 0.4, 2.4]} />
            <meshStandardMaterial color="#1a1f29" metalness={0.7} roughness={0.45} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/** Vomitory tunnels cut into the lower bowl with glowing mouths. */
function Tunnels() {
  const spots = [0, Math.PI / 2, Math.PI, Math.PI * 1.5]
  return (
    <group>
      {spots.map((a, i) => {
        const x = (RX + 5) * Math.cos(a)
        const z = (RZ + 5) * Math.sin(a)
        return (
          <group key={i} position={[x, 0, z]} rotation={[0, Math.PI / 2 - a, 0]}>
            {/* Tunnel frame punched into the rake */}
            <mesh position={[0, 4.2, 0]}>
              <boxGeometry args={[9.5, 6, 8]} />
              <meshStandardMaterial color="#11141c" roughness={0.85} />
            </mesh>
            {/* Glowing mouth facing the field */}
            <mesh position={[0, 3.9, -4.1]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[7.6, 4.4]} />
              <meshBasicMaterial color="#2c3a55" toneMapped={false} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

export function Stadium() {
  const suiteTexture = useMemo(() => makeSuiteBandTexture(), [])
  const facadeTexture = useMemo(() => makeFacadeTexture(), [])
  const groundTexture = useMemo(() => makeGroundTexture(), [])

  return (
    <group>
      {/* Surroundings — asphalt, ring road, parking */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[1600, 1600]} />
        <meshStandardMaterial map={groundTexture} color="#a8b0c0" roughness={0.96} metalness={0} />
      </mesh>

      <FieldSurface />
      <GoalPost x={-80} flip={-1} />
      <GoalPost x={80} flip={1} />

      {/* Field wall — padded barrier at the bowl base */}
      <SweptBand profile={[[0, 0], [0, 3.2], [0.8, 3.4]]} color="#1c2f52" roughness={0.7} />

      {/* Lower bowl — 16 rows */}
      <SeatingTier frontOffset={1} backOffset={27} frontY={3.2} backY={17} rows={16} seed={7} />

      {/* Mid band — suite & club level with lit glass */}
      <SweptBand profile={[[27, 17], [27, 21.5]]} color="#ffffff" map={suiteTexture} uRepeat={8} roughness={0.5} metalness={0.2} emissive="#ffffff" emissiveIntensity={0.55} />
      {/* Suite-level floor lip */}
      <SweptBand profile={[[26.2, 21.5], [29, 21.8]]} color="#11141c" roughness={0.8} />

      {/* Upper deck — cantilevered over the suites, 14 rows */}
      <SeatingTier frontOffset={23} backOffset={45} frontY={21.8} backY={37.5} rows={14} seed={19} />

      {/* Upper deck underside (visible from below) */}
      <SweptBand profile={[[23, 21.6], [45, 36.8]]} color="#0c0f16" roughness={0.9} segments={96} />

      {/* Top wall + windscreen */}
      <SweptBand profile={[[45, 37.5], [45.5, 41.5]]} color="#141926" roughness={0.75} metalness={0.3} />

      {/* Roof canopy — slight inward slope with dark underside */}
      <SweptBand profile={[[37, 43.2], [53, 41.4]]} color="#1b202c" roughness={0.45} metalness={0.7} segments={96} />
      <SweptBand profile={[[53, 41.4], [53, 39.8]]} color="#10131a" roughness={0.6} metalness={0.5} />

      {/* Exterior facade — ribs and lit glass, leaning slightly outward */}
      <SweptBand profile={[[47, 0], [51.5, 22], [50, 39.8]]} color="#ffffff" map={facadeTexture} uRepeat={12} roughness={0.6} metalness={0.4} emissive="#ffffff" emissiveIntensity={0.4} segments={96} />

      <Tunnels />
      <EndzoneMounts />
      <RoofLighting />
      <ScoreboardStructure />
    </group>
  )
}
