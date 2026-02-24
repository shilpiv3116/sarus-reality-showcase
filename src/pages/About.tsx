import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Target, Eye, Users, Leaf } from "lucide-react";
import founderImg from "@/assets/founder.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      desc: "Sarus was founded just before the COVID-19 pandemic reshaped the world. What began as a bold vision quickly turned into a test of resilience."
    },
    {
      year: "2020",
      title: "Building Through Lockdown",
      desc: "Amid nationwide lockdowns and unprecedented challenges, we adapted swiftly — ensuring safety, efficiency, and continuity without compromising on quality."
    },
    {
      year: "2021",
      title: "Future-Ready Approach",
      desc: "The global pause became an opportunity. We redefined our construction philosophy — integrating sustainability, adaptability, and long-term resilience."
    },
    {
      year: "2023",
      title: "Sustainable Growth",
      desc: "Committed to balancing innovation with environmental responsibility, we focused on green practices and future-ready infrastructure."
    },
    {
      year: "Today",
      title: "Building Legacies",
      desc: "Today, Sarus stands as a symbol of strength, adaptability, and trust — delivering spaces built not just for today, but for generations."
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">About Sarus</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Future Ready. Built on Resilience.
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our journey began at one of the most uncertain times in modern history — and that challenge shaped who we are today.
          </p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src={founderImg}
                alt="Rajavardhan Tondapu"
                className="rounded-lg shadow-premium w-full max-w-md mx-auto"
              />
            </motion.div>
            <div>
              <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">
                Founder’s Message
              </p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Strength in Adversity
              </h2>
              <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  "Sarus was born just before COVID-19 reached Indian shores. What followed was one of the most challenging periods the real estate industry had ever faced."
                </p>
                <p>
                  "In our very first project, we encountered unprecedented obstacles. Yet, we successfully completed it — a testament to our adaptability, resilience, and commitment to excellence."
                </p>
                <p>
                  "The lockdown gave the world time to pause. For us, it was an opportunity to rethink how we build — with sustainability, long-term strength, and responsibility at the core."
                </p>
                <p>
                  "We are committed to building spaces that balance innovation with sustainability — spaces that are not only beautiful, but future-ready."
                </p>
              </blockquote>
              <p className="mt-6 font-heading text-lg font-bold text-foreground">
                Rajavardhan Tondapu
              </p>
              <p className="text-gold text-sm">
                Founder & Chairman, Sarus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <Eye className="w-10 h-10 text-gold mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm">
              To create future-ready living spaces that stand resilient against changing times while setting new benchmarks in quality and trust.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <Target className="w-10 h-10 text-gold mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm">
              To deliver projects that combine architectural excellence, operational efficiency, and sustainability — without compromising integrity.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <Leaf className="w-10 h-10 text-gold mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3">Sustainability Promise</h3>
            <p className="text-muted-foreground text-sm">
              We follow practices that strike a balance between environmental responsibility and the ability to face unforeseen global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">
              Our Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Built Through Challenge
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {item.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Building a Sustainable Future Together
          </h2>
          <p className="text-primary/70 mb-8 max-w-lg mx-auto">
            Discover how Sarus combines resilience, innovation, and responsibility in every project.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded hover:bg-navy-light transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;