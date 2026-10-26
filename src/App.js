import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FlagshipProjects from "./sections/FlagshipProjects";
import ProductionAppsGrid from "./sections/ProductionAppsGrid";
import ArchitectureEcosystem from "./sections/ArchitectureEcosystem";
import LeadershipImpact from "./sections/LeadershipImpact";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import CVModal from "./components/CVModal";
import ScreenshotModal from "./components/ScreenshotModal";

function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewTitle, setPreviewTitle] = useState("");

  const handleOpenPreview = (src, title) => {
    setPreviewImage(src);
    setPreviewTitle(title);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
    setPreviewTitle("");
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 antialiased overflow-x-hidden">
      {/* Sticky Top Navigation */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Tier-1 Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* Flagship Case Studies Deep Dives (FuelLab, FittedCloset, nHance) */}
        <FlagshipProjects />

        {/* Shipped Production Apps Bento Grid */}
        <ProductionAppsGrid onPreviewImage={handleOpenPreview} />

        {/* Technical Architecture & Ecosystem Cards */}
        <ArchitectureEcosystem />

        {/* Staff/Lead Leadership & Impact Bento */}
        <LeadershipImpact />

        {/* Career Progression & Timeline */}
        <Experience />

        {/* Direct Contact & Engineering Colophon */}
        <Contact onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Interactive Staff/Lead Mobile Engineer CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

      {/* Production App Screen Zoom Modal */}
      <ScreenshotModal
        isOpen={Boolean(previewImage)}
        imageSrc={previewImage}
        title={previewTitle}
        onClose={handleClosePreview}
      />
    </div>
  );
}

export default App;
