import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";

const Projects = () => {
  const projects = [
    {
      name: "Dearmom",
      description:
        "web app that lets you write letters using your voice and send them to your loved ones.",
      tech: ["React", "TailwindCSS", "Express", "MongoDB", "Google Cloud"],
      mainImg: "/dearmom.jpg",
      repository: "https://github.com/vieerr/dearmom",
      url: "https://dearmom.vercel.app/",
    },
    {
      name: "Decoded, your personality",
      description:
        "web app with an interactive 3d test to find out what's your MBTI personality ",
      tech: ["React", "TailwindCSS", "Express", "MongoDB", "Google Cloud"],
      mainImg: "/decoded.jpg",
      repository: "https://github.com/vieerr/decoded_personality",
      url: "https://decoded-personality.vercel.app/",
    },
    {
      name: "Automata",
      description: "2D cellular automata simulator/interactive game ",
      tech: ["Lua", "Love2D"],
      mainImg: "/automata.jpg",
      repository: "https://github.com/vieerr/automata",
      url: null,
    },
    {
      name: "Pandemic",
      description:
        "simulation of the spread of a pandemic using SIR model (ODE system) ",
      tech: ["Python", "FastAPI", "Unity", "C#"],
      mainImg: "/pandemic.jpg",
      repository: "https://pandemic-backend.vercel.app/docs",
      url: "https://pandemic-backend.vercel.app/docs",
    },
    {
      name: "Adogtame",
      description:
        " Web application to simplify the adoption process by centralizing information and facilitating communication between interested parties. ",
      tech: ["React", "Nextjs", "Express", "MongoDB", "TailwindCSS", "DaisyUI"],
      mainImg: "/adogtame.jpg",
      repository: "https://github.com/vieerr/adogtame",
      url: "https://adogtame-pi.vercel.app/",
    },
    {
      name: "Tecnirem",
      description: "website for a architecture & interior design company",
      tech: ["React", "Nextjs", "TailwindCSS", "DaisyUI"],
      mainImg: "/tecnirem.jpg",
      repository: "https://github.com/vieerr/tecnirem",
      url: "https://tecnirem-olivierpas13.vercel.app/",
    },
  ];

  return (
    <TabsContent value="projects" className="grid md:grid-cols-2 grid-cols-1 gap-7">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </TabsContent>
  );
};

export default Projects;
