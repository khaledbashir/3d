import { useMemo } from 'react'
import { CanvasTexture } from 'three'

function PlatformFloor() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512; canvas.height = 512
    const ctx = canvas.getContext('2d')!

    ctx.fillStyle = '#16161c'
    ctx.fillRect(0, 0, 512, 512)

    // Concrete texture
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 512; i += 64) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke()
    }

    // Safety line
    ctx.fillStyle = 'rgba(255,200,0,0.15)'
    ctx.fillRect(0, 460, 512, 8)

    return new CanvasTexture(canvas)
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[70, 50]} />
      <meshStandardMaterial map={texture} roughness={0.8} />
    </mesh>
  )
}

function ConcourseWalls() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 8, -25]}>
        <boxGeometry args={[70, 16, 0.5]} />
        <meshStandardMaterial color="#121218" roughness={0.9} />
      </mesh>
      {/* Front wall / platform edge */}
      <mesh position={[0, 2, 25]}>
        <boxGeometry args={[70, 4, 0.5]} />
        <meshStandardMaterial color="#121218" roughness={0.9} />
      </mesh>
      {/* Side walls */}
      <mesh position={[-35, 8, 0]}>
        <boxGeometry args={[0.5, 16, 50]} />
        <meshStandardMaterial color="#121218" roughness={0.9} />
      </mesh>
      <mesh position={[35, 8, 0]}>
        <boxGeometry args={[0.5, 16, 50]} />
        <meshStandardMaterial color="#121218" roughness={0.9} />
      </mesh>
      {/* Ceiling — curved look with segments */}
      <mesh position={[0, 16, 0]}>
        <boxGeometry args={[70, 0.3, 50]} />
        <meshStandardMaterial color="#0e0e14" roughness={0.9} />
      </mesh>
    </group>
  )
}

function Pillars() {
  const positions: [number, number][] = [[-15, -5], [15, -5], [-15, 10], [15, 10]]

  return (
    <>
      {positions.map(([x, z], i) => (
        <mesh key={i} position={[x, 8, z]}>
          <cylinderGeometry args={[0.8, 0.8, 16, 6]} />
          <meshStandardMaterial color="#1a1a28" metalness={0.4} roughness={0.5} />
        </mesh>
      ))}
    </>
  )
}

function TrackArea() {
  return (
    <group position={[0, -1.5, 28]}>
      {/* Track bed */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[70, 10]} />
        <meshStandardMaterial color="#0a0a0e" roughness={1} />
      </mesh>
      {/* Rails */}
      <mesh position={[-1, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.15, 70]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[1, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.15, 70]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}

function TransitLighting() {
  const positions: [number, number, number][] = [
    [-20, 15, -8], [0, 15, -8], [20, 15, -8],
    [-20, 15, 8], [0, 15, 8], [20, 15, 8],
  ]

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i}>
          <pointLight position={pos} color="#e0e8ff" intensity={0.35} distance={25} />
          <mesh position={pos}>
            <boxGeometry args={[4, 0.15, 1]} />
            <meshStandardMaterial color="#dde" emissive="#dde" emissiveIntensity={0.3} />
          </mesh>
        </group>
      ))}
    </>
  )
}

function Benches() {
  const positions: [number, number][] = [[-10, 5], [0, 5], [10, 5]]

  return (
    <>
      {positions.map(([x, z], i) => (
        <group key={i} position={[x, 0.4, z]}>
          <mesh>
            <boxGeometry args={[3, 0.8, 0.6]} />
            <meshStandardMaterial color="#1a1a28" metalness={0.3} roughness={0.7} />
          </mesh>
        </group>
      ))}
    </>
  )
}

export function Transit() {
  return (
    <group>
      <PlatformFloor />
      <ConcourseWalls />
      <Pillars />
      <TrackArea />
      <TransitLighting />
      <Benches />
    </group>
  )
}
