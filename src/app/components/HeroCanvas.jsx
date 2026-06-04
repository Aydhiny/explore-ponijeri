"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// ─── Mountain silhouette via outline path → filled shape ──────────────────────
function MountainRidge({ pts, z, color }) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(pts[0][0], pts[0][1]);
    pts.slice(1).forEach(([x, y]) => s.lineTo(x, y));
    // close down through the bottom
    s.lineTo(pts[pts.length - 1][0], -6);
    s.lineTo(pts[0][0], -6);
    s.closePath();
    return s;
  }, [pts]);

  return (
    <mesh position={[0, 0, z]}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Ridge profiles — irregular peaks, not triangle cones
const FAR  = [[-14,-2],[-11,1.8],[-9.5,0.4],[-7,3.5],[-5,1.6],[-3,2.8],[-1,5.5],[0.8,2.2],[2.5,4.2],[5,1.4],[7,3.2],[9,0.9],[11.5,2.6],[14,0.8]];
const MID  = [[-14,-2.5],[-12,0.7],[-10,-0.5],[-8,2.2],[-6,0.6],[-4,2.9],[-2,1.0],[0,3.6],[2,0.8],[4,2.5],[6.5,0.4],[8.5,2.0],[11,-0.3],[14,1.2]];
const NEAR = [[-14,-3],[-11,-0.6],[-9,-2],[-6,0.5],[-3.5,-1.4],[-1,1.2],[1.5,-0.8],[4,0.6],[7,-1.2],[10,0.4],[14,-0.8]];

// ─── Snow layer — each instance = one depth plane ─────────────────────────────
function SnowLayer({ count, size, zRange, speed, parallax, opacity }) {
  const groupRef  = useRef();
  const pointsRef = useRef();

  const { geo, vel, pha } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    const pha = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 28;
      pos[i*3+1] = Math.random() * 18 - 4;
      pos[i*3+2] = zRange[0] + Math.random() * (zRange[1] - zRange[0]);
      vel[i] = speed * (0.65 + Math.random() * 0.7);
      pha[i] = Math.random() * Math.PI * 2;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { geo: g, vel, pha };
  }, []); // eslint-disable-line

  const tex = useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 64; c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,   "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(210,238,255,0.72)");
    g.addColorStop(1,   "rgba(180,220,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame(({ mouse, clock }) => {
    if (!pointsRef.current || !groupRef.current) return;
    const arr = pointsRef.current.geometry.attributes.position.array;
    const t   = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      arr[i*3+1] -= vel[i] * 0.012;
      arr[i*3]   += Math.sin(t * 0.26 + pha[i]) * 0.003;
      if (arr[i*3+1] < -5) {
        arr[i*3+1] = 13;
        arr[i*3]   = (Math.random() - 0.5) * 28;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    // each layer slides at a different rate → depth parallax
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x, mouse.x * parallax, 0.035
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y, mouse.y * parallax * 0.4, 0.035
    );
  });

  if (!tex) return null;
  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geo}>
        <pointsMaterial
          map={tex}
          size={size}
          transparent
          opacity={opacity}
          alphaTest={0.004}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#03101f"]} />
      <fog attach="fog" args={["#050f20", 12, 30]} />

      {/* Sparse stars — reads as winter night sky, not space */}
      <Stars radius={55} depth={50} count={400} factor={1.2} saturation={0} fade speed={0.15} />

      {/* Mountain silhouettes — 3 depth layers */}
      <MountainRidge pts={FAR}  z={-9} color="#071526" />
      <MountainRidge pts={MID}  z={-5} color="#060f1e" />
      <MountainRidge pts={NEAR} z={-2} color="#040c19" />

      {/* Snow ground fill beneath ridges */}
      <mesh position={[0, -5, -1]}>
        <planeGeometry args={[50, 4]} />
        <meshBasicMaterial color="#03091a" />
      </mesh>

      {/* 3 snow depth layers — fine/medium/large, different parallax */}
      <SnowLayer count={900} size={0.038} zRange={[-9,-5]} speed={0.42} parallax={0.45} opacity={0.48} />
      <SnowLayer count={300} size={0.082} zRange={[-4,-1]} speed={0.72} parallax={1.05} opacity={0.65} />
      <SnowLayer count={65}  size={0.16}  zRange={[ 0, 2]} speed={1.15} parallax={2.00} opacity={0.85} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false }}
    >
      <Scene />
    </Canvas>
  );
}
