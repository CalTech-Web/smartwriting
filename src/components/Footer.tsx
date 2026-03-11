import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="relative bg-bg-dark text-white pt-20 pb-8">
      <AnimateOnScroll className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              Smart<span className="gradient-text">Writing</span>
            </h3>
            <p className="text-white/50 max-w-sm leading-relaxed">
              College admissions essay coaching and planning by Hallie Gay W. Bagley,
              former Managing Editor of <em>The Paris Review</em>.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-white/40 hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-white/40 hover:text-accent transition-colors text-sm">
                About
              </Link>
              <Link href="/testimonials" className="block text-white/40 hover:text-accent transition-colors text-sm">
                Testimonials
              </Link>
              <Link href="/results" className="block text-white/40 hover:text-accent transition-colors text-sm">
                Results
              </Link>
              <Link href="/lets-talk" className="block text-white/40 hover:text-accent transition-colors text-sm">
                Let&apos;s Talk!
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/smartwritinghg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-accent hover:to-accent-deep hover:text-white hover:border-transparent transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/SmartwritingHG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-accent hover:to-accent-deep hover:text-white hover:border-transparent transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/hallie-gay-bagley-74095915"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-accent hover:to-accent-deep hover:text-white hover:border-transparent transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/30 text-sm">
          &copy; {new Date().getFullYear()} SmartWriting | All Rights Reserved
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
