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
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl">
                
                {/* Línea superior decorativa */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Glows */}
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

                <div className="relative z-10 p-8 md:p-10">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                    <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">
                        Consulta Profesional
                    </span>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                        {service}
                    </h3>

                    <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-amber-400 via-indigo-500 to-transparent rounded-full" />
                    </div>

                    <button
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:text-white"
                    >
                    ✕
                    </button>
                </div>

                {/* Campo */}
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
                        border
                        border-white/10
                        bg-black/30
                        p-5
                        text-white
                        placeholder:text-zinc-500
                        resize-none
                        outline-none
                        transition-all
                        focus:border-indigo-500/50
                        focus:ring-2
                        focus:ring-indigo-500/20
                    "
                    />
                </div>

                {/* Footer */}
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                    onClick={onClose}
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        px-6
                        py-3
                        text-zinc-300
                        transition-all
                        hover:border-white/20
                        hover:text-white
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