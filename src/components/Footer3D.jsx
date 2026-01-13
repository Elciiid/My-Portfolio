import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Footer3D = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const wavesRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        // Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        // scene.fog = new THREE.FogExp2(0x000000, 0.05);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- NEW GEOMETRY: Digital Particle Wave ---
        const particleCount = 2000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const scales = new Float32Array(particleCount);

        const width = 40;
        const depth = 40;

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * width;
            const z = (Math.random() - 0.5) * depth;
            const y = 0;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            scales[i] = Math.random();
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        const material = new THREE.PointsMaterial({
            size: 0.15,
            color: 0xF48FB1, // Pink to match theme
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const waves = new THREE.Points(geometry, material);
        scene.add(waves);
        wavesRef.current = waves;

        // Interaction
        let mouseX = 0;
        let mouseY = 0;
        let animationId;
        let time = 0;

        const handleMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.02;

            if (wavesRef.current) {
                const positions = wavesRef.current.geometry.attributes.position.array;

                for (let i = 0; i < particleCount; i++) {
                    const x = positions[i * 3];
                    const z = positions[i * 3 + 2];

                    // Wave calculation
                    // y = sin(x + time) + cos(z + time)
                    // Complex wave
                    const y = Math.sin(x * 0.3 + time) * 0.5 + Math.cos(z * 0.2 + time) * 0.5;

                    positions[i * 3 + 1] = y;
                }

                wavesRef.current.geometry.attributes.position.needsUpdate = true;

                // Gentle rotation
                wavesRef.current.rotation.y = time * 0.05;
            }

            // Camera gentle sway
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
            camera.position.y += (5 + mouseY * 2 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (container && renderer.domElement) container.removeChild(renderer.domElement);

            renderer.dispose();
            geometry.dispose();
            material.dispose();
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

export default Footer3D;
