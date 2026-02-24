import { Link } from "react-router-dom";
import { Search, ChevronDown, ArrowRight, Star, Award, Building2, Users, CheckCircle, Quote } from "lucide-react";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";
import ProjectCard from "@/components/shared/ProjectCard";
import EMICalculator from "@/components/shared/EMICalculator";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const Index = () => {
  const stats = [
    { value: "10+", label: "Years Experience", icon: Building2 },
    { value: "15", label: "Projects Delivered", icon: CheckCircle },
    { value: "5M+", label: "Sq Ft Developed", icon: Award },
    { value: "5000+", label: "Happy Families", icon: Users },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Homeowner, Sarus Swasthi", text: "The quality of construction and attention to detail at Sarus Swasthi is unmatched. From the Italian marble flooring to the smart home features, everything exceeds expectations. Best decision our family ever made." },
    { name: "Priya Sharma", role: "Investor", text: "I've invested in two Sarus projects and the returns have been phenomenal. Their commitment to timely delivery and premium quality makes them the most reliable developer in Hyderabad." },
    { name: "Anil Reddy", role: "Homeowner, Sarus Elite Villas", text: "Living in Sarus Elite Villas feels like a permanent vacation. The landscaping, the community, the amenities — everything is world-class. We couldn't be happier." },
  ];

  const awards = [
    "Best Luxury Developer 2024 — CREDAI",
    "Most Trusted Real Estate Brand — Times Business Awards",
    "Green Building Excellence — IGBC",
    "Best Residential Project — Realty Plus Awards",
  ];

  const whyChoose = [
    { title: "Premium Quality", desc: "Only the finest materials — Italian marble, German fittings, and Japanese engineering standards." },
    { title: "Timely Delivery", desc: "100% on-time track record across all 15 projects delivered." },
    { title: "Transparent Pricing", desc: "No hidden costs. What you see is what you pay." },
    { title: "Prime Locations", desc: "Every project is strategically located near IT hubs, schools, and hospitals." },
    { title: "After-Sales Service", desc: "Dedicated relationship managers for 2 years post-possession." },
    { title: "RERA Registered", desc: "All projects fully compliant with RERA regulations." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Sarus Reality" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeInUp} className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Premium Real Estate Developer
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Building Landmarks.{" "}
              <span className="text-gradient-gold">Creating Legacies.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
              Discover luxury apartments, premium villas, and world-class commercial spaces in Hyderabad's most coveted locations.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/projects" className="gold-gradient text-primary font-semibold px-8 py-3.5 rounded hover:shadow-gold hover:scale-105 transition-all">
                Explore Projects
              </Link>
              <Link to="/contact" className="border-2 border-gold text-gold font-semibold px-8 py-3.5 rounded hover:bg-gold/10 transition-all">
                Book a Site Visit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Search */}
      <section className="bg-card -mt-16 relative z-20 mx-4 md:mx-auto max-w-5xl rounded-lg shadow-premium p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Property Type</label>
            <div className="relative">
              <select className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground appearance-none cursor-pointer">
                <option>All Types</option>
                <option>Apartments</option>
                <option>Villas</option>
                <option>Commercial</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Location</label>
            <div className="relative">
              <select className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground appearance-none cursor-pointer">
                <option>All Locations</option>
                <option>Gachibowli</option>
                <option>HITEC City</option>
                <option>Mokila</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Budget</label>
            <div className="relative">
              <select className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground appearance-none cursor-pointer">
                <option>Any Budget</option>
                <option>Under ₹1 Cr</option>
                <option>₹1 - 3 Cr</option>
                <option>₹3 - 5 Cr</option>
                <option>Above ₹5 Cr</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="flex items-end">
            <Link to="/projects" className="w-full gold-gradient text-primary font-semibold px-6 py-2.5 rounded flex items-center justify-center gap-2 hover:shadow-gold transition-all">
              <Search className="w-4 h-4" /> Search
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeInUp} className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Our Portfolio</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground">Featured Projects</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="navy-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">The Sarus Advantage</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Choose Sarus Reality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-premium transition-shadow"
              >
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Financial Planning</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Plan Your Investment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use our EMI calculator to estimate your monthly payments and plan your dream home investment. We partner with leading banks to offer the best home loan rates.
              </p>
              <div className="bg-secondary rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-3">Home Loan Assistance</h4>
                <p className="text-sm text-muted-foreground mb-4">Get pre-approved home loans with attractive interest rates from our banking partners.</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  {["SBI", "HDFC", "ICICI", "Axis Bank", "Kotak"].map((bank) => (
                    <span key={bank} className="bg-card px-3 py-1.5 rounded font-medium">{bank}</span>
                  ))}
                </div>
              </div>
            </div>
            <EMICalculator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">What Our Residents Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10"
              >
                <Quote className="w-8 h-8 text-gold mb-4" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-gold fill-current" />)}
                </div>
                <p className="text-primary-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-primary-foreground/50 text-xs">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Recognition</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Awards & Accolades</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-lg shadow-sm border border-border">
                <Award className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Insights</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Latest from Our Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-premium transition-all group">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
                <div className="p-5">
                  <span className="text-xs text-gold font-medium uppercase">{post.category}</span>
                  <h3 className="font-heading font-bold text-foreground mt-1 mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-3">{post.date} · {post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-primary/70 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a private site visit or speak with our property consultants to find the perfect home for you and your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded hover:bg-navy-light transition-all">
              Schedule a Visit
            </Link>
            <a href="tel:+919876543210" className="bg-primary/10 text-primary font-semibold px-8 py-3.5 rounded hover:bg-primary/20 transition-all">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
