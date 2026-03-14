import { useMemo } from 'react'
import { Shape, Path, ExtrudeGeometry, CanvasTexture } from 'three'

function BowlRing({ radiusX, radiusZ, height, yBase, color, segments = 64 }: {
  radiusX: number; radiusZ: number; height: number; yBase: number; color: string; segments?: number
}) {
  const geometry = useMemo(() => {
    const shape = new Shape()
    const innerRX = radiusX * 0.82
    const innerRZ = radiusZ * 0.82

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const x = Math.cos(angle) * radiusX
      const z = Math.sin(angle) * radiusZ
      if (i === 0) shape.moveTo(x, z)
      else shape.lineTo(x, z)
    }
    shape.closePath()

    const hole = new Path()
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const x = Math.cos(angle) * innerRX
      const z = Math.sin(angle) * innerRZ
      if (i === 0) hole.moveTo(x, z)
      else hole.lineTo(x, z)
    }
    hole.closePath()
    shape.holes.push(hole)

    return new ExtrudeGeometry(shape, { depth: height, bevelEnabled: false })
  }, [radiusX, radiusZ, height, segments])

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, yBase, 0]} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.8} metalness={0.1} />
    </mesh>
  )
}

function FieldSurface() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024; canvas.height = 512
    const ctx = canvas.getContext('2d')!

    const grad = ctx.createLinearGradient(0, 0, 1024, 0)
    grad.addColorStop(0, '#1a6b35'); grad.addColorStop(0.5, '#2d8a4e'); grad.addColorStop(1, '#1a6b35')
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1024, 512)

    // Yard lines
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 2
    for (let i = 0; i <= 10; i++) { const x = i * 102.4; ctx.beginPath(); ctx.moveTo(x, 20); ctx.lineTo(x, 492); ctx.stroke() }
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(512, 20); ctx.lineTo(512, 492); ctx.stroke()

    // Endzones
    ctx.fillStyle = 'rgba(0,40,180,0.18)'; ctx.fillRect(0, 0, 102, 512)
    ctx.fillStyle = 'rgba(180,0,0,0.18)'; ctx.fillRect(922, 0, 102, 512)

    ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.font = 'bold 48px Oswald,sans-serif'
    ctx.save(); ctx.translate(50, 256); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.fillText('HOME', 0, 0); ctx.restore()
    ctx.save(); ctx.translate(974, 256); ctx.rotate(Math.PI / 2); ctx.textAlign = 'center'; ctx.fillText('AWAY', 0, 0); ctx.restore()

    // Hash marks
    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1
    for (let i = 0; i < 50; i++) { const x = 20 + i * 20; ctx.beginPath(); ctx.moveTo(x, 190); ctx.lineTo(x, 195); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, 317); ctx.lineTo(x, 322); ctx.stroke() }

    // Numbers
    ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.font = 'bold 36px Oswald,sans-serif'; ctx.textAlign = 'center'
    ;['10','20','30','40','50','40','30','20','10'].forEach((n, i) => { ctx.fillText(n, 102.4 + i * 102.4, 170); ctx.fillText(n, 102.4 + i * 102.4, 370) })

    return new CanvasTexture(canvas)
  }, [])

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.3, 0]} receiveShadow>
        <planeGeometry args={[164, 84]} />
        <meshStandardMaterial color="#0a1a0a" roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 0]} receiveShadow>
        <planeGeometry args={[160, 80]} />
        <meshStandardMaterial map={texture} roughness={0.7} />
      </mesh>
    </group>
  )
}

function SeatRows() {
  const rows = useMemo(() => {
    const result: { r: number; y: number; color: string; scaleZ: number }[] = []
    for (let i = 0; i < 8; i++) {
      result.push({ r: 95 + i * 3.5, y: 2 + i * 2.3, color: i < 4 ? '#1a3a5f' : '#15304a', scaleZ: 0.69 })
    }
    for (let i = 0; i < 8; i++) {
      result.push({ r: 108 + i * 2, y: 22 + i * 2.5, color: i < 4 ? '#162850' : '#122040', scaleZ: 0.72 })
    }
    return result
  }, [])

  return (
    <>
      {rows.map((row, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, row.y, 0]} scale={[1, 1, row.scaleZ]}>
          <torusGeometry args={[row.r, 0.3, 4, 64]} />
          <meshStandardMaterial color={row.color} roughness={0.9} />
        </mesh>
      ))}
    </>
  )
}

function FloodLights() {
  const positions: [number, number, number][] = [[-100, 100, -70], [100, 100, -70], [-100, 100, 70], [100, 100, 70]]

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i}>
          <pointLight position={pos} color="#fff5e0" intensity={0.6} distance={400} />
          <mesh position={[pos[0] * 1.15, 45, pos[2] * 1.15]}>
            <cylinderGeometry args={[0.3, 0.5, 90, 6]} />
            <meshStandardMaterial color="#333344" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[pos[0] * 1.15, 91, pos[2] * 1.15]}>
            <boxGeometry args={[6, 2, 4]} />
            <meshStandardMaterial color="#fff5e0" emissive="#fff5e0" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}
    </>
  )
}

function ScoreboardSupports() {
  const positions: [number, number, number][] = [[-18, 65, -9], [18, 65, -9], [-18, 65, 9], [18, 65, 9]]
  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.15, 0.15, 20, 4]} />
          <meshStandardMaterial color="#333344" metalness={0.8} />
        </mesh>
      ))}
    </>
  )
}

export function Stadium() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[800, 800]} />
        <meshStandardMaterial color="#0a0e14" roughness={1} />
      </mesh>

      {/* Bowl structure */}
      <BowlRing radiusX={110} radiusZ={75} height={20} yBase={0} color="#1a2844" />
      <BowlRing radiusX={125} radiusZ={88} height={22} yBase={20} color="#162238" />
      <BowlRing radiusX={116} radiusZ={80} height={6} yBase={18} color="#1e3050" />

      {/* Roof ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 44, 0]} scale={[1, 1, 0.72]}>
        <torusGeometry args={[105, 4, 8, 64]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.7} roughness={0.3} />
      </mesh>

      <SeatRows />
      <FieldSurface />
      <FloodLights />
      <ScoreboardSupports />
    </group>
  )
}
