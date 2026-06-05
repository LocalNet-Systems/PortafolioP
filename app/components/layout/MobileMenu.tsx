"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
}

interface ContactOption {
    label: string;
    href: string;
    icon: React.ReactNode;
}

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    navItems: NavItem[];
    contactOptions: ContactOption[];
}

export default function MobileMenu({
    open,
    onClose,
    navItems,
    contactOptions,
}: MobileMenuProps) {
    return (
        <AnimatePresence>
        {open && (
            <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 z-40"
                onClick={onClose}
            />

            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
                className="fixed top-0 right-0 w-72 h-full bg-zinc-950/98 border-l border-white/10 shadow-2xl z-50 p-6"
            >
                <button
                onClick={onClose}
                className="text-white mb-8"
                >
                <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                    <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="text-white text-lg font-medium"
                    >
                    {item.label}
                    </Link>
                ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                {contactOptions.map((contact) => (
                    <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 py-2 text-zinc-300 hover:text-white"
                    >
                    {contact.icon}
                    {contact.label}
                    </a>
                ))}
                </div>
            </motion.div>
            </>
        )}
        </AnimatePresence>
    );
}