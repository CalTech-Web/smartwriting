import Link from "next/link";
import {
  FaGraduationCap,
  FaPen,
  FaUsers,
  FaMicrophoneAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaListOl,
  FaFlask,
  FaAward,
} from "react-icons/fa";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StaggerChildren from "@/components/StaggerChildren";

const universities = [
  "Carleton", "Carnegie Mellon", "Yale", "Centre College", "Dartmouth",
  "Williams", "Wake Forest", "Vanderbilt", "UVA", "Stanford",
  "Princeton", "UPenn", "Northwestern", "UNC", "Middlebury",
  "MIT", "Georgia Tech", "UGA", "Florida State", "Duke", "Davidson",
];

const services = [
  { icon: FaListOl, text: "Building a personalized college list" },
  { icon: FaPen, text: "Creative brainstorming and essay editing" },
  { icon: FaUsers, text: "Extracurricular and leadership planning" },
  { icon: FaMicrophoneAlt, text: "Mock interview prep and coaching" },
  { icon: FaAward, text: "Teacher recommendation strategy" },
  { icon: FaFlask, text: "Testing strategy and scheduling" },
  { icon: FaCalendarAlt, text: "Early Decision, Early Action, and application timelines" },
  { icon: FaMoneyBillWave, text: "Basic financial aid and scholarship guidance" },
  { icon: FaGraduationCap, text: "Full application lifecycle support" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Viewport Mesh Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-animated">
        {/* Floating decorative shapes */}
        <div className="hidden lg:block absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full float-slow" />
        <div className="hidden lg:block absolute bottom-32 right-16 w-24 h-24 bg-accent/10 morph-blob float-medium" />
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 border border-secondary/20 rotate-45 float-fast" />
        <div className="hidden lg:block absolute bottom-1/4 left-1/3 w-20 h-20 border border-white/5 rounded-full float-medium" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="hero-text-reveal text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-6">
              College Admissions Essay Coaching
            </p>
            <h1 className="hero-text-reveal text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8">
              Words<br />
              <span className="gradient-text">Matter.</span><br />
              They Just Do.
            </h1>
            <p className="hero-text-reveal-delay-1 text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              You&apos;ve got grades, test scores &amp; extracurriculars. What remains now
              are your essays, and packaging it all up in the best way possible.
              That&apos;s what we do.
            </p>
            <div className="hero-text-reveal-delay-2 flex flex-wrap gap-4">
              <Link
                href="/lets-talk"
                className="bg-gradient-to-r from-accent to-accent-deep text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
              >
                Let&apos;s Talk!
              </Link>
              <Link
                href="/results"
                className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                See Results
              </Link>
            </div>
          </div>

          {/* Right side decorative element */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative">
              <span className="text-[20rem] font-black text-white/5 leading-none select-none" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <p className="text-sm uppercase tracking-widest mb-2">Former Managing Editor</p>
                  <p className="text-2xl font-bold italic" style={{ fontFamily: "var(--font-display)" }}>
                    The Paris Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* University Admits - Dark Marquee Section */}
      <section className="relative py-20 bg-bg-dark diagonal-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 pt-8">
          <AnimateOnScroll animation="slide-rotate">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-secondary mb-3">
              Recent Client Admits
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Where They Got <span className="gradient-text">In</span>
            </h2>
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

      {/* About Preview - Asymmetric Layout */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorative blob */}
        <div className="hidden lg:block absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-br from-accent/5 to-secondary/5 morph-blob" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="slide-rotate" className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-mid rounded-3xl rotate-3 opacity-20" />
              <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 text-center">
                <div className="w-40 h-40 mx-auto mb-6 morph-blob bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <span className="text-white text-5xl font-black" style={{ fontFamily: "var(--font-display)" }}>HG</span>
                </div>
                <p className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Hallie Gay W. Bagley
                </p>
                <p className="text-white/60 text-sm mt-1">BA, Dartmouth &mdash; JD, Columbia</p>
                <p className="text-secondary text-sm font-semibold mt-2 italic">
                  Former Managing Editor, The Paris Review
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" delay={200} className="lg:col-span-7">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent mb-4">
                About The Coach
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                I Know How to Find<br />the <span className="gradient-text">Good Idea</span>
              </h2>
              <p className="text-text-light text-lg leading-relaxed mb-4">
                As former Managing Editor of <em>The Paris Review</em>, the renowned
                literary magazine featuring original writing and in-depth interviews
                with acclaimed writers, I&apos;ve worked with some of the best wordsmiths
                in the world.
              </p>
              <p className="text-text-light text-lg leading-relaxed mb-8">
                <em>The Paris Review</em> is where I began to develop the craft
                necessary to polish a writer&apos;s &ldquo;voice.&rdquo; It&apos;s also what helps me
                with out-of-the-box creativity and ideas for the written word.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-bold text-lg group"
              >
                Read More
                <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services - Dark Bento Grid */}
      <section className="relative py-24 bg-bg-dark diagonal-both">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <AnimateOnScroll animation="slide-rotate">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-secondary mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Full-Service <span className="gradient-text">Coaching</span>
            </h2>
          </AnimateOnScroll>

          <StaggerChildren staggerDelay={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-7 rounded-2xl card-hover-tilt group"
              >
                <service.icon className="text-accent text-2xl mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium text-lg">{service.text}</span>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* The Process - Timeline with Oversized Numbers */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="slide-rotate">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent mb-3">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-20">
              The <span className="gradient-text">Process</span>
            </h2>
          </AnimateOnScroll>

          <div className="relative">
            {/* Connecting gradient line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-accent via-primary-mid to-secondary" />

            <StaggerChildren staggerDelay={200} className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="text-8xl font-black text-accent/10 mb-4 leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  01
                </div>
                <div className="relative -mt-12 bg-bg-light border border-gray-200 rounded-2xl p-8 card-hover-tilt">
                  <h3 className="text-2xl font-bold text-primary mb-4">Schedule Your Spot</h3>
                  <p className="text-text-light leading-relaxed mb-3">
                    You can spend the rest of your senior year enjoying academics,
                    friendships and extracurriculars without college apps hanging over
                    your head.
                  </p>
                  <p className="text-text-light leading-relaxed text-sm italic">
                    The pressure is off. No more drag and kick. Simple enough.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="text-8xl font-black text-accent/10 mb-4 leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  02
                </div>
                <div className="relative -mt-12 bg-bg-light border border-gray-200 rounded-2xl p-8 card-hover-tilt">
                  <h3 className="text-2xl font-bold text-primary mb-4">Brainstorm &amp; Collaborate</h3>
                  <p className="text-text-light leading-relaxed mb-3">
                    This is a collaborative adventure. Your student writes the essays
                    while I&apos;m there supporting them and coaching their written efforts
                    throughout. They write. I coach.
                  </p>
                  <p className="text-text-light leading-relaxed text-sm italic">
                    Our goal is &ldquo;extreme likability&rdquo; and unusual topics. Remember,
                    it&apos;s all about standing out.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="text-8xl font-black text-accent/10 mb-4 leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  03
                </div>
                <div className="relative -mt-12 bg-bg-light border border-gray-200 rounded-2xl p-8 card-hover-tilt">
                  <h3 className="text-2xl font-bold text-primary mb-4">Zero to Submit</h3>
                  <p className="text-text-light leading-relaxed mb-3">
                    Your student will come with nothing and leave ready to push the
                    submit button &mdash; &ldquo;Zero to Submit.&rdquo;
                  </p>
                  <p className="text-text-light leading-relaxed text-sm italic">
                    Results are achieved quickly. Your student does not compete with
                    anyone else for my time. Because of the one-on-one time and intensity,
                    I am only able to take a limited number of clients.
                  </p>
                </div>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Testimonials Preview - Rotated Cards on Dark BG */}
      <section className="relative py-24 bg-primary overflow-hidden">
        {/* Decorative quote */}
        <div className="absolute top-10 right-10 text-[15rem] font-black text-white/[0.03] leading-none select-none" style={{ fontFamily: "var(--font-display)" }}>
          &ldquo;
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <AnimateOnScroll animation="slide-rotate">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-secondary mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              What Clients Are <span className="gradient-text">Saying</span>
            </h2>
          </AnimateOnScroll>

          <StaggerChildren staggerDelay={150} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-10 rounded-3xl md:-rotate-1 card-hover-tilt">
              <p className="text-white/80 text-lg italic leading-relaxed mb-6">
                &ldquo;Simply put, Hallie Gay is a sherpa. Instead of leading your child
                up a mountain, she uses her vast experience to guide them through
                the daunting college application process...&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                  P
                </div>
                <p className="text-white font-bold">&mdash; A Parent</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-10 rounded-3xl md:rotate-1 md:mt-8 card-hover-tilt">
              <p className="text-white/80 text-lg italic leading-relaxed mb-6">
                &ldquo;I was admitted to my first choice school &mdash; The University of
                Chicago &mdash; in addition to nine others, including Ivy Leagues, and
                I received very generous merit scholarships...&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <p className="text-white font-bold">&mdash; A Student</p>
              </div>
            </div>
          </StaggerChildren>

          <AnimateOnScroll className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-secondary font-bold text-lg group"
            >
              Read All Testimonials
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section - Bold Mesh Gradient */}
      <section className="relative py-32 mesh-gradient-animated overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        <AnimateOnScroll className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Ready to <span className="gradient-text">Stand Out</span>?
          </h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Getting your student scheduled early is important &mdash; so let&apos;s plan
            ahead. The compressed Early Admissions window fills up quickly.
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
