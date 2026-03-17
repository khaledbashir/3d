import { useRef } from 'react'
import type { Mesh } from 'three'
import { useLEDTexture } from '@/hooks/useLEDTexture'
import { useVenueStore } from '@/stores/venueStore'
import { getSponsor } from '@/data/sponsors'
import type { LEDZone } from '@/types'

interface LEDScreenProps {
  zone: LEDZone
}

export function LEDScreen({ zone }: LEDScreenProps) {
  const meshRef = useRef<Mesh>(null)
  const selectedZoneId = useVenueStore(s => s.selectedZoneId)
  const selectZone = useVenueStore(s => s.selectZone)
  const sponsors = useVenueStore(s => s.sponsors)

  const sponsor = sponsors.find(s => s.id === zone.sponsor) ?? getSponsor('none')
  const isSelected = selectedZoneId === zone.id
  const texture = useLEDTexture(zone.width, zone.height, zone.content, sponsor, isSelected, zone.enabled)

  const handleClick = (e: any) => {
    e.stopPropagation()
    selectZone(isSelected ? null : zone.id)
  }

  return (
    <group position={zone.position} rotation={zone.rotation}>
      {/* Mounting bracket / frame */}
      <mesh position={[0, 0, -0.3]}>
        <boxGeometry args={[zone.width + 2, zone.height + 2, 0.5]} />
        <meshStandardMaterial color="#0a0a10" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* LED bezel */}
      <mesh position={[0, 0, -0.08]}>
        <boxGeometry args={[zone.width + 0.8, zone.height + 0.8, 0.15]} />
        <meshStandardMaterial color="#111118" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Light spill on surrounding surfaces */}
      <pointLight
        position={[0, 0, 4]}
        color={zone.enabled ? (sponsor.id !== 'none' ? sponsor.color : '#0A52EF') : '#000000'}
        intensity={zone.enabled ? 1.2 : 0}
        distance={zone.width * 2}
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

      {/* LED Surface — emissive for bloom pickup */}
      <mesh ref={meshRef} onClick={handleClick}>
        <planeGeometry args={[zone.width, zone.height]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
