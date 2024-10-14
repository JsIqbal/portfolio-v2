"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

import { FaLinkedin } from "react-icons/fa";
import { sendEmail } from "@/lib/send-email";
import Link from "next/link";
import Title from "./ui/title";

export default function Contact() {
    const { pending } = useFormStatus();

    return (
        <motion.section
            id="contact-section"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center "
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <h2 className="md:text-5xl text-3xl font-bold capitalize mb-8 text-center text-white">
                <Title text="Let's get Connected!" />
            </h2>

            <form
                className="mt-10 flex flex-col text-white"
                action={async (formData) => {
                    toast.loading("Sending...");

                    const { data, error } = await sendEmail(formData);
                    toast.dismiss();
                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg border-green-500 border-2 p-4 bg-gray-900 focus:bg-gray-800 transition-all "
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg border-indigo-500 border-2 p-4 bg-gray-900 focus:bg-gray-800 transition-all "
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <div className="flex w-full justify-between items-center py-2">
                    <Link
                        href="https://www.linkedin.com/in/jsiqbal/"
                        target="_blank"
                        className="group w-max cursor-pointer flex  justify-center items-center gap-2 text-white/90 bg-opacity-10 p-3 rounded-lg border-white border-2 transition-all focus:scale-105 hover:scale-105 bg-gray-700 active:scale-105 hover:border-indigo-500"
                    >
                        {/* <span>Message on</span> */}

                        <span className=" group-hover:underline flex gap-2 cursor-pointer text-white/90">
                            Linked In
                            <FaLinkedin className="my-auto group-hover:-translate-y-1 duration-150 group-hover:text-[#0A68C6]" />
                        </span>
                    </Link>
                    <button
                        type="submit"
                        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-lg outline-none transition-all focus:scale-105 hover:scale-105 bg-gray-700 active:scale-105  bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 border-white border-2 hover:border-green-500"
                        disabled={pending}
                    >
                        {pending ? (
                            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        ) : (
                            <>
                                Send{" "}
                                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-500" />{" "}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.section>
    );
}
