"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const heroTextItemsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial state to invisible before animating
    gsap.set(heroTextItemsRef.current, { opacity: 0 });
    gsap.set(heroImageRef.current, { opacity: 0 });

    // Staggered animation for the main text elements
    tl.to(heroTextItemsRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.2,
    });

    // Animate the image
    tl.to(
      heroImageRef.current,
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
      },
      "<0.2"
    );

    // Apply a pulsating glow to the primary text for emphasis
    gsap.to(document.querySelector(".internship-text"), {
      textShadow: "0 0 8px #06b6d4, 0 0 16px #06b6d4",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  // GSAP animation for the name hover effect
  const handleNameHover = () => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        color: "#fde047",
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  const handleNameHoverOut = () => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        color: "#06b6d4",
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 text-white"
    >
      <div
        className="md:w-1/2 p-4 text-center md:text-left"
        ref={heroTextItemsRef}
      >
        <h1 className="hero-text-item text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
          Hi, I’m{" "}
          <span
            ref={nameRef}
            className="text-neon-cyan inline-block cursor-pointer"
            onMouseEnter={handleNameHover}
            onMouseLeave={handleNameHoverOut}
          >
            Sail Nagale
          </span>{" "}
          —
        </h1>
        <div className="text-xl sm:text-2xl lg:text-3xl text-white">
          <p className="hero-text-item mb-2 font-bold internship-text text-neon-cyan text-4xl">
            Intern at Agharkar Research Institute, Pune,
          </p>
          <p className="hero-text-item font-bold text-gray-500 text-2xl">
            Computer Science (Data Science) student at VIT Pune.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 p-4 mt-8 md:mt-0" ref={heroImageRef}>
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-4 border-neon-purple-500 shadow-lg shadow-neon-purple-500/50">
          <Image
            src="/images/my-photo.jpg"
            alt="My Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
