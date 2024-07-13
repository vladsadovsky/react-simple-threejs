import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import RotatingBox from './components/box'
import './App.css'

function App() {
  const [speed, setSpeed] = useState(0)
  return (
    <>
      <h2>React Three Fiber</h2>
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <directionalLight color="red" intensity={0.1} position={[1, 1, 5]} />
          <RotatingBox position={[1.5,1,0]} dimensions={[2,3,3]} speed={speed} name="box left"/>
          <RotatingBox position={[-1.8,0,0]} dimensions={[2,3,3]} speed={speed} name="box right"/>
          <OrbitControls />
        </Canvas>
      </div>
      <div className="speed">
          <button onClick={() => setSpeed((speed) => speed + 1)}>
            Relative speed is {speed}  
          </button>
      </div>
    </>
  )
}

export default App;
