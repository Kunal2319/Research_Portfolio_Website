import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/content";

const contacts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  profile.phone && {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[\s-]/g, "")}`,
  },
  { icon: FaLinkedin, label: "LinkedIn", value: "View profile", href: profile.linkedin },
  profile.github && { icon: FaGithub, label: "GitHub", value: "View repositories", href: profile.github },
  { icon: MapPin, label: "Location", value: profile.location },
].filter(Boolean);

export const ContactSection = () => (
  <section id="contact" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Happy to discuss research, collaborations or opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">{label}</h3>
                <p className="text-muted-foreground text-sm break-words">{value}</p>
              </div>
            </div>
          );
          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="bg-card p-6 rounded-lg shadow-xs card-hover hover:text-primary transition-colors"
            >
              {content}
            </a>
          ) : (
            <div key={label} className="bg-card p-6 rounded-lg shadow-xs">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);