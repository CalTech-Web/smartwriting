import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About | SmartWriting",
  description:
    "Learn about Hallie Gay W. Bagley, former Managing Editor of The Paris Review, and her college admissions essay coaching approach.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 mesh-gradient-animated text-white overflow-hidden">
        <div className="hidden lg:block absolute top-16 right-20 w-24 h-24 border border-white/10 rounded-full float-slow" />
        <div className="hidden lg:block absolute bottom-16 left-16 w-16 h-16 bg-secondary/10 morph-blob float-medium" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="hero-text-reveal text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
            Meet The Coach
          </p>
          <h1 className="hero-text-reveal text-5xl md:text-7xl font-black mb-6">About Hallie Gay</h1>
          <p className="hero-text-reveal-delay-1 text-white/70 text-xl max-w-2xl">
            Former Managing Editor of <em>The Paris Review</em>
          </p>
        </div>
      </section>

      {/* Bio Section - Asymmetric */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          {/* Profile Card */}
          <AnimateOnScroll animation="slide-rotate" className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-mid rounded-3xl rotate-3 opacity-20" />
                <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 morph-blob bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <span
                      className="text-white text-5xl font-black"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      HG
                    </span>
                  </div>
                  <p
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Hallie Gay W. Bagley
                  </p>
                  <p className="text-white/60 text-sm mt-2">BA, Dartmouth College</p>
                  <p className="text-white/60 text-sm">JD, Columbia University</p>
                  <p className="text-secondary text-sm font-semibold mt-3 italic">
                    Former Managing Editor, The Paris Review
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Bio Text */}
          <div className="lg:col-span-8 space-y-6 text-text-light leading-relaxed text-lg">
            <AnimateOnScroll animation="blur-in" delay={100}>
              <p>
                As former Managing Editor of <em>The Paris Review</em>, the renowned
                literary magazine featuring original writing and in-depth interviews
                with acclaimed writers, I&apos;ve worked with some of the best wordsmiths
                in the world.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <p>
                <em>The Paris Review</em> is where I began to develop the craft
                necessary to polish a writer&apos;s &ldquo;voice.&rdquo; It&apos;s also what helps me
                with out-of-the-box creativity and ideas for the written word.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-rotate" delay={300}>
              <p>
                With a good idea, no matter what you write, you&apos;ll stand out. We want
                that. Call it an art. Call it a skill. Probably a little bit of both.
                I just know how to uncover the good idea.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="blur-in" delay={400}>
              <p>
                Over the years, I&apos;ve adapted all these tools to help students write
                well about who they are and what matters to them in a compelling and
                attractive package.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={500}>
              <p>
                As background, I also hold a BA in English Literature from Dartmouth
                College and a Juris Doctorate from Columbia University School of Law.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-rotate" delay={600}>
              <p>
                Because of the one-on-one time and intensity of the work we&apos;ll do,
                I am only able to take a limited number of clients. The compressed
                Early Admissions window (August &ndash; November) doesn&apos;t help either.
                That&apos;s why getting your student scheduled early is important &mdash;
                so let&apos;s plan ahead.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 mesh-gradient-animated text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            I&apos;m uniquely qualified in the <span className="gradient-text">craft of writing</span>
          </h2>
          <p className="text-white/70 text-lg mb-10">
            I&apos;ll support and collaborate with existing college planning relationships. No worries.
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
