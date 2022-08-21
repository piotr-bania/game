import * as THREE from 'three'

import scene from '../core/setup'

const geometry = new THREE.BoxGeometry(2.5, 0.1, 0.2)
const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

cube.position.set(0, -1, 0)