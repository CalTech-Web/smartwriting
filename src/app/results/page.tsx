import type { Metadata } from "next";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StaggerChildren from "@/components/StaggerChildren";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Results | SmartWriting",
  description:
    "See the impressive results of SmartWriting clients — scholarships, merit awards, and university admissions.",
};

const scholarships = [
  "2 United States Presidential Scholars (Top 100 student in US annually)",
  "3 United States Presidential Scholar Semi-Finalists (Top 400 in US annually)",
  "The Cameron Impact Scholarship ($200,000 to any university of your choice)",
  "The Jefferson at University of Virginia (~$200K in Scholarship over 4 years)",
  "3 Ingram Scholars at Vanderbilt University (Full tuition plus summer stipend)",
  "The Cornelius Vanderbilt Scholarship (Full Tuition Plus Summer Stipend)",
  "The Johnson at Washington and Lee (~$200K in Scholarship over 4 years)",
  "The Reynolds at Wake Forest University (~$200K in Scholarship over 4 years)",
  "The Stamps Scholarship at Wake Forest University (~$200K in Scholarship over 4 years)",
  "The WT Young at Transylvania University (Full Ride)",
  "The Otis Singletary at University of Kentucky (Full Ride)",
];

const universities = [
  "Carleton", "Carnegie Mellon", "Yale", "Centre College", "Dartmouth",
  "Williams", "Wake Forest", "Vanderbilt", "UVA", "Stanford",
  "Princeton", "UPenn", "Northwestern", "UNC", "Middlebury",
  "MIT", "Georgia Tech", "UGA", "Florida State", "Duke", "Davidson",
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 mesh-gradient-animated text-white overflow-hidden">
        <div className="hidden lg:block absolute top-20 right-16 w-20 h-20 border border-white/10 rotate-45 float-fast" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="hero-text-reveal text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
            Proven Track Record
          </p>
          <h1 className="hero-text-reveal text-5xl md:text-7xl font-black mb-6">Results</h1>
          <p className="hero-text-reveal-delay-1 text-white/70 text-xl max-w-2xl">
            Our students consistently earn admission to top universities and prestigious scholarships
          </p>
        </div>
      </section>

      {/* Stats Row - Dark with Bold Counters */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8">
          <AnimatedCounter end={11} suffix="+" label="Scholarships & Awards" />
          <AnimatedCounter end={21} suffix="+" label="University Admits" />
          <AnimatedCounter end={1} prefix="$" suffix="M+" label="In Scholarships" />
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll animation="slide-rotate">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              Achievements
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Scholarships &amp; <span className="gradient-text">Merit Awards</span>
            </h2>
            <p className="text-text-light mb-12 text-lg">
              Recent SmartWriting client scholarships and merit awards include:
            </p>
          </AnimateOnScroll>

          <StaggerChildren staggerDelay={80} className="space-y-4">
            {scholarships.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-bg-light border-l-4 border-accent rounded-xl p-6 card-hover-tilt"
              >
                <FaTrophy className="text-accent text-lg mt-1 flex-shrink-0" />
                <span className="text-text leading-relaxed">{s}</span>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* University Admits - Marquee */}
      <section className="relative py-20 bg-bg-dark diagonal-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 pt-8">
          <AnimateOnScroll animation="slide-rotate">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-secondary mb-3">
              Client Admissions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              University <span className="gradient-text">Admits</span>
            </h2>
            <p className="text-white/50 mb-4">
              Recent SmartWriting client admits include:
            </p>
            <p className="text-sm text-white/30 italic">
              (And many more Public, Private and Liberal Arts Colleges Nationwide)
            </p>
          </AnimateOnScroll>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {[...universities, ...universities].map((uni, i) => (
              <span
                key={i}
                className="inline-block mx-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm backdrop-blur-sm hover:bg-accent/20 hover:border-accent/40 transition-colors whitespace-nowrap"
              >
                {uni}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 mesh-gradient-animated text-center overflow-hidden">
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Your student could be <span className="gradient-text">next</span>
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Schedule a consultation to discuss how SmartWriting can help achieve these results.
          </p>
          <Link
            href="/lets-talk"
            className="inline-block bg-gradient-to-r from-accent to-accent-deep text-white px-14 py-5 rounded-full text-xl font-bold shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Talk!
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
