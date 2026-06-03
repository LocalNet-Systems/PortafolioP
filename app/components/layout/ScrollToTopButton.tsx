"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md shadow-2xl transition-colors duration-300 hover:border-white/20 hover:bg-zinc-900/60 active:scale-95 group"
                >
                    {/* Efecto de luz difuminada interno idéntico al de tu header */}
                    <div className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}