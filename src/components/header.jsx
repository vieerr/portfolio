import Image from "next/image";

import Marquee from "./ui/marquee";
import ThemeToggle from "./themeToggle";

import { phrase } from "@/utils/info";

const Header = () => {
  return (
    <div className="flex flex-col items-center  w-full">
      <div className="flex text-white text-4xl font-bold mx-auto w-full justify-around ">
        <Marquee items={phrase} />
      </div>
      <div>
        <ThemeToggle />
        <Image alt="logo" src={"vier.svg"} width={200} height={200}></Image>
      </div>
    </div>
  );
};

export default Header;
