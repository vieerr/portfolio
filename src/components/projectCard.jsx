import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ProjectCard = ({ name, description, tech }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="w-1/2 mx-auto">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          {tech.map((t) => (
            <Label key={t} variant="secondary">
              {t}
            </Label>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-20 justify-evenly ">
        <Button
          variant="noShadow"
          className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
        >
          Code
        </Button>
        <Button
          variant="noShadow"
          className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
        >
          Visit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
