// src/sections/About.js
import React from "react";

const badges = [
  "React Native Expert",
  "TypeScript First",
  "AI Integrations",
  "Open To Work"
];

const stats = [
  { value: "4+", label: "Years Exp." },
  { value: "8+", label: "Apps Shipped" },
  { value: "600K+", label: "Downloads Reached" }
];

const techOrbit = ["React Native", "TypeScript", "Firebase", "CI/CD"];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(0,234,255,0.12), transparent 28%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.16), transparent 24%), linear-gradient(180deg, #0d1320 0%, #0a0f1a 100%)",
        color: "#fff",
        padding: "88px 20px"
      }}
    >
      <div
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 56,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            flex: "1 1 420px",
            minWidth: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div
            style={{
              alignSelf: "center",
              marginBottom: 18,
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(0,234,255,0.22)",
              background: "rgba(9, 20, 34, 0.72)",
              color: "#76ebff",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: "uppercase",
              boxShadow: "0 0 18px rgba(0,234,255,0.08)"
            }}
          >
            Mobile Architect
          </div>

          <div
            style={{
              width: "min(100%, 470px)",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 50% 50%, rgba(118,235,255,0.16), rgba(24,34,56,0.92) 58%, rgba(6,10,18,0.98) 100%)",
              border: "1px solid rgba(0,234,255,0.16)",
              boxShadow:
                "0 0 0 1px rgba(99,102,241,0.18), 0 0 48px rgba(0,234,255,0.12), inset 0 0 46px rgba(0,234,255,0.08)"
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 42,
                borderRadius: "50%",
                border: "2px solid rgba(0,234,255,0.85)",
                boxShadow: "0 0 28px rgba(0,234,255,0.6), inset 0 0 28px rgba(0,234,255,0.22)"
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 14,
                borderRadius: "50%",
                border: "1px solid rgba(132,76,255,0.8)"
              }}
            />

            {techOrbit.map((item, index) => {
              const positions = [
                { top: "12%", left: "50%", transform: "translateX(-50%)" },
                { top: "50%", right: "-6%", transform: "translateY(-50%)" },
                { bottom: "16%", left: "8%" },
                { top: "50%", left: "-8%", transform: "translateY(-50%)" }
              ];

              return (
                <div
                  key={item}
                  style={{
                    position: "absolute",
                    ...positions[index],
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(8,14,25,0.9)",
                    border: "1px solid rgba(118,235,255,0.16)",
                    color: "#dffbff",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.3
                  }}
                >
                  {item}
                </div>
              );
            })}

            <div
              style={{
                width: "54%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle at 50% 30%, #25324c 0%, #182134 45%, #0b1220 100%)",
                border: "8px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)"
              }}
            >
              <div
                style={{
                  width: "80%",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(145deg, rgba(0,234,255,0.18), rgba(99,102,241,0.22))",
                  color: "#ffffff",
                  fontSize: 64,
                  fontWeight: 900,
                  letterSpacing: 2,
                  textShadow: "0 0 18px rgba(118,235,255,0.2)"
                }}
              >
                MS
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: -8,
              padding: "12px 26px",
              borderRadius: 999,
              background: "rgba(9, 20, 34, 0.88)",
              border: "1px solid rgba(0,234,255,0.2)",
              fontWeight: 700,
              boxShadow: "0 0 16px rgba(0,234,255,0.12)"
            }}
          >
            Available For Mobile Projects
          </div>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center"
            }}
          >
            {badges.map((badge) => (
              <div
                key={badge}
                style={{
                  padding: "12px 18px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#c8d6f0",
                  fontWeight: 600,
                  fontSize: 15
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 500px", minWidth: 300, maxWidth: 620 }}>
          <div
            style={{
              color: "#1fe0ff",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: 1.5,
              marginBottom: 20,
              textTransform: "uppercase"
            }}
          >
            Based in Mohali, India
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 3.2vw, 4.2rem)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: -1.6
            }}
          >
            Meet the Developer
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#00eaff 0%, #2aa5ff 45%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Behind the Experience
            </span>
          </h2>

          <p
            style={{
              marginTop: 28,
              marginBottom: 0,
              color: "#e9edf8",
              fontSize: 20,
              lineHeight: 1.7
            }}
          >
            I&apos;m <span style={{ color: "#1fe0ff", fontWeight: 800 }}>Manpreet Singh</span>, a
            Senior React Native Developer with 4+ years of experience building
            scalable cross-platform apps for clients in India, the US, and global
            markets.
          </p>

          <p
            style={{
              marginTop: 22,
              marginBottom: 0,
              color: "#95a6c7",
              fontSize: 20,
              lineHeight: 1.8
            }}
          >
            My work spans consumer and B2B mobile products, dating applications,
            health and wellness apps, gig and logistics platforms, real-time
            systems, React.js admin portals, CI/CD pipelines, and polished App
            Store and Play Store launches. I focus on building stable products
            that feel fast, reliable, and ready for scale.
          </p>

          <p
            style={{
              marginTop: 22,
              marginBottom: 0,
              color: "#95a6c7",
              fontSize: 20,
              lineHeight: 1.8
            }}
          >
            I&apos;ve independently delivered 8+ production mobile apps, including a
            US iOS product that crossed 600K+ downloads, while working across
            MVVM architecture, performance optimization, HealthKit integration,
            payment systems like Stripe and Zen Cash, CometChat SDK, ZEGOCLOUD
            audio-video calling, API integrations, Railway-hosted backend
            services, and AI-powered feature development.
          </p>

          <p
            style={{
              marginTop: 22,
              marginBottom: 0,
              color: "#95a6c7",
              fontSize: 20,
              lineHeight: 1.8
            }}
          >
            I work comfortably in Agile and Scrum environments, communicate well
            with designers, backend teams, and stakeholders, and take ownership
            of delivery from implementation to deployment. That combination of
            technical depth and execution reliability is what makes me a strong
            hire for product-focused engineering teams.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 22,
              marginTop: 34,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              paddingBottom: 28
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: 50,
                    lineHeight: 1,
                    fontWeight: 900,
                    color: "#1fe0ff"
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: "#8c9dbc",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase"
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexWrap: "wrap",
              gap: 16
            }}
          >
            <a
              href="#contact"
              style={{
                background: "linear-gradient(90deg,#00eaff,#7c3aed 100%)",
                color: "#fff",
                padding: "16px 28px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 18,
                boxShadow: "0 12px 28px rgba(0,234,255,0.16)"
              }}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              style={{
                background: "rgba(255,255,255,0.02)",
                color: "#fff",
                padding: "16px 28px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 18,
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
