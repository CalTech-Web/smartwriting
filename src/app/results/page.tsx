import type { Metadata } from "next";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StaggerChildren from "@/components/StaggerChildren";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Results | SmartWriting",
  description: "See the impressive results of SmartWriting clients — scholarships, merit awards, and university admissions.",
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
      <section className="bg-gradient-to-br from-primary to-primary-light hero-gradient-animated text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="hero-text-reveal text-4xl md:text-5xl font-bold mb-4">Results</h1>
          <p className="hero-text-reveal-delay-1 text-gray-200 text-lg">Proven track record of student success</p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8">
          <AnimatedCounter end={11} suffix="+" label="Scholarships & Awards" />
          <AnimatedCounter end={21} suffix="+" label="University Admits" />
          <AnimatedCounter end={1} prefix="$" suffix="M+" label="In Scholarships" />
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
              Scholarships &amp; Merit Awards
            </h2>
            <p className="text-text-light text-center mb-12">
              Recent SmartWriting client scholarships and merit awards include:
            </p>
          </AnimateOnScroll>
          <StaggerChildren staggerDelay={80} className="space-y-4">
            {scholarships.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm card-hover"
              >
                <FaTrophy className="text-accent text-lg mt-1 flex-shrink-0" />
                <span className="text-text leading-relaxed">{s}</span>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* University Admits */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              University Admits
            </h2>
            <p className="text-text-light mb-4">
              Recent SmartWriting client admits include:
            </p>
            <p className="text-sm text-text-light italic mb-10">
              (And many more Public, Private and Liberal Arts Colleges Nationwide)
            </p>
          </AnimateOnScroll>
          <StaggerChildren staggerDelay={50} className="flex flex-wrap justify-center gap-4">
            {universities.map((uni) => (
              <span
                key={uni}
                className="bg-white px-6 py-3 rounded-lg shadow-sm text-sm font-semibold text-primary border border-gray-100 badge-hover"
              >
                {uni}
              </span>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm text-center">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Your student could be next
          </h2>
          <p className="text-text-light mb-8">
            Schedule a consultation to discuss how SmartWriting can help achieve these results.
          </p>
          <Link
            href="/lets-talk"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent-hover transition-colors shadow-lg btn-glow"
          >
            Let&apos;s Talk!
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
