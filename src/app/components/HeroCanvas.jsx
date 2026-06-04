"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Mountains: flat-shaded cones so each face shows a distinct tone under directional light
const MOUNTAINS = [
  // back centrepieces
  { x: -3.0, z: -9,  h: 11,   r: 4.0, seg: 7 },
  { x:  1.5, z: -10, h: 13,   r: 4.8, seg: 6 },
  { x:  5.5, z: -8,  h: 10,   r: 3.6, seg: 8 },
  // mid layer
  { x: -6.5, z: -5,  h: 7.0,  r: 2.5, seg: 7 },
  { x:  3.5, z: -5,  h: 6.5,  r: 2.2, seg: 6 },
  { x:  7.5, z: -4,  h: 6.0,  r: 2.0, seg: 8 },
  // near flanks
  { x: -9.0, z: -2,  h: 4.8,  r: 1.7, seg: 5 },
  { x:  9.5, z: -2,  h: 4.5,  r: 1.5, seg: 6 },
];

// Simple pine trees
const TREES = [
  { x: -9.5, z: 0.8, h: 2.4, r: 0.60 },
  { x: -8.0, z: 0.2, h: 3.0, r: 0.70 },
  { x: -6.8, z: 1.0, h: 2.2, r: 0.55 },
  { x: -5.5, z: 0.4, h: 2.7, r: 0.65 },
  { x:  5.8, z: 0.6, h: 2.5, r: 0.62 },
  { x:  7.2, z: 0.1, h: 3.1, r: 0.72 },
  { x:  8.5, z: 0.9, h: 2.3, r: 0.57 },
  { x:  9.8, z: 0.3, h: 2.8, r: 0.67 },
];

function Mountain({ x, z, h, r, seg }) {
  const capH = h * 0.28;
  const capR = r * (capH / h) * 1.45;
  return (
    <group position={[x, -3, z]}>
      {/* body — blue-grey base lets lit faces pop warm, shadow faces stay cool */}
      <mesh position={[0, h / 2, 0]}>
        <coneGeometry args={[r, h, seg, 1]} />
        <meshStandardMaterial color="#adc8e0" roughness={0.92} metalness={0} flatShading />
      </mesh>
      {/* snow cap aligned flush with peak */}
      <mesh position={[0, h - capH / 2, 0]}>
        <coneGeometry args={[capR, capH, seg, 1]} />
        <meshStandardMaterial color="#eef6ff" roughness={0.8} metalness={0} flatShading emissive="#ffffff" emissiveIntensity={0.08} />
      </mesh>
    </group>
  );
}

function PineTree({ x, z, h, r }) {
  return (
    <group position={[x, -3, z]}>
      <mesh position={[0, h * 0.18, 0]}>
        <cylinderGeometry args={[r * 0.09, r * 0.14, h * 0.36, 6]} />
        <meshStandardMaterial color="#3d2510" roughness={1} flatShading />
      </mesh>
      <mesh position={[0, h * 0.52, 0]}>
        <coneGeometry args={[r, h * 0.72, 7, 1]} />
        <meshStandardMaterial color="#1b4a22" roughness={0.95} flatShading />
      </mesh>
      <mesh position={[0, h * 0.70, 0]}>
        <coneGeometry args={[r * 0.72, h * 0.54, 7, 1]} />
        <meshStandardMaterial color="#1f5428" roughness={0.95} flatShading />
      </mesh>
    </group>
  );
}

function SnowParticles({ count = 520 }) {
  const pointsRef = useRef();

  const { geometry, speeds, phases } = useMemo(() => {
    const pos    = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = Math.random() * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      speeds[i] = 0.005 + Math.random() * 0.01;
      phases[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { geometry: geo, speeds, phases };
  }, [count]);

  const flakeTex = useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 64; c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,   "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(240,248,255,0.75)");
    g.addColorStop(1,   "rgba(200,230,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const arr = pointsRef.current.geometry.attributes.position.array;
    const t   = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= speeds[i];
      arr[i * 3]     += Math.sin(t * 0.35 + phases[i]) * 0.003;
      if (arr[i * 3 + 1] < -4) {
        arr[i * 3 + 1] = 12;
        arr[i * 3]     = (Math.random() - 0.5) * 22;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!flakeTex) return null;
  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial map={flakeTex} size={0.14} transparent alphaTest={0.005} depthWrite={false} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      {/* Light haze blending into the sky gradient below */}
      <fog attach="fog" args={["#a8d4f0", 18, 34]} />

      {/* Primary sun: warm, strong, from upper-left — key to dramatic face shading */}
      <directionalLight position={[-7, 10, 4]} intensity={4.0} color="#ffe0a0" />
      {/* Sky fill from right: cool blue, softer */}
      <directionalLight position={[ 6,  6, 3]} intensity={1.2} color="#88c0f0" />
      {/* Soft ambient so shadows aren't black */}
      <ambientLight intensity={0.55} color="#c8dff5" />
      {/* Warm ground bounce (snow reflectance) */}
      <pointLight position={[0, -2, 7]} color="#ffe4a8" intensity={2.5} distance={20} />

      {MOUNTAINS.map((m, i) => <Mountain key={i} {...m} />)}
      {TREES.map((t, i)     => <PineTree  key={i} {...t} />)}

      {/* snow-covered ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[55, 25]} />
        <meshStandardMaterial color="#ddeef8" roughness={1} />
      </mesh>

      <SnowParticles />
    </>
  );
}

export default function HeroCanvas() {
  return (
    // gradient sky lives on the wrapper; canvas renders with alpha:true over it
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, #1255a0 0%, #2979c8 28%, #5ba8e0 58%, #b0d8f0 100%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 10], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
