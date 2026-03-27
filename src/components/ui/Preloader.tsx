"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
    name: string;
    role: string;
}

export default function Preloader({ name, role }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsComplete(true), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1;
            });
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    exit={{
                        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
                >
                    <div className="relative w-full max-w-md px-10">
                        <div className="flex justify-between items-end mb-4">
                            <div className="overflow-hidden">
                                <motion.h2
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    className="text-xl font-heading uppercase tracking-tighter"
                                >
                                    {name}
                                </motion.h2>
                            </div>
                            <div className="font-mono text-sm">
                                {progress}%
                            </div>
                        </div>

                        <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="mt-4 overflow-hidden">
                            <motion.p
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-sm opacity-50 uppercase tracking-widest text-center"
                            >
                                {role}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
