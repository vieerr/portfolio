import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TabsContent } from "./ui/tabs";
import { LucideFileHeart } from "lucide-react";
import { LucideFlower } from "lucide-react";
import { LucideBoxes } from "lucide-react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
    {
      name: "Next.js",
      icon: "devicon-nextjs-original-wordmark",
      color: "#000000",
    },
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
    { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
    { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" },
    { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      color: "#38B2AC",
    },
    {
      name: "Styled Components",
      iconComp: <LucideFileHeart />,
      color: "#DB7093",
    },
    {
      name: "DaisyUI",
      iconComp: <LucideFlower />,
      color: "#123aaa",
    },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "devicon-nodejs-plain", color: "#68A063" },
    { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
    { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
    { name: "GraphQL", icon: "devicon-graphql-plain", color: "#E535AB" },
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
    { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
  ];

  const devOpsSkills = [
    { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
    { name: "GitHub", icon: "devicon-github-original", color: "#181717" },
    { name: "Vite", icon: "devicon-vite-plain", color: "#646CFF" },
  ];

  const learningSkills = [
    { name: "Rust", icon: "devicon-rust-plain", color: "#000000" },
    { name: "Zig", icon: "devicon-zig-plain", color: "#F7A41D" },
    { name: "Go", icon: "devicon-go-plain", color: "#00ADD8" },
    {
      name: "Microservices",
      iconComp: <LucideBoxes />,
      color: "#6C63FF",
    },
    { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },

    { name: "AWS", icon: "devicon-amazonwebservices-plain", color: "#FF9900" },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
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
    ));
  };

  return (
    <TabsContent value="skills">
      <Card className="hidden md:block w-full md:px-10 ">
        <CardHeader>
          <CardTitle className="tracking-widest flex md:text-2xl items-center">
            Skills
          </CardTitle>
          <CardDescription className="opacity-50 italic">
            Technologies and tools I work with
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Frontend Development */}
          <Card className="border-2 border-black ">
            <CardHeader>
              <CardTitle className="md:text-2xl">
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
              {renderSkills(frontendSkills)}
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="border-2 border-black ">
            <CardHeader>
              <CardTitle className="md:text-2xl">Backend Development</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
              {renderSkills(backendSkills)}
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="border-2 border-black ">
            <CardHeader>
              <CardTitle className="md:text-2xl">Databases</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
              {renderSkills(databaseSkills)}
            </CardContent>
          </Card>

          {/* DevOps & Tools */}
          <Card className="border-2 border-black ">
            <CardHeader>
              <CardTitle className="md:text-2xl">DevOps & Tools</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
              {renderSkills(devOpsSkills)}
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="md:col-span-2 border-2 border-black ">
            <CardHeader>
              <CardTitle className="md:text-2xl">Currently Learning</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
              {renderSkills(learningSkills)}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <Carousel className="md:hidden">
        <CarouselContent>
          <CarouselItem>
            {/* Frontend Development */}
            <Card className="border-2 border-black ">
              <CardHeader>
                <CardTitle className="md:text-2xl">
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 px-14 md:flex place-items-center  flex-wrap gap-2 ">
                {renderSkills(frontendSkills)}
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            {/* Backend Development */}
            <Card className="border-2 border-black ">
              <CardHeader>
                <CardTitle className="md:text-2xl">
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
                {renderSkills(backendSkills)}
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            {/* Databases */}
            <Card className="border-2 border-black ">
              <CardHeader>
                <CardTitle className="md:text-2xl">Databases</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
                {renderSkills(databaseSkills)}
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            {/* DevOps & Tools */}
            <Card className="border-2 border-black ">
              <CardHeader>
                <CardTitle className="md:text-2xl">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
                {renderSkills(devOpsSkills)}
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            {/* Currently Learning */}
            <Card className="border-2 border-black ">
              <CardHeader>
                <CardTitle className="md:text-2xl">
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 md:flex flex-wrap gap-2">
                {renderSkills(learningSkills)}
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </TabsContent>
  );
};

export default Skills;
