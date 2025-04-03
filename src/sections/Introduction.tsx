'use client'
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ["start end", "end end"] });

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setCurrentWord(Math.round(latest * words.length));
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, [scrollYProgress]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers.</Tag>
                    </div>

                    <div className="text-4xl lg:text-7xl md:text-6xl text-center font-medium mt-10 max-w-[90%] mx-auto whitespace-normal">
                        <span>Your creative process deserves better.</span>{" "}

                        <span className="text-white/15">
                            {words.map((word, index) => (
                                <span key={index} className={twMerge("inline-block transition duration-500 text-white/15", index < currentWord && "text-lime-400")}>
                                    {word}&nbsp;
                                </span>
                            ))}
                        </span>

                        <span className="text-lime-400">That&apos;s why we built Layers.</span>
                    </div>
                </div>

                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
