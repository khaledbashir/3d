import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points } from 'three'

export function Particles({ count = 300, spread = 300 }: { count?: number; spread?: number }) {
  const ref = useRef<Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread
      arr[i * 3 + 1] = Math.random() * 80 + 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.7
    }
    return arr
  }, [count, spread])

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0002
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#5577aa" size={0.3} transparent opacity={0.3} />
    </points>
  )
}
