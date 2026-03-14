import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useVenueStore } from '@/stores/venueStore'
import { Stadium } from './Stadium'
import { Arena } from './Arena'
import { Mall } from './Mall'
import { Transit } from './Transit'
import { LEDScreen } from './LEDScreen'
import { Crowd } from './Crowd'
import { Particles } from './Particles'

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
  const targetCamera = useVenueStore(s => s.targetCamera)
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

    // Touch
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

  switch (venueType) {
    case 'nfl':
      return <Crowd density={crowdMode} sections={[
        { rows: 10, seatsPerRow: 72, radiusX: 90, radiusZ: 62, startY: 5, rowRise: 1.75, scaleZ: 0.69 },
        { rows: 10, seatsPerRow: 84, radiusX: 107, radiusZ: 74, startY: 24, rowRise: 1.95, scaleZ: 0.72 },
      ]} />
    case 'nba':
      return <Crowd density={crowdMode} sections={[
        { rows: 8, seatsPerRow: 54, radiusX: 31, radiusZ: 22, startY: 3, rowRise: 1.5, scaleZ: 0.68 },
        { rows: 8, seatsPerRow: 66, radiusX: 44, radiusZ: 31, startY: 15, rowRise: 1.7, scaleZ: 0.71 },
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
  const zones = useVenueStore(s => s.zones)
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

export function VenueScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight color="#334455" intensity={0.6} />
      <directionalLight
        position={[100, 200, 100]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <fog attach="fog" args={['#000a1a', 100, 600]} />

      <CameraController />
      <OrbitHandler />
      <SimulationRunner />

      <VenueGeometry />
      <LEDScreens />
      <CrowdForVenue />
      <Particles />
    </>
  )
}
