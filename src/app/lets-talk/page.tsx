"use client";

import { useState, type FormEvent } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function LetsTalkPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 mesh-gradient-animated text-white overflow-hidden">
        <div className="hidden lg:block absolute top-20 right-20 w-20 h-20 border border-white/10 rounded-full float-slow" />
        <div className="hidden lg:block absolute bottom-20 left-16 w-16 h-16 bg-accent/10 morph-blob float-medium" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="hero-text-reveal text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
            Get Started
          </p>
          <h1 className="hero-text-reveal text-5xl md:text-7xl font-black mb-6">
            Let&apos;s Talk!
          </h1>
          <p className="hero-text-reveal-delay-1 text-white/70 text-xl max-w-2xl">
            I&apos;m always pleased to discuss the particulars, possibilities and potentials
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          {/* Contact Info - Dark Card */}
          <AnimateOnScroll animation="slide-rotate" className="lg:col-span-5">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 text-white sticky top-28">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 morph-blob opacity-50" />

              <h2
                className="text-3xl font-bold mb-6 relative"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get in Touch
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 text-lg relative">
                I&apos;m always pleased to discuss the particulars, possibilities and
                potentials and am flexible to meet any client&apos;s needs.
              </p>
              <p className="text-white/60 leading-relaxed mb-8 relative">
                All you have to do is shoot me an email/text, or, even better, call.
              </p>
              <p
                className="text-secondary font-semibold text-lg italic mb-10 relative"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Hallie Gay
              </p>

              <div className="space-y-6 relative">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Phone</p>
                    <a
                      href="tel:859-533-9348"
                      className="text-white font-semibold text-lg hover:text-accent transition-colors"
                    >
                      859-533-9348
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <a
                      href="mailto:halliegay@halliegay.com"
                      className="text-white font-semibold text-lg hover:text-accent transition-colors"
                    >
                      halliegay@halliegay.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="fade-left" delay={200} className="lg:col-span-7">
            <div>
              {submitted ? (
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary text-3xl">&#10003;</span>
                  </div>
                  <h3
                    className="text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Thank you!
                  </h3>
                  <p className="text-white/70 text-lg">
                    Your message has been received. Hallie Gay will get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-bg-light rounded-3xl p-8 md:p-10 space-y-6 border border-gray-100"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold tracking-wide uppercase text-text-light mb-2"
                      >
                        First Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold tracking-wide uppercase text-text-light mb-2"
                      >
                        Last Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold tracking-wide uppercase text-text-light mb-2"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold tracking-wide uppercase text-text-light mb-2"
                    >
                      Subject <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold tracking-wide uppercase text-text-light mb-2"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-accent-deep text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
