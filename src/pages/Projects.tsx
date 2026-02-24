import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const Projects = () => {
  const [category, setCategory] = useState<string>("all");
  const [type, setType] = useState<string>("all");

  const filtered = projects.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (type !== "all" && !p.type.toLowerCase().includes(type)) return false;
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Our Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Projects</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">Explore our portfolio of luxury residences, premium villas, and world-class commercial developments across Hyderabad.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4 mb-10 bg-card p-4 rounded-lg shadow-sm">
            <SlidersHorizontal className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-foreground">Filter:</span>
            
            <div className="flex gap-2">
              {["all", "ongoing", "completed", "upcoming"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                    category === cat
                      ? "gold-gradient text-primary"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative ml-auto">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-secondary rounded px-4 py-2 text-sm appearance-none pr-8 cursor-pointer text-foreground"
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartments</option>
                <option value="villa">Villas</option>
                <option value="commercial">Commercial</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
