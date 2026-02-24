import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Target, Eye, Users } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const timeline = [
    { year: "2014", title: "Founded", desc: "Sarus Reality was established with a vision to redefine luxury living in Hyderabad." },
    { year: "2016", title: "First Project Launch", desc: "Launched our first residential project in Gachibowli, sold out within 6 months." },
    { year: "2018", title: "Expansion", desc: "Expanded into villa developments and commercial spaces. Crossed 1M sq ft delivered." },
    { year: "2020", title: "Award-Winning", desc: "Won Best Luxury Developer award from CREDAI. Launched Sarus Heights." },
    { year: "2022", title: "Commercial Milestone", desc: "Completed Sarus Business Park in HITEC City. Crossed 3M sq ft developed." },
    { year: "2024", title: "Market Leader", desc: "Recognized as Hyderabad's most trusted luxury developer. 5000+ happy families." },
  ];

  const leadership = [
    { name: "Vikram Reddy", role: "Founder & Chairman", desc: "25+ years in real estate development" },
    { name: "Priya Menon", role: "CEO", desc: "Former VP at a Fortune 500 real estate firm" },
    { name: "Arjun Sharma", role: "VP - Projects", desc: "Delivered 20+ large-scale projects" },
    { name: "Lakshmi Devi", role: "VP - Sales & Marketing", desc: "15+ years in luxury real estate marketing" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Story</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">A decade of excellence in crafting luxury real estate that stands the test of time.</p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <img src={founderImg} alt="Founder" className="rounded-lg shadow-premium w-full max-w-md mx-auto" />
            </motion.div>
            <div>
              <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Founder's Message</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Building With Purpose</h2>
              <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                <p>"When I founded Sarus Reality in 2014, I had one simple belief — every family deserves a home that inspires them. Not just walls and roofs, but spaces that elevate daily life."</p>
                <p>"Over the past decade, we've stayed true to this vision. Every project we build carries the Sarus promise: uncompromising quality, timely delivery, and designs that stand the test of time."</p>
                <p>"As Hyderabad grows into a global city, we're committed to creating landmarks that our families will be proud of for generations."</p>
              </blockquote>
              <p className="mt-6 font-heading text-lg font-bold text-foreground">Vikram Reddy</p>
              <p className="text-gold text-sm">Founder & Chairman, Sarus Reality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <Eye className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To be India's most trusted luxury real estate developer, creating iconic landmarks that inspire communities and set new benchmarks in quality, design, and sustainability.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <Target className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">To deliver world-class living and working spaces that combine architectural excellence with sustainable practices, ensuring every Sarus project becomes a legacy for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Our Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">A Decade of Excellence</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-heading text-lg font-bold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 navy-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Our Team</p>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <div key={i} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 text-center backdrop-blur-sm">
                <div className="w-20 h-20 bg-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-heading font-bold text-primary-foreground">{person.name}</h4>
                <p className="text-gold text-sm font-medium">{person.role}</p>
                <p className="text-primary-foreground/50 text-xs mt-2">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Recognition</p>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Awards & Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Best Luxury Developer 2024 — CREDAI",
              "Most Trusted Brand — Times Awards",
              "Green Building Excellence — IGBC",
              "Best Residential Project — Realty Plus",
            ].map((award, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
                <Award className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">Join the Sarus Family</h2>
          <p className="text-primary/70 mb-8 max-w-lg mx-auto">Discover why 5000+ families trust Sarus Reality for their dream homes.</p>
          <Link to="/contact" className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded hover:bg-navy-light transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
