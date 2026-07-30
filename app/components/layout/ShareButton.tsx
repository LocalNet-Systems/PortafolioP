"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, LoaderCircle } from "lucide-react";

export default function ShareButton() {
    const [isSharing, setIsSharing] = useState(false);

    const handleShare = async () => {
        if (isSharing) return;

        const url =
        typeof window !== "undefined" ? window.location.href : "";
        const title =
        typeof document !== "undefined" ? document.title : "";

        try {
        setIsSharing(true);

        if (navigator.share) {
            await navigator.share({
            title,
            text: " | Abogados y Notarios\nVisita el enlace para ver los servicios legales disponibles",
            url,
            });

            return;
        }

        await navigator.clipboard.writeText(url);
        alert("Link copiado al portapapeles");
        } catch (error) {
        console.error("Error al compartir:", error);
        } finally {
        setIsSharing(false);
        }
    };

    return (
        <button
        onClick={handleShare}
        disabled={isSharing}
        className="
            flex items-center justify-center
            min-w-[130px]
            rounded-full
            border border-white/10
            bg-white/5
            px-4 py-2
            text-xs font-semibold text-zinc-200
            transition-all duration-200
            hover:bg-white/10
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-70
        "
        >
        <AnimatePresence mode="wait">
            {isSharing ? (
            <motion.div
                key="loading"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2"
            >
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Compartiendo...
            </motion.div>
            ) : (
            <motion.div
                key="default"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2"
            >
                <Share2 className="h-4 w-4" />
                Compartir
            </motion.div>
            )}
        </AnimatePresence>
        </button>
    );
}