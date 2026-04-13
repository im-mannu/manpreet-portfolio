import React from "react";

const jobs = [
  {
    label: "Current Role",
    title: "Senior React Native Developer",
    company: "Fitted, Remote, US",
    period: "Jul 2025 - Present",
    description:
      "Leading the end-to-end development of a US consumer mobile product with React Native and TypeScript, owning architecture decisions, release quality, performance tuning, and feature delivery from idea to production.",
    points: [
      "Designed scalable application structure using reusable modules and clean component architecture.",
      "Integrated AI-powered flows, Firebase services, secure APIs, and production-ready analytics patterns.",
      "Handled deployments, debugging, quality improvements, CI/CD-oriented delivery, and ongoing release ownership for a fast-moving consumer product."
    ]
  },
  {
    label: "React Native Delivery",
    title: "React Native Developer",
    company: "Indi IT Solutions, Mohali",
    period: "Oct 2024 - May 2025",
    description:
      "Built and maintained cross-platform mobile applications for client products, focusing on real-time communication, subscriptions, store readiness, and stable feature delivery.",
    points: [
      "Implemented chat systems, WebSocket-based flows, CometChat SDK integrations, ZEGOCLOUD audio-video calling, and third-party SDK integrations.",
      "Worked on payments, subscriptions, Stripe-style payment flows, and production issue resolution across Android and iOS builds.",
      "Contributed to release cycles, bug fixing, and client-facing feature delivery in a fast execution environment."
    ]
  },
  {
    label: "Product Engineering",
    title: "Senior React Native Developer",
    company: "Owebest Technologies Pvt. Ltd., Jaipur",
    period: "Jun 2023 - Sep 2024",
    description:
      "Worked across multiple mobile products in healthcare, dating, and family management domains, translating product ideas into polished and maintainable mobile experiences.",
    points: [
      "Successfully built and deployed multiple dating applications along with family-management and healthcare-focused mobile products.",
      "Built features such as authentication, push notifications, calendars, payment flows, and real-time user interactions, while also developing React.js admin dashboards to support operations.",
      "Handled R&D for new product requirements, performance improvements, and implementation of modern mobile capabilities in Agile delivery setups."
    ]
  },
  {
    label: "Early Growth",
    title: "React Native Developer",
    company: "Netset Software Solutions, Mohali",
    period: "Jan 2022 - Jun 2023",
    description:
      "Built the foundation of my production experience by working on diverse healthcare, social, and business applications with a strong focus on practical integrations and stable delivery.",
    points: [
      "Integrated maps, payment gateways, chat systems, and multiple third-party APIs into cross-platform mobile apps, including gig and logistics-style solutions.",
      "Worked closely with backend teams to connect product requirements with scalable mobile implementation and practical server-side coordination.",
      "Contributed to Web3-related features and improved confidence working across varied business domains with real client expectations."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#070d18",
        color: "#fff",
        padding: "92px 20px"
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 46px" }}>
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
            Experience
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 20, lineHeight: 1.7 }}>
            My journey in mobile engineering across product companies, client
            delivery, and large-scale production launches.
          </p>
        </div>

        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto" }}>
          <div
            style={{
              position: "absolute",
              left: 30,
              top: 12,
              bottom: 12,
              width: 2,
              background: "linear-gradient(180deg, rgba(34,211,238,0.85), rgba(34,211,238,0.15))"
            }}
          />

          <div style={{ display: "grid", gap: 24 }}>
            {jobs.map((job) => (
              <div key={job.title + job.company} style={{ position: "relative", paddingLeft: 70 }}>
                <div
                  style={{
                    position: "absolute",
                    left: 22,
                    top: 22,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#22d3ee",
                    boxShadow: "0 0 0 6px rgba(34,211,238,0.12)"
                  }}
                />

                <article
                  style={{
                    padding: 26,
                    borderRadius: 20,
                    background: "rgba(15, 23, 42, 0.76)",
                    border: "1px solid rgba(148,163,184,0.14)"
                  }}
                >
                  <div
                    style={{
                      color: "#22d3ee",
                      fontWeight: 800,
                      fontSize: 13,
                      letterSpacing: 1.4,
                      textTransform: "uppercase"
                    }}
                  >
                    {job.label}
                  </div>
                  <h3 style={{ margin: "14px 0 0", fontSize: 24, lineHeight: 1.25 }}>{job.title}</h3>
                  <div style={{ marginTop: 7, color: "#cbd5e1", fontSize: 20, fontWeight: 700 }}>
                    {job.company}
                  </div>
                  <div style={{ marginTop: 5, color: "#94a3b8", fontSize: 14, fontWeight: 600 }}>
                    {job.period}
                  </div>
                  <p style={{ margin: "16px 0 0", color: "#aebacf", fontSize: 20, lineHeight: 1.72 }}>
                    {job.description}
                  </p>
                  <ul style={{ margin: "14px 0 0", paddingLeft: 22, color: "#95a6c7", fontSize: 20, lineHeight: 1.75 }}>
                    {job.points.map((point) => (
                      <li key={point} style={{ marginBottom: 6 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
