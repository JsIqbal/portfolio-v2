import React from "react";
import Title from "./ui/title";
import ProjectsCards from "./ui/projects-cards";
import {
    SiMysql,
    SiNextdotjs,
    SiTailwindcss,
    SiRedis,
    SiNestjs,
    SiNodedotjs,
    SiKubernetes,
    SiGit,
    SiJira,
    SiReact,
    SiCpanel,
} from "react-icons/si";

const Projects = () => {
    const myProjects = [
        {
            title: "ShareTrip",
            url: "https://sharetrip.net",
            image: "/project-images/sharetrip.png",
            tech: [
                SiNextdotjs,
                SiTailwindcss,
                SiMysql,
                SiRedis,
                SiNestjs,
                SiNodedotjs,
                SiKubernetes,
                SiGit,
                SiJira,
            ],
        },
        {
            title: "QikCheck",
            url: "https://jti.qik-check.com",
            image: "/project-images/qikcheck.png",
            tech: [
                SiReact,
                SiTailwindcss,
                SiMysql,
                SiNodedotjs,
                SiGit,
                SiCpanel,
            ],
        },
        {
            title: "Portfolio 1.0.0-beta",
            url: "",
            image: "/project-images/portfolio-beta.png",
            tech: [SiNextdotjs, SiTailwindcss],
        },
        {
            title: "Portfolio Alpha 0.1.0",
            url: "https://portfolio-psi-wheat-51.vercel.app/",
            image: "/project-images/portfolio-alpha.png",
            tech: [SiNextdotjs, SiTailwindcss],
        },
    ];

    return (
        <div className="flex flex-col w-full md:py-24 py-16">
            <Title text="Collaborative Projects ✨" />
            <ProjectsCards projects={myProjects} />
        </div>
    );
};

export default Projects;
