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
                className="text-left group relative rounded-[32px] border border-white/10 p-8 bg-black/40 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1"
                >
                <div className="space-y-3">
                    <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500">
                    {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-bold text-white">
                    {item.title}
                    </h3>

                    <p className="text-zinc-400">
                    {item.desc}
                    </p>
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