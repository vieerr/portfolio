import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div>
        <Image alt="logo" src={"vier.svg"} width={300} height={300}></Image>
      </div>
      <div className="w-screen">
        <Tabs defaultValue="projects" className="w-2/3 mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="me">me</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
          </TabsList>
          <TabsContent value="me">
            <Card>
              <CardHeader>
                <CardTitle>me</CardTitle>
                <CardDescription>
                  Make changes to your me here. Click save when youre done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="noShadow"
                  className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
                >
                  Save changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>projects</CardTitle>
                <CardDescription className="w-1/2 mx-auto">
                  {/* <Carousel className="w-1/2 mx-auto">
                    <CarouselContent className="flex ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="p-[10px]">
                            <Card className="shadow-none">
                              <CardContent className="flex aspect-square items-center justify-center p-4">
                                <span className="text-3xl font-base">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>{" "} */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current projects</Label>
                  <Input id="current" type="projects" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New projects</Label>
                  <Input id="new" type="projects" />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="noShadow"
                  className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
                >
                  Save projects
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
