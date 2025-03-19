import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Toggle from "@/components/toggle";
import Projects from "@/components/projects";
import Me from "@/components/me";
import Skills from "@/components/skills";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  const items = ['"When', "done", "well,", "software", "is", 'invisible."'];
  return (
    <div className=" flex flex-col items-center min-h-screen ">
      <div className="flex text-white text-4xl font-bold mx-auto w-full justify-around ">
        <Marquee items={items} />
      </div>
      <div>
        <Toggle />

        <Image alt="logo" src={"vier.svg"} width={200} height={200}></Image>
      </div>
      <div className="w-screen pb-10">
        <Tabs defaultValue="projects" className=" md:w-2/3 px-10 md:px-0 mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-fit">
            <TabsTrigger className="text-lg md:text-2xl " value="me">
              me
            </TabsTrigger>
            <TabsTrigger className="text-lg md:text-2xl " value="projects">
              projects
            </TabsTrigger>
            <TabsTrigger className="text-lg md:text-2xl " value="skills">
              skills
            </TabsTrigger>
          </TabsList>
          <Me />
          <Projects />
          <Skills />
        </Tabs>
      </div>
    </div>
  );
}
