"use client";
import { useState } from "react";

import { TabsContent } from "@/components/ui/tabs";

import ProjectCard from "@/components/projectCard";
import Filters from "./projects/filters";
import ProjectsCarousel from "./projects/projectsCarousel";

import { projects as projectsInfo } from "@/utils/info";

const Projects = () => {
  const [projects, setProjects] = useState(projectsInfo);

  return (
    <TabsContent
      value="projects"
      className="grid grid-cols-1 md:grid-cols-2 gap-7"
    >
      <Filters projects={projectsInfo} setProjects={setProjects} />
      <div className="hidden md:grid grid-cols-2 col-span-2 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      {/* mobile only */}
      <ProjectsCarousel projects={projects} />
    </TabsContent>
  );
};

export default Projects;
