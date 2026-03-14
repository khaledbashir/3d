import { useMemo } from 'react'
import { CanvasTexture } from 'three'

function FloorSurface() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512; canvas.height = 512
    const ctx = canvas.getContext('2d')!

    ctx.fillStyle = '#1a1a1f'
    ctx.fillRect(0, 0, 512, 512)

    // Tile pattern
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 512; i += 32) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke()
    }

    return new CanvasTexture(canvas)
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[80, 60]} />
      <meshStandardMaterial map={texture} roughness={0.6} />
    </mesh>
  )
}

function Walls() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 10, -30]} receiveShadow>
        <boxGeometry args={[80, 20, 0.5]} />
        <meshStandardMaterial color="#141420" roughness={0.9} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-40, 10, 0]} receiveShadow>
        <boxGeometry args={[0.5, 20, 60]} />
        <meshStandardMaterial color="#141420" roughness={0.9} />
      </mesh>
      {/* Right wall */}
      <mesh position={[40, 10, 0]} receiveShadow>
        <boxGeometry args={[0.5, 20, 60]} />
        <meshStandardMaterial color="#141420" roughness={0.9} />
      </mesh>
      {/* Ceiling */}
      <mesh position={[0, 20, 0]}>
        <boxGeometry args={[80, 0.3, 60]} />
        <meshStandardMaterial color="#0e0e14" roughness={0.9} />
      </mesh>
    </group>
  )
}

function Columns() {
  const positions: [number, number][] = [[-10, -10], [10, -10], [-10, 10], [10, 10]]

  return (
    <>
      {positions.map(([x, z], i) => (
        <mesh key={i} position={[x, 10, z]}>
          <cylinderGeometry args={[1.2, 1.2, 20, 8]} />
          <meshStandardMaterial color="#1a1a28" metalness={0.3} roughness={0.6} />
        </mesh>
      ))}
    </>
  )
}

function MallLighting() {
  const positions: [number, number, number][] = [
    [-15, 19, -10], [0, 19, -10], [15, 19, -10],
    [-15, 19, 10], [0, 19, 10], [15, 19, 10],
  ]

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i}>
          <pointLight position={pos} color="#ffe8d0" intensity={0.4} distance={30} />
          <mesh position={pos}>
            <boxGeometry args={[3, 0.2, 1]} />
            <meshStandardMaterial color="#fff5e0" emissive="#fff5e0" emissiveIntensity={0.3} />
          </mesh>
        </group>
      ))}
    </>
  )
}

function Escalator() {
  return (
    <group position={[25, 3, 5]} rotation={[0, -0.3, 0]}>
      <mesh>
        <boxGeometry args={[3, 6, 8]} />
        <meshStandardMaterial color="#1a1a28" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Rails */}
      <mesh position={[-1.6, 0, 0]}>
        <boxGeometry args={[0.1, 6.5, 8.5]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.6, 0, 0]}>
        <boxGeometry args={[0.1, 6.5, 8.5]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

export function Mall() {
  return (
    <group>
      <FloorSurface />
      <Walls />
      <Columns />
      <MallLighting />
      <Escalator />
    </group>
  )
}
