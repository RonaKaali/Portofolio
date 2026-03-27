"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function About() {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        // Split the text into characters
        const text = new SplitType(textRef.current, { types: 'chars' });

        // Cleanup
        return () => {
            text.revert();
        };
    }, []);

    return (
        <section id="about" className="relative z-10 bg-black py-40 px-10 md:px-20">
            <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-widest opacity-50 mb-10">About Me</p>
                <p
                    ref={textRef}
                    className="text-3xl md:text-5xl font-heading font-medium leading-tight uppercase tracking-tighter"
                >
                    I am a Fresh Graduate Full Stack Developer and Next.js Enthusiast based in Indonesia. I specialize in building modern, performant web applications with a focus on seamless user experiences and high-end animations.
                </p>
            </div>

            <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h3 className="text-xl font-heading font-bold uppercase mb-6">Background</h3>
                    <div className="flex flex-col gap-8">
                        <ExperienceItem year="2025" title="Full Stack Developer" company="Open for Work" />
                        <ExperienceItem year="2024" title="Fresh Graduate" company="Based in Indonesia" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-heading font-bold uppercase mb-6">Tech Stack</h3>
                    <div className="flex flex-wrap gap-4">
                        {["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "Motion", "GSAP"].map((skill) => (
                            <span key={skill} className="px-6 py-2 border border-white/10 rounded-full text-sm uppercase tracking-widest text-white/80">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ year, title, company }: { year: string, title: string, company: string }) {
    return (
        <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div>
                <h4 className="font-heading font-bold uppercase">{title}</h4>
                <p className="text-sm opacity-50 uppercase">{company}</p>
            </div>
            <span className="font-mono text-sm">{year}</span>
        </div>
    );
}
