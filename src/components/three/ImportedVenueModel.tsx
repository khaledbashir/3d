import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { Box3, Mesh, Vector3 } from 'three'
import type { VenueType } from '@/types'

const TARGET_SPAN: Record<VenueType, number> = {
  nfl: 300,
  nba: 132,
  mall: 110,
  transit: 130,
}

interface ImportedVenueModelProps {
  url: string
  venueType: VenueType
}

/**
 * Loads a user-owned binary glTF venue, centers it, grounds it, and scales it
 * into the same world-space envelope as the existing LED zone definitions.
 */
export function ImportedVenueModel({ url, venueType }: ImportedVenueModelProps) {
  const gltf = useGLTF(url)

  const scene = useMemo(() => {
    const root = gltf.scene.clone(true)

    root.traverse(child => {
      if (!(child instanceof Mesh)) return
      child.castShadow = true
      child.receiveShadow = true
      if (Array.isArray(child.material)) {
        child.material = child.material.map(material => material.clone())
      } else if (child.material) {
        child.material = child.material.clone()
      }
    })

    root.updateMatrixWorld(true)
    const initial = new Box3().setFromObject(root)
    const size = initial.getSize(new Vector3())
    const horizontalSpan = Math.max(size.x, size.z)
    const scale = horizontalSpan > 0 ? TARGET_SPAN[venueType] / horizontalSpan : 1
    root.scale.setScalar(scale)

    root.updateMatrixWorld(true)
    const normalized = new Box3().setFromObject(root)
    const center = normalized.getCenter(new Vector3())
    root.position.x -= center.x
    root.position.z -= center.z
    root.position.y -= normalized.min.y
    root.updateMatrixWorld(true)

    return root
  }, [gltf.scene, venueType])

  return <primitive object={scene} />
}
