import * as THREE from 'three'
import scene from '../core/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

loader.setDecoderPath('three/examples/js/libs/draco/')
const loader = new DRACOLoader()

// Model
import Grass from '../../assets/soul.glb'
import Outline from '../../assets/outlined.gltf'

let soul = new GLTFLoader()
soul.load(Grass, function (gltf) {
    soul = gltf.scene
    gltf.scene.scale.set(3, 3, 3)
    gltf.scene.rotation.set(0, 1.5, 0)
    gltf.scene.position.set(5, 0, 0)
    scene.add(soul)
})

let outlined = new GLTFLoader()
outlined.load(Outline, function (gltf) {
    outlined = gltf.scene
    gltf.scene.scale.set(3, 3, 3)
    gltf.scene.rotation.set(0, 1.5, 0)
    gltf.scene.position.set(-5, 0, 0)
    scene.add(outlined)
})

console.log(Outline)