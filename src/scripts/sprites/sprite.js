import * as THREE from 'three'
import scene from '../core/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

// Model
import Outline from '../../assets/outlined_black.gltf'

let black = new GLTFLoader()
black.load(Outline, function (gltf) {
    black = gltf.scene
    black.rotation.set(0, 1.5, 0)
    scene.add(black)
})