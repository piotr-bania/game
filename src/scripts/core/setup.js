import * as THREE from 'three'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'

// ------------------------- Canvas -------------------------
const canvas = document.querySelector('canvas.webgl')

// ------------------------- Scene -------------------------
const scene = new THREE.Scene()

// ------------------------- Sizes -------------------------
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// ------------------------- Camera -------------------------
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 4)
scene.add(camera)

// ------------------------- Lights -------------------------
// Ambient
const ambientLight = new THREE.AmbientLight(0x7161F5, 0.75)
scene.add(ambientLight)

// Point
const pointLight = new THREE.PointLight(0xcc6600, 0.75)
pointLight.position.set(-0.5, 0.5, 0.75)
scene.add(pointLight)

// ------------------------- Fog -------------------------
const fog = new THREE.Fog('#F2F8F7', 1, 15)
scene.fog = fog

// ------------------------- Renderer -------------------------
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.4
renderer.outputEncoding = THREE.sRGBEncoding

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
renderer.setClearColor(fog)
renderer.shadowMap.enabled = true

// ------------------------- Controls -------------------------
const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = false
controls.enableDamping = true
controls.enableZoom = false

// ------------------------- Clock -------------------------
const clock = new THREE.Clock()

// ------------------------- Tick function -------------------------
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()

// ------------------------- Resize window -------------------------
window.addEventListener('resize', () => {

    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Casting shadows
    renderer.shadowMap.enabled = true
})

export default scene