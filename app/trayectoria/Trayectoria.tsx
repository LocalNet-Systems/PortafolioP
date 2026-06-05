"use client";

import type { TrajectoryData } from "../types/home/trayectoria";

interface Props {
  trajectory: TrajectoryData;
}

export default function Trayectoria({ trajectory }: Props) {
  return (
    <section className="relative pt-4 pb-10 px-4 md:px-0 text-white overflow-hidden">

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[600px] bg-white/[0.03] rounded-full blur-[130px]" />
      </div>

      <div className="max-w-5xl mx-auto space-y-4 mb-12">
        <div className="space-y-4 max-w-2xl relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {trajectory.title}
          </h1>
          <div className="h-[2px] w-20 bg-gradient-to-r from-amber-400 via-indigo-500 to-transparent rounded-full" />
        </div>

        <div className="relative max-w-3xl pt-2">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-amber-400/60 via-white/10 to-transparent rounded-full" />

          <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light pl-4 border-l border-white/5">
            {trajectory.intro}
          </p>
        </div>
      </div>

      {trajectory.video && (
        <div className="max-w-5xl mx-auto relative group">
          
          <div className="absolute inset-0 bg-white/[0.01] rounded-2xl blur-xl group-hover:bg-white/[0.03] transition-all duration-700 pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-white/20 transition-all duration-500">
            
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />

            <iframe
              className="w-full aspect-video scale-[1.005] group-hover:scale-100 transition-transform duration-750 ease-out"
              src={`${trajectory.video.src.replace("watch?v=", "embed/")}?autoplay=1`}
              title={trajectory.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}