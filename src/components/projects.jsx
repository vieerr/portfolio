"use client";
import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import Filter from "./filter";

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedFrontend, setSelectedFrontend] = useState("All");
  const [selectedBackend, setSelectedBackend] = useState("All");
  const [selectedOther, setSelectedOther] = useState("All");
  const [selectedConcept, setSelectedConcept] = useState("All");

  const projects = [
    {
      name: "Dearmom",
      description:
        "A voice-to-text web app designed to help children who cannot write send heartfelt letters to loved ones. Built with accessibility in mind for a software usability class project.",
      tech: [
        "React",
        "Javascript",
        "TailwindCSS",
        "Express",
        "MongoDB",
        "Google Cloud",
      ],
      concept: "Accessibility",
      mainImg: "/dearmom.jpg",
      repository: "https://github.com/vieerr/dearmom",
      url: "https://dearmom.vercel.app/",
    },
    {
      name: "Decoded, Your Personality",
      description:
        "An interactive 3D web app that reveals your MBTI personality type through a fun and engaging test. Explore your traits and share your results with friends!",
      tech: [
        "React",
        "Javascript",
        "TailwindCSS",
        "Express",
        "MongoDB",
        "Google Cloud",
      ],
      concept: "3D Graphics",
      mainImg: "/decoded.jpg",
      repository: "https://github.com/vieerr/decoded_personality",
      url: "https://decoded-personality.vercel.app/",
    },
    {
      name: "Automata",
      description:
        "A 2D cellular automata simulator and interactive game, showcasing complex patterns and behaviors through simple rules. Built with Lua and Love2D for a unique gaming experience.",
      tech: ["Lua", "Love2D"],
      concept: "Cellular Automata",
      mainImg: "/automata.jpg",
      repository: "https://github.com/vieerr/automata",
      url: null,
    },
    {
      name: "Adogtame",
      description:
        "A web app streamlining pet adoption by centralizing information and connecting adopters with shelters. Simplify the adoption process with this user-friendly platform.",
      tech: [
        "React",
        "Javascript",
        "Nextjs",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "DaisyUI",
      ],
      mainImg: "/adogtame.jpg",
      concept: "Dog adoption",
      repository: "https://github.com/vieerr/adogtame",
      url: "https://adogtame-pi.vercel.app/",
    },
    {
      name: "Pandemic",
      description:
        "A simulation of pandemic spread using the SIR model (ODE system). Visualize how diseases propagate and understand the impact of interventions with this Python and Unity-powered tool.",
      tech: ["Python", "FastAPI", "Unity", "C#"],
      mainImg: "/pandemic.jpg",
      concept: "SIR Model (ODE system)",
      repository: "https://github.com/vieerr/pandemic-backend",
      url: "https://pandemic-backend.vercel.app/docs",
    },
    {
      name: "Tecnirem",
      description:
        "A sleek and modern website for an architecture and interior design company, showcasing their portfolio and services with a clean, responsive design.",
      tech: ["React", "Javascript", "Nextjs", "TailwindCSS", "DaisyUI"],
      mainImg: "/tecnirem.jpg",
      concept: "Website",
      repository: "https://github.com/vieerr/tecnirem",
      url: "https://tecnirem-olivierpas13.vercel.app/",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesLanguage =
      selectedLanguage === "All" || project.tech.includes(selectedLanguage);
    const matchesFrontend =
      selectedFrontend === "All" || project.tech.includes(selectedFrontend);
    const matchesBackend =
      selectedBackend === "All" || project.tech.includes(selectedBackend);
    const matchesOther =
      selectedOther === "All" || project.tech.includes(selectedOther);
    const matchesConcept =
      selectedConcept === "All" || project.concept.includes(selectedConcept);

    return (
      matchesLanguage &&
      matchesFrontend &&
      matchesBackend &&
      matchesOther &&
      matchesConcept
    );
  });

  const clearFilters = () => {
    setSelectedLanguage("All");
    setSelectedFrontend("All");
    setSelectedBackend("All");
    setSelectedOther("All");
    setSelectedConcept("All");
  };

  return (
    <TabsContent
      value="projects"
      className="grid grid-cols-1 md:grid-cols-2 gap-7"
    >
      <div className="hidden col-span-2 md:flex justify-between items-center flex-wrap ">
        <Filter
          label={"Language"}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
          options={["All", "Javascript", "Lua", "Python", "C#"]}
        />

        <Filter
          label={"Frontend"}
          value={selectedFrontend}
          onChange={setSelectedFrontend}
          options={["All", "React", "Nextjs", "TailwindCSS", "DaisyUI"]}
        />

        <Filter
          label={"Backend"}
          value={selectedBackend}
          onChange={setSelectedBackend}
          options={["All", "Express", "FastAPI", "MongoDB"]}
        />
        <Filter
          label={"Concept"}
          value={selectedConcept}
          onChange={setSelectedConcept}
          options={[
            "All",
            "Accessibility",
            "3D Graphics",
            "Cellular Automata",
            "Dog adoption",
            "SIR Model (ODE system)",
            "Website",
          ]}
        />
        <Button onClick={clearFilters}>Clear</Button>
      </div>

      {filteredProjects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </TabsContent>
  );
};

export default Projects;
