import { skills } from "@/data/content";

export const SkillsSection = () => (
  <section id="skills" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Technical <span className="text-primary">Skills</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="bg-card p-6 rounded-lg shadow-xs card-hover text-left">
            <h3 className="font-semibold mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="px-3 py-1 text-sm border rounded-full bg-secondary text-secondary-foreground">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);