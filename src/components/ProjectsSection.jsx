import { ExternalLink, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/content";

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Selected <span className="text-primary">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-card p-6 rounded-lg shadow-xs card-hover text-left flex flex-col">
            <p className="text-xs text-primary mb-1">{p.context}</p>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              {p.links?.github && <a href={p.links.github} target="_blank" rel="noreferrer" aria-label="Code"><FaGithub size={20} /></a>}
              {p.links?.demo && <a href={p.links.demo} target="_blank" rel="noreferrer" aria-label="Demo"><ExternalLink size={20} /></a>}
              {p.links?.paper && <a href={p.links.paper} target="_blank" rel="noreferrer" aria-label="Paper"><FileText size={20} /></a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);