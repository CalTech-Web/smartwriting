import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <AnimateOnScroll className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Smart<span className="text-accent">Writing</span>
            </h3>
            <p className="text-gray-300 text-sm">
              College admissions essay coaching and planning by Hallie Gay W. Bagley.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                About
              </Link>
              <Link href="/testimonials" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                Testimonials
              </Link>
              <Link href="/results" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                Results
              </Link>
              <Link href="/lets-talk" className="block text-gray-300 hover:text-accent transition-colors text-sm">
                Let&apos;s Talk!
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/smartwritinghg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.facebook.com/SmartwritingHG" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                <FaFacebookF size={22} />
              </a>
              <a href="https://www.linkedin.com/in/hallie-gay-bagley-74095915" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SmartWriting | All Rights Reserved
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
