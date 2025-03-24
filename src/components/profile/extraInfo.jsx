import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { education, languages } from "@/utils/info";

const ExtraInfo = () => {
  return (
    <>
      <Accordion className="w-full pt-10" type="single" collapsible>
        <AccordionItem className=" max-w-full" value="item-1">
          <AccordionTrigger className="bg-white">
            Education & certifications
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 md:px-16">
            {education.map((item, index) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={index}>
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
          <AccordionTrigger className="bg-white">Languages</AccordionTrigger>
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
            <a
              href="https://www.16personalities.com/intp-personality"
              target="_blank"
              rel="noreferrer"
            >
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
      <Accordion className="w-full pt-10" type="single" collapsible>
        <AccordionItem className=" max-w-full" value="item-1">
          <AccordionTrigger className="bg-white">
            Operating System
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-center gap-4 md:px-16">
            <p className="text-text text-xl dark:text-darkText">
              I used to develop on Ubuntu but I changed to{" "}
              <strong> Fedora </strong>, I chose the I3 spin because I liked the
              idea of a minimal system and since then I've in love with using
              it.
            </p>
            <Image
              src={"/os.jpg"}
              alt={"My system info (neofetch)"}
              width={300}
              height={300}
            ></Image>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ExtraInfo;
