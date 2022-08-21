import * as THREE from 'three'

// ------------------------- Camera -------------------------
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height)
camera.position.set(0, 0, 2)
scene.add(camera)