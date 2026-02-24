import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { MapPin, ArrowRight } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group bg-card rounded-lg overflow-hidden shadow-premium hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            project.category === "ongoing" ? "gold-gradient text-primary" :
            project.category === "completed" ? "bg-green-600 text-primary-foreground" :
            "bg-primary text-primary-foreground"
          }`}>
            {project.category === "ongoing" ? "Ongoing" : project.category === "completed" ? "Completed" : "Upcoming"}
          </span>
        </div>
        {project.unitsAvailable < 30 && (
          <div className="absolute top-3 right-3 bg-red-600 text-primary-foreground text-xs font-bold px-2 py-1 rounded">
            Limited Units
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-foreground mb-1">{project.name}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
          <MapPin className="w-3 h-3" /> {project.location}
        </p>
        <p className="text-sm text-muted-foreground mb-3">{project.type} · {project.units}</p>
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-gold text-lg">{project.price}</span>
          <span className="text-sm text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
