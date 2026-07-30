"use client";

import Image from "next/image";
import Link from "next/link";

import { Lawyer } from "@/app/types/team/team";

interface Props {
    lawyer: Lawyer;
}

export default function AbogadoCard({ lawyer }: Props) {
    return (
        <Link href={`/equipo/${lawyer.id}`} className="group block">
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)]">

                <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />

                <div className="relative w-full aspect-[3/4] bg-black/30 flex items-center justify-center p-4">
                    
                    {lawyer.photo && (
                        <Image
                            src={lawyer.photo}
                            alt={lawyer.name}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    )}

                    <div className="absolute inset-4 rounded-xl border border-white/5 pointer-events-none" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-5">
                    <h2 className="text-lg font-semibold text-white tracking-wide">
                        {lawyer.name}
                    </h2>

                    <p className="text-xs text-zinc-400 mt-1">
                        {lawyer.grade}
                    </p>

                    {/* CTA */}
                    <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm text-amber-400 group-hover:text-amber-300 transition-colors">
                            Ver perfil
                        </span>

                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400/40 transition-all">
                            <svg
                                className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}