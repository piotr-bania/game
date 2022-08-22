import * as THREE from 'three'
import scene from '../core/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

// Grass modelimport
import Grass from '../../assets/grass.glb'

let grass = new GLTFLoader()
grass.load(Grass, function (gltf) {
    grass = gltf.scene
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(-1, -1, 0)

    const newMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x61F570,
        metalness: 0,
        roughness: 1,
        transmission: 0.1,
        thickness: 1,
    })
    grass.traverse((o) => {
        if (o.isMesh) o.material = newMaterial
    })
    grass.traverse(n => {
        if (n.isMesh) {
            n.castShadow = true
            n.receiveShadow = true
            if (n.material.map) n.material.map.anisotropy = 16
        }
    })

    scene.add(grass)
})

let grass1 = new GLTFLoader()
grass1.load(Grass, function (gltf) {
    grass1 = gltf.scene
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, -1, 0)
    
    const newMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x61F570,
        metalness: 0,
        roughness: 1,
        transmission: 0.1,
        thickness: 1,
    })
    grass1.traverse((o) => {
        if (o.isMesh) o.material = newMaterial
    })
    grass1.traverse(n => {
        if (n.isMesh) {
            n.castShadow = true
            n.receiveShadow = true
            if (n.material.map) n.material.map.anisotropy = 16
        }
    })
    scene.add(grass1)
})

let grass2 = new GLTFLoader()
grass2.load(Grass, function (gltf) {
    grass2 = gltf.scene
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(1, -0.95, 0)
    gltf.scene.rotation.set(0, 0, 0.1)
    
    const newMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x61F570,
        metalness: 0,
        roughness: 1,
        transmission: 0.1,
        thickness: 1,
    })
    grass2.traverse((o) => {
        if (o.isMesh) o.material = newMaterial
    })
    grass2.traverse(n => {
        if (n.isMesh) {
            n.castShadow = true
            n.receiveShadow = true
            if (n.material.map) n.material.map.anisotropy = 16
        }
    })
    scene.add(grass2)
})