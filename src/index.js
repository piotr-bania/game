import './styles/main.scss'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
    RGBELoader
} from 'three/examples/jsm/loaders/RGBELoader'
import {
    gsap
} from 'gsap'

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
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height)
camera.position.set(0, 0, 20)
scene.add(camera)

// const helper = new THREE.CameraHelper(camera)
// scene.add(helper)

// ------------------------- Lights -------------------------
// Ambient
const ambientLight = new THREE.AmbientLight(0x7161F5, 0.75)
scene.add(ambientLight)

// Point
// const orangePointLight = new THREE.PointLight(0xcc6600, 1)
// orangePointLight.position.set(1, - 0.5, 1)
// scene.add(orangePointLight)

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( orangePointLight, sphereSize );
// scene.add( pointLightHelper )

// Directional
const directionalLight = new THREE.DirectionalLight(0x03544e, 0.5)
directionalLight.position.set(0, 0, 1)
scene.add(directionalLight)

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1)
// scene.add(directionalLightHelper)

// Hemisphere
const hemisphereLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.75)
hemisphereLight.position.set(1, -1, 0)
scene.add(hemisphereLight)

// const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 1)
// scene.add(hemisphereLightHelper)

// ------------------------- Debug -------------------------
const gui = new dat.GUI()

// ------------------------- Fog -------------------------
const fog = new THREE.Fog('#7161F5', 1, 5)
scene.fog = fog

// ------------------------- HDRI -------------------------
// import hdri from './hdri/nebula-003-demo.hdr'

// new RGBELoader()
//     .load(hdri, function (texture) {
//         texture.mapping = THREE.EquirectangularReflectionMapping
//         scene.environment = texture
//         scene.background = texture
//     })

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

// ------------------------- Debugging -------------------------
// gui.add(camera.position, 'z', 1, 50, 1, ).name('Nebula zoom')

// ------------------------- Clock -------------------------
const clock = new THREE.Clock()

// ------------------------- Tick function -------------------------
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    // Controls
    controls.update()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()

// // ----------------- Animation -----------------
// function animate() {
//     requestAnimationFrame(animate)
//     renderer.render(scene, camera)
// }
// animate()

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