'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lights (Warm soft luxury lighting)
    const ambientLight = new THREE.AmbientLight(0xf6f0e6, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffdf8, 2.0);
    dirLight.position.set(4, 7, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xe4c7b8, 1.0);
    fillLight.position.set(-4, 3, -2);
    scene.add(fillLight);

    // 3. Composition Group
    const group = new THREE.Group();
    group.position.set(0, -0.3, 0);
    scene.add(group);

    // Main Ceramic Platter (Soft Ivory / Cream matte)
    const platterGeo = new THREE.CylinderGeometry(1.8, 1.4, 0.18, 64);
    const platterMat = new THREE.MeshStandardMaterial({
      color: 0xefe4d3,
      roughness: 0.8,
      metalness: 0.05,
    });
    const platter = new THREE.Mesh(platterGeo, platterMat);
    platter.castShadow = true;
    platter.receiveShadow = true;
    group.add(platter);

    // Inner Rim Accent
    const rimGeo = new THREE.CylinderGeometry(1.65, 1.35, 0.08, 64);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xf6f0e6,
      roughness: 0.7,
      metalness: 0.02,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.set(0, 0.09, 0);
    rim.receiveShadow = true;
    group.add(rim);

    // Secondary Small Ceramic Bowl (Warm Sand)
    const bowlGeo = new THREE.CylinderGeometry(0.55, 0.35, 0.3, 32);
    const bowlMat = new THREE.MeshStandardMaterial({
      color: 0xd7c3a7,
      roughness: 0.85,
      metalness: 0.02,
    });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.set(0.85, 0.25, 0.4);
    bowl.castShadow = true;
    group.add(bowl);

    // Glass / Warm Vessel
    const glassGeo = new THREE.CylinderGeometry(0.35, 0.25, 0.55, 32);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xe4c7b8,
      transparent: true,
      opacity: 0.75,
      roughness: 0.15,
      transmission: 0.6,
      ior: 1.4,
      thickness: 0.5,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(-0.8, 0.35, -0.3);
    glass.castShadow = true;
    group.add(glass);

    // Botanical Leaf (Soft Sage)
    const leafGeo = new THREE.ConeGeometry(0.25, 0.9, 16);
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0xb6c2af,
      roughness: 0.9,
    });
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    leaf.position.set(0.2, 0.2, -0.5);
    leaf.rotation.set(0.4, 0.6, 0.3);
    leaf.castShadow = true;
    group.add(leaf);

    // Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.1;
    shadowPlane.receiveShadow = true;
    group.add(shadowPlane);

    // 4. Mouse Interactive Parallax & Gentle Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.4;
      mouseY = y * 0.2;
    };

    window.addEventListener('mousemove', onMouseMove);

    // 5. Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = Math.sin(elapsedTime * 0.25) * 0.15 + targetX;
      group.rotation.x = targetY * 0.5;

      // Gentle floating for small elements
      bowl.position.y = 0.25 + Math.sin(elapsedTime * 1.5) * 0.03;
      glass.position.y = 0.35 + Math.cos(elapsedTime * 1.2) * 0.03;
      leaf.position.y = 0.2 + Math.sin(elapsedTime * 1.8) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-4 right-4 pointer-events-none bg-ivory/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-sand/50 text-[10px] tracking-wider text-charcoal-muted font-sans flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-ping" />
        <span>3D Kompozitsiya: Interaktiv</span>
      </div>
    </div>
  );
}
