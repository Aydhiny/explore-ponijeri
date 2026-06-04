"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function SnowParticles({ count = 500 }) {
  const pointsRef = useRef();

  const { geometry, speeds, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = Math.random() * 14 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = 0.006 + Math.random() * 0.012;
      phases[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return { geometry: geo, speeds, phases };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= speeds[i];
      pos[i * 3]     += Math.sin(t * 0.4 + phases[i]) * 0.004;
      if (pos[i * 3 + 1] < -4) {
        pos[i * 3 + 1] = 10;
        pos[i * 3]     = (Math.random() - 0.5) * 16;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.055}
        color="#d8eeff"
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function MountainRange() {
  // Each peak: [x, yBase, halfWidth, peakHeight, colorHex]
  const peaks = [
    [-5.5, -3.5, 2.6, 5.2, "#071020"],
    [-1.8, -3.5, 2.2, 6.0, "#050d1c"],
    [ 2.2, -3.5, 2.0, 5.5, "#071020"],
    [ 5.5, -3.5, 2.4, 4.8, "#040b18"],
    [-3.5, -3.5, 1.6, 4.4, "#071828"],
    [ 4.0, -3.5, 1.4, 4.0, "#060f20"],
  ];

  const snowCaps = [
    [-1.8, peaks[1][1] + peaks[1][3], 0.55, 1.0, "#c8dff5"],
    [-5.5, peaks[0][1] + peaks[0][3], 0.50, 0.85, "#c0d8f0"],
    [ 2.2, peaks[2][1] + peaks[2][3], 0.45, 0.78, "#cce2f8"],
  ];

  return (
    <>
      {peaks.map(([x, yBase, hw, ph, color], i) => {
        const shape = new THREE.Shape();
        shape.moveTo(-hw, 0);
        shape.lineTo(0,   ph);
        shape.lineTo(hw,  0);
        shape.closePath();
        return (
          <mesh key={i} position={[x, yBase, -2 - i * 0.3]}>
            <shapeGeometry args={[shape]} />
            <meshBasicMaterial color={color} side={THREE.DoubleSide} />
          </mesh>
        );
      })}

      {/* Snow caps on the three tallest peaks */}
      {snowCaps.map(([x, yTip, hw, ph, color], i) => {
        const cap = new THREE.Shape();
        cap.moveTo(-hw, 0);
        cap.lineTo(0,   ph);
        cap.lineTo(hw,  0);
        cap.closePath();
        return (
          <mesh key={`cap-${i}`} position={[x, yTip, -1.8 - i * 0.3]}>
            <shapeGeometry args={[cap]} />
            <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.75} />
          </mesh>
        );
      })}

      {/* Ground/snow floor */}
      <mesh position={[0, -3.5, -1]}>
        <planeGeometry args={[30, 2.5]} />
        <meshBasicMaterial color="#0a1830" />
      </mesh>
    </>
  );
}

function AuroraGlow() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.material.opacity = 0.12 + Math.sin(clock.getElapsedTime() * 0.4) * 0.06;
  });

  return (
    <mesh ref={meshRef} position={[0, 1, -5]}>
      <planeGeometry args={[20, 6]} />
      <meshBasicMaterial color="#0055cc" transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#020a1c"]} />
      <Stars radius={40} depth={40} count={1200} factor={2.2} saturation={0.1} fade speed={0.3} />
      <MountainRange />
      <AuroraGlow />
      <SnowParticles count={520} />
      {/* Moonlight */}
      <pointLight position={[5, 8, 0]} color="#b8d0f0" intensity={3} distance={25} />
      {/* Snow glow from ground */}
      <pointLight position={[0, -3, 2]} color="#1a4080" intensity={1.5} distance={10} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 52 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false }}
    >
      <Scene />
    </Canvas>
  );
}
