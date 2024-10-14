"use client";

import {
    SiDocker,
    SiGit,
    SiGo,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiBootstrap,
    SiCplusplus,
    SiC,
    SiPostgresql,
    SiKubernetes,
    SiHtml5,
    SiCss3,
    SiSass,
    SiAwsorganizations,
    SiRedis,
    SiSolid,
    SiVoidlinux,
    SiRabbitmq,
    SiNatsdotio,
    SiJavascript,
    SiExpress,
    SiGithub,
    SiVercel,
    SiMui,
} from "react-icons/si";
import Title from "./ui/title";
import { SkillsCards } from "./ui/skills-cards";

const skills = [
    {
        text: "JavaScript",
        icon: SiJavascript, // You might want to use a different icon if available
    },
    {
        text: "TypeScript",
        icon: SiTypescript,
    },
    {
        text: "Node.js",
        icon: SiNodedotjs,
    },
    {
        text: "Nest.js",
        icon: SiNestjs,
    },
    {
        text: "Express.js",
        icon: SiExpress, // Use an appropriate icon if available
    },
    {
        text: "Redis",
        icon: SiRedis,
    },
    {
        text: "GoLang",
        icon: SiGo,
    },
    {
        text: "Docker",
        icon: SiDocker,
    },
    {
        text: "Kubernetes",
        icon: SiKubernetes,
    },
    {
        text: "Git",
        icon: SiGit,
    },
    {
        text: "Github",
        icon: SiGithub,
    },
    {
        text: "OS",
        icon: SiVoidlinux,
    },
    {
        text: "SOLID",
        icon: SiSolid,
    },
    {
        text: "MySQL",
        icon: SiMysql,
    },
    {
        text: "MongoDB",
        icon: SiMongodb,
    },
    {
        text: "PostgreSQL",
        icon: SiPostgresql,
    },
    {
        text: "AWS",
        icon: SiAwsorganizations,
    },
    {
        text: "RabbitMQ",
        icon: SiRabbitmq,
    },
    {
        text: "NATS",
        icon: SiNatsdotio,
    },
    {
        text: "Prisma",
        icon: SiPrisma,
    },
    {
        text: "React.js",
        icon: SiReact,
    },
    {
        text: "Next.js",
        icon: SiNextdotjs,
    },
    {
        text: "Vercel",
        icon: SiVercel,
    },
    {
        text: "MUI",
        icon: SiMui,
    },
    {
        text: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        text: "Bootstrap",
        icon: SiBootstrap,
    },

    {
        text: "HTML",
        icon: SiHtml5,
    },
    {
        text: "CSS",
        icon: SiCss3,
    },
];

export default function Skills() {
    return (
        <div className="w-full flex flex-col md:py-24 py-16">
            <Title text="Skills ⚡" />
            <SkillsCards items={skills} />
        </div>
    );
}
