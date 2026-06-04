"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SnowCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const COUNT     = window.innerWidth < 768 ? 280 : 560;
    const positions = new Float32Array(COUNT * 3);
    const speeds    = new Float32Array(COUNT);
    const drifts    = new Float32Array(COUNT);
    const phases    = new Float32Array(COUNT);
    const sizes     = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      // ~55% slower than original
      speeds[i]  = 0.0018 + Math.random() * 0.0032;
      drifts[i]  = 0.0015 + Math.random() * 0.0025;
      phases[i]  = Math.random() * Math.PI * 2;
      sizes[i]   = 1.2 + Math.random() * 3.0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));

    // Soft circular sprite
    const canvas2d = document.createElement("canvas");
    canvas2d.width = canvas2d.height = 64;
    const ctx  = canvas2d.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0,   "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(210,235,255,0.75)");
    grad.addColorStop(1,   "rgba(180,220,255,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas2d);

    const material = new THREE.PointsMaterial({
      size:            0.11,
      map:             texture,
      transparent:     true,
      opacity:         0.70,
      depthWrite:      false,
      blending:        THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let frame;
    let t = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += 0.008; // slower clock tick

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        pos[ix + 1] -= speeds[i];
        pos[ix]     += Math.sin(t * 0.4 + phases[i]) * drifts[i];

        if (pos[ix + 1] < -5.5) {
          pos[ix + 1] = 5.5;
          pos[ix]     = (Math.random() - 0.5) * 16;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="snow-canvas" aria-hidden="true" />;
}
