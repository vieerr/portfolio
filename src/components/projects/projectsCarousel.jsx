import ProjectCard from "./projectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProjectsCarousel = ({ projects }) => {
  return (
    <div className="md:hidden">
      <Carousel className="w-full md:hidden ">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
