import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const starsRef = useRef(null);
  const mainMeshRef = useRef(null);
  const floatingGroupRef = useRef(null);
  const scrollSpeedRef = useRef(0);
  const targetScrollSpeedRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use current ref to prevent closure staleness issues in cleanup
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x000000, 0.02);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- 1. Main Geometry (Icosahedron) ---
    const geometry = new THREE.IcosahedronGeometry(12, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0xf48fb1,
      emissive: 0xf48fb1,
      emissiveIntensity: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });

    const mainMesh = new THREE.Mesh(geometry, material);
    mainMesh.position.set(0, 0, -10);
    scene.add(mainMesh);
    mainMeshRef.current = mainMesh;

    // --- 2. Starfield (Particles) ---
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const posArray = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      // Random positions covering a large area
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });

    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);
    starsRef.current = starMesh;

    // --- 3. Floating Geometric Shapes ---
    const floatingGroup = new THREE.Group();
    const shapes = [];
    const shapeCount = 15;

    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.TetrahedronGeometry(1),
      new THREE.OctahedronGeometry(1)
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = new THREE.MeshStandardMaterial({
        color: 0xf48fb1,
        roughness: 0.4,
        metalness: 0.6,
        transparent: true,
        opacity: 0.6
      });

      const mesh = new THREE.Mesh(geo, mat);

      // Random position spread
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Store initial data for animation
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: (Math.random() * 0.01) + 0.005,
        yOffset: Math.random() * Math.PI * 2
      };

      floatingGroup.add(mesh);
      shapes.push(mesh);
    }

    scene.add(floatingGroup);
    floatingGroupRef.current = floatingGroup;


    // --- Lighting ---
    const pointLight1 = new THREE.PointLight(0xf48fb1, 2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4fc3f7, 2, 100);
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    // --- Interaction & Animation ---
    let mouseX = 0;
    let mouseY = 0;
    let animationId; // Keep track of animation frame

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      targetScrollSpeedRef.current = window.scrollY * 0.005;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Smooth scroll speed
      scrollSpeedRef.current += (targetScrollSpeedRef.current - scrollSpeedRef.current) * 0.05;

      // Animate Main Mesh
      if (mainMeshRef.current) {
        mainMeshRef.current.rotation.x += 0.001;
        mainMeshRef.current.rotation.y += 0.002;

        mainMeshRef.current.position.x += (mouseX * 4 - mainMeshRef.current.position.x) * 0.05;
        mainMeshRef.current.position.y += (mouseY * 2 - mainMeshRef.current.position.y) * 0.05;
      }

      // Animate Stars
      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0003;
        starsRef.current.rotation.x -= 0.0001;
      }

      // Animate Floating Shapes
      if (floatingGroupRef.current) {
        floatingGroupRef.current.rotation.y += 0.002;

        floatingGroupRef.current.children.forEach(mesh => {
          if (mesh.userData.rotationSpeed) {
            mesh.rotation.x += mesh.userData.rotationSpeed.x;
            mesh.rotation.y += mesh.userData.rotationSpeed.y;
          }
          if (mesh.userData.floatSpeed) {
            mesh.position.y += Math.sin(time + (mesh.userData.yOffset || 0)) * mesh.userData.floatSpeed;
          }
        });
      }

      // Camera movement based on mouse
      if (cameraRef.current) {
        cameraRef.current.position.x += (mouseX * 8 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouseY * 8 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(scene.position);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId); // STOP LOOPS
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      renderer.dispose();
      geometry.dispose();
      material.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      geometries.forEach(g => g.dispose());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default Hero3DBackground;
