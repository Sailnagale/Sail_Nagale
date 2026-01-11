"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CosmicDust() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const staticParticleCount = 100;
    const shootingParticleCount = 5;

    if (!containerRef.current) return;

    // Create and append static particles (small, pulsing circles)
    for (let i = 0; i < staticParticleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "static-particle";
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
      containerRef.current.appendChild(particle);
    }

    // Animate shooting particles (larger, dynamic streaks) with GSAP
    for (let i = 0; i < shootingParticleCount; i++) {
      const shootingParticle = document.createElement("div");
      shootingParticle.className = "shooting-particle absolute";
      containerRef.current.appendChild(shootingParticle);

      const animateParticle = () => {
        // Start position (top-left quadrant)
        const startX =
          -window.innerWidth * 0.2 + Math.random() * window.innerWidth * 0.4;
        const startY =
          -window.innerHeight * 0.2 + Math.random() * window.innerHeight * 0.4;

        // End position (bottom-right quadrant)
        const endX =
          window.innerWidth * 1.2 + Math.random() * window.innerWidth * 0.4;
        const endY =
          window.innerHeight * 1.2 + Math.random() * window.innerHeight * 0.4;

        const duration = Math.random() * 2 + 2;

        gsap.set(shootingParticle, {
          x: startX,
          y: startY,
          opacity: 1,
          width: `${5 + Math.random() * 15}px`,
          height: `2px`,
          background: `linear-gradient(90deg, #fff, transparent)`,
          filter: `blur(2px)`,
          rotation: Math.random() * 360,
        });

        gsap.to(shootingParticle, {
          x: endX,
          y: endY,
          opacity: 0,
          duration: duration,
          ease: "power1.in",
          delay: Math.random() * 5,
          onComplete: animateParticle,
        });
      };
      animateParticle();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden bg-gray-950"
    >
      {/* Dynamic particles will be added here */}
    </div>
  );
}
