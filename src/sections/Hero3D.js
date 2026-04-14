import React from "react";
import { motion } from "framer-motion";

const palette = {
  text: "#f8fafc",
  muted: "#94a3b8",
  cyan: "#22d3ee"
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

function Showcase() {
  const apps = [
    "/apps/app1.png",
    "/apps/app2.png",
    "/apps/app3.png",
    "/apps/app4.png",
    "/apps/app5.png"
  ];

  return (
    <div style={{
      width: "100%",
      height: 500,
      perspective: 1200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        style={{
          position: "relative",
          width: 300,
          height: 400,
          transformStyle: "preserve-3d"
        }}
      >
        {apps.map((src, i) => {
          const angle = (360 / apps.length) * i;

          return (
            <motion.img
              key={i}
              src={src}
              style={{
                position: "absolute",
                width: 200,
                height: 380,
                objectFit: "cover",
                borderRadius: 20,
                left: "50%",
                top: "50%",
                transform: `
                  rotateY(${angle}deg)
                  translateZ(320px)
                  translate(-50%, -50%)
                `,
                boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Hero3D() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#020617,#070c17)",
      color: palette.text
    }}>

      {/* HEADER */}
      <header
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 24px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center"
        }}
      >
        {/* LEFT */}
        <div style={{ fontWeight: 800, fontSize: 20 }}>
          Work <span style={{ color: "#22d3ee" }}>Portfolio</span>
        </div>

        {/* CENTER (perfectly centered now) */}
        <div style={{ display: "flex", gap: 28, justifyContent: "center" }}>
          <a href="#projects">Work</a>
          <a href="#skills">Expertise</a>
          <a href="#experience">Experience</a>
        </div>

        {/* RIGHT */}
        <div style={{
          display: "flex",
          gap: 16,
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
          <a
            href="https://linkedin.com/in/manpreet-singh-0101b5203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in
          </a>

          <a href="mailto:manpreethamb@gmail.com">
            Mail
          </a>

          <a
            href="#contact"
            style={{
              padding: "10px 18px",
              borderRadius: 10,
              background: "linear-gradient(90deg,#22d3ee,#7c3aed)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            Let’s Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 24px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 40
      }}>

        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
              HI, I'M MANPREET SINGH,
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            style={{
              marginTop: 20,
              color: palette.cyan,
              maxWidth: 480,
              lineHeight: 1.6,
              fontSize: "clamp(2rem, 2vw, 4rem)",
              fontWeight: 900,
            }}
          >
            React Native Developer with 4+ years of experience delivering
            production-ready apps across healthcare, social, and AI-powered products.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3.5}
            style={{
              marginTop: 10,
              color: "#cbd5f5",
              fontSize: 16
            }}
          >
            15+ apps shipped • 600K+ users • Production scale experience
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            style={{ marginTop: 20, display: "flex", gap: 10 }}
          >
            {["15+ Apps", "600K+ Users", "Production Ready"].map(i => (
              <span key={i} style={{
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                fontSize: 12
              }}>
                {i}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            style={{ marginTop: 24, display: "flex", gap: 12 }}
          >
            <a href="#projects" style={{
              padding: "12px 20px",
              borderRadius: 10,
              background: "linear-gradient(90deg,#22d3ee,#7c3aed)",
              color: "#fff",
              textDecoration: "none"
            }}>
              View Work
            </a>

            <a href="#contact" style={{
              padding: "12px 20px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              textDecoration: "none"
            }}>
              Hire Me
            </a>
          </motion.div>
        </div>

        <Showcase />
      </div>
    </section>
  );
}