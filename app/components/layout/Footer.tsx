import React from "react";

interface FooterProps {
    name: string;
}

export default function Footer({ name }: FooterProps) {
    return (
        <footer className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-md px-6 md:px-12 py-8 shadow-2xl">

            {/* Glow ambiental */}
            <div className="absolute -top-24 -right-24 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center text-center">
                <p className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors duration-300">
                    © {new Date().getFullYear()} {name}, Abogado y Notario. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}