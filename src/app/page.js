import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Toggle from "@/components/toggle";
import Projects from "@/components/projects";
import Me from "@/components/me";

export default function Home() {
  return (
    <div className=" flex flex-col items-center min-h-screen">
      <div>
        <Toggle />
        <div className="flex text-white text-4xl font-bold absolute top-32 left-0 right-0 mx-auto w-full justify-around ">
          <h2>&quot;when done well, </h2>
          <h2>software is invisible&quot;</h2>
        </div>
        <Image alt="logo" src={"vier.svg"} width={300} height={300}></Image>
      </div>
      <div className="w-screen">
        <Tabs defaultValue="projects" className="w-2/3 mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="me">me</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
          </TabsList>
          <Me />
          <Projects />
        </Tabs>
      </div>
    </div>
  );
}
