"use client";

import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useEffect, useRef, MouseEvent } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  const pathname = usePathname();
  // FIXED: Typed the ref array correctly
  const iconsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Animate icons on initial load
    gsap.from(iconsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.5,
    });
  }, [pathname]);

  // FIXED: Added MouseEvent type
  const handleIconHover = (e: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      color: "#06b6d4",
      duration: 0.2,
    });
  };

  // FIXED: Added MouseEvent type
  const handleIconHoverOut = (e: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      color: "#ffffff",
      duration: 0.2,
    });
  };

  return (
    <div className="p-8 py-16 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-5xl text-center font-bold mb-12 text-neon-cyan">
          Get in Touch
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 mb-12">
          {/* Contact Details */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-neon-purple-400" />
              <a
                href="tel:7558347738"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                +91 7558347738
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-neon-purple-400" />
              <a
                href="mailto:sail.nagale24@vit.edu"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                sail.nagale24@vit.edu
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-neon-purple-400" />
              <a
                href="mailto:sailnagale20@gmail.com"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                sailnagale20@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a
                href="https://github.com/Sailnagale"
                target="_blank"
                rel="noopener noreferrer"
                // FIXED: Used curly braces to avoid implicit return
                ref={(el) => {
                  iconsRef.current[0] = el;
                }}
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconHoverOut}
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/sail-nagale-4891a5321/"
                target="_blank"
                rel="noopener noreferrer"
                // FIXED: Used curly braces
                ref={(el) => {
                  iconsRef.current[1] = el;
                }}
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconHoverOut}
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="mailto:sail.nagale24@vit.edu"
                // FIXED: Used curly braces
                ref={(el) => {
                  iconsRef.current[2] = el;
                }}
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconHoverOut}
              >
                <FaEnvelope size={32} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
