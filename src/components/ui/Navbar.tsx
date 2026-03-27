"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        opened: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    const linkVariants = {
        initial: { y: 80, opacity: 0 },
        enter: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 + i * 0.1 },
        }),
        exit: (i: number) => ({
            y: 80,
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 },
        }),
    };

    const navLinks = [
        { title: "Home", href: "#" },
        { title: "Works", href: "#works" },
        { title: "About", href: "#about" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <>
            {/* Floating Toggle */}
            <nav className="fixed top-4 left-4 right-4 z-[100] flex justify-between items-center">
                <Link href="/" className="text-2xl font-heading font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
                    ARF.
                </Link>
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open navigation menu"
                    className="group flex items-center gap-4 text-white hover:opacity-70 transition-opacity cursor-pointer"
                >
                    <span className="text-sm uppercase tracking-widest hidden md:block">Menu</span>
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <Menu size={20} />
                    </div>
                </button>
            </nav>

            {/* Fullscreen Menu */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className="fixed inset-0 z-[200] bg-white text-black flex flex-col p-10 md:p-20"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <span className="text-sm uppercase tracking-widest opacity-50">Navigation</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close navigation menu"
                                className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col md:flex-row justify-between gap-10">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, i) => (
                                    <div key={link.title} className="overflow-hidden">
                                        <motion.div
                                            custom={i}
                                            variants={linkVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter hover:italic transition-all inline-block"
                                            >
                                                {link.title}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col justify-end gap-10 md:max-w-xs">
                                <div className="overflow-hidden">
                                    <motion.div
                                        variants={linkVariants}
                                        custom={4}
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                    >
                                        <p className="text-sm uppercase tracking-widest opacity-50 mb-4">Contact</p>
                                        <p className="text-lg">088234448888</p>
                                        <p className="text-lg">hello@ahmadrona.fyi</p>
                                    </motion.div>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.div
                                        variants={linkVariants}
                                        custom={5}
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                    >
                                        <p className="text-sm uppercase tracking-widest opacity-50 mb-4">Description</p>
                                        <p className="text-sm leading-relaxed">
                                            Creative Web Developer based in Indonesia, specializing in high-end scrollytelling experiences and interaction design.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
