/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 shoe.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, -3.14]} scale={0.01}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.lambert3SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  )
}

useGLTF.preload('/shoe-transformed.glb')
