"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
            {icon}
            <span className="text-xs uppercase tracking-widest font-medium">{label}</span>
        </a>
    );
}

export default function ModernHero() {
    const name = "Ahmad Rona Fatahilah";
    const role = "Full Stack Developer";
    const bio = "Fresh Graduate & Next.js Enthusiast based in Indonesia. I design and build modern digital products with a focus on seamless interactions and performance.";

    return (
        <section className="relative min-h-[85vh] flex flex-col justify-start px-6 md:px-24 pt-32 pb-20">
            {/* Subtle Aesthetic Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
                    
                    {/* Left Column: Identity, Bio & Socials */}
                    <div className="lg:col-span-8 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-[0.9]">
                                {name}
                            </h1>
                            <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/30 font-mono">
                                {role} • BASED IN INDONESIA
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <h2 className="text-2xl md:text-5xl text-white font-medium leading-[1.1] max-w-3xl tracking-tight">
                                {bio}
                            </h2>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <SocialLink href="https://github.com/RonaKaali" icon={<Github className="w-5 h-5" />} label="Github" />
                            <SocialLink href="https://linkedin.com/in/ahmadronafatahilah" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="https://wa.me/088234448888" icon={<MessageSquare className="w-5 h-5" />} label="WhatsApp" />
                            <SocialLink href="mailto:rona.fatahilah@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                        </motion.div>
                    </div>

                    {/* Right Column: Large Photo & Info Below */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative group w-full max-w-[320px]"
                        >
                            {/* Decorative elements behind photo */}
                            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000" />
                            
                            <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white/10 ring-8 ring-white/5 shadow-2xl bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <img 
                                    src="https://github.com/RonaKaali.png" 
                                    alt={name}
                                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full max-w-[320px] space-y-10 border-t border-white/5 pt-10"
                        >
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-mono">Expertise</p>
                                    <ul className="space-y-2 text-[11px] uppercase tracking-widest font-medium text-white/70">
                                        <li>Full Stack Dev</li>
                                        <li>Next.js & React</li>
                                        <li>TypeScript</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-mono">Current Status</p>
                                    <p className="text-[11px] uppercase tracking-widest font-bold text-green-400">Open for Work</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
}
