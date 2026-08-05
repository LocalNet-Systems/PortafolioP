"use client";

import { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ContactData } from "../../../../types/home/contact";

type Props = {
  actions: ContactData["actions"];
  message: string;
};

export default function ContactActions({ actions, message }: Props) {
    const [selectedAction, setSelectedAction] = useState<number | null>(null);

    const buttonClass = (variant: "primary" | "secondary") =>
        variant === "primary"
        ? "group relative w-full overflow-hidden rounded-full bg-white text-black px-8 py-4 font-semibold text-sm tracking-wide text-center shadow-lg shadow-white/5 transition-all duration-300 hover:bg-zinc-100 active:scale-[0.98]"
        : "group relative w-full overflow-hidden rounded-full border border-white/10 bg-transparent text-white px-8 py-4 font-medium text-sm tracking-wide text-center transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] active:scale-[0.98]";

    const buildHref = (href: string) => {
        if (href.startsWith("https://wa.me")) {
        return `${href}?text=${encodeURIComponent(message)}`;
        }

        if (href.startsWith("mailto:")) {
        return `${href}?subject=${encodeURIComponent(
            "Consulta Legal"
        )}&body=${encodeURIComponent(message)}`;
        }

        return href;
    };

    const transition = {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
    };

    return (
        <motion.div
            layout
            className="w-full overflow-hidden"
            transition={{
            layout: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1] as const,
            },
            }}
        >
            <AnimatePresence mode="popLayout" initial={false}>
            {selectedAction === null ? (
                <motion.div
                key="actions"
                initial={{
                    opacity: 0,
                    x: -40,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                exit={{
                    opacity: 0,
                    x: -40,
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="w-full flex flex-col sm:flex-row lg:flex-col gap-3"
                >
                {actions.map((action, i) => {
                    const handleClick = () => {
                    if (action.contacts?.length) {
                        if (action.contacts.length === 1) {
                        window.location.href = buildHref(
                            action.contacts[0].href
                        );
                        } else {
                        setSelectedAction(i);
                        }

                        return;
                    }

                    if (action.href) {
                        window.location.href = buildHref(action.href);
                    }
                    };

                    return (
                    <motion.button
                        key={i}
                        onClick={handleClick}
                        whileTap={{
                        scale: 0.98,
                        }}
                        className={buttonClass(action.variant)}
                    >
                        {action.label}
                    </motion.button>
                    );
                })}
                </motion.div>
            ) : (
                <motion.div
                key="contacts"
                initial={{
                    opacity: 0,
                    x: 40,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                exit={{
                    opacity: 0,
                    x: 40,
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-6 shadow-2xl shadow-black/20"
                >
                <button
                    onClick={() => setSelectedAction(null)}
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} />
                    Volver
                </button>

                <div className="mt-6 mb-5">
                    <h3 className="text-lg font-semibold text-white">
                    {actions[selectedAction].label}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                    Seleccione con quién desea comunicarse.
                    </p>
                </div>

                <div className="space-y-3">
                    {actions[selectedAction].contacts?.map(
                    (contact, i) => (
                        <motion.a
                        key={i}
                        href={buildHref(contact.href)}
                        whileHover={{
                            x: 4,
                        }}
                        whileTap={{
                            scale: 0.99,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 px-5 py-4"
                        >
                        <span className="text-white font-medium">
                            {contact.label}
                        </span>

                        <ChevronRight
                            size={18}
                            className="text-zinc-500 group-hover:text-white transition-all duration-300"
                        />
                        </motion.a>
                    )
                    )}
                </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    );
}