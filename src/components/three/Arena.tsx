import { useMemo } from 'react'
import { Shape, Path, ExtrudeGeometry, CanvasTexture } from 'three'

function ArenaBowl({ radiusX, radiusZ, height, yBase, color }: {
  radiusX: number; radiusZ: number; height: number; yBase: number; color: string
}) {
  const geometry = useMemo(() => {
    const shape = new Shape()
    const segments = 48
    const innerRX = radiusX * 0.84
    const innerRZ = radiusZ * 0.84

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      if (i === 0) shape.moveTo(Math.cos(angle) * radiusX, Math.sin(angle) * radiusZ)
      else shape.lineTo(Math.cos(angle) * radiusX, Math.sin(angle) * radiusZ)
    }
    shape.closePath()

    const hole = new Path()
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      if (i === 0) hole.moveTo(Math.cos(angle) * innerRX, Math.sin(angle) * innerRZ)
      else hole.lineTo(Math.cos(angle) * innerRX, Math.sin(angle) * innerRZ)
    }
    hole.closePath()
    shape.holes.push(hole)

    return new ExtrudeGeometry(shape, { depth: height, bevelEnabled: false })
  }, [radiusX, radiusZ, height])

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, yBase, 0]} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} />
    </mesh>
  )
}

function CourtSurface() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1600; canvas.height = 960
    const ctx = canvas.getContext('2d')!

    // Hardwood floor base
    ctx.fillStyle = '#b8803a'
    ctx.fillRect(0, 0, 1600, 960)

    // Wood plank pattern
    ctx.strokeStyle = 'rgba(100,60,20,0.12)'
    ctx.lineWidth = 1
    for (let i = 0; i < 1600; i += 20) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 960); ctx.stroke()
    }
    // Horizontal plank joints
    for (let j = 0; j < 960; j += 80) {
      ctx.strokeStyle = 'rgba(80,50,15,0.08)'
      ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(1600, j); ctx.stroke()
    }

    // Subtle wood grain variation
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * 1600
      const y = Math.random() * 960
      ctx.fillStyle = `rgba(${100 + Math.random() * 30},${60 + Math.random() * 20},${15 + Math.random() * 10},0.04)`
      ctx.fillRect(x, y, 20 + Math.random() * 40, 960)
    }

    // Paint areas
    ctx.fillStyle = 'rgba(0,40,180,0.12)'
    ctx.fillRect(60, 280, 300, 400)
    ctx.fillRect(1240, 280, 300, 400)

    // Court lines — white
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 4

    // Boundary
    ctx.strokeRect(60, 60, 1480, 840)

    // Center line
    ctx.beginPath(); ctx.moveTo(800, 60); ctx.lineTo(800, 900); ctx.stroke()

    // Center circle
    ctx.beginPath(); ctx.arc(800, 480, 100, 0, Math.PI * 2); ctx.stroke()
    ctx.fillStyle = 'rgba(0,40,180,0.08)'
    ctx.beginPath(); ctx.arc(800, 480, 100, 0, Math.PI * 2); ctx.fill()

    // Free throw circles
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(260, 480, 100, -Math.PI / 2, Math.PI / 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(1340, 480, 100, Math.PI / 2, -Math.PI / 2); ctx.stroke()

    // Paint
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 4
    ctx.strokeRect(60, 280, 300, 400)
    ctx.strokeRect(1240, 280, 300, 400)

    // 3-point arcs
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(160, 480, 320, -1.2, 1.2); ctx.stroke()
    ctx.beginPath(); ctx.arc(1440, 480, 320, Math.PI - 1.2, Math.PI + 1.2); ctx.stroke()

    const tex = new CanvasTexture(canvas)
    tex.anisotropy = 16
    return tex
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]} receiveShadow>
      <planeGeometry args={[50, 30]} />
      <meshStandardMaterial map={texture} roughness={0.55} metalness={0.05} envMapIntensity={0.3} />
    </mesh>
  )
}

function ArenaSeats() {
  const rows: { r: number; y: number; color: string; scaleZ: number }[] = []
  for (let i = 0; i < 6; i++) {
    rows.push({ r: 32 + i * 2.5, y: 1 + i * 1.8, color: i < 3 ? '#1a3a5f' : '#15304a', scaleZ: 0.68 })
  }
  for (let i = 0; i < 6; i++) {
    rows.push({ r: 47 + i * 1.5, y: 13 + i * 2, color: i < 3 ? '#162850' : '#122040', scaleZ: 0.7 })
  }

  return (
    <>
      {rows.map((row, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, row.y, 0]} scale={[1, 1, row.scaleZ]}>
          <torusGeometry args={[row.r, 0.2, 4, 48]} />
          <meshStandardMaterial color={row.color} roughness={0.92} metalness={0.02} />
        </mesh>
      ))}
    </>
  )
}

function ArenaLighting() {
  const positions: [number, number, number][] = [[-30, 42, -20], [30, 42, -20], [-30, 42, 20], [30, 42, 20]]

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i}>
          <spotLight
            position={pos}
            target-position={[0, 0, 0]}
            color="#fff8f0"
            intensity={40}
            distance={150}
            angle={0.7}
            penumbra={0.4}
            decay={2}
          />
          <mesh position={pos}>
            <boxGeometry args={[8, 1.2, 3.5]} />
            <meshStandardMaterial color="#fff5e0" emissive="#fff5e0" emissiveIntensity={1.5} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </>
  )
}

function ScoreboardCables() {
  const positions: [number, number, number][] = [[-12, 44, -6], [12, 44, -6], [-12, 44, 6], [12, 44, 6]]
  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.12, 0.12, 12, 6]} />
          <meshStandardMaterial color="#2a2a38" metalness={0.9} roughness={0.15} />
        </mesh>
      ))}
    </>
  )
}

export function Arena() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial color="#08090e" roughness={0.98} />
      </mesh>

      {/* Bowl */}
      <ArenaBowl radiusX={50} radiusZ={35} height={12} yBase={0} color="#1a2844" />
      <ArenaBowl radiusX={58} radiusZ={42} height={14} yBase={12} color="#162238" />

      {/* Suite ring */}
      <ArenaBowl radiusX={53} radiusZ={37} height={3} yBase={11} color="#1e3050" />

      {/* Roof ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 28, 0]} scale={[1, 1, 0.72]}>
        <torusGeometry args={[55, 3, 6, 48]} />
        <meshStandardMaterial color="#1e1e2a" metalness={0.85} roughness={0.2} envMapIntensity={0.5} />
      </mesh>

      <CourtSurface />
      <ArenaSeats />
      <ArenaLighting />
      <ScoreboardCables />
    </group>
  )
}
