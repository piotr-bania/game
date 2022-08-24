import * as THREE from 'three'
import scene from '../core/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

// Grass modelimport
import Grass from '../../assets/table.gltf'

let grass = new GLTFLoader()
grass.load(Grass, function (gltf) {
    grass = gltf.scene
    scene.add(grass)
})