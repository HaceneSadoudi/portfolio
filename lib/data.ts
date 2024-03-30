import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { PiFigmaLogoThin } from "react-icons/pi";

import FayrouzKhan from "@/public/FayrouzKhan.png";
import PomodoroTimer from "@/public/PomodoroTimer.png";
import UrlShortner from "@/public/UrlShortner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
interface ExperienceType {
  title: string;
  location: string;
  description: string;
  icon: any;
  date: string;
}
interface ProjectsType {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  demo: string;
}
export const experiencesData: ExperienceType[] = [
];

export const projectsData: ProjectsType[] = [
] ;

export const skillsData = [
  { name: "HTML", imageUrl: "/Icons/html.svg" },
  { name: "CSS", imageUrl: "/Icons/css.svg" },
  { name: "Saas", imageUrl: "/Icons/saas.svg" },
  { name: "JavaScript", imageUrl: "/Icons/javascript.svg" },
  { name: "TypeScript", imageUrl: "/Icons/typescript.svg" },
  { name: "React", imageUrl: "/Icons/react.svg" },
  { name: "Next.js", imageUrl: "/Icons/nextjs.svg" },
  { name: "Node.js", imageUrl: "/Icons/nodejs.svg" },
  { name: "Express.js", imageUrl: "/Icons/express.svg" },
  { name: "MongoDB", imageUrl: "/Icons/mongodb.svg" },
  { name: "Linux.js", imageUrl: "/Icons/linux.svg" },
  { name: "Docker.js", imageUrl: "/Icons/docker.svg" },
  { name: "SQL", imageUrl: "/Icons/sql.svg" },
  { name: "Git", imageUrl: "/Icons/git.svg" },
  { name: "Tailwind", imageUrl: "/Icons/tailwind.svg" },
  { name: "Bootstrap", imageUrl: "/Icons/bootstrap.svg" },
  { name: "Figma", imageUrl: "/Icons/figma.svg" },
  { name: "Photoshop", imageUrl: "/Icons/photoshop.svg" },
  { name: "Canva", imageUrl: "/Icons/canva.svg" },
] as const;

const social_media = [
  {
    id: 1,
    name: "whatsapp",
  },
];

export default social_media;
