import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About | SmartWriting",
  description: "Learn about Hallie Gay W. Bagley, former Managing Editor of The Paris Review, and her college admissions essay coaching approach.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light hero-gradient-animated text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="hero-text-reveal text-4xl md:text-5xl font-bold mb-4">About Hallie Gay</h1>
          <p className="hero-text-reveal-delay-1 text-gray-200 text-lg">Former Managing Editor of <em>The Paris Review</em></p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile */}
            <AnimateOnScroll animation="scale-in" className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-56 h-56 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-6xl font-bold">HG</span>
              </div>
              <p className="text-center mt-4 font-semibold text-primary">Hallie Gay W. Bagley</p>
              <p className="text-center text-sm text-text-light">BA, Dartmouth College</p>
              <p className="text-center text-sm text-text-light">JD, Columbia University</p>
            </AnimateOnScroll>

            {/* Bio Text */}
            <div className="space-y-5 text-text-light leading-relaxed text-lg">
              <AnimateOnScroll delay={100}>
                <p>
                  As former Managing Editor of <em>The Paris Review</em>, the renowned
                  literary magazine featuring original writing and in-depth interviews
                  with acclaimed writers, I&apos;ve worked with some of the best wordsmiths
                  in the world.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p>
                  <em>The Paris Review</em> is where I began to develop the craft
                  necessary to polish a writer&apos;s &ldquo;voice.&rdquo; It&apos;s also what helps me
                  with out-of-the-box creativity and ideas for the written word.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <p>
                  With a good idea, no matter what you write, you&apos;ll stand out. We want
                  that. Call it an art. Call it a skill. Probably a little bit of both.
                  I just know how to uncover the good idea.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <p>
                  Over the years, I&apos;ve adapted all these tools to help students write
                  well about who they are and what matters to them in a compelling and
                  attractive package.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={500}>
                <p>
                  As background, I also hold a BA in English Literature from Dartmouth
                  College and a Juris Doctorate from Columbia University School of Law.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={600}>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm text-center">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            I&apos;m uniquely qualified in the craft of writing
          </h2>
          <p className="text-text-light mb-8">
            I&apos;ll support and collaborate with existing college planning relationships. No worries.
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
