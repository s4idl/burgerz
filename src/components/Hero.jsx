import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import './Hero.css';

// Component to load and animate the 3D Burger
const BurgerModel = () => {
  // Load the model from the public folder
  const { scene } = useGLTF('/burger.glb');
  const modelRef = useRef();

  // Rotate the model every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  // Adjust scale and position as needed depending on the actual model's size
  return <primitive ref={modelRef} object={scene} scale={0.18} position={[0, 0.7, 0]} />;
};

const Hero = () => {
  // Generate rows of repeating text for the background
  const textRows = Array.from({ length: 20 }).map((_, i) => (
    <div key={i} className={`hero-text-row ${i % 2 === 0 ? 'move-left' : 'move-right'}`}>
      <span className="hero-text">
        FORANEO BURGERS FORANEO BURGERS FORANEO BURGERS FORANEO BURGERS FORANEO BURGERS
      </span>
    </div>
  ));

  return (
    <section className="hero-container" id="home">
      <div className="hero-background">
        {textRows}
      </div>
      <div className="hero-centerpiece" style={{ width: '100%', height: '100vh', cursor: 'grab', position: 'absolute', top: 0, left: 0 }}>
        <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <BurgerModel />
            <ContactShadows position={[0, 0.4, 0]} opacity={0.8} scale={8} blur={2} far={4} />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 2 + 0.1} 
          />
        </Canvas>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
// Preload the model so it loads faster
useGLTF.preload('/burger.glb');
