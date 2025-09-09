import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
export const skills = [
  {
    icon: (
      <FaHtml5 className="text-orange-500 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "HTML",
  },
  {
    icon: (
      <FaCss3 className="text-blue-500 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "CSS",
  },
  {
    icon: (
      <IoLogoJavascript className="text-yellow-400 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "JavaScript",
  },
  {
    icon: (
      <FaReact className="text-cyan-400 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "React JS",
  },
  {
    icon: (
      <FaNode className="text-green-600 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "Node JS",
  },
  {
    icon: (
      <SiExpress className="text-gray-500 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "Express JS",
  },
  {
    icon: (
      <SiMongodb className="text-green-700 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "MongoDB",
  },
  {
    icon: (
      <SiTypescript className="text-blue-600 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "TypeScript",
  },
  {
    icon: (
      <SiTailwindcss className="text-sky-400 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "Tailwind CSS",
  },
  {
    icon: (
      <SiNextdotjs className="text-gray-400 text-3xl lg:size-20 md:size-16 sm:size-15 size-14 " />
    ),
    label: "Next JS",
  },
];
