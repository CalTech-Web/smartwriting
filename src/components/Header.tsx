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
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "header-scrolled" : "shadow-sm"}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
          Smart<span className="text-accent">Writing</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-text-light hover:text-primary transition-colors font-medium">
            About
          </Link>
          <Link href="/testimonials" className="text-text-light hover:text-primary transition-colors font-medium">
            Testimonials
          </Link>
          <Link href="/results" className="text-text-light hover:text-primary transition-colors font-medium">
            Results
          </Link>
          <Link
            href="/lets-talk"
            className="bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent-hover transition-colors font-semibold"
          >
            Let&apos;s Talk!
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-text-light">
          <a href="https://www.instagram.com/smartwritinghg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.facebook.com/SmartwritingHG" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FaFacebookF size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hallie-gay-bagley-74095915" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="/about" className="block text-text-light hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/testimonials" className="block text-text-light hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
            Testimonials
          </Link>
          <Link href="/results" className="block text-text-light hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
            Results
          </Link>
          <Link
            href="/lets-talk"
            className="block bg-accent text-white text-center px-6 py-2.5 rounded-full hover:bg-accent-hover font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk!
          </Link>
          <div className="flex gap-4 pt-2 text-text-light">
            <a href="https://www.instagram.com/smartwritinghg" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/SmartwritingHG" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/in/hallie-gay-bagley-74095915" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
