import React from "react";

const contacts = [
  {
    label: "Primary Email",
    value: "manpreethamb@gmail.com",
    href: "mailto:manpreethamb@gmail.com",
    icon: "✉️"
  },
  {
    label: "Phone",
    value: "+91 8802390007",
    href: "tel:+918802390007",
    icon: "📞"
  },
  {
    label: "Location",
    value: "Mohali, India",
    href: null,
    icon: "📍"
  },
  {
    label: "LinkedIn",
    value: "manpreet-singh-0101b5203",
    href: "https://linkedin.com/in/manpreet-singh-0101b5203/",
    icon: "in"
  }
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(180deg, #101827 0%, #0a1120 100%)",
        color: "#fff",
        paddingTop: 104
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px 72px" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 54px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 4vw, 4.4rem)",
              fontWeight: 900,
              letterSpacing: -1.6,
              background: "linear-gradient(90deg,#38bdf8 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Let&apos;s Build Together
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 20, lineHeight: 1.7 }}>
            Available for React Native projects, app modernization, performance
            improvements, and product engineering support. Reach out through any
            of the channels below.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            alignItems: "stretch",
            gap: 18
          }}
        >
          {contacts.map((item) => {
            const content = (
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  height: "100%",
                  minHeight: 120
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22d3ee",
                    fontWeight: 900,
                    fontSize: 24
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: "#94a3b8", fontSize: 14, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase" }}>
                    {item.label}
                  </div>
                  <div style={{ marginTop: 8, color: "#f8fbff", fontSize: 24, fontWeight: 800, wordBreak: "break-word" }}>
                    {item.value}
                  </div>
                </div>
              </div>
            );

            if (!item.href) {
              return <div key={item.label}>{content}</div>;
            }

            return (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ textDecoration: "none" }}>
                {content}
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 40 }}>
          <a
            href="mailto:manpreethamb@gmail.com"
            style={{
              background: "linear-gradient(90deg,#22d3ee 0%, #7c3aed 100%)",
              color: "#fff",
              padding: "16px 28px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 18,
              boxShadow: "0 14px 34px rgba(34,211,238,0.16)"
            }}
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/manpreet-singh-0101b5203/"
            target="_blank"
            rel="noopener noreferrer"
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
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <footer style={{ borderTop: "1px solid rgba(148,163,184,0.12)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "34px 20px 44px",
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap"
          }}
        >
          <div>
            <div style={{ fontSize: 24, fontWeight: 900 }}>
              Manpreet<span style={{ color: "#22d3ee" }}>.</span>
            </div>
            <div style={{ marginTop: 12, color: "#94a3b8", fontSize: 20, lineHeight: 1.6, maxWidth: 360 }}>
              Senior React Native Developer building polished mobile products for
              real users and real production environments.
            </div>
          </div>

          <div>
            <div style={{ color: "#22d3ee", fontWeight: 800, letterSpacing: 1.4, textTransform: "uppercase" }}>
              Quick Links
            </div>
            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
              <a href="#projects" style={{ color: "#dbe7f5", textDecoration: "none" }}>Work</a>
              <a href="#skills" style={{ color: "#dbe7f5", textDecoration: "none" }}>Expertise</a>
              <a href="#experience" style={{ color: "#dbe7f5", textDecoration: "none" }}>Experience</a>
              <a href="#contact" style={{ color: "#dbe7f5", textDecoration: "none" }}>Contact</a>
            </div>
          </div>

          <div>
            <div style={{ color: "#22d3ee", fontWeight: 800, letterSpacing: 1.4, textTransform: "uppercase" }}>
              Connect
            </div>
            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
              <a href="mailto:manpreethamb@gmail.com" style={{ color: "#dbe7f5", textDecoration: "none" }}>
                manpreethamb@gmail.com
              </a>
              <a href="https://linkedin.com/in/manpreet-singh-0101b5203/" target="_blank" rel="noopener noreferrer" style={{ color: "#dbe7f5", textDecoration: "none" }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
