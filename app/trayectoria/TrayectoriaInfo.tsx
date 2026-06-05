import type { TrajectoryData } from "../types/home/trayectoria";

interface Props {
  trajectory: TrajectoryData;
}

export default function TrayectoriaInfo({ trajectory }: Props) {
  return (
    <div className="max-w-5xl mx-auto mt-10 mb-16 grid md:grid-cols-2 gap-6 px-4 md:px-0">

      <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8 overflow-hidden group transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
        
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/[0.02] rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 group-hover:bg-white/[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="h-[1px] w-4 bg-gradient-to-r from-white/40 to-transparent" />
          <h3 className="text-xs font-mono font-semibold tracking-[0.2em] text-zinc-300 uppercase">
            {trajectory.approachTitle}
          </h3>
        </div>

        <ul className="space-y-4 text-sm text-zinc-400 relative z-10">
          {trajectory.approach?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600 mt-2 transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-125" />
              <span className="leading-relaxed font-light tracking-wide group-hover/item:text-zinc-200 transition-colors duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8 overflow-hidden group transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
        
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/[0.02] rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 group-hover:bg-white/[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="h-[1px] w-4 bg-gradient-to-r from-white/40 to-transparent" />
          <h3 className="text-xs font-mono font-semibold tracking-[0.2em] text-zinc-300 uppercase">
            {trajectory.valuesTitle}
          </h3>
        </div>

        <ul className="space-y-4 text-sm text-zinc-400 relative z-10">
          {trajectory.values?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600 mt-2 transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-125" />
              <span className="leading-relaxed font-light tracking-wide group-hover/item:text-zinc-200 transition-colors duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}