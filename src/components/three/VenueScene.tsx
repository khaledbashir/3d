import { Suspense, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Euler, Vector3 } from 'three'
import { useVenueStore } from '@/stores/venueStore'
import { Stadium } from './Stadium'
import { Arena } from './Arena'
import { Mall } from './Mall'
import { Transit } from './Transit'
import { LEDScreen } from './LEDScreen'
import { Crowd } from './Crowd'
import { Particles } from './Particles'
import { SkyDome } from './SkyDome'
import { ImportedVenueModel } from './ImportedVenueModel'

function CameraController() {
  const { camera } = useThree()
  const targetCamera = useVenueStore(s => s.targetCamera)
  const navigationMode = useVenueStore(s => s.navigationMode)

  const current = useRef({ angle: targetCamera.angle, pitch: targetCamera.pitch, distance: targetCamera.distance })

  useFrame(() => {
    if (navigationMode !== 'orbit') return
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
  const navigationMode = useVenueStore(s => s.navigationMode)

  const isDragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (navigationMode !== 'orbit') return
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
  }, [gl, setTargetCamera, navigationMode])

  return null
}

const WALK_SETTINGS = {
  nfl: { spawn: [0, 2.1, 24] as const, bounds: [88, 51] as const, speed: 28 },
  nba: { spawn: [0, 1.8, 10] as const, bounds: [32, 23] as const, speed: 13 },
  mall: { spawn: [0, 1.8, 12] as const, bounds: [38, 34] as const, speed: 11 },
  transit: { spawn: [0, 1.8, 12] as const, bounds: [42, 28] as const, speed: 12 },
}

function WalkController() {
  const { camera, gl } = useThree()
  const navigationMode = useVenueStore(s => s.navigationMode)
  const venueType = useVenueStore(s => s.venueType)
  const keys = useRef(new Set<string>())
  const yaw = useRef(0)
  const pitch = useRef(-0.04)
  const forward = useRef(new Vector3())
  const right = useRef(new Vector3())
  const rotation = useRef(new Euler(0, 0, 0, 'YXZ'))

  useEffect(() => {
    if (navigationMode !== 'walk') return
    const el = gl.domElement
    const settings = WALK_SETTINGS[venueType]
    camera.position.set(settings.spawn[0], settings.spawn[1], settings.spawn[2])
    yaw.current = 0
    pitch.current = -0.04

    const onCanvasClick = () => {
      if (document.pointerLockElement !== el) void el.requestPointerLock()
    }
    const onKeyDown = (event: KeyboardEvent) => keys.current.add(event.code)
    const onKeyUp = (event: KeyboardEvent) => keys.current.delete(event.code)
    const onMouseMove = (event: MouseEvent) => {
      if (document.pointerLockElement !== el) return
      yaw.current -= event.movementX * 0.002
      pitch.current = Math.max(-1.35, Math.min(1.35, pitch.current - event.movementY * 0.002))
    }

    el.addEventListener('click', onCanvasClick)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      keys.current.clear()
      el.removeEventListener('click', onCanvasClick)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('mousemove', onMouseMove)
      if (document.pointerLockElement === el) document.exitPointerLock()
    }
  }, [camera, gl, navigationMode, venueType])

  useFrame((_, delta) => {
    if (navigationMode !== 'walk') return
    const settings = WALK_SETTINGS[venueType]
    const step = settings.speed * Math.min(delta, 0.05)
    const keyState = keys.current
    const forwardAmount = Number(keyState.has('KeyW') || keyState.has('ArrowUp')) - Number(keyState.has('KeyS') || keyState.has('ArrowDown'))
    const rightAmount = Number(keyState.has('KeyD') || keyState.has('ArrowRight')) - Number(keyState.has('KeyA') || keyState.has('ArrowLeft'))

    rotation.current.set(pitch.current, yaw.current, 0)
    camera.rotation.copy(rotation.current)

    if (forwardAmount || rightAmount) {
      forward.current.set(0, 0, -1).applyEuler(rotation.current).setY(0).normalize()
      right.current.set(1, 0, 0).applyEuler(rotation.current).setY(0).normalize()
      camera.position.addScaledVector(forward.current, forwardAmount * step)
      camera.position.addScaledVector(right.current, rightAmount * step)
    }

    camera.position.x = Math.max(-settings.bounds[0], Math.min(settings.bounds[0], camera.position.x))
    camera.position.z = Math.max(-settings.bounds[1], Math.min(settings.bounds[1], camera.position.z))
    camera.position.y = settings.spawn[1]
  })

  return null
}

function VenueGeometry() {
  const venueType = useVenueStore(s => s.venueType)
  const venueModelUrl = useVenueStore(s => s.venueModelUrl)

  if (venueModelUrl) {
    return (
      <Suspense fallback={null}>
        <ImportedVenueModel url={venueModelUrl} venueType={venueType} />
      </Suspense>
    )
  }

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
      <WalkController />
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
