"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", // Start animation when the card is 80% from the top of the viewport
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl text-center font-bold mb-12 text-neon-cyan">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} ref={(el) => (cardsRef.current[index] = el)}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
