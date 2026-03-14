import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color, InstancedMesh, MathUtils, Object3D } from 'three'
import type { CrowdMode } from '@/types'

const dummy = new Object3D()
const color = new Color()

interface CrowdSection {
  rows: number
  seatsPerRow: number
  radiusX: number
  radiusZ: number
  startY: number
  rowRise: number
  scaleZ: number
}

interface CrowdProps {
  density: CrowdMode
  sections: CrowdSection[]
}

interface CrowdPerson {
  x: number
  y: number
  z: number
  rotationY: number
  bodyScale: number
  bodyColor: string
  headColor: string
  bobOffset: number
}

function densityRatio(mode: CrowdMode) {
  switch (mode) {
    case 'empty':
      return 0
    case 'half':
      return 0.52
    case 'full':
      return 0.92
  }
}

export function Crowd({ density, sections }: CrowdProps) {
  const bodyRef = useRef<InstancedMesh>(null)
  const headRef = useRef<InstancedMesh>(null)

  const crowd = useMemo(() => {
    const bodyPalette = ['#1f3a5f', '#26486d', '#8b1e2d', '#d7dce5', '#313b52', '#4f6f8d', '#5c2934', '#b9c6d8']
    const headPalette = ['#f1c7a2', '#c98f6a', '#8d5b3c', '#e7b98d', '#6a412a']
    const targetDensity = densityRatio(density)
    const people: CrowdPerson[] = []

    sections.forEach((section, sectionIndex) => {
      for (let row = 0; row < section.rows; row++) {
        const rowProgress = row / Math.max(section.rows - 1, 1)
        const rowRadiusX = section.radiusX + row * 1.85
        const rowRadiusZ = (section.radiusZ + row * 1.55) * section.scaleZ
        const y = section.startY + row * section.rowRise
        const seatCount = section.seatsPerRow + row * 2

        for (let seat = 0; seat < seatCount; seat++) {
          const normalized = (seat / seatCount) * Math.PI * 2
          const shouldPlace = Math.sin((seat + 1) * 12.9898 + row * 78.233 + sectionIndex * 31.11) * 43758.5453
          const occupancyNoise = shouldPlace - Math.floor(shouldPlace)
          if (occupancyNoise > targetDensity) continue

          const angleJitter = Math.sin(seat * 0.73 + row * 0.37) * 0.004
          const angle = normalized + angleJitter
          const x = Math.cos(angle) * rowRadiusX
          const z = Math.sin(angle) * rowRadiusZ
          const bodyScale = MathUtils.lerp(0.82, 1.18, ((seat * 17 + row * 13) % 10) / 10)

          people.push({
            x,
            y,
            z,
            rotationY: -angle + Math.PI / 2,
            bodyScale,
            bodyColor: bodyPalette[(seat + row + sectionIndex) % bodyPalette.length],
            headColor: headPalette[(seat * 3 + row) % headPalette.length],
            bobOffset: (seat + row * 7) * 0.15,
          })
        }
      }
    })

    return people
  }, [density, sections])

  useMemo(() => {
    if (!bodyRef.current || !headRef.current) return

    crowd.forEach((person, index) => {
      dummy.position.set(person.x, person.y, person.z)
      dummy.rotation.set(0, person.rotationY, MathUtils.degToRad(8))
      dummy.scale.set(0.34 * person.bodyScale, 0.9 * person.bodyScale, 0.34 * person.bodyScale)
      dummy.updateMatrix()
      bodyRef.current?.setMatrixAt(index, dummy.matrix)
      color.set(person.bodyColor)
      bodyRef.current?.setColorAt(index, color)

      dummy.position.set(person.x, person.y + 0.72 * person.bodyScale, person.z)
      dummy.rotation.set(0, person.rotationY, 0)
      dummy.scale.setScalar(0.24 * person.bodyScale)
      dummy.updateMatrix()
      headRef.current?.setMatrixAt(index, dummy.matrix)
      color.set(person.headColor)
      headRef.current?.setColorAt(index, color)
    })

    bodyRef.current.instanceMatrix.needsUpdate = true
    headRef.current.instanceMatrix.needsUpdate = true
    if (bodyRef.current.instanceColor) bodyRef.current.instanceColor.needsUpdate = true
    if (headRef.current.instanceColor) headRef.current.instanceColor.needsUpdate = true
  }, [crowd])

  useFrame(({ clock }) => {
    if (!bodyRef.current || !headRef.current) return
    const t = clock.getElapsedTime()
    const count = crowd.length
    if (count === 0) return

    const batchSize = Math.min(90, count)
    const startIdx = Math.floor((t * 12) % count)

    for (let j = 0; j < batchSize; j++) {
      const i = (startIdx + j) % count
      const person = crowd[i]
      const bob = Math.sin(t * 1.4 + person.bobOffset) * 0.03

      dummy.position.set(person.x, person.y + bob, person.z)
      dummy.rotation.set(0, person.rotationY, MathUtils.degToRad(8))
      dummy.scale.set(0.34 * person.bodyScale, 0.9 * person.bodyScale, 0.34 * person.bodyScale)
      dummy.updateMatrix()
      bodyRef.current.setMatrixAt(i, dummy.matrix)

      dummy.position.set(person.x, person.y + 0.72 * person.bodyScale + bob, person.z)
      dummy.rotation.set(0, person.rotationY, 0)
      dummy.scale.setScalar(0.24 * person.bodyScale)
      dummy.updateMatrix()
      headRef.current.setMatrixAt(i, dummy.matrix)
    }

    bodyRef.current.instanceMatrix.needsUpdate = true
    headRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <group>
      <instancedMesh ref={bodyRef} args={[undefined, undefined, crowd.length]} frustumCulled={false}>
        <capsuleGeometry args={[0.34, 0.72, 4, 6]} />
        <meshStandardMaterial roughness={0.95} metalness={0.02} />
      </instancedMesh>
      <instancedMesh ref={headRef} args={[undefined, undefined, crowd.length]} frustumCulled={false}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshStandardMaterial roughness={1} metalness={0} />
      </instancedMesh>
    </group>
  )
}
