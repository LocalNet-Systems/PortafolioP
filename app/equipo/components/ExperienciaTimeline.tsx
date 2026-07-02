import type { LawyerProfile } from "../../types/team/lawyer";

interface Props {
  profile: LawyerProfile;
}

export default function ExperienciaTimeline({ profile }: Props) {
    return (
        <div className="max-w-5xl mx-auto mb-16 px-4 md:px-0">
        
            <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-10 relative overflow-hidden">
                
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

                    <div className="flex items-center gap-3 mb-12">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-white/50 to-transparent" />
                    <h3 className="text-xs font-mono font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                        Trayectoria
                    </h3>
                    </div>

                    <div className="relative border-l border-gradient-to-b from-white/10 via-white/10 to-transparent ml-4 md:ml-12 space-y-6">
                    
                    {profile.highlights?.map((item, i) => (
                        <div key={i} className="relative pl-8 md:pl-12 group">
                        
                        <div className="absolute -left-[17px] top-3 h-8 w-8 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-500 z-10 shadow-2xl">
                            <div className="h-2 w-2 rounded-full bg-zinc-600 group-hover:bg-white group-hover:scale-125 transition-all duration-500" />
                        </div>

                        <div className="relative rounded-lg border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 p-5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

                            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 relative z-10">
                            
                            <div className="shrink-0">
                                <span className="inline-block text-base font-mono font-bold tracking-wider text-white bg-gradient-to-b from-white/15 to-white/5 border border-white/10 px-3 py-1 rounded shadow-md group-hover:from-white/25 group-hover:to-white/10 transition-all duration-500">
                                {item.year}
                                </span>
                            </div>

                            <div className="pt-1">
                                <p className="text-sm text-zinc-400 leading-relaxed font-light tracking-wide group-hover:text-zinc-200 transition-colors duration-500">
                                {item.text}
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}