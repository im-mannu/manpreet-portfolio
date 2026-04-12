// src/sections/About.js
import React from "react";

export default function About() {
  return (
    <section id="about" style={{ background: "#18181b", color: "#fff", padding: "60px 0" }}>
      <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 30 }}>About Me</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          Senior React Native Developer with 4+ years of experience building scalable cross-platform mobile applications for US and global clients. Expertise in React Native, TypeScript, real-time systems, CI/CD pipelines, Firebase integrations, and AI-powered features. Delivered production-grade consumer and B2B applications, including a US iOS application with 600K+ downloads. Skilled in end-to-end product development, performance optimization, API integrations, and mobile architecture design. Successfully developed and deployed 8+ mobile applications independently to Apple App Store and Google Play Store.
        </p>
      </div>
    </section>
  );
}
