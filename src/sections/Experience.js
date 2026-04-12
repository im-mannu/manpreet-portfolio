// src/sections/Experience.js
import React from "react";

const jobs = [
  {
    title: "Senior React Native Developer",
    company: "Fitted (USA-based Product Company)",
    period: "07/2025 – Present (Remote)",
    details: [
      "Leading end-to-end development of a US consumer mobile product using React Native and TypeScript.",
      "Designing scalable mobile architecture using MVVM pattern and reusable components.",
      "Implementing AI-powered features integrated with Firebase and secure APIs.",
      "Managing CI/CD pipelines and production deployments.",
      "Collaborating with cross-functional teams to improve performance and scalability."
    ]
  },
  {
    title: "React Native Developer",
    company: "Indi IT Solutions",
    period: "10/2024 – 05/2025 (Mohali – On site)",
    details: [
      "Developed cross-platform mobile applications using React Native.",
      "Implemented real-time chat systems, audio/video calling integrations, and WebSocket communication.",
      "Integrated subscriptions, payment gateways, and third-party APIs.",
      "Deployed and maintained applications on App Store and Google Play Store."
    ]
  },
  {
    title: "Senior React Native Developer",
    company: "Owebest Technologies Pvt. Ltd.",
    period: "06/2023 – 09/2024 (Jaipur – On site)",
    details: [
      "Built scalable healthcare, dating, and family management mobile applications.",
      "Implemented authentication, payment integrations, calendars, push notifications, and real-time features.",
      "Developed and maintained admin dashboards using React.js.",
      "Conducted R&D to implement modern mobile functionalities and improve performance."
    ]
  },
  {
    title: "React Native Developer",
    company: "Netset Software Solutions",
    period: "01/2022 – 06/2023 (Mohali – On site)",
    details: [
      "Developed mobile applications across healthcare, social networking, and business domains.",
      "Integrated maps, payment gateways, chat systems, and third-party APIs.",
      "Worked on Web3 applications and blockchain-related features.",
      "Collaborated with backend teams to develop scalable mobile solutions."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#18181b", color: "#fff", padding: "60px 0" }}>
      <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 30 }}>Experience</h2>
        {jobs.map(job => (
          <div key={job.title + job.company} style={{ marginBottom: 32 }}>
            <h3 style={{ margin: 0 }}>{job.title} <span style={{ color: "#a3a3a3", fontWeight: 400 }}>@ {job.company}</span></h3>
            <div style={{ color: "#a3a3a3", fontSize: "1rem", marginBottom: 8 }}>{job.period}</div>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {job.details.map(d => <li key={d}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
