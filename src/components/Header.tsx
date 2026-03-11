"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 header-logo">
          <span className="font-[var(--font-display)] text-2xl font-black text-primary">
            Smart
          </span>
          <span className="font-[var(--font-display)] text-2xl font-black gradient-text">
            Writing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="nav-link text-text-light hover:text-primary transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className="nav-link text-text-light hover:text-primary transition-colors font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="/results"
            className="nav-link text-text-light hover:text-primary transition-colors font-medium"
          >
            Results
          </Link>
          <Link
            href="/lets-talk"
            className="bg-gradient-to-r from-accent to-accent-deep text-white px-7 py-2.5 rounded-full font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Talk!
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 header-social text-text-light">
          <a
            href="https://www.instagram.com/smartwritinghg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/SmartwritingHG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hallie-gay-bagley-74095915"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-bg-dark/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 animate-[fadeIn_0.3s_ease]">
          <Link
            href="/about"
            className="text-white text-2xl font-[var(--font-display)] font-bold hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className="text-white text-2xl font-[var(--font-display)] font-bold hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/results"
            className="text-white text-2xl font-[var(--font-display)] font-bold hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </Link>
          <Link
            href="/lets-talk"
            className="bg-gradient-to-r from-accent to-accent-deep text-white px-10 py-3 rounded-full text-xl font-bold shadow-xl shadow-accent/30"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk!
          </Link>
          <div className="flex gap-6 pt-4 text-white/60">
            <a
              href="https://www.instagram.com/smartwritinghg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/SmartwritingHG"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/hallie-gay-bagley-74095915"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
