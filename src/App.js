function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px",
      maxWidth: "900px",
      margin: "auto",
      lineHeight: "1.6"
    }}>

      {/* HERO */}
      <h1>Manpreet Singh</h1>
      <h3 style={{ color: "gray" }}>React Native Developer</h3>

      <p>
        I build and deploy mobile applications with real users. 
        Experienced in React Native, AI integration, and end-to-end development.
      </p>

      <p><b>🚀 600K+ users | 📱 App Store & Play Store | 🤖 AI Integration</b></p>

      <hr />

      {/* PROJECTS */}
      <h2>Projects</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>AI-Based Mobile Application</h3>
        <p>
          Developed a React Native app with AI-powered features. 
          Handled complete lifecycle from development to deployment.
        </p>
        <p><b>Impact:</b> 600K+ iOS users</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Logistics & Tracking App</h3>
        <p>
          Built real-time tracking application using Mapbox & Google Maps. 
          Implemented geolocation, route tracking, and performance optimization.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Food Delivery / Gig App</h3>
        <p>
          Worked on delivery and partner apps with real-time order tracking, 
          API integrations, and scalable architecture.
        </p>
      </div>

      <hr />

      {/* SKILLS */}
      <h2>Skills</h2>
      <ul>
        <li>React Native</li>
        <li>JavaScript / TypeScript</li>
        <li>API Integration</li>
        <li>App Store & Play Store Deployment</li>
        <li>Mapbox / Google Maps</li>
        <li>AI Integration</li>
      </ul>

      <hr />

      {/* ABOUT */}
      <h2>About Me</h2>
      <p>
        I’m a React Native developer with 4+ years of experience building 
        scalable mobile applications. I enjoy solving real-world problems 
        and working on production-level apps used by real users.
      </p>

      <hr />

      {/* CONTACT */}
      <h2>Contact</h2>
      <p>Email: your-email@gmail.com</p>
      <p>LinkedIn: your-linkedin-link</p>

    </div>
  );
}

export default App;