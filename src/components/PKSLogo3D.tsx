import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import * as THREE from 'three';
import pksLogo from '../assets/pks-logo.png';

const PKSLogo3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, pksLogo);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        {/* Main PKS Logo */}
        <mesh>
          <planeGeometry args={[3, 3]} />
          <meshStandardMaterial 
            map={texture}
            transparent
            alphaTest={0.1}
          />
        </mesh>
        
        {/* Glowing backdrop */}
        <mesh position={[0, 0, -0.2]} scale={[3.5, 3.5, 0.1]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            transparent
            opacity={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Center>

      {/* Ambient particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4
          ]}
        >
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial 
            color="#3b82f6" 
            transparent 
            opacity={Math.random() * 0.6 + 0.2}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[-3, -3, 2]} intensity={0.3} color="#1e40af" />
      <ambientLight intensity={0.4} />
    </group>
  );
};

export default PKSLogo3D;