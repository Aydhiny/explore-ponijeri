"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Procedural mountain silhouettes — 4 depth layers + stars + horizon glow
// Sky gradient is handled by CSS in the parent, this canvas is alpha-transparent

// Mountains sit in the LOWER third of the screen.
// VIEW_H=10 means world space is y=-10 (bottom) to y=+10 (top).
// Peaks should reach between y=-1 (far) and y=+3 (near).
const LAYERS = [
  { z: -6, hex: 0x1e4278, alpha: 0.45, scale: 0.65, base: -4.5, seed: 1.13 },
  { z: -4, hex: 0x112d56, alpha: 0.68, scale: 0.95, base: -5.5, seed: 2.71 },
  { z: -2, hex: 0x081c3a, alpha: 0.88, scale: 1.30, base: -6.5, seed: 4.19 },
  { z:  0, hex: 0x030c1e, alpha: 1.00, scale: 1.75, base: -8.0, seed: 6.83 },
];

// Reduced high-frequency terms → smoother, broader peaks
function ridgeHeight(x, seed, scale) {
  return (
    Math.sin(x * 0.22 + seed)          * 3.4 +
    Math.sin(x * 0.55 + seed * 1.70)   * 2.1 +
    Math.sin(x * 1.10 + seed * 3.10)   * 0.9 +
    Math.sin(x * 2.30 + seed * 5.80)   * 0.40 +
    Math.sin(x * 4.60 + seed * 9.40)   * 0.15
  ) * scale;
}

export default function MountainCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let W = el.clientWidth;
    let H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const VIEW_H = 10;
    let VIEW_W  = VIEW_H * (W / H);

    const camera = new THREE.OrthographicCamera(-VIEW_W, VIEW_W, VIEW_H, -VIEW_H, 0.1, 100);
    camera.position.z = 10;

    // ── Stars ──────────────────────────────────────────────────
    const STAR_N   = 260;
    const starPos  = new Float32Array(STAR_N * 3);
    const starSize = new Float32Array(STAR_N);
    for (let i = 0; i < STAR_N; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * VIEW_W * 2.8;
      starPos[i * 3 + 1] = Math.random() * 9 + 2.5;
      starPos[i * 3 + 2] = -9;
      starSize[i]         = 0.04 + Math.random() * 0.07;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("size",     new THREE.BufferAttribute(starSize, 1));
    const starMat = new THREE.PointsMaterial({
      color:       0xc8deff,
      size:        0.055,
      transparent: true,
      opacity:     0.70,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── Horizon glow ───────────────────────────────────────────
    const glowGeo = new THREE.PlaneGeometry(VIEW_W * 3, 4);
    const glowMat = new THREE.MeshBasicMaterial({
      color:       0x1a4a8a,
      transparent: true,
      opacity:     0.22,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.position.set(0, -2.5, -5);
    scene.add(glowMesh);

    // ── Mountain layers ────────────────────────────────────────
    const RES    = 200;
    const XRANGE = VIEW_W * 2 * 1.6; // extra width for parallax

    const mountains = LAYERS.map(({ z, hex, alpha, scale, base, seed }) => {
      const shape = new THREE.Shape();

      for (let i = 0; i <= RES; i++) {
        const x = (i / RES) * XRANGE - XRANGE / 2;
        const y = ridgeHeight(x, seed, scale) + base;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.lineTo( XRANGE / 2, -18);
      shape.lineTo(-XRANGE / 2, -18);
      shape.closePath();

      const geo = new THREE.ShapeGeometry(shape);
      const mat = new THREE.MeshBasicMaterial({
        color:       hex,
        transparent: alpha < 1,
        opacity:     alpha,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.z = z;
      scene.add(mesh);
      return mesh;
    });

    // ── Mouse parallax ─────────────────────────────────────────
    let targetX    = 0;
    const currentX = mountains.map(() => 0);

    const onMouse = (e) => {
      targetX = (e.clientX / W - 0.5) * 2.8;
    };
    window.addEventListener("mousemove", onMouse);

    // ── Resize ─────────────────────────────────────────────────
    const onResize = () => {
      W = el.clientWidth;
      H = el.clientHeight;
      VIEW_W = VIEW_H * (W / H);
      camera.left  = -VIEW_W;
      camera.right =  VIEW_W;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      glowMesh.geometry.dispose();
      glowMesh.geometry = new THREE.PlaneGeometry(VIEW_W * 3, 4);
    };
    window.addEventListener("resize", onResize);

    // ── Render loop ────────────────────────────────────────────
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      mountains.forEach((mesh, i) => {
        const pull = (i + 1) * 0.38;
        currentX[i] += (targetX * pull - currentX[i]) * 0.04;
        mesh.position.x = currentX[i];
      });
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      mountains.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      starGeo.dispose(); starMat.dispose();
      glowGeo.dispose(); glowMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" style={{ zIndex: 1 }} />;
}
