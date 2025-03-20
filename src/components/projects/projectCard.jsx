"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const ProjectCard = ({ name, description, tech, mainImg, repository, url }) => {
  return (
    <Card className=" cursor-pointer hover:scale-105 transition-transform ">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="mx-auto">{description}</CardDescription>
      </CardHeader>
      <CardContent className=" space-y-2">
        <div className="h-64 w-full relative ">
          <Image
            className="object-contain"
            alt={`Ìmage for ${name} project`}
            src={mainImg}
            fill
          />
        </div>
        <div>
          {tech.map((t) => (
            // todo add special styles to each one
            <Badge className="mr-2" variant="neutral" key={t}>
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-20 justify-evenly ">
        <Button
          onClick={() => window.open(repository, "_blank")}
          className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
        >
          Code
        </Button>

        {url && (
          <Button
            onClick={() => window.open(url, "_blank")}
            className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
          >
            Visit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
