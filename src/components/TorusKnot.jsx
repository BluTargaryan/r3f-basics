import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'
import { useControls } from 'leva'

const TorusKnot = ({position,  size}) => {

  const {color, radius} = useControls({
    color:"lightblue",
    radius:{
      value:5,
      min:1,
      max:10,
      step:0.5
    }
  })

    const ref = useRef()

    // useFrame((state, delta)=>{
    //     ref.current.rotation.x +=delta
    //     ref.current.rotation.y +=delta * 2
    //     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    //     })
        
  return (
    <mesh position={position} ref={ref}>
        <torusKnotGeometry args={[radius, ...size]}/>
        {/* <meshStandardMaterial color={color}/> */}
        <MeshWobbleMaterial factor={5} speed={2} color={color}/>
      </mesh>
  )
}

export default TorusKnot