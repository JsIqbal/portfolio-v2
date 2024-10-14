import React from "react";
import Navbar from "./navbar";
import Link from "next/link";
import Socials from "./socials";

import { FiMail } from "react-icons/fi";
import { PiPhone } from "react-icons/pi";

const Footer = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="w-full h-[1px] rounded-full bg-white/20" />
            <div className="flex flex-wrap sm:flex-row flex-col-reverse justify-between items-center p-10 w-full h-max gap-y-12">
                <div className="flex flex-col gap-2 text-white">
                    <Link
                        href={"#"}
                        className="sm:text-3xl text-2xl  font-bold border-green-500 border-b-4 border-l-4 px-2 py-1 "
                    >
                        Iqbal Hossain
                    </Link>

                    <span className="px-2">© 2024 All Rights Reserved.</span>
                </div>
                <Socials />
                <div className="flex flex-col justify-center items-start gap-4 text-white">
                    <div className="flex items-center justify-start gap-2 md:text-lg text-md ">
                        <FiMail /> <span>zafar.iq3089@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-start gap-2 md:text-lg text-md ">
                        <PiPhone /> <span>+8801403229479</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
