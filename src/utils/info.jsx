import { LucideFileHeart } from "lucide-react";
import { LucideFlower } from "lucide-react";
import { LucideBoxes } from "lucide-react";

export const tabOptions = ["me", "projects", "skills"];

export const phrase = [
  '"When',
  "done",
  "well,",
  "software",
  "is",
  'invisible."',
  "- Bjarne",
  "Stroustrup",
];

export const projects = [
  {
    name: "Dearmom",
    description:
      "A voice-to-text web app designed to help children who cannot write send heartfelt letters to loved ones. Built with accessibility in mind for a software usability class project.",
    tech: [
      "React",
      "Javascript",
      "TailwindCSS",
      "Express",
      "MongoDB",
      "Google Cloud",
    ],
    concept: "Accessibility",
    mainImg: "/dearmom.jpg",
    repository: "https://github.com/vieerr/dearmom",
    url: "https://dearmom.vercel.app/",
  },
  {
    name: "Decoded, Your Personality",
    description:
      "An interactive 3D web app that reveals your MBTI personality type through a fun and engaging test. Explore your traits and share your results with friends!",
    tech: [
      "React",
      "Javascript",
      "TailwindCSS",
      "Express",
      "MongoDB",
      "Google Cloud",
    ],
    concept: "3D Graphics",
    mainImg: "/decoded.jpg",
    repository: "https://github.com/vieerr/decoded_personality",
    url: "https://decoded-personality.vercel.app/",
  },
  {
    name: "Automata",
    description:
      "A 2D cellular automata simulator and interactive game, showcasing complex patterns and behaviors through simple rules. Built with Lua and Love2D for a unique gaming experience.",
    tech: ["Lua", "Love2D"],
    concept: "Cellular Automata",
    mainImg: "/automata.jpg",
    repository: "https://github.com/vieerr/automata",
    url: null,
  },
  {
    name: "Adogtame",
    description:
      "A web app streamlining pet adoption by centralizing information and connecting adopters with shelters. Simplify the adoption process with this user-friendly platform.",
    tech: [
      "React",
      "Javascript",
      "Nextjs",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "DaisyUI",
    ],
    mainImg: "/adogtame.jpg",
    concept: "Dog adoption",
    repository: "https://github.com/vieerr/adogtame",
    url: "https://adogtame-pi.vercel.app/",
  },
  {
    name: "Pandemic",
    description:
      "A simulation of pandemic spread using the SIR model (ODE system). Visualize how diseases propagate and understand the impact of interventions with this Python and Unity-powered tool.",
    tech: ["Python", "FastAPI", "Unity", "C#"],
    mainImg: "/pandemic.jpg",
    concept: "SIR Model (ODE system)",
    repository: "https://github.com/vieerr/pandemic-backend",
    url: "https://pandemic-backend.vercel.app/docs",
  },
  {
    name: "Tecnirem",
    description:
      "A sleek and modern website for an architecture and interior design company, showcasing their portfolio and services with a clean, responsive design.",
    tech: ["React", "Javascript", "Nextjs", "TailwindCSS", "DaisyUI"],
    mainImg: "/tecnirem.jpg",
    concept: "Website",
    repository: "https://github.com/vieerr/tecnirem",
    url: "https://tecnirem-olivierpas13.vercel.app/",
  },
];

export const education = [
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

export const languages = [
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

export const social = [
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

export const frontendSkills = [
  { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
  {
    name: "Next.js",
    icon: "devicon-nextjs-original-wordmark",
    color: "#000000",
  },
  { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
  { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
  { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" },
  { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain",
    color: "#38B2AC",
  },
  {
    name: "Styled Components",
    iconComp: <LucideFileHeart />,
    color: "#DB7093",
  },
  {
    name: "DaisyUI",
    iconComp: <LucideFlower />,
    color: "#123aaa",
  },
];

export const backendSkills = [
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "#68A063" },
  { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
  { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
  { name: "GraphQL", icon: "devicon-graphql-plain", color: "#E535AB" },
];

export const databaseSkills = [
  { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
  { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
];

export const devOpsSkills = [
  { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
  { name: "GitHub", icon: "devicon-github-original", color: "#181717" },
  { name: "Vite", icon: "devicon-vite-plain", color: "#646CFF" },
];

export const learningSkills = [
  { name: "Rust", icon: "devicon-rust-plain", color: "#000000" },
  { name: "Zig", icon: "devicon-zig-plain", color: "#F7A41D" },
  { name: "Go", icon: "devicon-go-plain", color: "#00ADD8" },
  {
    name: "Microservices",
    iconComp: <LucideBoxes />,
    color: "#6C63FF",
  },
  { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },

  { name: "AWS", icon: "devicon-amazonwebservices-plain", color: "#FF9900" },
];
