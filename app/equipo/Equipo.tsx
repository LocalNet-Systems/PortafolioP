"use client";

import type { Lawyer } from "@/app/types/team/team";
import AbogadoCard from "./AbogadoCard";

interface Props {
    lawyers: Lawyer[];
}

export default function Equipo({ lawyers }: Props) {
    return (
        <section className="relative pt-4 pb-10 px-4 md:px-0 text-white overflow-hidden">

            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[600px] bg-white/[0.03] rounded-full blur-[130px]" />
            </div>

            <div className="max-w-5xl mx-auto mb-14">

                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Nuestro Equipo
                    </h1>

                    <div className="h-[2px] w-20 bg-gradient-to-r from-amber-400 via-indigo-500 to-transparent rounded-full" />

                    <p className="text-zinc-400 leading-relaxed">
                        Conozca a los profesionales que integran nuestro bufete jurídico.
                    </p>
                </div>

            </div>

            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">

                {lawyers.map((lawyer) => (
                    <AbogadoCard
                        key={lawyer.id}
                        lawyer={lawyer}
                    />
                ))}

            </div>

        </section>
    );
}