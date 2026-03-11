import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Testimonials | SmartWriting",
  description:
    "Read what parents and students say about their SmartWriting college admissions essay coaching experience.",
};

const testimonials = [
  {
    text: `Simply put, Hallie Gay is a sherpa. Instead of leading your child up a mountain, she uses her vast experience to guide them through the daunting college application process. Hallie Gay's approach is both brilliant and efficient. She has a gift for helping your child see themselves in an objective light and then empowers them to articulate their journey in an authentic voice that will resonate with their top choice schools. It is hard work to put oneself down on paper, but your child will be proud of all they have accomplished at the end of their time with Hallie Gay. Parents will be grateful that the stressful and seemingly impossible task of applying to college is completed in such a short time period. Her "Zero to Submit" program means your child comes with just themselves and leaves in very short order able to push the submit button. It's quite amazing how she coaches your child so efficiently and yet it is all your child's writing. She also knows her schools and is fantastic at coaching scholarship application writing. Our student got into her first choice school (Stanford) and many other Ivies after their collaborative adventure. You won't regret using this one of a kind writing and application coach who edited The Paris Review. Your child will become a better writer too.`,
    author: "A Parent",
    highlight: "Stanford",
  },
  {
    text: `After our time together was finished, Mrs. Bagley checked in with me multiple times during decision season, and provided much-appreciated encouragement during the anxious months of waiting. At the end of the day, I was admitted to my first choice school — The University of Chicago — in addition to nine others, including Ivy Leagues, and I received very generous merit scholarships to many of them. Even now, a year into college, I can reread the essays I wrote with Hallie Gay and feel proud of them, something which is rare among first year college students! I truly enjoyed my time working with Hallie Gay, and am grateful that I was able to find such an incredible coach to help me during the grueling admissions process.`,
    author: "A Student",
    highlight: "University of Chicago",
  },
  {
    text: `Hallie Gay and SmartWriting helped me find a topic that matched perfectly with who I am. I received a letter from my first choice school saying it was one of the most memorable apps their admissions office had ever seen.`,
    author: "A Student",
    highlight: "Most memorable application",
  },
  {
    text: `SmartWriting saved my life. I did the Zero to Submit track, and in a few days and nights, I got through the Ivy League and the best of the South, and I was able to get a full merit scholarship to my #1 school. I aspired to top schools and as a musician and science guy, I just couldn't put myself on paper. She was a great writing teacher too.`,
    author: "A Student",
    highlight: "Full merit scholarship",
  },
  {
    text: `Without Mrs. Bagley, I know I couldn't have gotten in my first choice. She helped me write an essay about baking that was so unusual that I am sure it got their notice.`,
    author: "A Student",
    highlight: "First choice admission",
  },
  {
    text: `Mrs. Bagley always responded positively to my work and made me feel confident about my ability as a writer, something essential considering the importance of the essay in the world of college applications. When working on what seemed to be an undoable amount of supplemental essays (more than 25 of them), she helped me research details to ensure that each essay showed my fit for a particular school. It's not easy to write essays for applications, but I came out of my sessions with her feeling good about what I had written, and having acquired new skills as a writer and communicator. She also reviewed my Common App Activity section, and made insightful suggestions about the finer details of my applications — changes I never would have thought of myself.`,
    author: "A Student",
    highlight: "25+ supplemental essays",
  },
  {
    text: `Working with Mrs. Bagley completely transformed my application from a source of uncertainty and paranoia to a source of strength and confidence. Before working with her, I would write drafts and drafts of essays, none ever quite right. After hearing the same advice from everyone for every attempt — from "be more personal" to "use details" — I was beginning to lose hope. But Mrs. Bagley is completely different from anyone else. She coached me one-on-one to help me get my essays up to an acceptable standard. But this is not to say that she wrote my essays for me. Rather than telling me what to say, she coaxed from me what I truly wanted to tell admissions officers, helping me to put my personality on paper. Because of her help, I have several essays that I am confident will get me into some very highly-regarded institutions, and without her, this would not have been possible at all. P.S. I got into Yale, Williams, Carnegie Mellon Computer Science and many more with a lot of significant scholarships!`,
    author: "A Student",
    highlight: "Yale, Williams, CMU CS",
  },
  {
    text: `I worked with SmartWriting over the course of two months in the fall of my senior year. At first, I expected to work on only the two Common App essays, but after seeing how much my writing improved under Hallie Gay's guidance, we enlisted her to give valuable coaching with my supplemental essays as well. I wrote approximately 10 applications and 28 college essays long and short. I came into the process with a (very) rough draft. After reading the draft and discussing at length my ideas for the piece, Mrs. Bagley gave me critical feedback about how to mold my ideas into a much more original piece. She also had considerable knowledge about the college admissions process and suggested schools that were perfect for me that I had not known about.`,
    author: "A Student",
    highlight: "28 essays, 10 applications",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 mesh-gradient-animated text-white overflow-hidden">
        <div className="hidden lg:block absolute bottom-20 right-20 w-28 h-28 border-2 border-white/10 rounded-full float-slow" />
        <div className="absolute top-10 left-10 text-[12rem] font-black text-white/[0.03] leading-none select-none" style={{ fontFamily: "var(--font-display)" }}>
          &ldquo;
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="hero-text-reveal text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
            Success Stories
          </p>
          <h1 className="hero-text-reveal text-5xl md:text-7xl font-black mb-6">Testimonials</h1>
          <p className="hero-text-reveal-delay-1 text-white/70 text-xl max-w-2xl">
            What clients are saying about Hallie Gay
          </p>
        </div>
      </section>

      {/* Testimonials - Masonry-like */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll
              key={i}
              animation={i % 3 === 0 ? "slide-rotate" : i % 3 === 1 ? "blur-in" : "fade-up"}
            >
              <div
                className={`
                  relative p-10 md:p-12 rounded-3xl card-hover-tilt
                  ${i === 0
                    ? "bg-gradient-to-br from-primary to-primary-light text-white border border-white/10"
                    : "bg-white border border-gray-100"
                  }
                  ${i % 3 === 1 ? "md:-rotate-1" : i % 3 === 2 ? "md:rotate-1" : ""}
                `}
              >
                {/* Decorative quote */}
                <div
                  className={`absolute top-4 right-6 text-6xl font-black leading-none select-none ${
                    i === 0 ? "text-white/5" : "text-accent/5"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${
                      i === 0 ? "bg-accent text-white" : "bg-accent/10 text-accent"
                    }`}
                  >
                    {t.highlight}
                  </span>
                </div>
                <p
                  className={`text-lg leading-relaxed italic mb-6 ${
                    i === 0 ? "text-white/80" : "text-text-light"
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p
                  className={`text-lg font-bold ${
                    i === 0 ? "text-secondary" : "text-primary"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &mdash; {t.author}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 mesh-gradient-animated text-center overflow-hidden">
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Join our <span className="gradient-text">successful</span> students
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Schedule a consultation to learn how SmartWriting can help your student.
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
