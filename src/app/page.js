import Image from "next/image";

import Toggle from "@/components/toggle";

import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className=" flex flex-col items-center min-h-screen">
      <div>
        <Toggle />
        <Image alt="logo" src={"vier.svg"} width={300} height={300}></Image>
      </div>
      <div className="w-screen">
        <Projects />
      </div>
    </div>
  );
}
