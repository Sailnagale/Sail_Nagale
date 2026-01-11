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
    // Optional: Using gsap.context is better for cleanup in React 18+
    const ctx = gsap.context(() => {
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
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert(); // Cleanup animation on unmount
  }, []);

  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl text-center font-bold mb-12 text-neon-cyan">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            // FIXED: Used curly braces {} to return void
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
