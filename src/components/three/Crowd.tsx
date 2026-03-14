import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { InstancedMesh, Object3D, Color, MathUtils } from 'three'

const dummy = new Object3D()
const color = new Color()

interface CrowdProps {
  count?: number
  radiusX?: number
  radiusZ?: number
  minY?: number
  maxY?: number
  scaleZ?: number
}

export function Crowd({
  count = 800,
  radiusX = 100,
  radiusZ = 70,
  minY = 3,
  maxY = 38,
  scaleZ = 0.7,
}: CrowdProps) {
  const meshRef = useRef<InstancedMesh>(null)

  const crowd = useMemo(() => {
    const data: { x: number; y: number; z: number; scale: number; color: string }[] = []
    const colors = [
      '#2a4a6a', '#3a5a7a', '#1a3a5a', '#4a6a8a', '#5a7a9a',
      '#6a3a2a', '#2a5a4a', '#7a6a5a', '#3a3a5a', '#5a4a3a',
      '#aa3333', '#3366aa', '#33aa66', '#aa6633', '#6633aa',
    ]

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const yFraction = Math.random()
      const y = minY + yFraction * (maxY - minY)
      const rFrac = 0.82 + yFraction * 0.18
      const r = rFrac + Math.random() * 0.08
      const x = Math.cos(angle) * radiusX * r
      const z = Math.sin(angle) * radiusZ * r * scaleZ

      data.push({
        x, y, z,
        scale: 0.4 + Math.random() * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    return data
  }, [count, radiusX, radiusZ, minY, maxY, scaleZ])

  useMemo(() => {
    if (!meshRef.current) return
    const mesh = meshRef.current

    crowd.forEach((c, i) => {
      dummy.position.set(c.x, c.y, c.z)
      dummy.scale.setScalar(c.scale)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      color.set(c.color)
      mesh.setColorAt(i, color)
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [crowd])

  // Subtle swaying
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    // Only update a subset each frame for perf
    const batchSize = 40
    const startIdx = Math.floor((t * 10) % count)

    for (let j = 0; j < batchSize && j < count; j++) {
      const i = (startIdx + j) % count
      const c = crowd[i]
      const sway = Math.sin(t * 1.5 + i * 0.3) * 0.15
      dummy.position.set(c.x + sway, c.y, c.z)
      dummy.scale.setScalar(c.scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <capsuleGeometry args={[0.3, 0.8, 2, 4]} />
      <meshStandardMaterial roughness={0.9} />
    </instancedMesh>
  )
}
