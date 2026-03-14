import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
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
      {/* Bezel / frame */}
      <mesh position={[0, 0, -0.15]}>
        <planeGeometry args={[zone.width + 1.5, zone.height + 1.5]} />
        <meshStandardMaterial color="#111118" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Glow plane */}
      <mesh position={[0, 0, -0.25]}>
        <planeGeometry args={[zone.width + 6, zone.height + 6]} />
        <meshBasicMaterial
          color={isSelected ? '#0A52EF' : '#03B8FF'}
          transparent
          opacity={isSelected ? 0.08 : 0.025}
        />
      </mesh>

      {/* LED Surface */}
      <mesh ref={meshRef} onClick={handleClick}>
        <planeGeometry args={[zone.width, zone.height]} />
        <meshStandardMaterial
          map={texture}
          emissiveMap={texture}
          emissive="#ffffff"
          emissiveIntensity={zone.enabled ? 0.8 : 0.05}
          roughness={0.2}
          metalness={0.5}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
