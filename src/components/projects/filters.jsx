"use client";
import { useEffect, useState } from "react";
import Filter from "../filter";
import { Button } from "../ui/button";

const Filters = ({ setProjects, projects }) => {
  const clearFilters = () => {
    setSelectedLanguage("All");
    setSelectedFrontend("All");
    setSelectedBackend("All");
    setSelectedOther("All");
    setSelectedConcept("All");
  };

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

  useEffect(() => {
    setProjects(filteredProjects);
  }, [
    selectedLanguage,
    selectedFrontend,
    selectedBackend,
    selectedOther,
    selectedConcept,
  ]);

  return (
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
      <Button variant="reverse" onClick={clearFilters}>
        Clear
      </Button>
    </div>
  );
};

export default Filters;
