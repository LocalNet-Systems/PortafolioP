import Image from "next/image";
import { getData } from "../../lib/getData";
import type { HeroData } from "../../types/home/hero";
import Link from "next/link";

export default async function Hero() {
  const heroData = await getData<HeroData>("/data/home/hero.json");

  return (
    <section className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] px-6 py-12 md:px-12 rounded-[40px] bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl">
      
      <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="space-y-8 relative z-10">
        <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-zinc-300 backdrop-blur-sm tracking-wide shadow-inner">
          <span className="mr-2 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {heroData.badge}
        </span>

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            {heroData.title}
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            {heroData.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {heroData.buttons.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className={
                btn.variant === "primary"
                  ? "rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 px-8 py-3.5 font-semibold text-sm tracking-wide shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
                  : "rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 px-8 py-3.5 font-medium text-sm tracking-wide backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              }
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[550px] flex items-center justify-center relative z-10 order-1 lg:order-2 mt-4 lg:mt-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-amber-500/20 blur-[80px] pointer-events-none" />

        <div className="relative w-full h-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-zinc-900/50 shadow-2xl">
          <Image
            src={heroData.image}
            alt={heroData.title}
            width={700}
            height={800}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>

        <div className="absolute -bottom-4 left-2 sm:left-6 bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl transition-transform duration-300 hover:-translate-y-1 max-w-[180px] sm:max-w-none">
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium">
            Horarios
          </p>
          <p className="font-semibold text-white text-sm sm:text-base mt-0.5">
            9:00 AM - 6:00 PM
          </p>
        </div>

        <div className="absolute top-6 right-2 sm:right-6 bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl transition-transform duration-300 hover:-translate-y-1 max-w-[180px] sm:max-w-none">
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium">Consultas</p>
          <p className="font-semibold text-white text-sm sm:text-base mt-0.5">Primera evaluación gratuita</p>
        </div>
      </div>
    </section>
  );
}