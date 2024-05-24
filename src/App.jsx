import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'
import Sphere from './components/Sphere'
import Torus from './components/Torus'
import TorusKnot from './components/TorusKnot'
import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { useControls } from 'leva'

function App() {

  const Scene = () =>{
const directionalLightRef = useRef()

//leva
const {lightColor, lightIntensity} = useControls({
  lightColor:'white',
  lightIntensity:{
    value:0.5,
    min:0,
    max:5,
    step:0.1
  }

})

useHelper(directionalLightRef, DirectionalLightHelper, 0.2, 'white')

    return(
      <>
      <directionalLight position={[0,0,2]} intensity={lightIntensity} ref={directionalLightRef}
      color={lightColor}/>
<ambientLight intensity={0.1}/>

{/* <group position={[0,-1,0]}>
<Cube position={[1,0,0]} color={"red"} size={[1,1,1,]}/>
      <Cube position={[-1,0,0]} color={"green"} size={[1,1,1,]}/>
      <Cube position={[1,2,0]} color={"orange"} size={[1,1,1,]}/>
      <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1,]}/>
</group> */}

{/* <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"}/> */}

{/* <Sphere color={"orange"} hoverColor={"pink"} position={[0,0,0]} size={[1,30,30]}/> */}
{/* <Torus position={[2,0,0]} size={[0.8, 0.1,30]} color={"grey"}/> */}
<TorusKnot position={[0,0,0]} size={[ 0.1,1000,50]} color={"red"}/>
  <OrbitControls enableZoom={false}/>
      </>
    )
  }

  return (
    <Canvas>
     <Scene/>
      </Canvas>
  )
}

export default App
