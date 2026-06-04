"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Noise ──────────────────────────────────────────────────────────────────
// Hash-based smooth noise — no repeating sine patterns
const hash = (n) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const smoothNoise = (x) => {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * f * (f * (f * 6 - 15) + 10); // quintic smoothstep
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

// Ridged noise — creates sharp mountain peaks, smooth valleys
const ridgedFbm = (x, seed, octaves = 7) => {
  let v = 0, a = 0.6, f = 1, w = 1;
  for (let o = 0; o < octaves; o++) {
    let n = smoothNoise(x * f + seed + o * 2.4);
    n = 1 - Math.abs(2 * n - 1); // ridge transform
    n = n * n * w;
    w = Math.min(1, n * 3.5);
    v += n * a;
    f *= 1.97; a *= 0.5;
  }
  return v;
};

// Domain-warped mountain profile — no repeating patterns
const mountainProfile = (x, seed, scale) => {
  const wx = fbm(x * 0.28 + seed, 5.1, 4) * 1.6; // warp x domain
  const ridge = ridgedFbm(x * 0.38 + wx + seed, 7);
  const base  = fbm(x * 0.18 + seed + 99.1, 5, 2.1, 0.5);
  return (ridge * 0.70 + base * 0.30) * scale * 8;
};

// ── Layer configuration ────────────────────────────────────────────────────
const LAYERS = [
  { z: -7, hex: 0x2a5090, alpha: 0.35, scale: 0.60, base: -2.8, seed: 11.3,  snowLine: null },
  { z: -5, hex: 0x13306a, alpha: 0.58, scale: 0.90, base: -4.0, seed: 27.7,  snowLine: null },
  { z: -3, hex: 0x071c3e, alpha: 0.84, scale: 1.28, base: -5.6, seed: 41.2,  snowLine: -2.2 },
  { z: -1, hex: 0x030c1e, alpha: 1.00, scale: 1.72, base: -7.2, seed: 68.8,  snowLine: -3.5 },
];

const MOUSE_SPEED  = [0.22, 0.40, 0.65, 1.05]; // x parallax per layer (far → near)
const SCROLL_SPEED = [0.03, 0.09, 0.20, 0.42]; // y parallax per layer

export default function MountainCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let W = el.clientWidth;
    let H = el.clientHeight;

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── Scene & camera ─────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x061224, 9, 24); // atmospheric depth

    const VIEW_H = 10;
    let VIEW_W = VIEW_H * (W / H);
    const camera = new THREE.OrthographicCamera(-VIEW_W, VIEW_W, VIEW_H, -VIEW_H, 0.1, 100);
    camera.position.z = 10;

    // ── Moon ──────────────────────────────────────────────────────────────
    const moonX = VIEW_W * 0.55;
    const moonY = VIEW_H * 0.50;

    const mkSphere = (r, col, opaque, opacity) => {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(r, 28, 28),
        new THREE.MeshBasicMaterial({ color: col, transparent: !opaque, opacity })
      );
      m.position.set(moonX, moonY, -8.5);
      scene.add(m);
      return m;
    };

    const moonHalo  = mkSphere(1.20, 0x1a4488, false, 0.07);
    const moonGlow  = mkSphere(0.68, 0x3366bb, false, 0.16);
    const moonDisc  = mkSphere(0.38, 0xd0e0f8, true,  1.00);
    moonHalo.position.z = -8.6;
    moonGlow.position.z = -8.55;
    moonDisc.position.z = -8.5;

    // ── Stars ──────────────────────────────────────────────────────────────
    const STAR_N = 320;
    const starPos = new Float32Array(STAR_N * 3);
    for (let i = 0; i < STAR_N; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * VIEW_W * 2.8;
      starPos[i * 3 + 1] = Math.random() * 8.5 + 2;
      starPos[i * 3 + 2] = -9;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xc8d8ff, size: 0.046, transparent: true, opacity: 0.70 });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Horizon atmospheric glow ───────────────────────────────────────────
    const horizonGeo = new THREE.PlaneGeometry(VIEW_W * 3.5, 5.5);
    const horizonMat = new THREE.MeshBasicMaterial({ color: 0x1a4a9a, transparent: true, opacity: 0.16 });
    const horizonMesh = new THREE.Mesh(horizonGeo, horizonMat);
    horizonMesh.position.set(0, -3.0, -5.5);
    scene.add(horizonMesh);

    // ── Mountain geometry ──────────────────────────────────────────────────
    const RES    = 260;
    const XRANGE = VIEW_W * 2 * 1.75;

    const allMeshes   = []; // [{ mountain, snow? }]
    const snowPairs   = []; // { mountainMesh, snowMesh }

    LAYERS.forEach(({ z, hex, alpha, scale, base, seed, snowLine }) => {
      // Mountain silhouette
      const shape = new THREE.Shape();
      for (let i = 0; i <= RES; i++) {
        const x = (i / RES) * XRANGE - XRANGE / 2;
        const y = mountainProfile(x, seed, scale) + base;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.lineTo(XRANGE / 2, -18);
      shape.lineTo(-XRANGE / 2, -18);
      shape.closePath();

      const mGeo = new THREE.ShapeGeometry(shape);
      const mMat = new THREE.MeshBasicMaterial({ color: hex, transparent: alpha < 1, opacity: alpha });
      const mMesh = new THREE.Mesh(mGeo, mMat);
      mMesh.position.z = z;
      scene.add(mMesh);
      allMeshes.push(mMesh);

      // Snow cap — fills from snowLine up to ridge
      if (snowLine !== null) {
        const sShape = new THREE.Shape();
        const SL = snowLine - 0.02;
        sShape.moveTo(-XRANGE / 2, SL);
        for (let i = 0; i <= RES; i++) {
          const x = (i / RES) * XRANGE - XRANGE / 2;
          const y = mountainProfile(x, seed, scale) + base;
          sShape.lineTo(x, Math.max(y, SL));
        }
        sShape.lineTo(XRANGE / 2, SL);
        sShape.closePath();

        const sGeo = new THREE.ShapeGeometry(sShape);
        const sMat = new THREE.MeshBasicMaterial({ color: 0xe2ecff, transparent: true, opacity: 0.72 });
        const sMesh = new THREE.Mesh(sGeo, sMat);
        sMesh.position.z = z + 0.06; // render on top of mountain
        scene.add(sMesh);
        snowPairs.push({ mountainMesh: mMesh, snowMesh: sMesh });
      }
    });

    // ── Parallax state ─────────────────────────────────────────────────────
    let mouseTargetX  = 0;
    const mouseCurrentX  = allMeshes.map(() => 0);
    const scrollCurrentY = allMeshes.map(() => 0);
    let scrollProgress = 0;

    const onMouse = (e) => { mouseTargetX = (e.clientX / W - 0.5) * 3.2; };
    window.addEventListener("mousemove", onMouse);

    const onScroll = () => {
      const sy = window.__lenis?.animatedScroll ?? window.scrollY;
      scrollProgress = Math.min(sy / (el.clientHeight || H), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      W = el.clientWidth; H = el.clientHeight;
      VIEW_W = VIEW_H * (W / H);
      camera.left = -VIEW_W; camera.right = VIEW_W;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);

    // ── Render loop ────────────────────────────────────────────────────────
    let raf, time = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      time += 0.012;

      // Subtle star twinkle
      starMat.opacity = 0.56 + Math.sin(time * 1.1) * 0.14;
      // Moon halo breathe
      moonHalo.material.opacity = 0.055 + Math.sin(time * 0.65) * 0.022;

      allMeshes.forEach((mesh, i) => {
        // Mouse parallax (horizontal)
        mouseCurrentX[i] += (mouseTargetX * MOUSE_SPEED[i] - mouseCurrentX[i]) * 0.045;
        // Scroll parallax (vertical — near layers move more, creating depth)
        const scrollTarget = -scrollProgress * SCROLL_SPEED[i] * VIEW_H;
        scrollCurrentY[i] += (scrollTarget - scrollCurrentY[i]) * 0.06;

        mesh.position.x = mouseCurrentX[i];
        mesh.position.y = scrollCurrentY[i];
      });

      // Keep snow caps locked to their mountain
      snowPairs.forEach(({ mountainMesh, snowMesh }) => {
        snowMesh.position.x = mountainMesh.position.x;
        snowMesh.position.y = mountainMesh.position.y;
      });

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      allMeshes.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      snowPairs.forEach(({ snowMesh: m }) => { m.geometry.dispose(); m.material.dispose(); });
      [starGeo, horizonGeo].forEach(g => g.dispose());
      [starMat, horizonMat].forEach(m => m.dispose());
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" style={{ zIndex: 1 }} />;
}
