import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const PKSLogo3D = () => {
  const groupRef = useRef<THREE.Group>(null);

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
        <Text
          font="/fonts/Inter-Bold.woff"
          fontSize={2}
          color="#3b82f6"
          anchorX="center"
          anchorY="middle"
        >
          PKS
        </Text>
      </Center>
      
      {/* Shield behind text */}
      <mesh position={[0, 0, -0.5]} scale={[3, 3.5, 0.1]}>
        <cylinderGeometry args={[0.5, 0.7, 1, 6]} />
        <meshStandardMaterial 
          color="#1e40af" 
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>

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