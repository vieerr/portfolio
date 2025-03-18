import Image from "next/image";

import Toggle from "@/components/toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";

export default function Home() {
  const projects = [
    {
      name: "Dearmom",
      description:
        "web app that lets you write letters using your voice and send them to your loved ones.",
      tech: ["React", "TailwindCSS", "Express", "MongoDB", "Google Cloud"],
    },
    {
      name: "Decoded, your personality",
      description:
        "web app with an interactive 3d test to find out what's your MBTI personality ",
      tech: ["React", "TailwindCSS", "Express", "MongoDB", "Google Cloud"],
    },
    {
      name: "Automata",
      description: "2D cellular automata simulator/interactive game ",
      tech: ["Lua", "Love2D"],
    },
    {
      name: "Pandemic",
      description:
        "simulation of the spread of a pandemic using SIR model (ODE system) ",
      tech: ["Python", "FastAPI", "Unity", "C#"],
    },
    {
      name: "Adogtame",
      description:
        " Web application to simplify the adoption process by centralizing information and facilitating communication between interested parties. ",
      tech: ["React", "Nextjs", "Express", "MongoDB", "TailwindCSS", "DaisyUI"],
    },
    {
      name: "Tecnirem",
      description: "website for a architecture & interior design company",
      tech: ["React", "Nextjs", "TailwindCSS", "DaisyUI"],
    },
  ];

  return (
    <div className=" flex flex-col items-center min-h-screen">
      <div>
        <Toggle />
        <Image alt="logo" src={"vier.svg"} width={300} height={300}></Image>
      </div>
      <div className="w-screen">
        <Tabs defaultValue="projects" className="w-2/3 mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="me">me</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
          </TabsList>
          <TabsContent value="me"></TabsContent>
          <TabsContent value="projects" className="grid grid-cols-2 gap-7">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
