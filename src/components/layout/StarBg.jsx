import { useEffect, useRef } from "react";
import * as THREE from "three";

function StarBg() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // scene.add(sphere);
    camera.position.z = 5;

    // Create stars
    const stars = new THREE.Group();
    for (let i = 0; i < 200; i++) {
      const starGeometry = new THREE.SphereGeometry(0.01, 5, 5);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      // Set random positions for stars
      star.position.x = (Math.random() - 0.5) * 10;
      star.position.y = (Math.random() - 0.5) * 10;
      star.position.z = (Math.random() - 0.5) * 10;

      stars.add(star);
    }

    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the stars around the sphere
      stars.rotation.x -= 0.001;
      stars.rotation.y -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={canvasRef} />;
}

export default StarBg;
