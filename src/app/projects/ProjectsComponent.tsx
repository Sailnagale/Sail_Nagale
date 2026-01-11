"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["Internship", "Hackathon", "Personal Project"];

export default function ProjectsComponent() {
  // FIXED: Explicitly typed the ref array so TypeScript knows it contains HTML elements
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Optional: context for better cleanup
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (!section) return; // Safety check

        const cardsContainer = section.querySelector(".cards-container");
        const cards = section.querySelectorAll(".project-card");

        if (!cardsContainer || cards.length === 0) return;

        gsap.from(cards, {
          x: "100%",
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-page" className="p-8 py-16 text-white">
      <h1 className="text-5xl text-center font-bold mb-12 text-neon-cyan">
        My Projects
      </h1>

      {categories.map((category, index) => {
        const categoryProjects = projects.filter(
          (project) => project.category === category
        );
        if (categoryProjects.length === 0) return null;

        return (
          <div
            key={category}
            // FIXED: Used curly braces to avoid implicit return error
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">{category}</h2>
            <div className="cards-container flex gap-8 overflow-x-auto p-4 hide-scrollbar">
              {categoryProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card flex-shrink-0 w-80"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
