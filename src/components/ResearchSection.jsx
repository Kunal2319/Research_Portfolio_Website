// import { researchInterests } from "@/data/content";

// export const ResearchSection = () => (
//   <section id="research" className="py-24 px-4 relative bg-secondary/30">
//     <div className="container mx-auto max-w-5xl">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//         Research <span className="text-primary">Interests</span>
//       </h2>
//       <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//         The problems I want to work on, and the experience that led me to them.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {researchInterests.map((r) => (
//           <div key={r.title} className="bg-card p-6 rounded-lg shadow-xs card-hover text-left">
//             <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
//             <p className="text-muted-foreground text-sm">{r.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// import { researchInterests } from "@/data/content";

// export const ResearchSection = () => (
//   <section id="research" className="py-24 px-4 relative bg-secondary/30">
//     <div className="container mx-auto max-w-5xl">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//         Research <span className="text-primary">Interests</span>
//       </h2>
//       <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//         The problems I want to work on, and the experience that led me to them.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {researchInterests.map((r, i) => (
//           <div
//             key={r.title}
//             className="bg-card p-6 rounded-lg shadow-xs card-hover text-left flex flex-col"
//           >
//             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary mb-4">
//               0{i + 1}
//             </span>
//             <h3 className="font-semibold text-lg mb-3 md:min-h-14">{r.title}</h3>
//             <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

import { ClipboardCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { researchInterests } from "@/data/content";

const icons = [MessagesSquare, ClipboardCheck, ShieldCheck];

export const ResearchSection = () => (
  <section id="research" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Research <span className="text-primary">Interests</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        The problems I want to work on, and the experience that led me to them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {researchInterests.map((r, i) => {
          const Icon = icons[i];
          return (
            <div
              key={r.title}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-left flex flex-col"
            >
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3 md:min-h-14">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);