"use client";

import Link from "next/link";
import React from "react";
import Socials from "./socials";

import { motion } from "framer-motion";
import { slideBottom } from "@/lib/motion-setting";

const Navbar = () => {
    return (
        <motion.div
            {...slideBottom}
            className="flex justify-between md:py-12 py-8"
        >
            <Link
                href={"#"}
                className="sm:text-3xl text-2xl text-white font-bold border-green-500 border-b-4 border-l-4 px-2 py-1 "
            >
                Iqbal Hossain
            </Link>
            <Socials />
        </motion.div>
    );
};

export default Navbar;
