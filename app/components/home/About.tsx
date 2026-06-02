import { getData } from "../../lib/getData";
import type { AboutData } from "../../types/home/about";

export default async function About() {
  const about = await getData<AboutData>("/data/home/about.json");

  return (
    <section className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 px-6 md:px-12 rounded-[40px] bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl mt-12">
      
      {/* Luces de fondo ambientales (Glow) consistentes con la Hero */}
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      {/* COLUMNA IZQUIERDA: TEXTO E HISTORIA */}
      <div className="space-y-8 relative z-10 h-full flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {about.title}
          </h2>

          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* CONTADORES / STATS (Ahora cierran el bloque izquierdo) */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-8 lg:mt-0">
          {about.stats.map((stat, i) => (
            <div key={i} className="group">
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMNA DERECHA: TARJETA Y DESTACADOS */}
      <div className="relative w-full relative z-10 lg:mt-0 mt-6">
        
        {/* Tarjeta Principal de Áreas (Estilo Glassmorphic) */}
        <div className="relative rounded-[32px] border border-white/10 p-8 sm:p-10 bg-zinc-900/40 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500">
          {/* Brillo interno decorativo */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">
            {about.areasTitle}
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4 text-zinc-300">
            {about.areas.map((area, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base group/item">
                {/* Check icon estilizado en CSS */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 group-hover/item:bg-emerald-500 group-hover/item:text-black transition-all duration-300">
                  ✓
                </span>
                <span className="group-hover/item:text-white transition-colors duration-200">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  );
}