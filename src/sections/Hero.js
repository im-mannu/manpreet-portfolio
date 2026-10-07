// src/sections/Hero.js
import React from "react";

export default function Hero() {
  return (
    <section style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#18181b",
      color: "#fff",
      padding: "60px 0 40px 0"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 700, margin: 0 }}>Manpreet Singh</h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#a3a3a3", margin: "10px 0 0 0" }}>
        Lead & Senior React Native Developer
      </h2>
      <p style={{ maxWidth: 600, textAlign: "center", margin: "30px 0 0 0", fontSize: "1.2rem" }}>
        Building scalable cross-platform mobile apps for global clients. 4.5+ years experience. 20+ live apps. 15+ store releases. 600K+ downloads.
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
