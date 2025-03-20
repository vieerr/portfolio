import { Terminal } from "lucide-react";

import { Button } from "./ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { TabsContent } from "./ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Me = () => {
  const education = [
    {
      name: "Software Engineering (currently studying)",
      institution: "Universidad de las Fuerzas Armadas ESPE",
      img: "/espe.png",
      link: "https://www.espe.edu.ec/",
    },
    {
      name: "Fullstack Open Bootcamp",
      institution: "University of Helsinki",
      img: "/helsinki.png",
      link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/9afa41cb41e70b7d7f8ed8a45c03a043",
    },
    {
      name: "CS50",
      institution: "Harvard University",
      img: "/harvard.png",
      link: "https://certificates.cs50.io/3f44e2d8-a347-4e0a-85ff-9635553ead5b.pdf?size=letter",
    },
    {
      name: "CI/CD Fullstack Open Course",
      institution: "University of Helsinki",
      img: "/helsinki.png",
      link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/8495219f6189d39ab7991121fce5a3f4",
    },
    {
      name: "GraphQL Fullstack Open Course",
      institution: "University of Helsinki",
      img: "/helsinki.png",
      link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/6f1b3cd1cb5726b68bbf3f00958f55df",
    },
    {
      name: "Typescript Fullstack Open Course",
      institution: "University of Helsinki",
      img: "/helsinki.png",
      link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/2e277f738163a8253c550efdf1bb71df",
    },
    {
      name: "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
      institution: "Udemy",
      img: "/udemy.png",
      link: "https://www.udemy.com/certificate/UC-6fe3749b-81ae-4552-92fc-261074937978/",
    },
  ];

  const languages = [
    {
      name: "English",
      level: "EF SET English Certificate (C2 Proficient)",
      url: "https://www.efset.org/cert/R2akHM",
    },
    {
      name: "Spanish",
      level: "Native",
    },
  ];

  const social = [
    {
      name: "Github",
      url: "https://github.com/vieerr",
      icon: "devicon-github-original",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/olivier-paspuel-18909b244/",
      icon: "devicon-linkedin-plain",
    },
  ];

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

          <Accordion className="w-full pt-10" type="single" collapsible>
            <AccordionItem className=" max-w-full" value="item-1">
              <AccordionTrigger className="bg-white">
                Education & certifications
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 md:px-16">
                {education.map((item, index) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <Alert
                      className={`flex hover:scale-105  items-center transition-transform cursor-pointer ${
                        index % 2 === 1 ? "" : "bg-white"
                      }`}
                    >
                      <Image
                        className="mr-5 "
                        src={item.img}
                        width={30}
                        height={30}
                        alt={`${item.institution} logo`}
                      />
                      <div>
                        <AlertTitle>{item.name}</AlertTitle>
                        <AlertDescription>{item.institution}</AlertDescription>
                      </div>
                    </Alert>
                  </a>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="w-full pt-10" type="single" collapsible>
            <AccordionItem className=" max-w-full" value="item-1">
              <AccordionTrigger className="bg-white">
                Languages
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 md:px-16">
                {languages.map((lang, index) => (
                  <a
                    href={lang.url}
                    target={`${lang.name === "spanish" ? "" : "_blank"}`}
                    rel="noreferrer"
                    key={index}
                  >
                    <Alert
                      className={`flex hover:scale-105  items-center transition-transform cursor-pointer ${
                        index % 2 === 1 ? "" : "bg-white"
                      }`}
                    >
                      <div>
                        <AlertTitle>{lang.name}</AlertTitle>
                        <AlertDescription>{lang.level}</AlertDescription>
                      </div>
                    </Alert>
                  </a>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="w-full pt-10" type="single" collapsible>
            <AccordionItem className=" max-w-full" value="item-1">
              <AccordionTrigger className="bg-white">MBTI</AccordionTrigger>
              <AccordionContent className="flex flex-row items-center justify-center gap-4 md:px-16">
                <p className="text-text text-2xl dark:text-darkText">
                  I'm an INTP ᕙ⁠(⁠⇀⁠‸⁠↼⁠‶⁠)⁠ᕗ
                </p>
                <a href="https://www.16personalities.com/intp-personality" target="_blank" rel="noreferrer">
                  <Image
                    src={"/intp.png"}
                    alt={"INTP image"}
                    width={300}
                    height={300}
                  ></Image>
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Me;
