import React from "react";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Socials = () => {
    const socialLinks = [
        {
            url: "https://www.linkedin.com/in/jsiqbal/",
            label: "LinkedIn",
            icon: (
                <FaLinkedin className="w-full h-full group-hover:scale-110 transition-all duration-200 ease-in-out" />
            ),
            border: "border-green-500",
        },
        {
            url: "https://github.com/JsIqbal",
            label: "GitHub",
            icon: (
                <FaGithub className="w-full h-full group-hover:scale-110 transition-all duration-200 ease-in-out" />
            ),
            border: "border-indigo-500",
        },
        {
            url: "https://x.com/JavascriptIqbal",
            label: "X",
            icon: (
                <FaTwitter className="w-full h-full group-hover:scale-110 transition-all duration-200 ease-in-out" />
            ),
            border: "border-green-500",
        },
    ];

    return (
        <div className="flex sm:gap-4 gap-2">
            {socialLinks.map((link, index) => (
                <motion.a
                    initial={{ y: "-2vw", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
                    key={index}
                    target="_blank"
                    className={`group bg-white w-10  h-10 p-1 rounded-lg  border-2 ${link.border}`}
                    href={link.url}
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default Socials;
