import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingEnquire = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 gold-gradient text-primary font-semibold px-5 py-3 rounded-full shadow-gold flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Enquire Now</span>
    </Link>
  );
};

export default FloatingEnquire;
