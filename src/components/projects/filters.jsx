const Filters = () => {
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
