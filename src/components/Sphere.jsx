import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Sphere = ({position, color,hoverColor, size}) => {

    const ref = useRef()

    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useFrame((state, delta)=>{
      const speed = isHovered?1:0.2
        ref.current.rotation.y +=delta * speed
        })
  return (
    <mesh position={position} ref={ref} 
    onPointerEnter={(event)=>(event.stopPropagation(), setIsHovered(true))} 
    onPointerLeave={()=>setIsHovered(false)}
    onClick={()=>setIsClicked(!isClicked)}
    scale={isClicked?1.5:1}>
        <sphereGeometry args={size}/>
        <meshStandardMaterial color={isHovered?hoverColor:color} wireframe/>
      </mesh>
  )
}

export default Sphere