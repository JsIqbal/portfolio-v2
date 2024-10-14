"use client";

// export const dynamic = "force-static";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-max">
            <div className="w-full flex flex-col gap-y-10 bg-gradient-to-b from-transparent to-black from-80% xl:px-[16%] md:[12%] sm:px-[10%] px-4 pb-8">
                {" "}
                <Navbar />
                <Hero />
            </div>
            <div className="w-full flex flex-col items-center gap-y-10 bg-black xl:px-[16%] md:[12%] sm:px-[10%] px-4 pb-8">
                <Projects />
                <Skills />
            </div>
            <div className="w-full flex flex-col items-center gap-y-10 bg-black xl:px-[16%] md:[12%] sm:px-[10%] px-4 pb-8">
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
