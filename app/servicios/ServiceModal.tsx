"use client";

interface ServiceModalProps {
    isOpen: boolean;
    service: string | null;
    caseDetail: string;
    onChangeDetail: (value: string) => void;
    onClose: () => void;
    onSend: () => void;
}

export default function ServiceModal({
    isOpen,
    service,
    caseDetail,
    onChangeDetail,
    onClose,
    onSend
}: ServiceModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
                />

                <div
                className="
                    relative
                    w-full max-w-2xl
                    overflow-hidden
                    rounded-[32px]
                    border border-white/10
                    bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                    backdrop-blur-2xl
                    shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                "
                >
                <div className="absolute inset-0 opacity-100 pointer-events-none">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
                </div>

                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative z-10 p-8 md:p-10">
                    <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="space-y-2">
                        <span className="text-xs font-bold tracking-[0.25em] text-zinc-600 uppercase">
                        Consulta profesional
                        </span>

                        <h3 className="text-3xl font-bold tracking-tight text-white">
                        {service}
                        </h3>

                        <div className="h-[2px] w-24 rounded-full bg-gradient-to-r from-indigo-500 via-white/40 to-amber-500" />
                    </div>

                    <button
                        onClick={onClose}
                        className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/5
                        text-zinc-400
                        transition-all duration-300
                        hover:bg-white/10
                        hover:text-white
                        hover:rotate-90
                        "
                    >
                        ✕
                    </button>
                    </div>

                    <div className="space-y-3">
                    <label className="block text-sm font-medium text-zinc-300">
                        Cuéntame un poco sobre tu caso
                    </label>

                    <textarea
                        value={caseDetail}
                        onChange={(e) => onChangeDetail(e.target.value)}
                        rows={7}
                        placeholder="Describe tu situación, necesidades o cualquier detalle relevante para poder brindarte una mejor asesoría..."
                        className="
                        w-full
                        rounded-2xl
                        border border-white/10
                        bg-black/30
                        p-5
                        text-white
                        placeholder:text-zinc-500
                        resize-none
                        outline-none
                        transition-all duration-300
                        focus:border-indigo-500/40
                        focus:ring-2 focus:ring-indigo-500/10
                        hover:border-white/20
                        "
                    />
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                        onClick={onClose}
                        className="
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        px-6 py-3
                        text-zinc-300
                        transition-all duration-300
                        hover:bg-white/10
                        hover:text-white
                        hover:border-white/20
                        "
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={onSend}
                        disabled={!caseDetail.trim()}
                        className="
                        rounded-2xl
                        bg-gradient-to-r
                        from-emerald-500
                        to-green-600
                        px-6
                        py-3
                        font-medium
                        text-white
                        shadow-lg
                        shadow-emerald-500/20
                        transition-all
                        hover:scale-[1.02]
                        hover:shadow-emerald-500/40
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        "
                    >
                        Consultar por WhatsApp
                    </button>
                    </div>
                </div>
            </div>
        </div>
        );
}