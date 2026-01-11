"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // GSAP animation for the menu toggle
  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        duration: 0.5,
        ease: Power3.easeOut,
      });
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.5,
        ease: Power3.easeIn,
      });
    }
  }, [isOpen]);

  // FIXED: Added proper TypeScript types for the MouseEvent
  const handleLinkHover = (e: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: -5,
      scale: 1.1,
      color: "#06b6d4", // neon-cyan
      duration: 0.3,
      ease: "power1.out",
    });
  };

  // FIXED: Added proper TypeScript types for the MouseEvent
  const handleLinkHoverOut = (e: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      color: "#ffffff", // white
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-950/80 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold text-neon-cyan"
        >
          SAIL NAGALE
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-white transition-colors duration-300"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (off-screen by default) */}
      <div
        className={`mobile-menu transform translate-x-full fixed top-0 right-0 h-screen w-3/4 bg-gray-950 p-8 shadow-xl transition-transform duration-500 ease-in-out md:hidden`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaTimes size={32} />
          </button>
        </div>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-3xl font-bold text-white hover:text-neon-cyan transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
