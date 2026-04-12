// src/sections/Skills.js
import React from "react";

const skills = [
  "React Native, React Native CLI, Expo, React.js",
  "Redux Toolkit, Context API, MVVM Architecture",
  "CI/CD Pipelines, AWS S3, Git",
  "Xcode, Android Studio",
  "JavaScript, TypeScript",
  "REST APIs, Node.js (Basic), Socket.IO, Firebase",
  "Stripe Payments, In-App Purchases, OpenAI APIs"
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#23232a", color: "#fff", padding: "60px 0" }}>
      <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 30 }}>Skills</h2>
        <ul style={{ fontSize: "1.1rem", lineHeight: 2 }}>
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}
