// src/app/about/page.tsx
"use client";

import { usePathname } from "next/navigation";
import AboutSection from "../components/about/AboutSection";

export default function AboutPage() {
  const pathname = usePathname();

  return <AboutSection key={pathname} />;
}
