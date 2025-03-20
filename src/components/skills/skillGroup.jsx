import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TechCard from "./techCard";

const SkillGroup = ({ skills, name }) => {
  const renderSkills = (skills) => {
    return skills.map((skill, index) => <TechCard key={index} skill={skill} />);
  };

  return (
    <Card className="border-2 border-black ">
      <CardHeader>
        <CardTitle className="md:text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 px-14  place-items-center md:grid-cols-3 md:flex flex-wrap gap-2">
        {renderSkills(skills)}
      </CardContent>
    </Card>
  );
};

export default SkillGroup;
