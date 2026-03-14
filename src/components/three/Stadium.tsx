import { useMemo } from 'react'
import { Shape, Path, ExtrudeGeometry, CanvasTexture, RepeatWrapping } from 'three'

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
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} />
    </mesh>
  )
}

function FieldSurface() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 2048; canvas.height = 1024
    const ctx = canvas.getContext('2d')!

    // Richer grass gradient
    const grad = ctx.createLinearGradient(0, 0, 2048, 0)
    grad.addColorStop(0, '#1a6b35'); grad.addColorStop(0.25, '#2d8a4e'); grad.addColorStop(0.5, '#1d7540')
    grad.addColorStop(0.75, '#2d8a4e'); grad.addColorStop(1, '#1a6b35')
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 2048, 1024)

    // Mowing stripes
    for (let i = 0; i < 20; i++) {
      const x = i * 102.4
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'
      ctx.fillRect(x, 0, 102.4, 1024)
    }

    // Yard lines
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 3
    for (let i = 0; i <= 10; i++) { const x = i * 204.8; ctx.beginPath(); ctx.moveTo(x, 40); ctx.lineTo(x, 984); ctx.stroke() }
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 5
    ctx.beginPath(); ctx.moveTo(1024, 40); ctx.lineTo(1024, 984); ctx.stroke()

    // Endzones
    ctx.fillStyle = 'rgba(0,40,180,0.2)'; ctx.fillRect(0, 0, 204, 1024)
    ctx.fillStyle = 'rgba(180,0,0,0.2)'; ctx.fillRect(1844, 0, 204, 1024)

    ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.font = 'bold 80px Work Sans,sans-serif'
    ctx.save(); ctx.translate(100, 512); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.fillText('HOME', 0, 0); ctx.restore()
    ctx.save(); ctx.translate(1948, 512); ctx.rotate(Math.PI / 2); ctx.textAlign = 'center'; ctx.fillText('AWAY', 0, 0); ctx.restore()

    // Hash marks
    ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 2
    for (let i = 0; i < 100; i++) { const x = 40 + i * 20; ctx.beginPath(); ctx.moveTo(x, 380); ctx.lineTo(x, 390); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, 634); ctx.lineTo(x, 644); ctx.stroke() }

    // Numbers
    ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.font = 'bold 60px Work Sans,sans-serif'; ctx.textAlign = 'center'
    ;['10','20','30','40','50','40','30','20','10'].forEach((n, i) => { ctx.fillText(n, 204.8 + i * 204.8, 330); ctx.fillText(n, 204.8 + i * 204.8, 740) })

    const tex = new CanvasTexture(canvas)
    tex.anisotropy = 16
    return tex
  }, [])

  return (
    <group>
      {/* Field border / track area */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.2, 0]} receiveShadow>
        <planeGeometry args={[170, 90]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.95} />
      </mesh>
      {/* Grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 0]} receiveShadow>
        <planeGeometry args={[160, 80]} />
        <meshStandardMaterial map={texture} roughness={0.75} metalness={0} />
      </mesh>
    </group>
  )
}

function SeatRows() {
  const rows = useMemo(() => {
    const result: { r: number; y: number; color: string; scaleZ: number }[] = []
    // Lower bowl
    for (let i = 0; i < 8; i++) {
      result.push({ r: 95 + i * 3.5, y: 2 + i * 2.3, color: i < 4 ? '#1a3a5f' : '#15304a', scaleZ: 0.69 })
    }
    // Upper deck
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
          <meshStandardMaterial color={row.color} roughness={0.92} metalness={0.02} />
        </mesh>
      ))}
    </>
  )
}

function Concourse() {
  // Walkway ring between lower and upper bowl
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 19, 0]} scale={[1, 1, 0.7]}>
      <torusGeometry args={[102, 2, 6, 64]} />
      <meshStandardMaterial color="#222838" roughness={0.7} metalness={0.3} />
    </mesh>
  )
}

function FloodLights() {
  const positions: [number, number, number][] = [[-100, 100, -70], [100, 100, -70], [-100, 100, 70], [100, 100, 70]]

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i}>
          {/* Stadium light — warm white */}
          <spotLight
            position={pos}
            target-position={[0, 0, 0]}
            color="#fff5e0"
            intensity={80}
            distance={350}
            angle={0.6}
            penumbra={0.5}
            decay={2}
          />
          {/* Light pole */}
          <mesh position={[pos[0] * 1.15, 45, pos[2] * 1.15]}>
            <cylinderGeometry args={[0.4, 0.6, 90, 8]} />
            <meshStandardMaterial color="#2a2a38" metalness={0.85} roughness={0.2} />
          </mesh>
          {/* Light fixture — glowing */}
          <mesh position={[pos[0] * 1.15, 91, pos[2] * 1.15]}>
            <boxGeometry args={[7, 2.5, 5]} />
            <meshStandardMaterial color="#fff5e0" emissive="#fff5e0" emissiveIntensity={2} toneMapped={false} />
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
          <cylinderGeometry args={[0.2, 0.2, 20, 6]} />
          <meshStandardMaterial color="#2a2a38" metalness={0.9} roughness={0.15} />
        </mesh>
      ))}
    </>
  )
}

export function Stadium() {
  return (
    <group>
      {/* Ground plane — concrete */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[800, 800]} />
        <meshStandardMaterial color="#08090e" roughness={0.98} metalness={0} />
      </mesh>

      {/* Bowl structure */}
      <BowlRing radiusX={110} radiusZ={75} height={20} yBase={0} color="#1a2844" />
      <BowlRing radiusX={125} radiusZ={88} height={22} yBase={20} color="#162238" />

      {/* Concourse / suite level */}
      <Concourse />
      <BowlRing radiusX={116} radiusZ={80} height={6} yBase={18} color="#1e3050" />

      {/* Roof ring — metallic */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 44, 0]} scale={[1, 1, 0.72]}>
        <torusGeometry args={[105, 4, 8, 64]} />
        <meshStandardMaterial color="#1e1e2a" metalness={0.85} roughness={0.2} envMapIntensity={0.5} />
      </mesh>

      <SeatRows />
      <FieldSurface />
      <FloodLights />
      <ScoreboardSupports />
    </group>
  )
}
