import Image from "next/image";

export function ContextHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-stone-200/70">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-stone-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
            Soluciones por Contexto
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-[1.05] mb-5">
            Tu realidad universitaria,{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">tu forma de comer</span>
              <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 bg-amber-300/70 -z-0 rounded" />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-xl">
            No es lo mismo llegar caminando que cruzar media Lima en bus, ni vivir con tu familia que
            solo en un cuarto. Cuéntanos dónde vives y te mostramos qué desayunar, qué almorzar y
            dónde comer según tu día a día.
          </p>

          <a
            href="#pregunta"
            id="hero-cta-contexto"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-stone-950 hover:bg-stone-800 text-white px-6 py-3.5 font-bold text-sm sm:text-base shadow-lg shadow-stone-950/10 transition-all hover:-translate-y-0.5"
          >
            Encontrar mi contexto
            <span aria-hidden>↓</span>
          </a>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/home-context.png"
              alt="Bandejas de almuerzo en un comedor universitario"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Chips flotantes */}
          <div className="absolute -top-4 -left-3 sm:-left-6 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-stone-100 text-sm font-bold text-stone-800">
            🏠 Vivo cerca
          </div>
          <div className="absolute top-1/2 -right-3 sm:-right-6 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-stone-100 text-sm font-bold text-stone-800">
            🚌 2h de viaje
          </div>
          <div className="absolute -bottom-4 left-6 sm:left-10 rounded-2xl bg-white px-4 py-2.5 shadow-xl border border-stone-100 text-sm font-bold text-stone-800">
            🎒 Soy foráneo
          </div>
        </div>
      </div>
    </section>
  );
}
