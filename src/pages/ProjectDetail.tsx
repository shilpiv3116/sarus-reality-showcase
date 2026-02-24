import { useParams, Link } from "react-router-dom";
import { getProjectBySlug, projects } from "@/data/projects";
import { MapPin, Phone, Download, CheckCircle, ChevronDown, ChevronUp, Building2, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import EMICalculator from "@/components/shared/EMICalculator";
import ProjectCard from "@/components/shared/ProjectCard";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-gold font-medium">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const similarProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <span className="gold-gradient text-primary text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
            {project.status}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{project.name}</h1>
          <p className="text-primary-foreground/70 text-lg mb-2">{project.tagline}</p>
          <p className="text-primary-foreground/60 flex items-center gap-1"><MapPin className="w-4 h-4" /> {project.location}</p>
          <div className="flex flex-wrap gap-6 mt-6 text-primary-foreground/80 text-sm">
            <span><strong className="text-gold">{project.price}</strong></span>
            <span>{project.area}</span>
            <span>{project.units}</span>
            <span>RERA: {project.rera}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Project Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-secondary p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Construction Progress */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Construction Progress</h2>
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Completion</span>
                  <span className="font-bold text-gold">{project.constructionProgress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="gold-gradient h-3 rounded-full transition-all" style={{ width: `${project.constructionProgress}%` }} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div><span className="text-muted-foreground">Expected Completion:</span><br /><strong className="text-foreground">{project.completionDate}</strong></div>
                  <div><span className="text-muted-foreground">Possession:</span><br /><strong className="text-foreground">{project.possessionDate}</strong></div>
                </div>
              </div>
            </section>

            {/* Inventory Status */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Live Inventory Status</h2>
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{project.unitsAvailable} of {project.totalUnits} units available</span>
                  {project.unitsAvailable < 30 && (
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-1 rounded">⚡ Limited Units Available</span>
                  )}
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-destructive h-2 rounded-full" style={{ width: `${((project.totalUnits - project.unitsAvailable) / project.totalUnits) * 100}%` }} />
                </div>
              </div>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-secondary rounded-lg text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </section>

            {/* Floor Plans */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Floor Plans & Pricing</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left p-3 rounded-tl-lg">Configuration</th>
                      <th className="text-left p-3">Size</th>
                      <th className="text-left p-3 rounded-tr-lg">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.floorPlans.map((fp, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="p-3 font-medium text-foreground">{fp.name}</td>
                        <td className="p-3 text-muted-foreground">{fp.size}</td>
                        <td className="p-3 font-bold text-gold">{fp.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Master Plan */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Master Plan</h2>
              <div className="bg-secondary rounded-lg p-12 text-center">
                <Building2 className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-muted-foreground">Master plan available on request. Contact our team for detailed layout plans.</p>
                <Link to="/contact" className="inline-block mt-4 gold-gradient text-primary font-semibold px-6 py-2.5 rounded">
                  Request Master Plan
                </Link>
              </div>
            </section>

            {/* Why Invest */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Invest in This Location</h2>
              <div className="space-y-3">
                {project.investmentReasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 bg-secondary p-4 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Location Map */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Location</h2>
              <div className="bg-secondary rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                  <p className="font-semibold text-foreground">{project.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">Interactive map available on site visit</p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {project.faqs.map((faq, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-foreground text-sm">{faq.question}</span>
                      {openFaq === i ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* EMI Calculator */}
            <EMICalculator />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enquiry Form - Sticky */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card rounded-lg p-6 shadow-premium border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Interested in {project.name}?</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-secondary rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  <button className="w-full gold-gradient text-primary font-semibold py-3 rounded hover:shadow-gold transition-all">
                    Send Enquiry
                  </button>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded flex items-center justify-center gap-1">
                    <Download className="w-4 h-4" /> Brochure
                  </button>
                  <button className="flex-1 bg-secondary text-foreground text-sm font-medium py-2.5 rounded flex items-center justify-center gap-1">
                    <Download className="w-4 h-4" /> Cost Sheet
                  </button>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border mt-6">
                <h4 className="font-semibold text-foreground mb-3">Book a Site Visit</h4>
                <p className="text-sm text-muted-foreground mb-4">Schedule a personalized tour with our property consultant.</p>
                <input type="date" className="w-full bg-secondary rounded px-3 py-2.5 text-sm mb-3 text-foreground" />
                <Link to="/contact" className="block w-full text-center gold-gradient text-primary font-semibold py-2.5 rounded">
                  Schedule Visit
                </Link>
              </div>

              <div className="bg-card rounded-lg p-5 shadow-sm border border-border mt-6 text-center">
                <Phone className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Speak with our consultant</p>
                <a href="tel:+919876543210" className="text-gold font-bold text-lg">+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Projects */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {similarProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
