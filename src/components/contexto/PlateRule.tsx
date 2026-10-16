import Link from "next/link";

const plateParts = [
  { label: "Verduras y ensalada", share: "½ plato", color: "bg-emerald-500", example: "Ensalada de la entrada, verduras del saltado, la sopa." },
  { label: "Proteína", share: "¼ plato", color: "bg-amber-400", example: "Huevo, pollo, pescado, atún, menestras." },
  { label: "Carbohidrato", share: "¼ plato", color: "bg-orange-300", example: "Arroz, papa, camote, fideos o pan." },
];

const places = [
  { emoji: "🍽️", where: "En el comedor", how: "Come primero la ensalada y no dejes la menestra." },
  { emoji: "🏪", where: "En el menú", how: "Cambia las papas fritas por ensalada o pide arroz con menestra." },
  { emoji: "🥡", where: "En tu burra", how: "Llena la mitad del táper con verduras antes de poner el arroz." },
];

export function PlateRule() {
  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Plato visual */}
        <div className="flex justify-center">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-white p-4 shadow-2xl ring-8 ring-stone-100">
            <div
              className="h-full w-full rounded-full transition-transform duration-700 hover:rotate-12"
              style={{
                background:
                  "conic-gradient(#10b981 0 50%, #fbbf24 50% 75%, #fdba74 75% 100%)",
              }}
            />
            <span className="absolute left-[18%] top-1/2 -translate-y-1/2 text-4xl sm:text-5xl">🥗</span>
            <span className="absolute right-[20%] top-[24%] text-3xl sm:text-4xl">🍗</span>
            <span className="absolute right-[20%] bottom-[22%] text-3xl sm:text-4xl">🍚</span>
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Una regla para todos los contextos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Comas donde comas, usa la regla del plato
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            No necesitas contar calorías. Solo mira tu plato y acércate a esta proporción.
          </p>

          <ul className="mt-6 space-y-3">
            {plateParts.map((part) => (
              <li key={part.label} className="flex items-start gap-3">
                <span className={`mt-1 h-4 w-4 shrink-0 rounded-full ${part.color}`} />
                <p className="text-sm sm:text-base text-stone-700">
                  <strong className="text-stone-900">{part.share} · {part.label}:</strong> {part.example}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {places.map((place) => (
              <div key={place.where} className="rounded-2xl bg-white border border-stone-200 p-4 shadow-sm">
                <span className="text-2xl">{place.emoji}</span>
                <h3 className="mt-1 text-sm font-extrabold text-stone-900">{place.where}</h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">{place.how}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/platos"
              id="cta-ver-platos"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-300 hover:bg-amber-400 px-5 py-3 text-sm font-bold text-stone-900 shadow-sm transition-all hover:translate-x-0.5"
            >
              Ver platos recomendados →
            </Link>
            <Link
              href="/hacks-energia"
              id="cta-ver-hacks"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-stone-300 hover:border-stone-400 px-5 py-3 text-sm font-bold text-stone-900 transition-all"
            >
              Más hacks de energía
            </Link>
          </div>

          <p className="mt-8 text-xs text-stone-400">
            * Precios referenciales y aproximados en soles; pueden variar según la zona y la temporada.
          </p>
        </div>
      </div>
    </section>
  );
}
