"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Hash-based smooth noise (no repeating sine patterns) ─────────────────────
const hash = (n) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const smoothNoise = (x) => {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * f * (f * (f * 6 - 15) + 10);
  return hash(i) + (hash(i + 1) - hash(i)) * u;
};
const fbm = (x, seed, octaves = 6, lac = 2.08, gain = 0.48) => {
  let v = 0, a = 0.5, f = 1;
  for (let o = 0; o < octaves; o++) {
    v += smoothNoise(x * f + seed + o * 3.7) * a;
    f *= lac; a *= gain;
  }
  return v;
};
const ridgedFbm = (x, seed, octaves = 7) => {
  let v = 0, a = 0.6, f = 1, w = 1;
  for (let o = 0; o < octaves; o++) {
    let n = smoothNoise(x * f + seed + o * 2.4);
    n = 1 - Math.abs(2 * n - 1);
    n = n * n * w;
    w = Math.min(1, n * 3.5);
    v += n * a; f *= 1.97; a *= 0.5;
  }
  return v;
};
// Domain-warped mountain profile — organic, non-repeating shapes
const mountainProfile = (x, seed, scale) => {
  const wx = fbm(x * 0.28 + seed, 5.1, 4) * 1.6;
  const ridge = ridgedFbm(x * 0.38 + wx + seed, 7);
  const base  = fbm(x * 0.18 + seed + 99.1, 5, 2.1, 0.5);
  return (ridge * 0.70 + base * 0.30) * scale * 8;
};

// ── Layers: atmospheric perspective — far = lighter/hazier, near = darkest ───
// No snow caps (they caused harsh dark-to-white contrast)
const LAYERS = [
  { z: -7, hex: 0x253d72, alpha: 0.38, scale: 0.58, base: -2.5, seed: 11.3  },
  { z: -5, hex: 0x112040, alpha: 0.60, scale: 0.88, base: -3.8, seed: 27.7  },
  { z: -3, hex: 0x060f24, alpha: 0.82, scale: 1.26, base: -5.4, seed: 41.2  },
  { z: -1, hex: 0x020810, alpha: 1.00, scale: 1.70, base: -7.0, seed: 68.8  },
];

// Stronger parallax multipliers so the effect is actually visible
const MOUSE_SPEED  = [0.28, 0.55, 0.95, 1.60];
const SCROLL_SPEED = [0.05, 0.14, 0.30, 0.58];

export default function MountainCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let W = el.clientWidth;
    let H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // Softer fog — blends layers without making everything grey
    scene.fog = new THREE.Fog(0x071428, 10, 26);

    const VIEW_H = 10;
    let VIEW_W = VIEW_H * (W / H);
    const camera = new THREE.OrthographicCamera(-VIEW_W, VIEW_W, VIEW_H, -VIEW_H, 0.1, 100);
    camera.position.z = 10;

    // ── Moon — proper size, not a dot ────────────────────────────────────────
    const moonX = VIEW_W * 0.50;
    const moonY = VIEW_H * 0.48;

    // Outermost diffuse halo
    const addSphere = (r, col, opacity, z) => {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(r, 32, 32),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity })
      );
      m.position.set(moonX, moonY, z);
      scene.add(m);
      return m;
    };
    const halo2  = addSphere(4.0, 0x112255, 0.055, -9.0); // large diffuse ring
    const halo1  = addSphere(2.2, 0x1e3d88, 0.10,  -8.8);
    const glow   = addSphere(1.3, 0x3366cc, 0.18,  -8.6);
    const moonDisc = addSphere(0.9, 0xcddff8, 1.00, -8.4); // actual moon disc

    // ── Stars ────────────────────────────────────────────────────────────────
    const STAR_N = 340;
    const starPos = new Float32Array(STAR_N * 3);
    for (let i = 0; i < STAR_N; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * VIEW_W * 2.8;
      starPos[i * 3 + 1] = Math.random() * 9 + 1.5;
      starPos[i * 3 + 2] = -9.2;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xbbcfff, size: 0.05, transparent: true, opacity: 0.68,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Subtle horizon glow ──────────────────────────────────────────────────
    const hzGeo = new THREE.PlaneGeometry(VIEW_W * 4, 4);
    const hzMat = new THREE.MeshBasicMaterial({
      color: 0x1a3a7a, transparent: true, opacity: 0.12,
    });
    const horizonMesh = new THREE.Mesh(hzGeo, hzMat);
    horizonMesh.position.set(0, -3.5, -5.5);
    scene.add(horizonMesh);

    // ── Mountain layers ──────────────────────────────────────────────────────
    const RES    = 260;
    const XRANGE = VIEW_W * 2 * 1.8;
    const meshes = [];

    LAYERS.forEach(({ z, hex, alpha, scale, base, seed }) => {
      const shape = new THREE.Shape();
      for (let i = 0; i <= RES; i++) {
        const x = (i / RES) * XRANGE - XRANGE / 2;
        const y = mountainProfile(x, seed, scale) + base;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.lineTo(XRANGE / 2, -20);
      shape.lineTo(-XRANGE / 2, -20);
      shape.closePath();

      const mesh = new THREE.Mesh(
        new THREE.ShapeGeometry(shape),
        new THREE.MeshBasicMaterial({ color: hex, transparent: alpha < 1, opacity: alpha })
      );
      mesh.position.z = z;
      scene.add(mesh);
      meshes.push(mesh);
    });

    // ── Parallax ─────────────────────────────────────────────────────────────
    let mouseTargetX = 0;
    const mouseCurrentX  = meshes.map(() => 0);
    const scrollCurrentY = meshes.map(() => 0);
    let scrollProg = 0;

    const onMouse  = (e) => { mouseTargetX = (e.clientX / W - 0.5) * 4.0; };
    const onScroll = () => {
      const sy = window.__lenis?.animatedScroll ?? window.scrollY;
      scrollProg = Math.min(sy / (el.clientHeight || H), 1);
    };
    const onResize = () => {
      W = el.clientWidth; H = el.clientHeight;
      VIEW_W = VIEW_H * (W / H);
      camera.left = -VIEW_W; camera.right = VIEW_W;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // ── Render loop ──────────────────────────────────────────────────────────
    let raf, t = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += 0.01;

      starMat.opacity    = 0.54 + Math.sin(t * 1.0) * 0.14;
      halo2.material.opacity = 0.042 + Math.sin(t * 0.55) * 0.014;
      halo1.material.opacity = 0.085 + Math.sin(t * 0.55) * 0.02;

      meshes.forEach((mesh, i) => {
        mouseCurrentX[i]  += (mouseTargetX * MOUSE_SPEED[i] - mouseCurrentX[i]) * 0.04;
        const sy = -scrollProg * SCROLL_SPEED[i] * VIEW_H;
        scrollCurrentY[i] += (sy - scrollCurrentY[i]) * 0.06;
        mesh.position.x = mouseCurrentX[i];
        mesh.position.y = scrollCurrentY[i];
      });

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      meshes.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      [starGeo, hzGeo].forEach(g => g.dispose());
      [starMat, hzMat].forEach(m => m.dispose());
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" style={{ zIndex: 1 }} />;
}
