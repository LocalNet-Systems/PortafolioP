"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, ChevronDown, Menu, ChevronLeft, ChevronRight } from "lucide-react";

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
    brandName = "Despacho Guerrero",
    navItems = [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: "Equipo Legal", href: "/equipo" },
    ],
}: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const message = "Hola, visité su sitio web y me gustaría hacerle una consulta. ¿Tiene tiempo?";
    const [selectedContact, setSelectedContact] = useState<number | null>(null);

    const contactOptions = [
        {
            label: "WhatsApp",
            icon: (
                <MessageCircle className="w-4 h-4 text-emerald-400" />
            ),
            hoverBg: "hover:bg-emerald-500/10",
            contacts: [
                {
                    label: "Lorenzo Guerrero",
                    href: "https://wa.me/50584149853",
                },
                {
                    label: "Ignacio Guerrero",
                    href: "https://wa.me/50587904039",
                },
            ],
        },
        {
            label: "Llamar",
            icon: (
                <Phone className="w-4 h-4 text-blue-400" />
            ),
            hoverBg: "hover:bg-blue-500/10",
            contacts: [
                {
                    label: "Lorenzo Guerrero",
                    href: "tel:+50584149853",
                },
                {
                    label: "Ignacio Guerrero",
                    href: "tel:+50587904039",
                },
            ],
        },
        {
            label: "Correo",
            icon: (
                <Mail className="w-4 h-4 text-red-400" />
            ),
            hoverBg: "hover:bg-red-500/10",
            href: "mailto:guerreroloren1974@gmail.com",
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
                                    transition={{
                                        duration: 0.25,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl p-1.5 shadow-xl overflow-hidden"
                                >
                                <AnimatePresence mode="wait" initial={false}>

                                {selectedContact === null ? (

                                <motion.div
                                    key="main"
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {contactOptions.map((option, index) => {
                                        let href = option.href;
                                        const handleClick = () => {
                                            if (option.contacts?.length) {
                                                if (option.contacts.length === 1) {
                                                    window.location.href =
                                                        option.contacts[0].href;
                                                } else {
                                                    setSelectedContact(index);
                                                }
                                                return;
                                            }
                                            if (href) {
                                                if (href.startsWith("https://wa.me")) {
                                                    href += `?text=${encodeURIComponent(message)}`;
                                                }
                                                if (href.startsWith("mailto:")) {
                                                    href += `?subject=${encodeURIComponent(
                                                        "Consulta Legal"
                                                    )}&body=${encodeURIComponent(message)}`;
                                                }
                                                window.location.href = href;
                                            }
                                        };

                                        return (
                                            <button
                                                key={option.label}
                                                onClick={handleClick}
                                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white transition-colors ${option.hoverBg}`}
                                            >
                                                {option.icon}
                                                {option.label}
                                            </button>
                                        );
                                    })}
                                </motion.div>

                                ) : (

                                <motion.div
                                    key="contacts"
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 15 }}
                                    transition={{ duration: 0.2 }}
                                >

                                    <button
                                        onClick={() => setSelectedContact(null)}
                                        className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <ChevronLeft size={14}/>
                                        Volver
                                    </button>
                                    <div className="mt-2 space-y-1">
                                        {contactOptions[selectedContact].contacts?.map(
                                            (contact, index)=>(
                                                <a
                                                    key={index}
                                                    href={(() => {

                                                        let href = contact.href;

                                                        if(href.startsWith("https://wa.me")){
                                                            href += `?text=${encodeURIComponent(message)}`;
                                                        }

                                                        return href;

                                                    })()}
                                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                                                >
                                                    {contact.label}

                                                    <ChevronRight size={14}/>
                                                </a>
                                            )
                                        )}
                                    </div>
                                </motion.div>
                            )}
                            </AnimatePresence>
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
                message={message}
            />
        </>
    );
}