import { useMemo } from 'react'
import { DoubleSide, BackSide, AdditiveBlending } from 'three'
import { sweepEllipse, ellipseCircumference } from '@/utils/sweepGeometry'
import {
  makeSeatTexture,
  makeSuiteBandTexture,
  makeTrussAlphaTexture,
  makeCourtTexture,
} from '@/utils/proceduralTextures'

// Bowl footprint — court is 50 × 30, stands start just past the apron.
const RX = 36
const RZ = 26

function SeatingTier({ frontOffset, backOffset, frontY, backY, rows, seed, palette }: {
  frontOffset: number; backOffset: number; frontY: number; backY: number; rows: number; seed: number; palette?: string[]
}) {
  const { geometry, texture } = useMemo(() => {
    const geometry = sweepEllipse({
      rx: RX, rz: RZ,
      profile: [[frontOffset, frontY], [backOffset, backY]],
      segments: 128,
      uRepeat: 1,
    })
    const { texture, seatsPerRepeat } = makeSeatTexture({ rows, seed, palette })
    const circumference = ellipseCircumference(RX + frontOffset, RZ + frontOffset)
    texture.repeat.set(circumference / (seatsPerRepeat * 0.55), 1)
    return { geometry, texture }
  }, [frontOffset, backOffset, frontY, backY, rows, seed, palette])

  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial map={texture} roughness={0.92} metalness={0.02} side={DoubleSide} />
    </mesh>
  )
}

function SweptBand({ profile, color, segments = 96, metalness = 0.1, roughness = 0.85, emissive, emissiveIntensity, map, uRepeat = 1, side = DoubleSide }: {
  profile: [number, number][]; color: string; segments?: number
  metalness?: number; roughness?: number; emissive?: string; emissiveIntensity?: number; map?: any; uRepeat?: number; side?: typeof DoubleSide
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
        side={side}
      />
    </mesh>
  )
}

function CourtSurface() {
  const courtTexture = useMemo(() => makeCourtTexture(), [])
  return (
    <group>
      {/* Event-level floor around the court */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]} receiveShadow>
        <planeGeometry args={[78, 58]} />
        <meshStandardMaterial color="#15171d" roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Hardwood — glossy with environment reflections */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.12, 0]} receiveShadow>
        <planeGeometry args={[50, 30]} />
        <meshStandardMaterial map={courtTexture} roughness={0.25} metalness={0.08} envMapIntensity={0.9} />
      </mesh>
    </group>
  )
}

/** Basketball hoop — stanchion arm, glass backboard, rim. */
function Hoop({ x }: { x: number }) {
  const dir = Math.sign(x)
  return (
    <group position={[x, 0, 0]}>
      {/* Base */}
      <mesh position={[dir * 3.2, 0.55, 0]} castShadow>
        <boxGeometry args={[3.4, 1.1, 2.2]} />
        <meshStandardMaterial color="#15181f" roughness={0.5} metalness={0.4} />
      </mesh>
      {/* Vertical post */}
      <mesh position={[dir * 3.2, 2.6, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.26, 4.4, 10]} />
        <meshStandardMaterial color="#1b1f28" roughness={0.35} metalness={0.7} />
      </mesh>
      {/* Arm reaching over the baseline */}
      <mesh position={[dir * 1.55, 4.55, 0]} rotation={[0, 0, dir * 0.32]} castShadow>
        <boxGeometry args={[3.6, 0.32, 0.32]} />
        <meshStandardMaterial color="#1b1f28" roughness={0.35} metalness={0.7} />
      </mesh>
      {/* Glass backboard */}
      <mesh position={[dir * -0.1, 4.4, 0]}>
        <boxGeometry args={[0.12, 2.6, 4.4]} />
        <meshPhysicalMaterial color="#cfe2ff" transparent opacity={0.22} roughness={0.05} metalness={0} transmission={0} />
      </mesh>
      {/* Backboard frame + shooter square */}
      <mesh position={[dir * -0.1, 4.4, 0]}>
        <boxGeometry args={[0.06, 2.7, 4.5]} />
        <meshStandardMaterial color="#e8ecf4" wireframe />
      </mesh>
      {/* Rim */}
      <mesh position={[dir * -0.75, 3.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.06, 8, 24]} />
        <meshStandardMaterial color="#e8682c" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Net hint */}
      <mesh position={[dir * -0.75, 3.05, 0]}>
        <coneGeometry args={[0.52, 0.8, 10, 1, true]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.35} wireframe />
      </mesh>
    </group>
  )
}

/** Dark ceiling with trusses, catwalks and spot fixtures + haze cones. */
function ArenaCeiling() {
  const trussAlpha = useMemo(() => {
    const t = makeTrussAlphaTexture()
    t.repeat.set(10, 1)
    return t
  }, [])

  const fixtures = useMemo(() => {
    const out: Array<{ pos: [number, number, number]; angleTo: [number, number, number] }> = []
    const n = 8
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.PI / 8
      out.push({
        pos: [Math.cos(a) * 30, 28.4, Math.sin(a) * 21],
        angleTo: [Math.cos(a) * 8, 0, Math.sin(a) * 6],
      })
    }
    return out
  }, [])

  return (
    <group>
      {/* Ceiling deck — one-way: visible from inside, see-through from above */}
      <mesh position={[0, 30.5, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 50 / 66, 1]}>
        <circleGeometry args={[66, 48]} />
        <meshStandardMaterial color="#0a0c11" roughness={0.95} />
      </mesh>

      {/* Truss grid */}
      {[-22, -8, 8, 22].map(z => (
        <mesh key={`tx${z}`} position={[0, 28.6, z]}>
          <boxGeometry args={[78, 2.2, 2.2]} />
          <meshStandardMaterial color="#2c3342" metalness={0.8} roughness={0.4} alphaMap={trussAlpha} transparent alphaTest={0.45} side={DoubleSide} />
        </mesh>
      ))}
      {[-30, 0, 30].map(x => (
        <mesh key={`tz${x}`} position={[x, 28.6, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[56, 2.2, 2.2]} />
          <meshStandardMaterial color="#2c3342" metalness={0.8} roughness={0.4} alphaMap={trussAlpha} transparent alphaTest={0.45} side={DoubleSide} />
        </mesh>
      ))}

      {/* Spot fixtures with subtle haze cones */}
      {fixtures.map((f, i) => (
        <group key={i} position={f.pos}>
          <mesh>
            <cylinderGeometry args={[0.55, 0.8, 1.4, 10]} />
            <meshStandardMaterial color="#16181f" metalness={0.7} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.8, 0]}>
            <sphereGeometry args={[0.42, 10, 10]} />
            <meshBasicMaterial color="#fff6e2" toneMapped={false} />
          </mesh>
          {/* Haze cone */}
          <mesh position={[0, -13, 0]}>
            <coneGeometry args={[6.5, 26, 20, 1, true]} />
            <meshBasicMaterial
              color="#9fb4d8"
              transparent
              opacity={0.035}
              blending={AdditiveBlending}
              depthWrite={false}
              side={DoubleSide}
            />
          </mesh>
        </group>
      ))}

      {/* Court key lights */}
      {[[-22, 28, -14], [22, 28, -14], [-22, 28, 14], [22, 28, 14]].map((pos, i) => (
        <spotLight
          key={i}
          position={pos as [number, number, number]}
          target-position={[pos[0] * 0.15, 0, pos[2] * 0.15]}
          color="#fff4e0"
          intensity={1300}
          distance={120}
          angle={0.62}
          penumbra={0.55}
          decay={1.7}
          castShadow={i === 0}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0004}
        />
      ))}
    </group>
  )
}

/** Center-hung housing — the two board zones hang at y≈19, z=±3. */
function CenterHungStructure() {
  return (
    <group>
      <mesh position={[0, 19, 0]} castShadow>
        <boxGeometry args={[30, 18.5, 5.6]} />
        <meshStandardMaterial color="#0c0e14" metalness={0.85} roughness={0.3} />
      </mesh>
      {/* Side LED accent strips */}
      {[-15.2, 15.2].map(x => (
        <mesh key={x} position={[x, 19, 0]}>
          <boxGeometry args={[0.5, 17.5, 5]} />
          <meshStandardMaterial color="#0A52EF" emissive="#0A52EF" emissiveIntensity={0.9} />
        </mesh>
      ))}
      {/* Bottom ring display housing */}
      <mesh position={[0, 9, 0]}>
        <cylinderGeometry args={[4.2, 4.6, 1.6, 24]} />
        <meshStandardMaterial color="#10131a" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Suspension cables from housing top to the ceiling deck */}
      {[[-12, -1.8], [12, -1.8], [-12, 1.8], [12, 1.8]].map(([x, z], i) => (
        <mesh key={i} position={[x, 29.4, z]}>
          <cylinderGeometry args={[0.09, 0.09, 2.4, 6]} />
          <meshStandardMaterial color="#494f5e" metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
    </group>
  )
}

export function Arena() {
  const suiteTexture = useMemo(() => makeSuiteBandTexture({ panels: 18, seed: 87 }), [])

  return (
    <group>
      {/* Event floor base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
        <planeGeometry args={[300, 300]} />
        <meshStandardMaterial color="#0a0b0f" roughness={0.97} />
      </mesh>

      <CourtSurface />
      <Hoop x={-21} />
      <Hoop x={21} />

      {/* Court-side barrier wall */}
      <SweptBand profile={[[0, 0], [0, 2.2], [0.6, 2.4]]} color="#1c2f52" roughness={0.7} />

      {/* Lower bowl — 10 rows */}
      <SeatingTier frontOffset={1} backOffset={15} frontY={2.2} backY={10} rows={10} seed={31} />

      {/* Suite band */}
      <SweptBand profile={[[15, 10], [15, 13]]} color="#ffffff" map={suiteTexture} uRepeat={5} roughness={0.5} metalness={0.2} emissive="#ffffff" emissiveIntensity={0.5} />
      <SweptBand profile={[[14.4, 13], [16.5, 13.2]]} color="#11141c" roughness={0.8} />

      {/* Upper deck — 9 rows, steeper */}
      <SeatingTier frontOffset={13} backOffset={26} frontY={13.2} backY={23} rows={9} seed={43} palette={['#251d3f', '#2c2348', '#1e1836', '#332a52']} />

      {/* Upper deck underside */}
      <SweptBand profile={[[13, 13], [26, 22.8]]} color="#0c0f16" roughness={0.9} segments={64} />

      {/* Top wall to ceiling — one-way so the exterior camera sees in */}
      <SweptBand profile={[[26, 23], [27, 30.5]]} color="#10141f" roughness={0.8} side={BackSide} />

      {/* Outer shell — one-way for the dollhouse view */}
      <SweptBand profile={[[28, 0], [28, 30.5]]} color="#0d1018" roughness={0.85} metalness={0.2} segments={64} side={BackSide} />

      <ArenaCeiling />
      <CenterHungStructure />
    </group>
  )
}
