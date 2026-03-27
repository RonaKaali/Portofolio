"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { LucideArrowDown } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

export default function AnimeHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollIconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Entrance animation for scroll icon
        animate(scrollIconRef.current!, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: 1500,
            ease: "outExpo"
        });

        // Background elements animation
        animate(".bg-blob", {
            scale: [0.8, 1.2],
            opacity: [0.2, 0.4],
            duration: 10000,
            direction: "alternate",
            loop: true,
            ease: "easeInOutSine"
        });


    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden select-none">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="bg-blob absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
                <div className="bg-blob absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                <BlurText
                    text="Ahmad Rona Fatahilah • Web Developer"
                    delay={50}
                    animateBy="chars"
                    direction="top"
                    className="text-sm md:text-base uppercase tracking-[0.3em] font-mono mb-6 opacity-60 text-white"
                />

                <div className="max-w-[90vw]">
                    <BlurText
                        text="Crafting Digital Experience"
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="text-6xl md:text-[8vw] font-bold uppercase tracking-tighter leading-[0.85] text-white"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div ref={scrollIconRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
                <span className="text-[10px] uppercase tracking-widest font-mono opacity-40">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <LucideArrowDown className="w-4 h-4 opacity-40 animate-bounce" />
            </div>
        </section>
    );
}
