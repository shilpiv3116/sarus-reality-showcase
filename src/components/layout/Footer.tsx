import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/sarus-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Sarus" className="h-10 brightness-0 invert" />
              <span className="text-gold font-heading text-lg font-semibold">Realty</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Hyderabad's premier luxury real estate developer. Building landmarks and creating legacies since 2019.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-primary-foreground/40 hover:text-gold text-xs transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Projects", to: "/projects" },
                { label: "About Us", to: "/about" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Our Projects</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Sarus Swasthi", to: "/projects/sarus-heights" },
                { label: "Sarus Elite Villas", to: "/projects/sarus-elite-villas" },
                { label: "Sarus Business Park", to: "/projects/sarus-business-park" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Level 12, Sarus Tower, HITEC City, Hyderabad, Telangana 500081</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@sarusrealty.com" className="hover:text-gold transition-colors">info@sarusrealty.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/40">
          <p>© 2025 Sarus Realty. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
