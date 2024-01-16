"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Vladek (https://sketchfab.com/vladek27)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/low-poly-living-room-df179eebec234798aa7fbe6c7eaf492a
Title: Low poly living room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/citybellverde/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.008} position={[0,-1,0]}>
      <mesh geometry={nodes.Plane_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')