import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
        },
    },
};

export default function Title({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <motion.div
            className={cn(
                "flex flex-col items-center justify-center mb-5",
                className
            )}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            <h1
                className={`md:text-4xl text-3xl font-bold text-white group-hover:text-green-500 transition-all duration-300`}
            >
                {text}
            </h1>
            <div className="w-48 h-2 mt-[1px] rounded-full bg-green-500"></div>
            <div className="w-48 h-2 rounded-full bg-indigo-500 translate-x-3"></div>
        </motion.div>
    );
}
