import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface BoxProps {
  position: [number, number, number];
  dimensions: [number, number, number];
  speed: number;
  name: string;
}

function RotatingBox(props: BoxProps)  {
  // This reference gives us direct access to the THREE.Mesh object
  const instanceRef = useRef<Mesh>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Speed of rotation of the mesh
  const speedRatio = 0.3;
  
  // Rotate the mesh every frame
  useFrame((_, delta) => {
    if (instanceRef.current) {
      instanceRef.current.rotation.x += speedRatio * delta;
    }
  })
  
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={instanceRef}
      scale={clicked ? 1.3 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={props.dimensions} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default RotatingBox;