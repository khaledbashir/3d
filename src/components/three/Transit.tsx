import { useMemo } from 'react'
import { BackSide, CanvasTexture, DoubleSide, RepeatWrapping } from 'three'
import { makeStoneFloorTexture, makeTrussAlphaTexture } from '@/utils/proceduralTextures'

const HALL_W = 80   // x extent
const HALL_D = 56   // z extent: -28 (back wall) .. +28 (platform edge / tracks)

function Floor() {
  const floorTexture = useMemo(() => {
    const t = makeStoneFloorTexture({ tint: [172, 166, 154], tile: 256, seed: 71 })
    t.repeat.set(5, 3.5)
    return t
  }, [])
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -4]} receiveShadow>
        <planeGeometry args={[HALL_W, 48]} />
        <meshStandardMaterial map={floorTexture} roughness={0.22} metalness={0.05} envMapIntensity={0.7} />
      </mesh>
      {/* Tactile warning strip along the platform edge */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 19]} receiveShadow>
        <planeGeometry args={[HALL_W, 1.4]} />
        <meshStandardMaterial color="#c8a02a" roughness={0.8} />
      </mesh>
    </group>
  )
}

/** Barrel-vaulted glass roof with steel arch ribs — Moynihan style. */
function VaultedRoof() {
  const trussAlpha = useMemo(() => {
    const t = makeTrussAlphaTexture()
    t.repeat.set(8, 1)
    return t
  }, [])

  const ribXs = useMemo(() => Array.from({ length: 9 }, (_, i) => -36 + i * 9), [])

  return (
    <group>
      {/* Glass vault — half cylinder along X, one-way so the camera sees in */}
      <mesh position={[0, 14, -4]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[24, 24, HALL_W, 36, 1, true, 0, Math.PI]} />
        <meshPhysicalMaterial
          color="#0d1830"
          transparent
          opacity={0.55}
          roughness={0.15}
          metalness={0.4}
          side={BackSide}
          emissive="#101d3a"
          emissiveIntensity={0.45}
        />
      </mesh>
      {/* Steel arch ribs — vertical half-circles spanning the hall */}
      {ribXs.map(x => (
        <mesh key={x} position={[x, 14, -4]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[24, 0.55, 8, 28, Math.PI]} />
          <meshStandardMaterial color="#2e3544" metalness={0.8} roughness={0.35} />
        </mesh>
      ))}
      {/* Longitudinal truss spines */}
      {[-12, 0, 12].map(z => (
        <mesh key={z} position={[0, z === 0 ? 37.4 : 35.4, -4 + z]}>
          <boxGeometry args={[HALL_W, 1.8, 1.8]} />
          <meshStandardMaterial color="#2e3544" metalness={0.8} roughness={0.35} alphaMap={trussAlpha} transparent alphaTest={0.45} side={DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

function Walls() {
  return (
    <group>
      {/* Back wall — carries the main departures board zone */}
      <mesh position={[0, 9, -28]} receiveShadow>
        <boxGeometry args={[HALL_W, 18, 0.8]} />
        <meshStandardMaterial color="#262a33" roughness={0.8} />
      </mesh>
      {/* Stone wainscot */}
      <mesh position={[0, 2.2, -27.5]}>
        <boxGeometry args={[HALL_W, 4.4, 0.4]} />
        <meshStandardMaterial color="#43464e" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* End walls with arched lit windows */}
      {[-1, 1].map(side => (
        <group key={side}>
          <mesh position={[side * (HALL_W / 2), 10, -4]} rotation={[0, -side * Math.PI / 2, 0]}>
            <boxGeometry args={[48, 20, 0.8]} />
            <meshStandardMaterial color="#262a33" roughness={0.8} />
          </mesh>
          {/* Arched window — night light bleeding in */}
          <mesh position={[side * (HALL_W / 2 - 0.5), 13, -4]} rotation={[0, -side * Math.PI / 2, 0]}>
            <circleGeometry args={[10, 24, 0, Math.PI]} />
            <meshBasicMaterial color="#2b2a40" toneMapped={false} />
          </mesh>
          <mesh position={[side * (HALL_W / 2 - 0.6), 13, -4]} rotation={[0, -side * Math.PI / 2, 0]}>
            <ringGeometry args={[9.7, 10.2, 24, 1, 0, Math.PI]} />
            <meshStandardMaterial color="#1c1f28" metalness={0.6} roughness={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Pillars() {
  const positions: [number, number][] = [[-24, -14], [0, -14], [24, -14], [-24, 8], [0, 8], [24, 8]]
  return (
    <>
      {positions.map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 7, 0]} castShadow>
            <cylinderGeometry args={[0.9, 1.1, 14, 12]} />
            <meshStandardMaterial color="#383d49" metalness={0.5} roughness={0.4} />
          </mesh>
          {/* Capital */}
          <mesh position={[0, 14.2, 0]}>
            <cylinderGeometry args={[1.4, 0.9, 0.8, 12]} />
            <meshStandardMaterial color="#2c303a" metalness={0.6} roughness={0.35} />
          </mesh>
        </group>
      ))}
    </>
  )
}

/** Track trench + a stopped commuter train with lit windows. */
function TracksAndTrain() {
  const windowStrip = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 128
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#23262e'
    ctx.fillRect(0, 0, 1024, 128)
    for (let x = 16; x < 1024; x += 72) {
      ctx.fillStyle = Math.random() > 0.18 ? 'rgba(255,226,170,0.95)' : 'rgba(60,70,90,0.5)'
      ctx.fillRect(x, 30, 48, 62)
      // Passenger silhouettes
      if (Math.random() > 0.5) {
        ctx.fillStyle = 'rgba(15,16,22,0.85)'
        const px = x + 6 + Math.random() * 30
        ctx.beginPath(); ctx.arc(px, 66, 7, 0, Math.PI * 2); ctx.fill()
        ctx.fillRect(px - 7, 72, 14, 20)
      }
    }
    const tex = new CanvasTexture(canvas)
    tex.wrapS = RepeatWrapping
    tex.repeat.set(3, 1)
    return tex
  }, [])

  return (
    <group position={[0, 0, 24]}>
      {/* Trench */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 2]}>
        <planeGeometry args={[HALL_W, 12]} />
        <meshStandardMaterial color="#08090c" roughness={1} />
      </mesh>
      {/* Platform face */}
      <mesh position={[0, -1.1, -4]} rotation={[0, 0, 0]}>
        <boxGeometry args={[HALL_W, 2.2, 0.4]} />
        <meshStandardMaterial color="#2a2d35" roughness={0.8} />
      </mesh>
      {/* Rails */}
      {[-1.1, 1.1].map(off => (
        <mesh key={off} position={[0, -1.95, 2 + off]} rotation={[0, 0, 0]}>
          <boxGeometry args={[HALL_W, 0.18, 0.14]} />
          <meshStandardMaterial color="#6a6f78" metalness={0.95} roughness={0.25} />
        </mesh>
      ))}

      {/* Stopped train */}
      <group position={[-6, 0, 2]}>
        {/* Body */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[58, 4.6, 3.4]} />
          <meshStandardMaterial color="#5a6270" metalness={0.75} roughness={0.3} />
        </mesh>
        {/* Window bands — both sides */}
        <mesh position={[0, 1.2, -1.75]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[58, 2]} />
          <meshBasicMaterial map={windowStrip} toneMapped={false} />
        </mesh>
        <mesh position={[0, 1.2, 1.75]}>
          <planeGeometry args={[58, 2]} />
          <meshBasicMaterial map={windowStrip} toneMapped={false} />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 3.1, 0]}>
          <boxGeometry args={[58, 0.5, 3]} />
          <meshStandardMaterial color="#3c4250" metalness={0.7} roughness={0.4} />
        </mesh>
        {/* Nose */}
        <mesh position={[29.6, 0.7, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <cylinderGeometry args={[1.7, 1.7, 1.6, 12, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#444c5c" metalness={0.75} roughness={0.3} />
        </mesh>
        {/* Headlight */}
        <mesh position={[29.2, 0.9, -1.2]}>
          <sphereGeometry args={[0.22, 8, 8]} />
          <meshBasicMaterial color="#fff8dd" toneMapped={false} />
        </mesh>
        {/* Door accents */}
        {[-20, -5, 10, 25].map(x => (
          <mesh key={x} position={[x, 0.4, -1.73]}>
            <planeGeometry args={[1.6, 3.4]} />
            <meshStandardMaterial color="#e8443a" roughness={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

function HallLighting() {
  return (
    <group>
      {/* Pendant globes */}
      {[[-24, -4], [0, -4], [24, -4]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 17, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 6, 6]} />
            <meshStandardMaterial color="#1c1f26" />
          </mesh>
          <mesh position={[0, 13.6, 0]}>
            <sphereGeometry args={[1.1, 14, 14]} />
            <meshBasicMaterial color="#ffeccc" toneMapped={false} />
          </mesh>
          <pointLight position={[0, 13, 0]} color="#ffe6c0" intensity={420} distance={70} decay={1.8} />
        </group>
      ))}
      {/* Cool fill from the glass vault */}
      <pointLight position={[0, 26, -4]} color="#aebfe6" intensity={300} distance={90} decay={1.9} />
    </group>
  )
}

function Benches() {
  return (
    <>
      {[[-14, 2], [0, 2], [14, 2]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 0.55, 0]} castShadow>
            <boxGeometry args={[4.5, 0.25, 1.4]} />
            <meshStandardMaterial color="#5c4a32" roughness={0.65} />
          </mesh>
          {[-1.9, 1.9].map(off => (
            <mesh key={off} position={[off, 0.25, 0]}>
              <boxGeometry args={[0.3, 0.5, 1.3]} />
              <meshStandardMaterial color="#23262e" metalness={0.6} roughness={0.4} />
            </mesh>
          ))}
          <mesh position={[0, 1.1, -0.62]} rotation={[-0.22, 0, 0]}>
            <boxGeometry args={[4.5, 1, 0.18]} />
            <meshStandardMaterial color="#5c4a32" roughness={0.65} />
          </mesh>
        </group>
      ))}
    </>
  )
}

export function Transit() {
  return (
    <group>
      <Floor />
      <VaultedRoof />
      <Walls />
      <Pillars />
      <TracksAndTrain />
      <HallLighting />
      <Benches />
    </group>
  )
}
