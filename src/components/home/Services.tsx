"use client";

import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            id: "01",
            title: "Web Development",
            desc: "High-performance, scalable web applications built with the latest technologies."
        },
        {
            id: "02",
            title: "Motion Design",
            desc: "Smooth animations and transitions that enhance the user experience and storytelling."
        },
        {
            id: "03",
            title: "Interaction Design",
            desc: "Creating intuitive and engaging digital interfaces that respond to user behavior."
        }
    ];

    return (
        <section className="relative z-10 bg-black py-40 px-10 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter">
                    Services <br /> <span className="text-white/20">& Solutions</span>
                </h2>
                <p className="max-w-xs text-sm uppercase tracking-widest opacity-50 leading-relaxed">
                    Helping brands stand out in the digital landscape through creative technology.
                </p>
            </div>

            <div className="flex flex-col">
                {services.map((service, i) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="group py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-10 hover:bg-white/5 px-4 transition-colors"
                    >
                        <div className="flex items-center gap-10">
                            <span className="font-mono text-sm opacity-30">{service.id}</span>
                            <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter">
                                {service.title}
                            </h3>
                        </div>
                        <p className="max-w-md text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
