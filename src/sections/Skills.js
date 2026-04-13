import React from "react";

const tools = [
  "React Native",
  "Expo",
  "React.js",
  "JavaScript",
  "TypeScript",
  "MVVM Architecture",
  "CI/CD",
  "Agile & Scrum",
  "Firebase",
  "Railway",
  "Stripe",
  "Zen Cash",
  "CometChat SDK",
  "ZEGOCLOUD",
  "HealthKit",
  "Socket.IO",
  "Redux Toolkit",
  "Node.js",
  "OpenAI APIs",
  "Xcode",
  "Android Studio"
];

const capabilities = [
  {
    icon: "📱",
    title: "Mobile App Development",
    body: "High-quality cross-platform apps with React Native, Expo, native integrations, performance tuning, MVVM-based structure, and dependable App Store and Play Store releases."
  },
  {
    icon: "⚙️",
    title: "Robust Product Engineering",
    body: "Production architecture, reusable modules, CI/CD pipelines, Agile delivery, Scrum collaboration, admin portals in React.js, payment systems, real-time communication, and API integrations."
  },
  {
    icon: "🧠",
    title: "AI-Enabled Features",
    body: "Practical AI integrations inside mobile products using OpenAI APIs, workflow automation, and user-facing intelligent experiences."
  }
];

const hiringPoints = [
  {
    title: "Delivery You Can Trust",
    body: "I can take features from requirement discussion to production deployment independently. I’m comfortable working in Agile teams, handling Scrum-style delivery, and shipping on timelines without sacrificing quality."
  },
  {
    title: "Architecture With Ownership",
    body: "I use scalable patterns like MVVM structure, reusable components, clean state management, and maintainable code organization so products stay stable as they grow."
  },
  {
    title: "Real Product Experience",
    body: "I’ve worked on dating applications, health and wellness apps, gig and logistics applications, marketplace products, and consumer mobile platforms with real users and production pressure."
  },
  {
    title: "Integrations That Matter",
    body: "Strong hands-on experience with Stripe, Zen Cash, payment gateways, CometChat SDK, ZEGOCLOUD audio-video calling, Firebase services, APIs, notifications, subscriptions, and third-party SDK integration."
  },
  {
    title: "Health & Tracking Domain",
    body: "Built health applications with tracking flows, Apple HealthKit data integration, wellness journeys, personalized onboarding, and user-centered health experiences."
  },
  {
    title: "Full Product Support",
    body: "Beyond mobile screens, I’ve also built React.js admin portals, connected apps with backend services hosted on Railway servers, debugged production issues, and supported release cycles end to end."
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "linear-gradient(180deg, #101827 0%, #0a1120 100%)",
        color: "#fff",
        padding: "104px 20px"
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 52px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2.7rem, 4vw, 4.2rem)",
              fontWeight: 900,
              letterSpacing: -1.6,
              background: "linear-gradient(90deg,#38bdf8 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            The Tech Ecosystem
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 20, lineHeight: 1.7 }}>
            The stack I use to design scalable mobile experiences, dependable
            delivery pipelines, and intelligent product workflows.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool}
              style={{
                padding: "22px 20px",
                borderRadius: 18,
                background: "rgba(15, 23, 42, 0.78)",
                border: "1px solid rgba(148,163,184,0.14)",
                textAlign: "center",
                fontWeight: 700,
                color: "#dce7f7",
                fontSize: 20
              }}
            >
              {tool}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", maxWidth: 760, margin: "90px auto 44px" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 900,
              letterSpacing: -1.2,
              background: "linear-gradient(90deg,#38bdf8 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Bridging the Gap
          </h3>
          <p style={{ color: "#94a3b8", fontSize: 20, lineHeight: 1.7 }}>
            I don&apos;t just write features. I help connect product goals,
            architecture, integrations, and release quality into one reliable
            delivery flow.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}
        >
          {capabilities.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 34,
                borderRadius: 24,
                background: "rgba(15, 23, 42, 0.82)",
                border: "1px solid rgba(148,163,184,0.14)"
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.22), rgba(15,23,42,0.95))",
                  border: "1px solid rgba(34,211,238,0.14)",
                  fontSize: 34
                }}
              >
                {item.icon}
              </div>
              <h4 style={{ margin: "26px 0 0", fontSize: 24, lineHeight: 1.2 }}>{item.title}</h4>
              <p style={{ margin: "18px 0 0", color: "#aebacf", fontSize: 20, lineHeight: 1.76 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", maxWidth: 860, margin: "88px auto 40px" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 900,
              letterSpacing: -1.2,
              background: "linear-gradient(90deg,#38bdf8 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Why Teams Hire Me
          </h3>
          <p style={{ color: "#94a3b8", fontSize: 20, lineHeight: 1.7 }}>
            I bring more than coding ability. I bring delivery ownership, real
            production experience, clear communication, and the confidence to
            move a product forward without constant hand-holding.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22
          }}
        >
          {hiringPoints.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 26,
                borderRadius: 20,
                background: "rgba(15, 23, 42, 0.78)",
                border: "1px solid rgba(148,163,184,0.14)"
              }}
            >
              <h4 style={{ margin: 0, fontSize: 24, lineHeight: 1.25 }}>{item.title}</h4>
              <p style={{ margin: "14px 0 0", color: "#aebacf", fontSize: 20, lineHeight: 1.75 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
