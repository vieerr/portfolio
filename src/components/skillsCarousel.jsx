import SkillGroup from "./skillGroup";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  devOpsSkills,
  learningSkills,
} from "@/utils/info";

const SkillsCarousel = () => {
  return (
    <Carousel className="md:hidden">
      <CarouselContent>
        <CarouselItem>
          <SkillGroup skills={frontendSkills} name="Frontend Development" />
        </CarouselItem>
        <CarouselItem>
          <SkillGroup skills={backendSkills} name="Backend Development" />
        </CarouselItem>
        <CarouselItem>
          <SkillGroup skills={databaseSkills} name="Databases" />
        </CarouselItem>
        <CarouselItem>
          <SkillGroup skills={devOpsSkills} name="DevOps & Tools" />
        </CarouselItem>
        <CarouselItem>
          <SkillGroup skills={learningSkills} name="Currently Learning" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SkillsCarousel;
