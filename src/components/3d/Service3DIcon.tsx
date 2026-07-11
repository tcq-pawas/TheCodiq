"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

// Card 1: Rounded cube with hollow center
function HollowCube({ hovered }: { hovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} scale={hovered ? 1.1 : 1}>
        {/* Outer cube frame */}
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
            side={THREE.BackSide}
          />
        </mesh>
        {/* Inner cube */}
        <mesh scale={0.6}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Card 2: Futuristic sphere with connected nodes
function SphereWithNodes({ hovered }: { hovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} scale={hovered ? 1.1 : 1}>
        {/* Central sphere */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        {/* Orbiting nodes */}
        <mesh position={[1, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        {/* Connection lines */}
        <mesh>
          <cylinderGeometry args={[0.02, 0.02, 2]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
          <group rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 2]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.95}
                roughness={0.2}
              />
            </mesh>
          </group>
        </mesh>
      </group>
    </Float>
  );
}

// Card 3: Geometric hollow cube structure
function GeometricHollowCube({ hovered }: { hovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} scale={hovered ? 1.1 : 1}>
        {/* Outer frame */}
        <mesh>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
            wireframe
          />
        </mesh>
        {/* Inner geometric shape */}
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        {/* Corner accents */}
        <mesh position={[0.6, 0.6, 0.6]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-0.6, 0.6, 0.6]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.6, -0.6, 0.6]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-0.6, -0.6, 0.6]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

interface Service3DIconProps {
  type: "hollow-cube" | "sphere-nodes" | "geometric-cube";
}

export default function Service3DIcon({ type }: Service3DIconProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-full"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Environment preset="city" />
        {type === "hollow-cube" && <HollowCube hovered={hovered} />}
        {type === "sphere-nodes" && <SphereWithNodes hovered={hovered} />}
        {type === "geometric-cube" && <GeometricHollowCube hovered={hovered} />}
      </Canvas>
    </div>
  );
}
