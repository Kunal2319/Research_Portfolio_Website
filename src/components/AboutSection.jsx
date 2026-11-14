import { GraduationCap } from "lucide-react";
import { about, stats, education, certifications, profile } from "@/data/content";

export const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-left">
          {about.map((p, i) => (
            <p key={i} className="text-muted-foreground">{p}</p>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="#contact" className="cosmic-button">Get In Touch</a>
            <a href={profile.cv} download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="gradient-border p-5 card-hover text-center">
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          {education.map((e) => (
            <div key={e.degree} className="gradient-border p-6 card-hover flex gap-4 items-start">
              <div className="p-3 rounded-full bg-primary/10"><GraduationCap className="h-6 w-6 text-primary" /></div>
              <div className="text-left">
                <h4 className="font-semibold">{e.degree}</h4>
                <p className="text-muted-foreground text-sm">{e.school} · {e.period}</p>
                <p className="text-muted-foreground text-sm">{e.detail}</p>
              </div>
            </div>
          ))}
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Certifications: </span>
            {certifications.join(" · ")}
          </div>
        </div>
      </div>
    </div>
  </section>
);