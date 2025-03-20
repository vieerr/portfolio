import { Card } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Filter = ({ label, value, onChange, options }) => {
  return (
    <Card className="shadow-none flex items-center p-2 ">
      <Label className="p-3">{label}</Label>
      <Select  value={value} onValueChange={(val) => onChange(val)}>
        <SelectTrigger className="w-fit rounded-md">
          <SelectValue placeholder="Programming Language" />
        </SelectTrigger>
        <SelectContent >
          <SelectGroup >
            <SelectLabel className="opacity-50">{label}</SelectLabel>

            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Card>
  );
};

export default Filter;
