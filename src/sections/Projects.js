import React from "react";

const projects = [
  {
    name: "FittedCloset",
    category: "AI-Powered Fashion",
    description: "Built a production-grade digital wardrobe app with AI-driven styling flows for a US audience and helped scale it to 600K+ iOS downloads.",
    tags: ["React Native", "TypeScript", "AI Features"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/fitted/id6596771952" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.fittedcloset.app" }
    ]
  },
  {
    name: "nhance Health",
    category: "Healthcare & Wellness",
    description: "Shipped a personalized wellness app with Apple HealthKit integration, food logging, onboarding, and mindfulness experiences.",
    tags: ["React Native", "HealthKit", "Firebase"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/nhance-health/id6758241469" }
    ]
  },
  {
    name: "BIG4 Health",
    category: "Health Platform",
    description: "Delivered a healthcare application for tracking, routines, and appointment-focused user journeys across iOS and Android.",
    tags: ["React Native", "Appointments", "Cross-Platform"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/big4-health/id1517973481" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.big4healthapp" }
    ]
  },
  {
    name: "Little Floh",
    category: "Marketplace",
    description: "Built a community marketplace experience with buyer-seller flows, local discovery, and polished mobile-first UX.",
    tags: ["React Native", "Marketplace", "Payments"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/little-floh/id6470370015" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.littlefloh.app" }
    ]
  },
  {
    name: "JG Vacation",
    category: "Travel & Booking",
    description: "Created a travel planning product with itinerary, booking, and discovery workflows optimized for real users and store deployment.",
    tags: ["React Native", "Travel", "Store Launch"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/jg-vacation/id6452726337" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.jgvacation.app" }
    ]
  },
  {
    name: "JG Calendar",
    category: "Productivity",
    description: "Built a smart calendar application focused on scheduling, reminders, and easy date management across iOS and Android.",
    tags: ["React Native", "Calendar", "Cross-Platform"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/jg-calendar/id6463896471" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.jgcalendar" }
    ]
  },
  {
    name: "Chummy",
    category: "Social Networking",
    description: "Delivered a social discovery app with location-aware flows and people-first interactions across both major mobile platforms.",
    tags: ["React Native", "Social", "Location"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/chummy-find-real-friends/id6738577443" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wolfpackfindfriends" }
    ]
  },
  {
    name: "In Common",
    category: "Community Discovery",
    description: "Shipped a community-focused app to help users discover destinations, shared interests, and connection opportunities with a polished mobile flow.",
    tags: ["React Native", "Discovery", "Mobile UX"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/in-common-find-destinations/id6747021185" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.incommon.app" }
    ]
  },
  {
    name: "N8tive Nightlife",
    category: "Lifestyle & Events",
    description: "Delivered a nightlife discovery product centered around event exploration, venue engagement, and social-first experiences.",
    tags: ["React Native", "Events", "User Engagement"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/n8tive-nightlife/id6469099525" }
    ]
  }
];

const sectionTitleStyle = {
  margin: 0,
  fontSize: "clamp(2.7rem, 4vw, 4.2rem)",
  fontWeight: 900,
  letterSpacing: -1.6,
  background: "linear-gradient(90deg,#38bdf8 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#0a1120",
        color: "#fff",
        padding: "92px 20px 82px"
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 42px" }}>
          <h2 style={sectionTitleStyle}>Selected Work</h2>
          <p style={{ color: "#94a3b8", fontSize: 20, lineHeight: 1.7 }}>
            A full list of live mobile products I&apos;ve shipped across healthcare,
            social, marketplace, travel, productivity, and AI-led consumer apps.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22
          }}
        >
          {projects.map((project) => (
            <article
              key={project.name}
              style={{
                padding: 26,
                borderRadius: 20,
                background: "rgba(15, 23, 42, 0.72)",
                border: "1px solid rgba(148,163,184,0.14)",
                boxShadow: "0 18px 40px rgba(2,6,23,0.28)"
              }}
            >
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 900 }}>{project.name}</h3>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#94a3b8",
                  letterSpacing: 1.6,
                  textTransform: "uppercase"
                }}
              >
                {project.category}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "7px 12px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(148,163,184,0.14)",
                      color: "#e2e8f0",
                      fontWeight: 600,
                      fontSize: 13
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p style={{ margin: "20px 0 0", color: "#aebacf", lineHeight: 1.72, fontSize: 20 }}>
                {project.description}
              </p>

              <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid rgba(148,163,184,0.12)", display: "flex", gap: 16, flexWrap: "wrap" }}>
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#22d3ee", textDecoration: "none", fontWeight: 800, fontSize: 15 }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
