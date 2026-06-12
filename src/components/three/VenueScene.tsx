import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useVenueStore } from '@/stores/venueStore'
import { Stadium } from './Stadium'
import { Arena } from './Arena'
import { Mall } from './Mall'
import { Transit } from './Transit'
import { LEDScreen } from './LEDScreen'
import { Crowd } from './Crowd'
import { Particles } from './Particles'
import { SkyDome } from './SkyDome'

function CameraController() {
  const { camera } = useThree()
  const targetCamera = useVenueStore(s => s.targetCamera)

  const current = useRef({ angle: targetCamera.angle, pitch: targetCamera.pitch, distance: targetCamera.distance })

  useFrame(() => {
    const t = current.current
    t.angle += (targetCamera.angle - t.angle) * 0.06
    t.pitch += (targetCamera.pitch - t.pitch) * 0.06
    t.distance += (targetCamera.distance - t.distance) * 0.06

    camera.position.x = Math.sin(t.angle) * Math.cos(t.pitch) * t.distance
    camera.position.y = Math.sin(t.pitch) * t.distance + 20
    camera.position.z = Math.cos(t.angle) * Math.cos(t.pitch) * t.distance
    camera.lookAt(0, 15, 0)
  })

  return null
}

function OrbitHandler() {
  const { gl } = useThree()
  const setTargetCamera = useVenueStore(s => s.setTargetCamera)

  const isDragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = gl.domElement

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      lastMouse.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseUp = () => { isDragging.current = false }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastMouse.current.x
      const dy = e.clientY - lastMouse.current.y
      lastMouse.current = { x: e.clientX, y: e.clientY }

      const state = useVenueStore.getState().targetCamera
      setTargetCamera({
        angle: state.angle - dx * 0.005,
        pitch: Math.max(0.1, Math.min(1.2, state.pitch + dy * 0.005)),
      })
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const state = useVenueStore.getState().targetCamera
      setTargetCamera({
        distance: Math.max(40, Math.min(450, state.distance + e.deltaY * 0.15)),
      })
    }

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging.current = true
        lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }
    const onTouchEnd = () => { isDragging.current = false }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || e.touches.length !== 1) return
      const dx = e.touches[0].clientX - lastMouse.current.x
      const dy = e.touches[0].clientY - lastMouse.current.y
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }

      const state = useVenueStore.getState().targetCamera
      setTargetCamera({
        angle: state.angle - dx * 0.005,
        pitch: Math.max(0.1, Math.min(1.2, state.pitch + dy * 0.005)),
      })
    }

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('touchmove', onTouchMove, { passive: false })

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [gl, setTargetCamera])

  return null
}

function VenueGeometry() {
  const venueType = useVenueStore(s => s.venueType)

  switch (venueType) {
    case 'nfl': return <Stadium />
    case 'nba': return <Arena />
    case 'mall': return <Mall />
    case 'transit': return <Transit />
    default: return <Stadium />
  }
}

function CrowdForVenue() {
  const venueType = useVenueStore(s => s.venueType)
  const crowdMode = useVenueStore(s => s.crowdMode)

  if (crowdMode === 'empty') return null

  // Sections track the seating-tier rakes built in Stadium/Arena.
  switch (venueType) {
    case 'nfl':
      return <Crowd density={crowdMode} sections={[
        { rows: 15, seatsPerRow: 130, radiusX: 94, radiusZ: 60, startY: 4.6, rowRise: 0.86, rowStep: 1.62 },
        { rows: 13, seatsPerRow: 165, radiusX: 116, radiusZ: 82, startY: 23.3, rowRise: 1.12, rowStep: 1.57 },
      ]} />
    case 'nba':
      return <Crowd density={crowdMode} sections={[
        { rows: 9, seatsPerRow: 85, radiusX: 38, radiusZ: 28, startY: 3.3, rowRise: 0.78, rowStep: 1.4 },
        { rows: 8, seatsPerRow: 115, radiusX: 50, radiusZ: 40, startY: 14.6, rowRise: 1.09, rowStep: 1.44 },
      ]} />
    default:
      return null
  }
}

function LEDScreens() {
  const zones = useVenueStore(s => s.zones)
  return (
    <>
      {zones.map(zone => (
        <LEDScreen key={zone.id} zone={zone} />
      ))}
    </>
  )
}

function SimulationRunner() {
  const simulating = useVenueStore(s => s.simulating)
  const lastSim = useRef(0)

  useFrame(({ clock }) => {
    if (!simulating) return
    const t = clock.getElapsedTime()
    if (t - lastSim.current < 2.5) return
    lastSim.current = t

    const store = useVenueStore.getState()
    store.zones.forEach(z => {
      if (!z.enabled) return
      if (Math.random() > 0.65) {
        const cs: Array<'logo' | 'ad' | 'score' | 'replay' | 'animation'> = ['logo', 'ad', 'score', 'replay', 'animation']
        store.setZoneContent(z.id, cs[Math.floor(Math.random() * cs.length)])
      }
    })
  })

  return null
}

function EnvironmentForVenue() {
  const venueType = useVenueStore(s => s.venueType)
  return <SkyDome skyline={venueType === 'nfl'} />
}

export function VenueScene() {
  return (
    <>
      {/* Base night ambience — venue components carry their own key lights */}
      <ambientLight color="#27324c" intensity={0.5} />

      {/* Moonlight — soft cool key with shadows */}
      <directionalLight
        position={[120, 220, -90]}
        intensity={0.4}
        color="#b9c9e8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={600}
        shadow-camera-left={-170}
        shadow-camera-right={170}
        shadow-camera-top={170}
        shadow-camera-bottom={-170}
        shadow-bias={-0.0003}
      />

      {/* Cool fill from the opposite side */}
      <directionalLight position={[-80, 90, 60]} intensity={0.12} color="#5577aa" />

      {/* Sky / ground bounce */}
      <hemisphereLight color="#1b2942" groundColor="#06070c" intensity={0.4} />

      {/* Environment map for reflections on glass, hardwood, metal */}
      <Environment preset="night" background={false} />

      <fog attach="fog" args={['#06090f', 300, 1200]} />

      <EnvironmentForVenue />

      <CameraController />
      <OrbitHandler />
      <SimulationRunner />

      <VenueGeometry />
      <LEDScreens />
      <CrowdForVenue />
      <Particles count={200} />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={0.7}
          luminanceThreshold={0.45}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
        <Vignette darkness={0.38} offset={0.3} />
      </EffectComposer>
    </>
  )
}
