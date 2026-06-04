"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const MOUNTAINS = [
  // back layer — tall centrepieces
  { x: -3.5, z: -8, h: 9.0, r: 3.4, color: "#040c1c", snow: 2.4 },
  { x:  0.8, z: -9, h: 11,  r: 4.2, color: "#030a18", snow: 3.0 },
  { x:  4.8, z: -8, h: 8.5, r: 3.1, color: "#050e20", snow: 2.1 },
  // mid layer
  { x: -6.0, z: -5, h: 6.5, r: 2.4, color: "#071426", snow: 1.5 },
  { x:  2.8, z: -5, h: 6.0, r: 2.1, color: "#07182a", snow: 1.3 },
  { x:  7.0, z: -4, h: 5.5, r: 1.9, color: "#061220", snow: 1.1 },
  // near flanks
  { x: -8.0, z: -2, h: 4.2, r: 1.6, color: "#05101e", snow: 0.8 },
  { x:  8.5, z: -2, h: 4.0, r: 1.5, color: "#050f1c", snow: 0.7 },
];

function Mountain({ x, z, h, r, color, snow }) {
  // snow cap radius is slightly wider than the mountain surface at that height
  const snowR = r * (snow / h) * 1.35;

  return (
    <group position={[x, -3, z]}>
      {/* mountain body — 8-sided cone catches clear shading from directional light */}
      <mesh position={[0, h / 2, 0]}>
        <coneGeometry args={[r, h, 8, 1]} />
        <meshStandardMaterial color={color} roughness={0.92} metalness={0.04} />
      </mesh>
      {/* snow cap — tip aligns exactly with mountain peak */}
      <mesh position={[0, h - snow / 2, 0]}>
        <coneGeometry args={[snowR, snow, 8, 1]} />
        <meshStandardMaterial color="#c8dff5" roughness={1} metalness={0} transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function Moon() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    // subtle pulse
    meshRef.current.material.emissiveIntensity = 0.8 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
  });
  return (
    <mesh ref={meshRef} position={[5.5, 6.5, -10]}>
      <sphereGeometry args={[0.65, 20, 20]} />
      <meshStandardMaterial color="#eef6ff" emissive="#90b8e8" emissiveIntensity={0.9} roughness={1} />
    </mesh>
  );
}

function SnowParticles({ count = 600 }) {
  const pointsRef = useRef();

  const { geometry, speeds, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds    = new Float32Array(count);
    const phases    = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = Math.random() * 14 - 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      speeds[i] = 0.006 + Math.random() * 0.013;
      phases[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return { geometry: geo, speeds, phases };
  }, [count]);

  // soft radial gradient texture → circular flakes
  const flakeTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 64; c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,    "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(220,238,255,0.75)");
    g.addColorStop(1,    "rgba(180,210,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    const t   = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= speeds[i];
      pos[i * 3]     += Math.sin(t * 0.35 + phases[i]) * 0.004;
      if (pos[i * 3 + 1] < -4) {
        pos[i * 3 + 1] = 12;
        pos[i * 3]     = (Math.random() - 0.5) * 22;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!flakeTexture) return null;

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        map={flakeTexture}
        size={0.14}
        transparent
        alphaTest={0.005}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#010810"]} />
      <fog attach="fog" args={["#020c20", 16, 30]} />

      {/* key moonlight from upper-right — gives strong face shading on cones */}
      <directionalLight position={[7, 12, 5]} intensity={2.2} color="#b0ccf0" />
      {/* soft fill from left */}
      <directionalLight position={[-5, 6, 3]} intensity={0.45} color="#1c3060" />
      {/* ambient keeps shadows from going pure black */}
      <ambientLight intensity={0.12} color="#1a2d50" />
      {/* ground bounce */}
      <pointLight position={[0, -2, 5]} color="#1a3a70" intensity={1.8} distance={14} />

      <Stars radius={55} depth={55} count={1600} factor={2.2} saturation={0.08} fade speed={0.25} />

      <Moon />

      {MOUNTAINS.map((m, i) => <Mountain key={i} {...m} />)}

      {/* snow-covered ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[50, 24]} />
        <meshStandardMaterial color="#0b1a32" roughness={1} />
      </mesh>

      <SnowParticles count={620} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 10], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false }}
    >
      <Scene />
    </Canvas>
  );
}
