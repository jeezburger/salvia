"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
    imageUrl,
    children,
    childrenClassName,
    imageClassName,
    className
}) => {
    const ref = useRef(null);
    const [direction] = useState("left"); // Set direction to always be left

    const handleMouseEnter = () => {
        // No need to get direction since we're fixing it to "left"
        console.log("Hover direction: left");
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            ref={ref}
            className={cn(
                "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
                className
            )}>
            <AnimatePresence mode="wait">
                <motion.div
                    className="relative h-full w-full"
                    initial="initial"
                    whileHover={direction}
                    exit="exit">
                    <motion.div
                        className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
                    <motion.div
                        variants={variants}
                        className="h-full w-full relative bg-gray-50 dark:bg-black">
                        <Image
                            alt="image"
                            className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
                            width="1000"
                            height="1000"
                            src={imageUrl} />
                    </motion.div>
                    <motion.div
                        variants={textVariants}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className={cn("text-white absolute inset-0 flex items-center justify-center z-40", childrenClassName)}>
                        {children}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

// Variants modified to only include left hover effect
const variants = {
    initial: {
        x: 0,
    },
    exit: {
        x: 0,
        y: 0,
    },
    left: {
        x: 20, // Left hover effect
    },
};

// Only left text variants included
const textVariants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    left: {
        x: -2, // Adjust text position on left hover
        opacity: 1,
    },
};
