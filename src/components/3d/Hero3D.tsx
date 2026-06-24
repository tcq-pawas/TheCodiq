"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function MetallicCube({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={hovered ? scale * 1.1 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#000000"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current && !hovered) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      {/* Main central cube */}
      <MetallicCube position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />

      {/* Surrounding cubes */}
      <MetallicCube position={[2, 1, 0]} rotation={[0.5, 0.5, 0]} scale={1} />
      <MetallicCube position={[-2, 1, 0]} rotation={[-0.5, 0.5, 0]} scale={1} />
      <MetallicCube position={[0, 2, 1]} rotation={[0.5, -0.5, 0]} scale={1.2} />
      <MetallicCube position={[0, -2, 1]} rotation={[-0.5, -0.5, 0]} scale={1.2} />
      <MetallicCube position={[1.5, -1, 1.5]} rotation={[0.3, 0.3, 0.3]} scale={0.8} />
      <MetallicCube position={[-1.5, -1, 1.5]} rotation={[-0.3, 0.3, -0.3]} scale={0.8} />
      <MetallicCube position={[1.5, 1, -1.5]} rotation={[0.3, -0.3, 0.3]} scale={0.8} />
      <MetallicCube position={[-1.5, 1, -1.5]} rotation={[-0.3, -0.3, -0.3]} scale={0.8} />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Environment preset="city" />
        <HeroScene />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
