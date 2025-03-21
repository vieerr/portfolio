import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const TechCard = ({index, skill}) => {
  return (
    <Dialog key={index} className="w-full">
      <DialogTrigger
        asChild
        className="flex md:hidden md:w-fit transition-all hover:scale-105 hover:shadow-lg"
        style={{
          backgroundColor: skill.color || "#FFFFFF",
          color: "#FFFFFF",
        }}
      >
        <Button className=" flex-col md:gap-2 items-center w-full h-16">
          {skill.icon ? (
            <i className={`text-3xl ${skill.icon}`}></i>
          ) : (
            skill.iconComp
          )}
          <span className="hidden md:inline-block text-sm md:text-lg font-semibold break-all">
            {skill.name}
          </span>
        </Button>
      </DialogTrigger>
      <Button
        style={{
          backgroundColor: skill.color || "#FFFFFF",
          color: "#FFFFFF",
        }}
        className="hidden md:flex cursor-default flex-col md:gap-2 items-center w-fit h-20"
      >
        {skill.icon ? (
          <i className={`text-xl md:text-2xl ${skill.icon}`}></i>
        ) : (
          skill.iconComp
        )}
        <span className="hidden md:inline-block text-sm md:text-lg font-semibold break-all">
          {skill.name}
        </span>
      </Button>

      <DialogContent className="md:hidden w-fit p-10">
        <DialogHeader>
          <DialogTitle className="text-center">{skill.name}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TechCard;
