// src/sections/Hero3D.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

function GlowingRing() {
  return (
    <mesh>
      <torusGeometry args={[2, 0.15, 32, 100]} />
      <meshStandardMaterial emissive="#00eaff" color="#00eaff" emissiveIntensity={1.5} />
    </mesh>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 60 });
  return (
    <group>
      {particles.map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i) * 3 + Math.random() * 0.5,
          Math.cos(i) * 3 + Math.random() * 0.5,
          (Math.random() - 0.5) * 2
        ]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#00eaff" emissive="#00eaff" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <section style={{ minHeight: "70vh", background: "#18181b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ width: "350px", height: "350px", margin: "0 auto" }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} shadows>
          <ambientLight intensity={0.7} />
          <pointLight position={[0, 0, 5]} intensity={1.2} />
          <Suspense fallback={null}>
            <GlowingRing />
            <FloatingParticles />
            <Html center>
              <div style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 0 40px #00eaff99",
                border: "4px solid #00eaff",
                background: "#222"
              }}>
                {/* Place your avatar image below */}
                <img src="/avatar.png" alt="Manpreet Singh" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </Html>
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "30px 0 0 0" }}>Manpreet Singh</h1>
      <h2 style={{ fontSize: "1.3rem", fontWeight: 400, color: "#a3a3a3", margin: "10px 0 0 0" }}>
        Senior React Native Developer
      </h2>
      <p style={{ maxWidth: 600, textAlign: "center", margin: "30px 0 0 0", fontSize: "1.1rem" }}>
        Building scalable cross-platform mobile apps for global clients. 4+ years experience. 8+ live apps. 600K+ downloads.
      </p>
      <div style={{ marginTop: 30 }}>
        <a href="#contact" style={{
          background: "#6366f1",
          color: "#fff",
          padding: "12px 32px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1rem"
        }}>Contact Me</a>
      </div>
    </section>
  );
}
