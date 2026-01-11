"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Defines the structure of the project data this card expects
type Project = {
  id: string;
  category: string;
  title: string;
  team?: string; // Made optional
  image: string;
  description: string; // Renamed from shortDescription to match your data
  gitHubLink?: string;
  liveLink?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-[450px] w-full rounded-xl bg-[#111] border border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-neon-cyan hover:shadow-neon-cyan/20">
      {/* 1. Image Section */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-neon-cyan">
            {project.category}
          </span>
        </div>

        <h3
          className="mb-2 text-2xl font-bold text-white line-clamp-1"
          title={project.title}
        >
          {project.title}
        </h3>

        {project.team && (
          <p className="mb-3 text-sm text-gray-500">Team: {project.team}</p>
        )}

        {/* Description with line-clamp to prevent overflow */}
        <p className="mb-4 text-sm text-gray-400 line-clamp-3">
          {project.description}
        </p>

        {/* 3. Footer / Action Buttons */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
          <Link href={`/projects/${project.id}`} passHref>
            <span className="cursor-pointer rounded-full bg-neon-cyan/10 px-4 py-2 text-sm font-semibold text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-black">
              Read More
            </span>
          </Link>

          <div className="flex space-x-3">
            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                title="View Code"
              >
                <FaGithub size={22} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                title="Live Link"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
