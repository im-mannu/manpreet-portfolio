// src/sections/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#23232a", color: "#fff", padding: "60px 0" }}>
      <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 30 }}>Contact</h2>
        <p style={{ fontSize: "1.1rem" }}>
          <b>Email:</b> <a href="mailto:manpreethamb@gmail.com" style={{ color: "#6366f1" }}>manpreethamb@gmail.com</a><br/>
          <b>Phone:</b> <a href="tel:+918802390007" style={{ color: "#6366f1" }}>+91 8802390007</a><br/>
          <b>Location:</b> Mohali, India<br/>
          <b>LinkedIn:</b> <a href="https://linkedin.com/in/manpreet-singh-0101b5203/" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1" }}>manpreet-singh-0101b5203</a>
        </p>
      </div>
    </section>
  );
}
