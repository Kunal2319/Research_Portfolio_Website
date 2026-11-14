// import { ArrowDown, FileText } from "lucide-react";
// import { profile } from "@/data/content";

// export const HeroSection = () => (
//   <section
//     id="hero"
//     className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-20"
//   >
//     <div className="container max-w-4xl mx-auto text-center z-10">
//       <div className="space-y-4">
//         <img
//           src={profile.photo}
//           alt={profile.name}
//           className="mx-auto h-40 w-40 md:h-48 md:w-48 rounded-full object-cover border-4 border-primary/40 shadow-lg opacity-0 animate-fade-in"
//         />
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//           <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//           <span className="text-primary opacity-0 animate-fade-in-delay-1"> {profile.firstName}</span>
//           <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {profile.lastName}</span>
//         </h1>
//         <p className="text-primary font-medium opacity-0 animate-fade-in-delay-2">
//           {profile.tagline}
//         </p>
//         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//           {profile.intro}
//         </p>
//         <div className="pt-4 flex flex-wrap justify-center items-center gap-4 opacity-0 animate-fade-in-delay-4">
//           <a href="#research" className="cosmic-button">Research Interests</a>
//           <a
//             href={profile.cv}
//             download
//             className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
//           >
//             <FileText size={16} /> Download CV
//           </a>
//         </div>
//       </div>
//     </div>

//     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
//       <span className="text-sm text-muted-foreground mb-2">Scroll</span>
//       <ArrowDown className="h-5 w-5 text-primary" />
//     </div>
//   </section>
// );

import { ArrowDown, FileText } from "lucide-react";
import { profile } from "@/data/content";

export const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-svh flex flex-col items-center justify-center px-4 pt-16 pb-20"
  >
    <div className="container max-w-4xl mx-auto text-center z-10">
      <div className="space-y-3">
        <img
          src={profile.photo}
          alt={profile.name}
          className="mx-auto h-36 w-36 md:h-44 md:w-44 rounded-full object-cover border-4 border-primary/40 shadow-lg opacity-0 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1"> {profile.firstName}</span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {profile.lastName}</span>
        </h1>
        <p className="text-sm md:text-base text-primary font-medium opacity-0 animate-fade-in-delay-2">
          {profile.tagline}
        </p>
        <p className="text-[clamp(0.95rem,2.2svh,1.125rem)] text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          {profile.intro}
        </p>
        <div className="pt-2 flex flex-wrap justify-center items-center gap-4 opacity-0 animate-fade-in-delay-4">
          <a href="#research" className="cosmic-button">Research Interests</a>
          <a
            href={profile.cv}
            download
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
          >
            <FileText size={16} /> Download CV
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  </section>
);
