import { useMemo } from 'react'
import { BackSide, Color, ShaderMaterial } from 'three'
import { Stars } from '@react-three/drei'
import { makeSkylineTexture } from '@/utils/proceduralTextures'

const skyVertex = /* glsl */ `
  varying vec3 vWorldPos;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`

const skyFragment = /* glsl */ `
  varying vec3 vWorldPos;
  uniform vec3 zenithColor;
  uniform vec3 midColor;
  uniform vec3 horizonColor;
  uniform vec3 glowColor;
  void main() {
    float h = clamp(normalize(vWorldPos).y, 0.0, 1.0);
    vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.22, h));
    col = mix(col, zenithColor, smoothstep(0.18, 0.65, h));
    // Warm city glow hugging the horizon
    float glow = pow(clamp(1.0 - h * 5.5, 0.0, 1.0), 2.4);
    col += glowColor * glow;
    gl_FragColor = vec4(col, 1.0);
  }
`

/**
 * Night environment: gradient sky dome, star field, and an optional city
 * skyline ring for outdoor venues. Replaces the flat black void.
 */
export function SkyDome({ skyline = false }: { skyline?: boolean }) {
  const skyMaterial = useMemo(() => new ShaderMaterial({
    vertexShader: skyVertex,
    fragmentShader: skyFragment,
    uniforms: {
      zenithColor: { value: new Color('#01030c') },
      midColor: { value: new Color('#071226') },
      horizonColor: { value: new Color('#13233f') },
      glowColor: { value: new Color('#2a2014') },
    },
    side: BackSide,
    depthWrite: false,
    fog: false,
  }), [])

  const skylineTexture = useMemo(() => (skyline ? makeSkylineTexture() : null), [skyline])

  return (
    <group>
      <mesh material={skyMaterial} renderOrder={-2}>
        <sphereGeometry args={[1300, 32, 16]} />
      </mesh>

      <Stars radius={900} depth={150} count={2600} factor={6} saturation={0.05} fade speed={0.4} />

      {skyline && skylineTexture && (
        <mesh position={[0, 48, 0]} renderOrder={-1}>
          <cylinderGeometry args={[760, 760, 130, 64, 1, true]} />
          <meshBasicMaterial
            map={skylineTexture}
            transparent
            side={BackSide}
            fog={false}
            toneMapped={false}
            opacity={0.9}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  )
}
