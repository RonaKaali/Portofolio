"use client";

import { motion } from "framer-motion";

export default function Contact({ whatsapp }: { whatsapp: string }) {
    return (
        <section id="contact" className="relative z-10 bg-black py-40 px-10 md:px-20 text-center flex flex-col items-center">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                className="text-sm uppercase tracking-widest mb-10"
            >
                Have a project in mind?
            </motion.p>

            <motion.a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-[12rem] font-heading font-bold uppercase tracking-tighter leading-[0.8] mb-20 hover:italic transition-all duration-500 block text-white cursor-pointer"
            >
                Let&apos;s Chat <br />
                <span className="text-white/20">Together</span>
            </motion.a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-4xl opacity-50">
                <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-widest">Email</p>
                    <a href="mailto:hello@ahmadrona.fyi" className="hover:opacity-70 transition-opacity cursor-pointer">hello@ahmadrona.fyi</a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-widest">Social</p>
                    <a href="https://linkedin.com/in/ahmadrona" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity cursor-pointer">LinkedIn</a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-widest">Social</p>
                    <a href="https://instagram.com/ahmadrona" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity cursor-pointer">Instagram</a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-widest">Social</p>
                    <a href="https://dribbble.com/ahmadrona" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity cursor-pointer">Dribbble</a>
                </div>
            </div>

            {/* Decorative Parallax Icons (Simulation with Motion) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-20 w-20 h-20 bg-white/5 rounded-full blur-2xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 right-40 w-40 h-40 bg-white/5 rounded-full blur-3xl"
            />
        </section>
    );
}
