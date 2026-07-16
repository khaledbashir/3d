import { useMemo, useRef } from 'react'
import { CylinderGeometry, type Mesh } from 'three'
import { useLEDTexture } from '@/hooks/useLEDTexture'
import { useZoneMediaTexture } from '@/hooks/useZoneMediaTexture'
import { useVenueStore } from '@/stores/venueStore'
import { getSponsor } from '@/data/sponsors'
import type { LEDZone } from '@/types'

interface LEDScreenProps {
  zone: LEDZone
}

/** Open cylindrical arc centered on local origin, facing +z. */
function useArcGeometry(width: number, height: number, radius: number, offset = 0, pad = 0) {
  return useMemo(() => {
    const r = radius + offset
    const theta = (width + pad) / radius
    const geo = new CylinderGeometry(r, r, height, 32, 1, true, -theta / 2, theta)
    geo.translate(0, 0, -r)
    return geo
  }, [width, height, radius, offset, pad])
}

function CurvedScreen({ zone, texture, isSelected, onClick }: {
  zone: LEDZone; texture: any; isSelected: boolean; onClick: (e: any) => void
}) {
  const radius = zone.curveRadius!
  const screenGeo = useArcGeometry(zone.width, zone.height, radius)
  const backingGeo = useArcGeometry(zone.width, zone.height + 0.6, radius, 0, 0.8)
  const glowGeo = useArcGeometry(zone.width, zone.height + 2.4, radius, 0, 3)

  return (
    <group position={zone.position} rotation={zone.rotation}>
      {/* Backing structure — follows the same arc, just behind */}
      <mesh geometry={backingGeo} position={[0, 0, -0.35]}>
        <meshStandardMaterial color="#0c0c12" metalness={0.9} roughness={0.25} />
      </mesh>

      {isSelected && (
        <mesh geometry={glowGeo} position={[0, 0, -0.18]}>
          <meshBasicMaterial color="#0A52EF" transparent opacity={0.16} />
        </mesh>
      )}

      <mesh geometry={screenGeo} onClick={onClick}>
        <meshBasicMaterial map={texture} toneMapped={false} fog={false} />
      </mesh>

      <pointLight
        position={[0, 0, 5]}
        color={zone.enabled ? '#3a66c8' : '#000000'}
        intensity={zone.enabled ? 60 : 0}
        distance={zone.width * 1.4}
        decay={2}
      />
    </group>
  )
}

export function LEDScreen({ zone }: LEDScreenProps) {
  const meshRef = useRef<Mesh>(null)
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const selectZone = useVenueStore(s => s.selectZone)
  const sponsors = useVenueStore(s => s.sponsors)

  const sponsor = sponsors.find(s => s.id === zone.sponsor) ?? getSponsor('none')
  const isSelected = selectedZoneId === zone.id
  const generatedTexture = useLEDTexture(zone.width, zone.height, zone.content, sponsor, isSelected, zone.enabled)
  const uploadedTexture = useZoneMediaTexture(zone.mediaUrl, zone.mediaKind)
  const texture = zone.enabled && uploadedTexture ? uploadedTexture : generatedTexture

  const handleClick = (e: any) => {
    e.stopPropagation()
    selectZone(isSelected ? null : zone.id)
  }

  if (zone.curveRadius) {
    return <CurvedScreen zone={zone} texture={texture} isSelected={isSelected} onClick={handleClick} />
  }

  return (
    <group position={zone.position} rotation={zone.rotation}>
      {/* Mounting bracket / frame */}
      <mesh position={[0, 0, -0.2]}>
        <boxGeometry args={[zone.width + 1, zone.height + 1, 0.3]} />
        <meshStandardMaterial color="#0a0a10" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* LED bezel */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[zone.width + 0.4, zone.height + 0.4, 0.08]} />
        <meshStandardMaterial color="#111118" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Light spill on surrounding surfaces */}
      <pointLight
        position={[0, 0, 4]}
        color={zone.enabled ? (sponsor.id !== 'none' ? sponsor.color : '#0A52EF') : '#000000'}
        intensity={zone.enabled ? 90 : 0}
        distance={zone.width * 1.6}
        decay={2}
      />

      {/* Selection highlight ring */}
      {isSelected && (
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[zone.width + 3, zone.height + 3]} />
          <meshBasicMaterial
            color="#0A52EF"
            transparent
            opacity={0.15}
          />
        </mesh>
      )}

      {/* LED Surface — immune to fog so screens stay bright at any distance */}
      <mesh ref={meshRef} onClick={handleClick}>
        <planeGeometry args={[zone.width, zone.height]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          fog={false}
        />
      </mesh>
    </group>
  )
}
