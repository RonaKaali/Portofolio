"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-black pt-40 pb-10 px-10 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-40">
                <div>
                    <p className="text-sm uppercase tracking-widest opacity-30 mb-6">Sitemap</p>
                    <ul className="flex flex-col gap-2 uppercase tracking-tighter text-lg font-heading">
                        <li><a href="#" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">Home</a></li>
                        <li><a href="#works" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">Works</a></li>
                        <li><a href="#about" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">About</a></li>
                        <li><a href="#contact" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm uppercase tracking-widest opacity-30 mb-6">Socials</p>
                    <ul className="flex flex-col gap-2 uppercase tracking-tighter text-lg font-heading">
                        <li><a href="https://github.com/RonaKaali" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/ahmadronafatahilah" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">LinkedIn</a></li>
                        <li><a href="https://instagram.com/ahmadrona" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">Instagram</a></li>
                        <li><a href="https://twitter.com/ahmadrona" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-200 cursor-pointer">Twitter</a></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <p className="text-sm uppercase tracking-widest opacity-30 mb-6">Contact</p>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tighter mb-4">
                        Ahmad Rona Fatahilah
                    </h3>
                    <p className="text-xl opacity-50 mb-10">Web Developer & Creative Technologist</p>
                    <a href="mailto:hello@ahmadrona.fyi" className="text-2xl font-mono underline underline-offset-8 hover:opacity-70 transition-opacity duration-200 cursor-pointer">
                        hello@ahmadrona.fyi
                    </a>
                </div>
            </div>

            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[14vw] font-heading font-bold uppercase tracking-tighter leading-none text-white/5 text-center pointer-events-none"
                >
                    FATAHILAH
                </motion.h1>
            </div>

            <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest opacity-30">
                <p>© 2026 Ahmad Rona Fatahilah. All Rights Reserved.</p>
                <p>Built with Next.js & Framer Motion</p>
            </div>
        </footer>
    );
}
