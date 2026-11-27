import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { BODY_PROFILE, BODY_TOP, LID_PROFILE, POT_HEIGHT } from './potProfile'

export type PotScene = {
  setProgress: (p: number) => void
  setFocus: (rect: { centerY: number; height: number }) => void
  resize: () => void
  setActive: (active: boolean) => void
  dispose: () => void
}

const HALF = POT_HEIGHT / 2
const MOUTH_Y = BODY_TOP - HALF
const CAPSULE_COUNT = 22

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a))
  return t * t * (3 - 2 * t)
}
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

type CapsuleSpec = {
  t0: number
  v: THREE.Vector3
  axis: THREE.Vector3
  spin: number
  size: number
  start: THREE.Vector3
}

export function createPotScene(canvas: HTMLCanvasElement, labelUrl: string, onReady: () => void): PotScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  const scene = new THREE.Scene()
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environment = envTexture
  scene.environmentIntensity = 0.55

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100)
  camera.position.set(0, 0, 8)

  scene.add(new THREE.AmbientLight(0xffffff, 0.25))
  const key = new THREE.DirectionalLight(0xfff3e0, 2.2)
  key.position.set(3, 4, 5)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0xd6ad72, 3.2)
  rim.position.set(-4, 2, -3)
  scene.add(rim)
  const rim2 = new THREE.DirectionalLight(0xd6ad72, 1.6)
  rim2.position.set(4, -1, -2)
  scene.add(rim2)

  const root = new THREE.Group()
  scene.add(root)
  const pot = new THREE.Group()
  root.add(pot)

  const disposables: { dispose: () => void }[] = [renderer, pmrem, envTexture]
  const track = <T extends { dispose: () => void }>(o: T) => {
    disposables.push(o)
    return o
  }

  const bodyGeo = track(
    new THREE.LatheGeometry(
      BODY_PROFILE.map(([r, y]) => new THREE.Vector2(r, y - HALF)),
      96,
    ),
  )
  const label = track(new THREE.TextureLoader().load(labelUrl, () => onReady()))
  label.colorSpace = THREE.SRGBColorSpace
  label.wrapS = THREE.RepeatWrapping
  label.offset.x = 0.5
  label.anisotropy = renderer.capabilities.getMaxAnisotropy()
  const bodyMat = track(
    new THREE.MeshPhysicalMaterial({
      map: label,
      emissiveMap: label,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.32,
      roughness: 0.34,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    }),
  )
  const body = new THREE.Mesh(bodyGeo, bodyMat)
  pot.add(body)

  const neckR = BODY_PROFILE[BODY_PROFILE.length - 1][0]
  const darkMat = track(new THREE.MeshStandardMaterial({ color: 0x060606, roughness: 0.9, side: THREE.DoubleSide }))
  const inner = new THREE.Mesh(track(new THREE.CylinderGeometry(neckR * 0.94, neckR * 0.94, 0.3, 64, 1, true)), darkMat)
  inner.position.y = MOUTH_Y - 0.15
  pot.add(inner)
  const floor = new THREE.Mesh(track(new THREE.CircleGeometry(neckR * 0.94, 64)), darkMat)
  floor.rotation.x = -Math.PI / 2
  floor.position.y = MOUTH_Y - 0.22
  pot.add(floor)
  const rimRing = new THREE.Mesh(
    track(new THREE.TorusGeometry(neckR * 0.97, 0.016, 12, 96)),
    track(new THREE.MeshPhysicalMaterial({ color: 0x1a1a1a, roughness: 0.3, clearcoat: 1 })),
  )
  rimRing.rotation.x = Math.PI / 2
  rimRing.position.y = MOUTH_Y
  pot.add(rimRing)

  const capsuleGeo = track(new THREE.CapsuleGeometry(0.068, 0.2, 8, 20))
  const capsuleMat = track(
    new THREE.MeshPhysicalMaterial({
      color: 0xf6f3ec,
      roughness: 0.28,
      clearcoat: 0.9,
      clearcoatRoughness: 0.2,
      sheen: 0.4,
      sheenColor: new THREE.Color(0xffffff),
    }),
  )
  const r0 = rng(7)
  for (let i = 0; i < 7; i++) {
    const c = new THREE.Mesh(capsuleGeo, capsuleMat)
    const a = r0() * Math.PI * 2
    const d = Math.sqrt(r0()) * neckR * 0.6
    c.position.set(Math.cos(a) * d, MOUTH_Y - 0.17 + r0() * 0.04, Math.sin(a) * d)
    c.rotation.set(Math.PI / 2 + (r0() - 0.5) * 0.6, r0() * Math.PI, 0)
    pot.add(c)
  }

  const lid = new THREE.Group()
  lid.position.y = MOUTH_Y
  pot.add(lid)
  const lidGeo = track(
    new THREE.LatheGeometry(
      LID_PROFILE.map(([r, y]) => new THREE.Vector2(r, y - BODY_TOP)),
      96,
    ),
  )
  const lidMat = track(
    new THREE.MeshPhysicalMaterial({
      color: 0x0c0c0c,
      roughness: 0.26,
      metalness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    }),
  )
  lid.add(new THREE.Mesh(lidGeo, lidMat))
  const lidUnder = new THREE.Mesh(track(new THREE.CircleGeometry(LID_PROFILE[0][0], 64)), darkMat)
  lidUnder.rotation.x = Math.PI / 2
  lidUnder.position.y = 0.003
  lid.add(lidUnder)

  const flying = new THREE.InstancedMesh(capsuleGeo, capsuleMat, CAPSULE_COUNT)
  flying.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  flying.frustumCulled = false
  root.add(flying)

  const rand = rng(42)
  const specs: CapsuleSpec[] = Array.from({ length: CAPSULE_COUNT }, (_, i) => ({
    t0: 0.5 + (i / CAPSULE_COUNT) * 0.24 + rand() * 0.03,
    v: new THREE.Vector3((rand() - 0.5) * 3, 1.7 + rand() * 1.1, rand() * 0.5),
    axis: new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize(),
    spin: (4 + rand() * 6) * (rand() > 0.5 ? 1 : -1),
    size: 0.85 + rand() * 0.35,
    start: new THREE.Vector3(),
  }))

  const pose = (p: number, idle: number, target: THREE.Object3D) => {
    const settle = smooth(0, 0.4, p)
    const lean = smooth(0.42, 0.7, p)
    const drop = smooth(0.78, 1, p)
    target.rotation.set(
      0.14 + lean * 0.38,
      idle * (1 - smooth(0, 0.08, p)) + easeInOut(settle) * Math.PI * 2,
      -0.06 + lean * 0.14,
    )
    target.position.set(0, -settle * 0.15 - drop * drop * 4.2, 0)
  }

  const mouthAt = (p: number, out: THREE.Vector3) => {
    const dummy = new THREE.Object3D()
    pose(p, 0, dummy)
    dummy.updateMatrix()
    return out.set(0, MOUTH_Y + 0.03, 0).applyMatrix4(dummy.matrix)
  }
  specs.forEach((s) => mouthAt(s.t0, s.start))

  let target = 0
  let current = 0
  let time = 0
  let active = true
  let raf = 0
  let last = performance.now()
  const m = new THREE.Matrix4()
  const q = new THREE.Quaternion()
  const pos = new THREE.Vector3()
  const scl = new THREE.Vector3()

  const update = (dt: number) => {
    time += dt
    current += (target - current) * (1 - Math.exp(-dt * 5))
    const p = current
    const idle = Math.sin(time * 0.55) * 0.32

    pose(p, idle, pot)
    pot.position.y += Math.sin(time * 1.1) * 0.035 * (1 - smooth(0, 0.1, p))

    const unscrew = easeInOut(smooth(0.28, 0.55, p))
    const away = easeInOut(smooth(0.5, 0.75, p))
    lid.rotation.set(-away * 0.9, -unscrew * Math.PI * 2.5, away * 0.7)
    lid.position.set(-away * 1.45, MOUTH_Y + unscrew * 0.16 + away * 0.2, -away * 0.7)
    lid.scale.setScalar(1 - away * 0.12)

    const T = 1.4
    const g = -7
    for (let i = 0; i < CAPSULE_COUNT; i++) {
      const s = specs[i]
      const tau = (p - s.t0) / 0.3
      if (tau <= 0) {
        m.makeScale(0, 0, 0)
      } else {
        const tt = Math.min(tau, 1.2) * T
        pos.set(s.start.x + s.v.x * tt, s.start.y + s.v.y * tt + 0.5 * g * tt * tt, s.start.z + s.v.z * tt)
        q.setFromAxisAngle(s.axis, s.spin * tt)
        const k = Math.min(1, tau * 8) * s.size * 0.85
        scl.set(k, k, k)
        m.compose(pos, q, scl)
      }
      flying.setMatrixAt(i, m)
    }
    flying.instanceMatrix.needsUpdate = true

    renderer.render(scene, camera)
  }

  const loop = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    update(dt)
    raf = active ? requestAnimationFrame(loop) : 0
  }

  let focus = { centerY: 0, height: 0 }

  const layout = () => {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    const fh = (focus.height || h * 0.45) * (w < 1024 ? 0.86 : 0.9)
    const cy = focus.height ? focus.centerY : h / 2
    const visibleH = (POT_HEIGHT * h) / fh
    camera.position.z = visibleH / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
    camera.updateProjectionMatrix()
    root.position.y = ((h / 2 - cy) / h) * visibleH
  }

  layout()
  raf = requestAnimationFrame(loop)

  return {
    setProgress: (p) => {
      target = clamp(p)
    },
    setFocus: (rect) => {
      focus = rect
      layout()
    },
    resize: layout,
    setActive: (a) => {
      if (a === active) return
      active = a
      if (a) {
        last = performance.now()
        raf = requestAnimationFrame(loop)
      } else if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    },
    dispose: () => {
      active = false
      if (raf) cancelAnimationFrame(raf)
      flying.dispose()
      disposables.forEach((d) => d.dispose())
    },
  }
}
