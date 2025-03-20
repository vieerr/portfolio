import { Tabs } from "@/components/ui/tabs";

import Projects from "@/components/projects";
import Me from "@/components/me";
import Skills from "@/components/skills";
import Header from "@/components/header";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <Header />
      <div className="w-screen pb-10">
        <Tabs
          defaultValue="projects"
          className=" md:w-2/3 px-10 md:px-0 mx-auto"
        >
          <Menu/>
          <Me />
          <Projects />
          <Skills />
        </Tabs>
      </div>
    </div>
  );
}
