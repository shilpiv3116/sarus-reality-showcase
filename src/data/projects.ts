import projectHeights from "@/assets/project-heights.jpg";
import projectVillas from "@/assets/project-villas.jpg";
import projectBusiness from "@/assets/project-business-park.jpg";

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "ongoing" | "completed" | "upcoming";
  type: string;
  location: string;
  price: string;
  area: string;
  units: string;
  image: string;
  status: string;
  rera: string;
  description: string;
  highlights: string[];
  amenities: string[];
  floorPlans: { name: string; size: string; price: string }[];
  unitsAvailable: number;
  totalUnits: number;
  completionDate: string;
  possessionDate: string;
  constructionProgress: number;
  investmentReasons: string[];
  faqs: { question: string; answer: string }[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "sarus-heights",
    name: "Sarus Heights",
    tagline: "Elevate Your Lifestyle",
    category: "ongoing",
    type: "Luxury Apartments",
    location: "Gachibowli, Hyderabad",
    price: "₹1.2 Cr - ₹2.8 Cr",
    area: "1,850 - 3,600 Sq Ft",
    units: "2, 3 & 4 BHK",
    image: projectHeights,
    status: "Under Construction",
    rera: "P02400005678",
    description: "Sarus Heights redefines luxury living in the heart of Hyderabad's IT corridor. With 24 floors of meticulously designed residences, world-class amenities, and panoramic city views, this is where modern luxury meets timeless elegance. Every apartment is crafted with premium Italian marble flooring, modular kitchens, and smart home automation.",
    highlights: [
      "24-floor premium tower",
      "Italian marble flooring",
      "Smart home automation",
      "Panoramic city views",
      "Double-height lobby",
      "3-tier security system",
      "Vaastu compliant",
      "EV charging stations"
    ],
    amenities: [
      "Infinity Pool", "Clubhouse", "Gymnasium", "Tennis Court", "Children's Play Area",
      "Jogging Track", "Meditation Garden", "Party Hall", "Business Center", "Mini Theater",
      "Spa & Sauna", "Library", "Indoor Games", "Basketball Court", "Yoga Deck",
      "Senior Citizen Park", "Pet Park", "Electric Vehicle Charging"
    ],
    floorPlans: [
      { name: "2 BHK Premium", size: "1,850 Sq Ft", price: "₹1.2 Cr" },
      { name: "3 BHK Luxury", size: "2,650 Sq Ft", price: "₹1.85 Cr" },
      { name: "3 BHK Grand", size: "3,100 Sq Ft", price: "₹2.2 Cr" },
      { name: "4 BHK Ultra Luxury", size: "3,600 Sq Ft", price: "₹2.8 Cr" },
    ],
    unitsAvailable: 28,
    totalUnits: 192,
    completionDate: "December 2026",
    possessionDate: "March 2027",
    constructionProgress: 65,
    investmentReasons: [
      "Located in Hyderabad's booming IT hub — Gachibowli",
      "5 minutes from major IT parks and Fortune 500 offices",
      "Expected 25-30% appreciation in the next 3 years",
      "Premium rental yield of 3.5-4% annually",
      "Proximity to international schools and hospitals",
      "Metro connectivity within 2 km"
    ],
    faqs: [
      { question: "What is the possession date?", answer: "Expected possession is March 2027. Construction is currently 65% complete." },
      { question: "Is home loan available?", answer: "Yes, we have tie-ups with all major banks including SBI, HDFC, ICICI, and Axis Bank with attractive interest rates." },
      { question: "What is the RERA number?", answer: "The project is RERA registered with number P02400005678." },
      { question: "Are there any hidden charges?", answer: "No hidden charges. The price includes all standard amenities. Only registration, GST, and maintenance deposit are additional." },
      { question: "Is the project Vaastu compliant?", answer: "Yes, all units are designed as per Vaastu principles." }
    ]
  },
  {
    id: "2",
    slug: "sarus-elite-villas",
    name: "Sarus Elite Villas",
    tagline: "Where Exclusivity Meets Nature",
    category: "ongoing",
    type: "Premium Villas",
    location: "Mokila, Hyderabad",
    price: "₹3.5 Cr - ₹6.5 Cr",
    area: "3,200 - 5,800 Sq Ft",
    units: "3 & 4 BHK Villas",
    image: projectVillas,
    status: "Phase 1 Ready",
    rera: "P02400008901",
    description: "Nestled amidst lush greenery in Mokila, Sarus Elite Villas offers an unparalleled living experience. Each villa is a masterpiece of contemporary architecture with private gardens, personal pools, and triple-height living rooms. Spread across 25 acres, this gated community features world-class infrastructure and 70% open spaces.",
    highlights: [
      "25-acre gated community",
      "Private pools in select villas",
      "70% open green spaces",
      "Triple-height living rooms",
      "Home theater room",
      "Smart security systems",
      "Rainwater harvesting",
      "Solar power ready"
    ],
    amenities: [
      "Olympic Pool", "Grand Clubhouse", "Golf Putting Green", "Squash Court", "Amphitheater",
      "Organic Farm", "Cycling Track", "Badminton Court", "Grand Banquet Hall", "Co-working Space",
      "Infinity Edge Pool", "Outdoor BBQ Area", "Reflexology Path", "Butterfly Garden", "Cricket Nets",
      "Multi-purpose Court", "Art Studio", "Music Room"
    ],
    floorPlans: [
      { name: "3 BHK Villa", size: "3,200 Sq Ft", price: "₹3.5 Cr" },
      { name: "4 BHK Villa", size: "4,200 Sq Ft", price: "₹4.8 Cr" },
      { name: "4 BHK Grand Villa", size: "5,000 Sq Ft", price: "₹5.5 Cr" },
      { name: "4 BHK Penthouse Villa", size: "5,800 Sq Ft", price: "₹6.5 Cr" },
    ],
    unitsAvailable: 12,
    totalUnits: 86,
    completionDate: "Phase 1 Ready | Phase 2: June 2026",
    possessionDate: "Phase 1: Immediate | Phase 2: September 2026",
    constructionProgress: 85,
    investmentReasons: [
      "Mokila is the fastest-growing luxury villa corridor in Hyderabad",
      "10 minutes from Financial District and Nanakramguda",
      "Villa prices in this area have appreciated 40% in 2 years",
      "Tax benefits on home loan interest and principal",
      "Premium gated community with world-class infrastructure",
      "Surrounded by top schools, hospitals, and entertainment zones"
    ],
    faqs: [
      { question: "Can I customize the villa interiors?", answer: "Yes, we offer customization options for interiors before the construction phase of your villa begins." },
      { question: "Is there a community management?", answer: "Yes, a professional facility management company will maintain the community with 24/7 security and housekeeping services." },
      { question: "What about water and power backup?", answer: "The community has its own borewell, water treatment plant, and 100% power backup for common areas." },
      { question: "Are pets allowed?", answer: "Yes, Sarus Elite Villas is a pet-friendly community with dedicated pet parks." }
    ]
  },
  {
    id: "3",
    slug: "sarus-business-park",
    name: "Sarus Business Park",
    tagline: "The Future of Workspaces",
    category: "completed",
    type: "Commercial Office Space",
    location: "HITEC City, Hyderabad",
    price: "₹85 Lakh - ₹15 Cr",
    area: "800 - 15,000 Sq Ft",
    units: "Office Spaces & Retail",
    image: projectBusiness,
    status: "Ready to Move",
    rera: "P02400001234",
    description: "Sarus Business Park is a Grade A+ commercial development in the heart of HITEC City. With 12 floors of premium office spaces, state-of-the-art conference facilities, and a vibrant retail podium, this is where businesses thrive. LEED Gold certified with intelligent building management systems.",
    highlights: [
      "Grade A+ commercial space",
      "LEED Gold certified",
      "Intelligent BMS",
      "High-speed elevators",
      "100% power backup",
      "5-level car parking",
      "Fiber optic connectivity",
      "Central air conditioning"
    ],
    amenities: [
      "Executive Lounge", "Conference Center", "Cafeteria", "ATM", "Pharmacy",
      "Fitness Center", "Rooftop Terrace", "Visitor Lounge", "Concierge Service", "EV Parking",
      "Retail Shops", "Food Court", "Business Center", "Prayer Room", "Day Care Center",
      "Cycling Station", "Green Terrace", "Helipad"
    ],
    floorPlans: [
      { name: "Small Office", size: "800 Sq Ft", price: "₹85 Lakh" },
      { name: "Medium Office", size: "2,500 Sq Ft", price: "₹2.5 Cr" },
      { name: "Large Office", size: "5,000 Sq Ft", price: "₹5.2 Cr" },
      { name: "Full Floor", size: "15,000 Sq Ft", price: "₹15 Cr" },
    ],
    unitsAvailable: 8,
    totalUnits: 120,
    completionDate: "Completed - September 2024",
    possessionDate: "Immediate",
    constructionProgress: 100,
    investmentReasons: [
      "HITEC City is India's top commercial real estate destination",
      "Average rental yield of 7-9% for Grade A offices",
      "Surrounded by Amazon, Google, Microsoft, and other tech giants",
      "Metro station within 500 meters",
      "Commercial property prices have grown 15% YoY",
      "LEED certification ensures lower operational costs"
    ],
    faqs: [
      { question: "Can I lease the space?", answer: "Yes, we offer both sale and lease options. Lease terms are flexible from 3 to 9 years." },
      { question: "Is there food court access?", answer: "Yes, the ground floor features a food court with 8 restaurants and a café." },
      { question: "What about parking?", answer: "5-level basement parking with 500+ spots. Each office gets allocated parking based on size." },
      { question: "Is it suitable for IT companies?", answer: "Absolutely. The building has Tier-3 fiber optic connectivity, UPS backup, and server room provisions." }
    ]
  }
];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
