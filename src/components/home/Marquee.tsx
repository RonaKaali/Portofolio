"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <div className="relative z-10 bg-white text-black py-10 overflow-hidden whitespace-nowrap">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-10"
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
                        Creative Developer • Available for Projects • Design & Code • Ahmad Rona Fatahilah •
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
