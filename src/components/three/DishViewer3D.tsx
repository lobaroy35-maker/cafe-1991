'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DishViewerProps {
  dishName: string;
  ceramicColor?: string;
  foodColor?: string;
}

export default function DishViewer3D({ dishName, ceramicColor = '#EFE4D3', foodColor = '#C89276' }: DishViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.0, 3.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xf6f0e6, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffdf8, 1.8);
    dirLight.position.set(3, 5, 3);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xe4c7b8, 0.8);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    // Group
    const group = new THREE.Group();
    group.position.set(0, -0.2, 0);
    scene.add(group);

    // Ceramic Platter
    const platterGeo = new THREE.CylinderGeometry(2.0, 1.5, 0.2, 48);
    const platterMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(ceramicColor),
      roughness: 0.8,
      metalness: 0.05,
    });
    const platter = new THREE.Mesh(platterGeo, platterMat);
    platter.castShadow = true;
    platter.receiveShadow = true;
    group.add(platter);

    // Inner Recess
    const recessGeo = new THREE.CylinderGeometry(1.7, 1.3, 0.08, 48);
    const recessMat = new THREE.MeshStandardMaterial({
      color: 0xf6f0e6,
      roughness: 0.65,
      metalness: 0.02,
    });
    const recess = new THREE.Mesh(recessGeo, recessMat);
    recess.position.set(0, 0.08, 0);
    recess.receiveShadow = true;
    group.add(recess);

    // Center Culinary Sculpture
    const foodGeo = new THREE.DodecahedronGeometry(0.75, 1);
    const foodMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(foodColor),
      roughness: 0.7,
      metalness: 0.08,
    });
    const food = new THREE.Mesh(foodGeo, foodMat);
    food.position.set(0, 0.25, 0);
    food.castShadow = true;
    group.add(food);

    // Garnish leaves
    const leafGeo1 = new THREE.ConeGeometry(0.15, 0.45, 8);
    const leafMat1 = new THREE.MeshStandardMaterial({ color: 0xb6c2af, roughness: 0.9 });
    const leaf1 = new THREE.Mesh(leafGeo1, leafMat1);
    leaf1.position.set(0.4, 0.45, 0.3);
    leaf1.rotation.set(0.4, 0.2, 0.5);
    group.add(leaf1);

    const leafGeo2 = new THREE.ConeGeometry(0.12, 0.4, 8);
    const leafMat2 = new THREE.MeshStandardMaterial({ color: 0x93a48b, roughness: 0.9 });
    const leaf2 = new THREE.Mesh(leafGeo2, leafMat2);
    leaf2.position.set(-0.3, 0.45, -0.3);
    leaf2.rotation.set(-0.3, 0.5, -0.4);
    group.add(leaf2);

    // Drag-to-rotate interaction
    let isDragging = false;
    let previousMouseX = 0;
    let rotationVelocity = 0.005;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      group.rotation.y += deltaX * 0.01;
      rotationVelocity = deltaX * 0.002;
      previousMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isDragging) {
        group.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };

    animate();

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
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [dishName, ceramicColor, foodColor]);

  return (
    <div className="w-full h-80 relative rounded-2xl bg-gradient-to-b from-cream/20 to-ivory border border-sand/30 overflow-hidden cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] text-charcoal-muted tracking-wider uppercase font-sans bg-ivory/85 px-2.5 py-1 rounded-full border border-sand/40">
          360°: {dishName}
        </span>
        <span className="text-[10px] text-terracotta tracking-wider font-sans bg-ivory/85 px-2.5 py-1 rounded-full border border-sand/40">
          Aylantirib ko‘ring
        </span>
      </div>
    </div>
  );
}
