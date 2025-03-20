import { tabOptions } from "@/utils/info";
import { TabsList, TabsTrigger } from "../ui/tabs";

const Menu = () => {
  return (
    <TabsList className="grid w-full grid-cols-3 h-fit">
      {tabOptions.map((option, index) => (
        <TabsTrigger
          key={index}
          className="text-lg md:text-2xl "
          value={option}
        >
          {option}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default Menu;
