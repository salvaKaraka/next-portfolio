"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: caz747 (https://sketchfab.com/caz747)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/attack-robot-d24d19b8cd874cb69cea6a64f03ea60c
Title: Attack Robot
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'


export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/coherechatbot/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.006} position={[0,.4,0]}>
        <mesh geometry={nodes.Mouth001_Robot_0.geometry} material={materials.Robot} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/coherechatbot/scene.gltf')
