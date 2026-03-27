"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "DailyTarget",
        category: "Productivity / SaaS",
        image: "/projects/daily-target.png",
        href: "https://github.com/RonaKaali/daily-target",
    },
    {
        title: "TradePro Assistant",
        category: "Fintech / Dashboard",
        image: "/projects/tradepro.png",
        href: "https://github.com/RonaKaali/Trading-Assistant-TradePro-Assistant-v1.0-",
    },
    {
        title: "BAJUIN.ID",
        category: "E-Commerce / Full Stack",
        image: "/projects/bajuin.png",
        href: "https://github.com/RonaKaali/BAJUIN.ID",
    },
    {
        title: "BPKH-V-BANJARBARU",
        category: "Management System",
        image: "/projects/bpkh.png",
        href: "https://github.com/RonaKaali/BPKH-V-BANJARBARU",
    },
    {
        title: "SPACE-PLAYSTATION",
        category: "Booking System",
        image: "/projects/space-playstation.png",
        href: "https://github.com/RonaKaali/SPACE-PLAYSTATION",
    },
];

export default function Projects() {
    return (
        <section id="works" className="relative z-10 bg-black py-40 px-6 md:px-20 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
                <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4 font-mono">SELECTED PROJECTS</p>
                    <h2 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none">
                        Featured <br /> <span className="text-white/30 italic">Works</span>
                    </h2>
                </div>
                <Link
                    href="https://github.com/RonaKaali"
                    target="_blank"
                    className="group relative px-6 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
                >
                    <span className="relative z-10 font-heading font-medium uppercase tracking-widest text-sm flex items-center gap-2">
                        Browse GitHub <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-500 -z-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: { title: string; category: string; image: string; href: string }; index: number }) {
    return (
        <Link href={project.href} target="_blank" className="group">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
                    <img
                        src={project.image}
                        alt={`${project.title} project showcase`}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1634017831557-58296d510bf2?q=80&w=1000&auto=format&fit=crop`;
                        }}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl md:text-3xl font-heading font-black uppercase tracking-tighter group-hover:italic transition-all">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-mono opacity-40">
                            {project.category}
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
