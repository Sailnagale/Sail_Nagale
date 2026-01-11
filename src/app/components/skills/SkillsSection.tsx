"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGlobe, FaRobot, FaTools, FaPaintBrush } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skillsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsGridRef.current) return;

    // Check if the skills section is already in the viewport on initial load
    const isVisibleOnLoad =
      window.innerHeight > skillsGridRef.current.getBoundingClientRect().top;

    if (isVisibleOnLoad) {
      // Play the animation immediately if it's already visible
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      // Otherwise, set up the ScrollTrigger animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsGridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section id="skills" className="p-8 py-16 text-white">
      <h2 className="text-4xl text-center font-bold mb-12 text-neon-cyan">
        My Skills
      </h2>
      <div
        ref={skillsGridRef}
        className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {/* Web Development Card */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="skill-card p-6 rounded-lg bg-gray-900 border border-purple-500 shadow-lg shadow-purple-500/30"
        >
          <div className="flex items-center mb-4 text-purple-400">
            <FaGlobe className="text-3xl mr-3" />
            <h3 className="text-2xl font-semibold">Web Dev</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Bootstrap 5, Tailwind CSS</li>
            <li>React.js, Next.js</li>
            <li>MERN Stack</li>
          </ul>
        </div>

        {/* Machine Learning / AI Card */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="skill-card p-6 rounded-lg bg-gray-900 border border-blue-500 shadow-lg shadow-blue-500/30"
        >
          <div className="flex items-center mb-4 text-blue-400">
            <FaRobot className="text-3xl mr-3" />
            <h3 className="text-2xl font-semibold">ML / AI</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Python (NumPy, Pandas, Matplotlib)</li>
            <li>Scikit-learn, TensorFlow, Keras</li>
            <li>Deep Learning basics (CNN, GANs)</li>
          </ul>
        </div>

        {/* Tools & Platforms Card */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="skill-card p-6 rounded-lg bg-gray-900 border border-green-500 shadow-lg shadow-green-500/30"
        >
          <div className="flex items-center mb-4 text-green-400">
            <FaTools className="text-3xl mr-3" />
            <h3 className="text-2xl font-semibold">Tools & Platforms</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Git & GitHub</li>
            <li>VS Code, Jupyter Notebook</li>
            <li>Arduino, Google Colab</li>
          </ul>
        </div>

        {/* UI/UX & Design Card */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="skill-card p-6 rounded-lg bg-gray-900 border border-yellow-500 shadow-lg shadow-yellow-500/30"
        >
          <div className="flex items-center mb-4 text-yellow-400">
            <FaPaintBrush className="text-3xl mr-3" />
            <h3 className="text-2xl font-semibold">UI/UX & Design</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>UI/UX Design, Responsive Web Design</li>
            <li>GSAP, Framer Motion, Three.js</li>
            <li>Color Theory, Visual Hierarchy</li>
            <li>Adobe Photoshop, Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
