import * as THREE from 'three'
import scene from '../core/setup'

const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

cube.position.set(-0.5, -0.25, 0)