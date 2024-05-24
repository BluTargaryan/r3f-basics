import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Torus = ({position, color, size}) => {

    const ref = useRef()

    useFrame((state, delta)=>{
        ref.current.rotation.x +=delta
        ref.current.rotation.y +=delta * 2
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
        })
        
  return (
    <mesh position={position} ref={ref}>
        <torusGeometry args={size}/>
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}

export default Torus