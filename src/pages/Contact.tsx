import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">We'd love to hear from you. Reach out for enquiries, site visits, or partnership opportunities.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground appearance-none cursor-pointer"
                >
                  <option value="">Select Subject</option>
                  <option>General Enquiry</option>
                  <option>Project Enquiry</option>
                  <option>Site Visit Request</option>
                  <option>Career Opportunity</option>
                  <option>Partnership</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button type="submit" className="gold-gradient text-primary font-semibold px-8 py-3.5 rounded hover:shadow-gold transition-all w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Head Office</h4>
                      <p className="text-sm text-muted-foreground mt-1">Level 12, Sarus Tower, Survey No. 64, HITEC City Main Road, Madhapur, Hyderabad, Telangana 500081</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Phone</h4>
                      <a href="tel:+919876543210" className="text-sm text-gold">+91 98765 43210</a>
                      <br />
                      <a href="tel:+914012345678" className="text-sm text-muted-foreground">+91 40 1234 5678</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Email</h4>
                      <a href="mailto:info@sarusrealty.com" className="text-sm text-gold">info@sarusrealty.com</a>
                      <br />
                      <a href="mailto:sales@sarusrealty.com" className="text-sm text-muted-foreground">sales@sarusrealty.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 gold-gradient text-primary font-semibold py-3 rounded flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                  <p className="font-semibold text-foreground">HITEC City, Hyderabad</p>
                  <p className="text-sm text-muted-foreground mt-1">Telangana 500081</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
