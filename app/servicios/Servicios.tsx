"use client";

import { useState } from "react";
import type { ServicesData } from "../types/home/services";
import ServiceModal from "./ServiceModal";

interface Props {
  services: ServicesData;
}

export default function Servicios({ services }: Props) {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [caseDetail, setCaseDetail] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (service: string) => {
        setSelectedService(service);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCaseDetail("");
        setSelectedService(null);
    };

    const sendToWhatsapp = () => {
        if (!selectedService) return;

        const message = `
            Hola, estoy interesado en el siguiente servicio: ${selectedService}. Mi caso es el siguiente: ${caseDetail}
        `.trim();

        const phone = "50584149853";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
        )}`;

        window.open(url, "_blank");

        closeModal();
    };

    return (
        <>
        <section className="relative space-y-12 py-5 px-4 md:px-6">
            <div className="grid sm:grid-cols-2 gap-6">
                {services.items.map((item, i) => (
                <button
                    key={i}
                    onClick={() => openModal(item.title)}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border border-white/10
                    bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                    backdrop-blur-xl
                    p-8
                    text-left
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)]
                    "
                >
                    {/* Glow */}
                    <div
                    className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                    >
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
                    </div>

                    <div className="relative flex h-full flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                        <span
                            className="
                            text-xs
                            font-bold
                            tracking-[0.25em]
                            text-zinc-600
                            "
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        <div
                            className="
                            flex h-9 w-9 items-center justify-center
                            rounded-full
                            border border-white/10
                            bg-white/5
                            text-zinc-500
                            transition-all
                            duration-300
                            group-hover:bg-white/10
                            group-hover:text-white
                            group-hover:translate-x-1
                            "
                        >
                            →
                        </div>
                        </div>

                        <h3
                        className="
                            text-xl
                            font-bold
                            leading-tight
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-zinc-100
                        "
                        >
                        {item.title}
                        </h3>

                        <p
                        className="
                            text-sm
                            leading-relaxed
                            text-zinc-400
                            transition-colors
                            duration-300
                            group-hover:text-zinc-300
                        "
                        >
                        {item.desc}
                        </p>
                    </div>

                    <div
                        className="
                        mt-6
                        h-px
                        w-0
                        bg-gradient-to-r
                        from-indigo-500
                        via-white/40
                        to-amber-500
                        transition-all
                        duration-500
                        group-hover:w-full
                        "
                    />
                    </div>
                </button>
                ))}
            </div>
        </section>

        <ServiceModal
            isOpen={isOpen}
            service={selectedService}
            caseDetail={caseDetail}
            onChangeDetail={setCaseDetail}
            onClose={closeModal}
            onSend={sendToWhatsapp}
        />
        </>
    );
}