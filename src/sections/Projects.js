// src/sections/Projects.js
import React from "react";

const projects = [
  {
    name: "nhance Health",
    description: "Personalized health and wellness app with HealthKit integration, food logging, and mindfulness.",
    features: [
      "Health Activity Tracking (Apple HealthKit)",
      "Smart Food Logging",
      "Daily Calorie Insights",
      "Personalized Onboarding",
      "Meditation Content"
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/nhance-health/id6758241469" }
    ]
  },
  {
    name: "FittedCloset",
    description: "AI-powered digital wardrobe and styling assistant. 600K+ downloads on iOS (USA)",
    links: [
      { label: "iOS", url: "https://apps.apple.com/in/app/fitted/id6596771952" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.fittedcloset.app" }
    ]
  },
  {
    name: "BIG4 Health",
    description: "Healthcare and wellness platform for health tracking and appointment management.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/big4-health/id1517973481" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.big4healthapp" }
    ]
  },
  {
    name: "Little Floh",
    description: "Community marketplace app for buying, selling, and trading items locally.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/little-floh/id6470370015" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.littlefloh.app" }
    ]
  },
  {
    name: "N8tive Nightlife",
    description: "Nightlife discovery app for events and social connections.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/n8tive-nightlife/id6469099525" }
    ]
  },
  {
    name: "JG Vacation",
    description: "Travel planning application with curated itineraries and bookings.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/jg-vacation/id6452726337" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.jgvacation.app" }
    ]
  },
  {
    name: "JG Calendar",
    description: "Smart calendar application for scheduling and reminders.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/jg-calendar/id6463896471" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.jgcalendar" }
    ]
  },
  {
    name: "Chummy",
    description: "Social networking app to discover and connect with nearby friends.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/chummy-find-real-friends/id6738577443" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.wolfpackfindfriends" }
    ]
  },
  {
    name: "In Common",
    description: "Community discovery application to find shared destinations and communities.",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/in-common-find-destinations/id6747021185" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.incommon.app" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#23232a", color: "#fff", padding: "60px 0" }}>
      <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 40 }}>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={proj.name} style={{ marginBottom: 36, background: "#18181b", borderRadius: 12, padding: 24, boxShadow: "0 2px 12px #0002" }}>
            <h3 style={{ fontSize: "1.3rem", margin: 0 }}>{proj.name}</h3>
            <p style={{ margin: "10px 0 0 0" }}>{proj.description}</p>
            {proj.features && (
              <ul style={{ margin: "10px 0 0 0", paddingLeft: 20 }}>
                {proj.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            )}
            <div style={{ marginTop: 10 }}>
              {proj.links.map(link => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                  background: "#6366f1",
                  color: "#fff",
                  padding: "6px 18px",
                  borderRadius: 6,
                  textDecoration: "none",
                  marginRight: 10,
                  fontWeight: 500
                }}>{link.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
