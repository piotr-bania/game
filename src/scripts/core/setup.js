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
camera.position.set(0, 0, 10)
scene.add(camera)

// ------------------------- Lights -------------------------
// // Ambient
// const ambientLight = new THREE.AmbientLight(0xffa95c, 1)
// scene.add(ambientLight)

// // Point
// const pointLight = new THREE.PointLight(0xcc6600, 1)
// pointLight.position.set(-0.5, 0.5, 0.75)
// scene.add(pointLight)

// // Directional
// const directionalLight = new THREE.DirectionalLight(0x03544e, 1)
// directionalLight.position.set(0, 0, 1)
// scene.add(directionalLight)

// Hemisphere
const hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4)
hemisphereLight.position.set(1, -1, 0)
scene.add(hemisphereLight)

// Spot
const spotLight = new THREE.SpotLight(0xffa95c, 1)
spotLight.position.set(-5, 5, 5)
spotLight.castShadow = true
scene.add(spotLight)

// ------------------------- Fog -------------------------
const fog = new THREE.Fog('#F2F8F7', 1, 50)
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