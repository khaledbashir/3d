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
      <meshStandardMaterial color={color} roughness={0.8} metalness={0.1} />
    </mesh>
  )
}

function CourtSurface() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 800; canvas.height = 480
    const ctx = canvas.getContext('2d')!

    // Court floor
    ctx.fillStyle = '#b8803a'
    ctx.fillRect(0, 0, 800, 480)

    // Darker wood grain lines
    ctx.strokeStyle = 'rgba(0,0,0,0.06)'
    ctx.lineWidth = 1
    for (let i = 0; i < 800; i += 12) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 480); ctx.stroke() }

    // Court lines
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 3

    // Boundary
    ctx.strokeRect(30, 30, 740, 420)

    // Center line
    ctx.beginPath(); ctx.moveTo(400, 30); ctx.lineTo(400, 450); ctx.stroke()

    // Center circle
    ctx.beginPath(); ctx.arc(400, 240, 50, 0, Math.PI * 2); ctx.stroke()

    // Free throw circles / 3pt arcs
    ctx.beginPath(); ctx.arc(130, 240, 50, -Math.PI / 2, Math.PI / 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(670, 240, 50, Math.PI / 2, -Math.PI / 2); ctx.stroke()

    // Paint
    ctx.strokeRect(30, 140, 150, 200)
    ctx.strokeRect(620, 140, 150, 200)

    // 3-point arcs
    ctx.beginPath(); ctx.arc(80, 240, 160, -1.2, 1.2); ctx.stroke()
    ctx.beginPath(); ctx.arc(720, 240, 160, Math.PI - 1.2, Math.PI + 1.2); ctx.stroke()

    return new CanvasTexture(canvas)
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]} receiveShadow>
      <planeGeometry args={[50, 30]} />
      <meshStandardMaterial map={texture} roughness={0.6} />
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
          <meshStandardMaterial color={row.color} roughness={0.9} />
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
          <pointLight position={pos} color="#fff8f0" intensity={0.5} distance={200} />
          <mesh position={pos}>
            <boxGeometry args={[8, 1, 3]} />
            <meshStandardMaterial color="#fff5e0" emissive="#fff5e0" emissiveIntensity={0.4} />
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
          <cylinderGeometry args={[0.1, 0.1, 12, 4]} />
          <meshStandardMaterial color="#333344" metalness={0.8} />
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
        <meshStandardMaterial color="#0a0e14" roughness={1} />
      </mesh>

      {/* Bowl */}
      <ArenaBowl radiusX={50} radiusZ={35} height={12} yBase={0} color="#1a2844" />
      <ArenaBowl radiusX={58} radiusZ={42} height={14} yBase={12} color="#162238" />

      {/* Suite ring */}
      <ArenaBowl radiusX={53} radiusZ={37} height={3} yBase={11} color="#1e3050" />

      {/* Roof ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 28, 0]} scale={[1, 1, 0.72]}>
        <torusGeometry args={[55, 3, 6, 48]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.7} roughness={0.3} />
      </mesh>

      <CourtSurface />
      <ArenaSeats />
      <ArenaLighting />
      <ScoreboardCables />
    </group>
  )
}
