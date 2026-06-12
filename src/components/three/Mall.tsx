import { useMemo } from 'react'
import { DoubleSide } from 'three'
import { makeStoneFloorTexture, makeStorefrontTexture } from '@/utils/proceduralTextures'

function Floor() {
  const floorTexture = useMemo(() => {
    const t = makeStoneFloorTexture({ tint: [188, 184, 176], tile: 128 })
    t.repeat.set(6, 4.5)
    return t
  }, [])
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[84, 64]} />
      <meshStandardMaterial map={floorTexture} roughness={0.18} metalness={0.05} envMapIntensity={0.8} />
    </mesh>
  )
}

/** Two-level storefront walls with lit shops. */
function Storefronts() {
  const ground = useMemo(() => makeStorefrontTexture({ stores: 6, seed: 63 }), [])
  const upperA = useMemo(() => makeStorefrontTexture({ stores: 6, seed: 105 }), [])
  const upperB = useMemo(() => makeStorefrontTexture({ stores: 6, seed: 141 }), [])

  return (
    <group>
      {/* Side walls — ground level shops */}
      <mesh position={[-41.8, 6, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[64, 12]} />
        <meshStandardMaterial map={ground} emissiveMap={ground} emissive="#ffffff" emissiveIntensity={0.75} roughness={0.7} />
      </mesh>
      <mesh position={[41.8, 6, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[64, 12]} />
        <meshStandardMaterial map={upperA} emissiveMap={upperA} emissive="#ffffff" emissiveIntensity={0.75} roughness={0.7} />
      </mesh>
      {/* Side walls — upper level shops */}
      <mesh position={[-41.8, 18.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[64, 10]} />
        <meshStandardMaterial map={upperB} emissiveMap={upperB} emissive="#ffffff" emissiveIntensity={0.6} roughness={0.7} />
      </mesh>
      <mesh position={[41.8, 18.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[64, 10]} />
        <meshStandardMaterial map={ground} emissiveMap={ground} emissive="#ffffff" emissiveIntensity={0.6} roughness={0.7} />
      </mesh>

      {/* Back wall — anchor wall that carries the main video zone */}
      <mesh position={[0, 12, -31.8]}>
        <planeGeometry args={[84, 24]} />
        <meshStandardMaterial color="#191c25" roughness={0.85} />
      </mesh>
      {/* Front wall behind the camera default */}
      <mesh position={[0, 12, 31.8]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[84, 24]} />
        <meshStandardMaterial color="#191c25" roughness={0.85} />
      </mesh>
    </group>
  )
}

/** Upper-level balcony with glass railing + a crossing bridge at z=-18. */
function Balconies() {
  return (
    <group>
      {/* Side balconies */}
      {[-1, 1].map(side => (
        <group key={side}>
          <mesh position={[side * 37, 12.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[9, 1, 64]} />
            <meshStandardMaterial color="#2a2e3a" roughness={0.6} metalness={0.2} />
          </mesh>
          {/* Glass railing */}
          <mesh position={[side * 32.8, 13.9, 0]}>
            <boxGeometry args={[0.15, 1.8, 64]} />
            <meshPhysicalMaterial color="#aaccee" transparent opacity={0.18} roughness={0.05} />
          </mesh>
          <mesh position={[side * 32.8, 14.9, 0]}>
            <boxGeometry args={[0.3, 0.12, 64]} />
            <meshStandardMaterial color="#888f9c" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Bridge across the atrium — the corridor ribbon zone mounts on its fascia */}
      <group position={[0, 0, -18]}>
        <mesh position={[0, 12.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[66, 1, 7]} />
          <meshStandardMaterial color="#2a2e3a" roughness={0.6} metalness={0.2} />
        </mesh>
        {/* Bridge glass rails */}
        {[-3.4, 3.4].map(z => (
          <mesh key={z} position={[0, 13.9, z]}>
            <boxGeometry args={[66, 1.8, 0.15]} />
            <meshPhysicalMaterial color="#aaccee" transparent opacity={0.18} roughness={0.05} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

function Columns() {
  const positions: [number, number][] = [[-10, 0], [10, 0], [-25, -12], [25, -12], [-25, 12], [25, 12]]
  return (
    <>
      {positions.map(([x, z], i) => (
        <mesh key={i} position={[x, 12, z]} castShadow>
          <cylinderGeometry args={[1.1, 1.3, 24, 14]} />
          <meshStandardMaterial color="#3a3f4d" metalness={0.4} roughness={0.45} />
        </mesh>
      ))}
    </>
  )
}

/** Skylight grid ceiling with night sky showing through + light coves. */
function Skylight() {
  return (
    <group>
      {/* Glass panels — one-way: glow from inside, see-through from above */}
      <mesh position={[0, 24, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[84, 64]} />
        <meshStandardMaterial color="#0a1228" roughness={0.1} metalness={0.6} emissive="#0d1830" emissiveIntensity={0.5} />
      </mesh>
      {/* Mullion grid */}
      {Array.from({ length: 9 }, (_, i) => -40 + i * 10).map(x => (
        <mesh key={`mx${x}`} position={[x, 23.8, 0]}>
          <boxGeometry args={[0.5, 0.5, 64]} />
          <meshStandardMaterial color="#1c212c" metalness={0.7} roughness={0.35} />
        </mesh>
      ))}
      {Array.from({ length: 7 }, (_, i) => -30 + i * 10).map(z => (
        <mesh key={`mz${z}`} position={[0, 23.8, z]}>
          <boxGeometry args={[84, 0.5, 0.5]} />
          <meshStandardMaterial color="#1c212c" metalness={0.7} roughness={0.35} />
        </mesh>
      ))}
      {/* Cove lighting strip around the skylight */}
      {[-1, 1].map(side => (
        <mesh key={`cove${side}`} position={[0, 22.8, side * 31]}>
          <boxGeometry args={[84, 0.3, 0.8]} />
          <meshBasicMaterial color="#ffe8c4" toneMapped={false} />
        </mesh>
      ))}
      {[-1, 1].map(side => (
        <mesh key={`covex${side}`} position={[side * 41, 22.8, 0]}>
          <boxGeometry args={[0.8, 0.3, 64]} />
          <meshBasicMaterial color="#ffe8c4" toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

function MallLighting() {
  return (
    <group>
      {/* Warm interior wash */}
      <pointLight position={[0, 20, 0]} color="#ffe9cc" intensity={650} distance={90} decay={1.8} />
      <pointLight position={[-26, 16, -14]} color="#ffe2bd" intensity={260} distance={55} decay={1.8} />
      <pointLight position={[26, 16, -14]} color="#ffe2bd" intensity={260} distance={55} decay={1.8} />
      <pointLight position={[-26, 16, 14]} color="#ffe2bd" intensity={260} distance={55} decay={1.8} />
      <pointLight position={[26, 16, 14]} color="#ffe2bd" intensity={260} distance={55} decay={1.8} />
      {/* Storefront spill */}
      <pointLight position={[-38, 6, 0]} color="#ffd9a8" intensity={300} distance={45} decay={1.9} />
      <pointLight position={[38, 6, 0]} color="#ffd9a8" intensity={300} distance={45} decay={1.9} />
    </group>
  )
}

/** Planters, benches, kiosk — mall floor dressing. */
function FloorDressing() {
  return (
    <group>
      {[[-16, 14], [16, 14], [0, -10]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          {/* Planter */}
          <mesh position={[0, 0.6, 0]} castShadow>
            <cylinderGeometry args={[1.8, 2, 1.2, 16]} />
            <meshStandardMaterial color="#3c4150" roughness={0.6} metalness={0.2} />
          </mesh>
          {/* Foliage */}
          <mesh position={[0, 2.4, 0]}>
            <sphereGeometry args={[1.8, 10, 8]} />
            <meshStandardMaterial color="#1e4a2a" roughness={0.95} />
          </mesh>
          <mesh position={[0.8, 3, 0.4]}>
            <sphereGeometry args={[1.2, 8, 8]} />
            <meshStandardMaterial color="#266438" roughness={0.95} />
          </mesh>
          {/* Bench ring */}
          <mesh position={[0, 0.45, 0]}>
            <cylinderGeometry args={[2.6, 2.6, 0.5, 16]} />
            <meshStandardMaterial color="#6e5a40" roughness={0.7} />
          </mesh>
        </group>
      ))}
      {/* Center kiosk */}
      <group position={[0, 0, 8]}>
        <mesh position={[0, 1.6, 0]} castShadow>
          <boxGeometry args={[5, 3.2, 3]} />
          <meshStandardMaterial color="#23262f" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0, 3.5, 0]}>
          <boxGeometry args={[6, 0.3, 4]} />
          <meshStandardMaterial color="#34384a" roughness={0.4} metalness={0.5} />
        </mesh>
        <mesh position={[0, 2.4, 1.55]}>
          <planeGeometry args={[4.2, 1]} />
          <meshBasicMaterial color="#ffd166" toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

export function Mall() {
  return (
    <group>
      <Floor />
      <Storefronts />
      <Balconies />
      <Columns />
      <Skylight />
      <MallLighting />
      <FloorDressing />
    </group>
  )
}
