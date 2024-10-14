"use client";

import { slideBottom } from "@/lib/motion-setting";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
    return (
        <section className="w-full md:py-14 py-10 flex lg:flex-row flex-col lg:justify-between justify-center gap-y-8 ">
            <div className="flex flex-col justify-between items-start gap-y-10 pb-10 lg:w-4/6 w-full">
                <motion.h1
                    initial={{ x: "-4vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="group md:text-7xl text-4xl text-white font-bold"
                >
                    Hello there{" "}
                    <span className="group-hover:rotate-[30deg] transition-all ease-in-out duration-150">
                        👋
                    </span>{" "}
                    <br />
                    <div className=" underline underline-offset-8 decoration-green-500">
                        <span>{"I'm"}</span>
                        <span className="ps-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-500 ">
                            Iqbal Hossain
                        </span>
                    </div>
                </motion.h1>
                <motion.p
                    initial={{ x: "-4vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                    className="md:text-2xl text-lg text-gray-300 lg:w-10/12"
                >
                    {`A fast & consistent learner on a journey to explore the wide world filled with complex problems & their solutions.`}
                </motion.p>
                <motion.div
                    initial={{ x: "-4vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.4 }}
                    onClick={() => {
                        const contactSection =
                            document.getElementById("contact-section");
                        if (contactSection)
                            contactSection.scrollIntoView({
                                behavior: "smooth",
                            });
                    }}
                >
                    <h1 className=" text-4xl font-bold text-white hover:text-green-400 transition-all cursor-pointer">
                        Contact Me 📭
                    </h1>
                    <div className="w-48 h-2 bg-green-500 rounded-full "></div>
                    <div className="w-48 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                </motion.div>
            </div>
            <motion.div
                {...slideBottom}
                className="lg:w-1/6 w-full relative flex justify-center "
            >
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative  md:ms-none ms-20">
                    <div className="bg-[#8359f6] absolute top-[-30%] left-[-10%] rotate-[40deg] -z-10 h-[20rem] w-[14rem] rounded-full blur-[6.5rem] animate-pulse "></div>

                    <div className="flex gap-3 translate-x-8">
                        <motion.div
                            initial={{ opacity: 0, y: "2vh" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className=" w-32 h-32 animate-pulse delay-0 rounded-2xl bg-green-500"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: "2vh" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className=" w-32 h-32 animate-pulse delay-200 rounded-full bg-indigo-500"
                        ></motion.div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <motion.div
                            initial={{ opacity: 0, y: "2vh" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className=" w-32 h-32 animate-pulse delay-500 rounded-2xl bg-indigo-500"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: "2vh" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.55 }}
                            className=" w-32 h-32 animate-pulse delay-700 rounded-full bg-green-500"
                        ></motion.div>
                    </div>
                    <div className=" glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className=" absolute bottom-2  lg:bottom-14 lg:-left-10 md:left-56">
                    <a download="" href="/iqbal-01.pdf" className="h-[1rem]">
                        <button
                            className="group relative bg-slate-900/[0.8] border border-indigo-500 text-white flex flex-col gap-2 overflow-hidden items-center justify-start w-full h-[3.3rem] text-sm antialiased p-3 font-semibold hover:scale-105 hover:border-green-500 transition-all duration-150 "
                            style={{ borderRadius: "calc(0.5rem * 0.96)" }}
                        >
                            <span className="text-xl transition-all duration-200 group-hover:-translate-y-9">
                                📢 Available for Work
                            </span>
                            <span className="text-xl transition-all duration-200 group-hover:-translate-y-9">
                                📗 Download Resume
                            </span>
                        </button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
