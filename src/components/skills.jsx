import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TabsContent } from "./ui/tabs";

import SkillGroup from "./skillGroup";
import SkillsCarousel from "./skillsCarousel";

import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  devOpsSkills,
  learningSkills,
} from "@/utils/info";


const Skills = () => {
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
          <SkillGroup name={"Frontend Development"} skills={frontendSkills} />
          <SkillGroup name={"Backend Development"} skills={backendSkills} />
          <SkillGroup name={"Databases"} skills={databaseSkills} />
          <SkillGroup name={"DevOps & Tools"} skills={devOpsSkills} />
          <SkillGroup name={"Currently Learning"} skills={learningSkills} />
        </CardContent>
      </Card>
      <SkillsCarousel />
    </TabsContent>
  );
};

export default Skills;
