import { Terminal } from "lucide-react";

import { Button } from "./ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
import { TabsContent } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { social } from "@/utils/info";
import ExtraInfo from "./extraInfo";

const Me = () => {
  return (
    <TabsContent value="me">
      <Card className="w-full md:p-20 md:pt-5">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-40 h-40">
            <AvatarImage src="/pfp.jpg" />
            <AvatarFallback>OP</AvatarFallback>
          </Avatar>

          <CardTitle className="tracking-widest flex text-2xl items-center">
            <Terminal className="h-7 w-7 mr-4" /> Hi!&nbsp;
            <Label>I'm Olivier Paspuel</Label>
          </CardTitle>
          <CardDescription className="flex  flex-col items-center">
            <p className="opacity-50 italic">Based in Quito, Ecuador. </p>

            <div className="flex gap-3 mt-2">
              {social.map((item, index) => (
                <a href={item.url} target="_blank" rel="noreferrer" key={index}>
                  <Button key={index}>
                    <i className={`${item.icon} text-2xl `}></i>
                    <Label className="cursor-pointer">{item.name}</Label>
                  </Button>
                </a>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            I love to{" "}
            <Label>learn new concepts, solve problems and build things </Label>.
            I'm passionate about web technologies and I'm always looking for new
            challenges. I'm currently studying software engineering at{" "}
            <a href="https://www.espe.edu.ec/" target="_blank" rel="noreferrer">
              <Label className="cursor-pointer">
                Universidad de las Fuerzas Armadas ESPE.
              </Label>
            </a>
          </p>
          <ExtraInfo/>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Me;
