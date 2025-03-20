"use client";
import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";

import { Button } from "./ui/button";
import Filter from "./filter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { projects } from "@/utils/info";
import Filters from "./projects/filters";

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedFrontend, setSelectedFrontend] = useState("All");
  const [selectedBackend, setSelectedBackend] = useState("All");
  const [selectedOther, setSelectedOther] = useState("All");
  const [selectedConcept, setSelectedConcept] = useState("All");
  
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
      <Filters/>
      <div className="hidden md:grid grid-cols-2 col-span-2 gap-7">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <div className="md:hidden">
        <Carousel className="w-full md:hidden ">
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index}>
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </TabsContent>
  );
};

export default Projects;
