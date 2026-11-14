import { useState } from "react";
import { cn } from "@/lib/utils";
import { experience } from "@/data/content";

const filters = ["All", "Research", "Professional"];

export const ExperienceSection = () => {
  const [active, setActive] = useState("All");
  const items = experience.filter((e) => active === "All" || e.type === active);

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span>
        </h2>
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                active === f ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative border-l-2 border-primary/30 ml-3 space-y-10">
          {items.map((e) => (
            <div key={e.org + e.period} className="pl-8 relative">
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary" />
              <div className="bg-card p-6 rounded-lg shadow-xs card-hover text-left">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                <p className="text-primary text-sm mb-3">{e.org} · {e.place}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};