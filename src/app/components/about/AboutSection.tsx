"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((para, index) => {
        if (para) {
          gsap.from(para, {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: para,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative p-8 py-24 min-h-screen flex flex-col justify-center bg-black text-white"
    >
      {/* Subtle Background Element */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-neon-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple-400">
          About Me.
        </h2>

        <div className="space-y-12 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
          {/* Paragraph 1: Intro & Education */}
          <p
            ref={(el) => {
              textRefs.current[0] = el;
            }}
          >
            I am a{" "}
            <strong className="text-white font-medium">
              Data Science undergraduate
            </strong>{" "}
            at VIT Pune, driven by the mathematical beauty of intelligent
            systems. Currently maintaining a{" "}
            <strong className="text-neon-cyan">9.32 CGPA</strong>, my academic
            foundation is built on a rigorous exploration of Deep Learning and
            Computer Vision.
          </p>

          {/* Paragraph 2: Professional Impact & Patent */}
          <p
            ref={(el) => {
              textRefs.current[1] = el;
            }}
          >
            My work extends beyond the classroom. As a{" "}
            <strong className="text-white font-medium">
              Research Intern at Agharkar Research Institute
            </strong>
            , I focus on solving real-world agricultural challenges. Recently, I
            achieved a significant milestone by securing a
            <strong className="text-neon-purple-400">
              {" "}
              Government of India Patent
            </strong>{" "}
            for an AI-powered quality assessment system. This solution automates
            the detection of microscopic defects in soybean seeds, proving that
            code can have a tangible impact on food security.
          </p>

          {/* Paragraph 3: Technical Philosophy */}
          <p
            ref={(el) => {
              textRefs.current[2] = el;
            }}
          >
            I specialize in the full lifecycle of AI application—from training
            custom
            <strong className="text-white font-medium">
              {" "}
              YOLOv8 models
            </strong>{" "}
            on proprietary datasets to deploying them via full-stack{" "}
            <strong className="text-white font-medium">
              React and Flask
            </strong>{" "}
            architectures. I don&apos;t just build models; I build reliable,
            patented systems that work in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
