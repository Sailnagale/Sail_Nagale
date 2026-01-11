// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
// import AboutSection from "./components/about/AboutSection";
// import ContactSection from "./components/contact/ContactSection";
import SkillsSection from "./components/skills/SkillsSection";
import AboutSection from "./components/about/AboutSection";
export default function Home() {
  const pathname = usePathname();
  const [forceRender, setForceRender] = useState(true);

  // This useEffect will re-run whenever the pathname changes.
  useEffect(() => {
    // When the user navigates back to the home page,
    // we set the state to false to unmount the Hero section,
    // then set it back to true to remount it.
    setForceRender(false);
    const timer = setTimeout(() => {
      setForceRender(true);
    }, 100); // A short delay is enough

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {forceRender && <HeroSection />}

      <SkillsSection />
      <AboutSection />
      {/* <AboutSection />
      <ContactSection /> */}
    </>
  );
}
