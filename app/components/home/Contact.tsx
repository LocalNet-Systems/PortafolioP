import { getData } from "../../lib/getData";
import type { ContactData } from "../../types/home/contact";

export default async function Contact() {
  const contact = await getData<ContactData>("/data/home/contact.json");

  return (
    <>
      <section id="contacto" className="relative py-20 space-y-12 px-4 md:px-6">
        
        <div className="space-y-4 max-w-xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {contact.title}
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-amber-400 via-indigo-500 to-transparent rounded-full" />
        </div>

        <div className="relative rounded-[40px] border border-white/10 p-8 md:p-12 lg:p-16 bg-black/40 backdrop-blur-md shadow-2xl overflow-hidden group">
          
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="absolute -top-24 -left-24 h-52 w-52 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-52 w-52 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-3">
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
                {contact.description}
              </p>
            </div>

            <div className="lg:col-span-2 w-full flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-4">
              {contact.actions.map((action, i) => (
                <a
                  key={i}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "w-full rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 px-8 py-4 font-semibold text-sm tracking-wide text-center shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
                      : "w-full rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 font-medium text-sm tracking-wide text-center backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}