import Link from "next/link";
import { FaGraduationCap, FaPen, FaUsers, FaMicrophoneAlt, FaCalendarAlt, FaMoneyBillWave, FaListOl, FaFlask, FaAward } from "react-icons/fa";

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            College Admissions Essay<br />Coaching and Planning
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 leading-relaxed">
            Words matter. They just do. College admissions is highly competitive.
            You&apos;ve got grades, test scores &amp; extracurriculars. What remains now
            are your essays, and packaging it all up in the best way possible.
            That&apos;s what we do.
          </p>
          <Link
            href="/lets-talk"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Let&apos;s Talk!
          </Link>
        </div>
      </section>

      {/* University Logos / Admits */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Recent Client Admits
          </h2>
          <p className="text-text-light mb-10">
            Our students have been admitted to these prestigious institutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {universities.map((uni) => (
              <span
                key={uni}
                className="bg-white px-5 py-3 rounded-lg shadow-sm text-sm font-semibold text-primary border border-gray-100 hover:shadow-md transition-shadow"
              >
                {uni}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">HG</span>
              </div>
              <p className="text-primary font-semibold text-lg">Hallie Gay W. Bagley</p>
              <p className="text-text-light text-sm">Former Managing Editor</p>
              <p className="text-text-light text-sm italic">The Paris Review</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Hallie Gay
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              As former Managing Editor of <em>The Paris Review</em>, the renowned
              literary magazine featuring original writing and in-depth interviews
              with acclaimed writers, I&apos;ve worked with some of the best wordsmiths
              in the world.
            </p>
            <p className="text-text-light leading-relaxed mb-6">
              <em>The Paris Review</em> is where I began to develop the craft
              necessary to polish a writer&apos;s &ldquo;voice.&rdquo; It&apos;s also what helps me
              with out-of-the-box creativity and ideas for the written word.
            </p>
            <Link
              href="/about"
              className="text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Full-Service Coaching
          </h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Comprehensive support through every step of the college application process
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <service.icon className="text-accent text-xl mt-1 flex-shrink-0" />
                <span className="text-text font-medium">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            The Process
          </h2>
          <p className="text-text-light text-center mb-16 max-w-2xl mx-auto">
            A simple, proven approach to transform your college applications
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Schedule Your Spot</h3>
              <p className="text-text-light leading-relaxed mb-3">
                You can spend the rest of your senior year enjoying academics,
                friendships and extracurriculars without college apps hanging over
                your head.
              </p>
              <p className="text-text-light leading-relaxed text-sm italic">
                The pressure is off. No more drag and kick. Simple enough.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Brainstorm &amp; Collaborate</h3>
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

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Zero to Submit</h3>
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
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-text-light mb-12 max-w-2xl mx-auto">
            Hear from parents and students about their SmartWriting experience
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-left">
              <p className="text-text-light leading-relaxed italic mb-4">
                &ldquo;Simply put, Hallie Gay is a sherpa. Instead of leading your child
                up a mountain, she uses her vast experience to guide them through
                the daunting college application process...&rdquo;
              </p>
              <p className="text-primary font-semibold">&mdash; A Parent</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-left">
              <p className="text-text-light leading-relaxed italic mb-4">
                &ldquo;I was admitted to my first choice school &mdash; The University of
                Chicago &mdash; in addition to nine others, including Ivy Leagues, and
                I received very generous merit scholarships...&rdquo;
              </p>
              <p className="text-primary font-semibold">&mdash; A Student</p>
            </div>
          </div>

          <Link
            href="/testimonials"
            className="inline-block mt-10 text-accent font-semibold hover:text-accent-hover transition-colors text-lg"
          >
            Read All Testimonials &rarr;
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Getting your student scheduled early is important &mdash; so let&apos;s plan
            ahead. The compressed Early Admissions window (August &ndash; November)
            fills up quickly.
          </p>
          <Link
            href="/lets-talk"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Let&apos;s Talk!
          </Link>
        </div>
      </section>
    </>
  );
}
