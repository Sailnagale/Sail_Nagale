"use client";

import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["Internship", "Hackathon", "Personal Project"];

export default function ProjectsPage() {
  return (
    <section id="projects-page" className="p-8 py-16 text-white">
      <h1 className="text-5xl text-center font-bold mb-12 text-neon-cyan">
        My Projects
      </h1>

      {categories.map((category) => {
        const categoryProjects = projects.filter(
          (project) => project.category === category
        );

        // Don't render empty categories
        if (categoryProjects.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white border-b border-gray-700 pb-2 inline-block">
              {category}
            </h2>

            {/* Simplified Layout: 
              Using a CSS Grid instead of horizontal scroll.
              1 column on mobile, 2 on tablet, 3 on desktop.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map((project) => (
                <div key={project.id} className="w-full">
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
