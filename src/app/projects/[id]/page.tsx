"use client";

import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCircle,
} from "react-icons/fa";

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0a0a]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link href="/projects" className="text-neon-cyan hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-6 md:px-12 lg:px-24">
      {/* 1. Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-neon-cyan transition-colors mb-8 group"
      >
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* 2. Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex-1">
          {/* Title Area */}
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {project.title}
            </h1>

            {/* NEW: Live Status Badge (Shows only if link exists) */}
            {project.liveLink && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold animate-pulse">
                <FaCircle size={8} /> Live Now
              </span>
            )}
          </div>

          <p className="text-xl text-gray-400 max-w-2xl">{project.category}</p>
        </div>

        {/* Action Buttons - Moved to top for visibility */}
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          {/* Live Demo Button - Primary Action */}
          {/* Live Demo Button - FIXED */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              // CHANGED: text-black -> text-white, added bg-cyan-500 fallback
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]"
            >
              <FaExternalLinkAlt />
              <span>Visit Live Site</span>
            </a>
          )}

          {/* GitHub Button - Secondary Action */}
          {project.gitHubLink && (
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#2a2a2a] transition-all border border-gray-800"
            >
              <FaGithub size={20} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* 3. Main Image / Showcase */}
      <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gray-900 rounded-xl overflow-hidden border border-gray-800 mb-12 relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* 4. Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Description */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Key Features Section */}
          {project.features && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-neon-cyan mr-2 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Tech Stack */}
        <div className="space-y-8">
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack ? (
                project.techStack.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-cyan-300 text-sm rounded-md border border-gray-700"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 italic">
                  No tech stack listed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
