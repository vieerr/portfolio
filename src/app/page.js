import { Tabs } from "@/components/ui/tabs";

import Projects from "@/components/projects/projects";
import Me from "@/components/profile/me";
import Skills from "@/components/skills/skills";
import Header from "@/components/general/header";
import Menu from "@/components/general/menu";

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
