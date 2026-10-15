const badges = [
  { emoji: "📉", label: "-73% Picos de Glucosa" },
  { emoji: "⚡", label: "+4 hrs de Energía Estable" },
  { emoji: "🧠", label: "Cero Niebla Mental" },
  { emoji: "⏱️", label: "Aplicables en < 2 Minutos" },
];

export function HeroSection() {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#F0FDF4] to-white border-b border-[#28A745]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#28A745] mb-4">
          ⚡ Ciencia · Hábitos · Campus
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-tight mb-5">
          Hacks de Energía{" "}
          <span className="text-[#28A745]">para el Campus</span>
        </h1>

        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10">
          6 estrategias respaldadas por la ciencia para eliminar la somnolencia
          post-almuerzo, estabilizar tu glucosa y mantener el enfoque mental
          durante todo el día.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#28A745]/25 shadow-sm text-[#1a6b30] font-semibold text-sm hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
            >
              <span>{b.emoji}</span>
              <span>{b.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
