"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MessageCircle,
    ChevronDown,
    Menu,
} from "lucide-react";

import MobileMenu from "./MobileMenu";
import ShareButton from "./ShareButton";

interface NavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    brandName?: string;
    navItems?: NavItem[];
}

export default function Header({
    brandName = "Lorenzo Guerrero",
    navItems = [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: "Trayectoria", href: "/trayectoria" },
    ],
}: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const contactOptions = [
        {
            label: "WhatsApp",
            href: "https://wa.me/50584149853",
            icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
            hoverBg: "hover:bg-emerald-500/10",
        },
        {
            label: "Llamar",
            href: "tel:+50584149853",
            icon: <Phone className="w-4 h-4 text-blue-400" />,
            hoverBg: "hover:bg-blue-500/10",
        },
        {
            label: "Correo",
            href: "mailto:guerreroloren1974@gmail.com",
            icon: <Mail className="w-4 h-4 text-red-400" />,
            hoverBg: "hover:bg-red-500/10",
        },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full">
                <div className="relative w-full border-b border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
                <div className="absolute -top-10 left-1/4 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 right-1/4 h-32 w-32 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

                <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link
                    href="/"
                    className="text-white font-semibold tracking-tight text-sm sm:text-base hover:opacity-80 transition"
                    >
                    {brandName}
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                        >
                        {item.label}
                        </Link>
                    ))}
                    </nav>

                    <div className="flex items-center gap-3">
                    <ShareButton />

                    <button
                        onClick={() => setMobileMenu(true)}
                        className="md:hidden text-white"
                        aria-label="Abrir menú"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div
                        className="relative hidden md:block"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex items-center gap-1.5 rounded-full bg-white text-black px-5 py-2 text-xs font-semibold hover:bg-zinc-200 transition-all duration-300 active:scale-95 shadow-md"
                        >
                        Contactar

                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="w-3.5 h-3.5" />
                        </motion.div>
                        </button>

                        <AnimatePresence>
                        {isOpen && (
                            <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute right-0 mt-2 w-44 rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl p-1.5 shadow-xl"
                            >
                            {contactOptions.map((option, index) => (
                                <motion.div
                                key={option.label}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                >
                                <a
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white transition-colors ${option.hoverBg}`}
                                >
                                    {option.icon}
                                    {option.label}
                                </a>
                                </motion.div>
                            ))}
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    </div>
                </div>
                </div>
            </header>

            <MobileMenu
                open={mobileMenu}
                onClose={() => setMobileMenu(false)}
                navItems={navItems}
                contactOptions={contactOptions}
            />
        </>
    );
}