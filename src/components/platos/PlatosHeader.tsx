import Image from "next/image";
import { SparklesIcon } from "./Icons";

export function PlatosHeader() {
  const steps = [
    {
      num: "1°",
      title: "Fibra primero",
      desc: "Ensalada o sarsa criolla antes del arroz.",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      num: "2°",
      title: "Proteína y grasas",
      desc: "Pollo, pescado o huevo para saciedad.",
      color: "bg-blue-100 text-blue-800",
    },
    {
      num: "3°",
      title: "Carbohidratos al final",
      desc: "Arroz o fideos al final de la comida.",
      color: "bg-amber-100 text-amber-800",
    },
    {
      num: "4°",
      title: "Caminar 10 minutos",
      desc: "Paseo hacia el aula para absorber glucosa.",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#f7f3ec] to-[#FAF8F5] pt-10 pb-8 border-b border-stone-200/70">
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Lado izquierdo: Textos y llamada a la acción */}
          <div className="flex-1 max-w-2xl">
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-stone-900 border border-amber-300/80 text-xs font-black uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>RADIOGRAFÍA NUTRICIONAL</span>
            </div>

            {/* Título Principal */}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.15]">
              Lo que realmente hay en{" "}
              <span className="relative inline-block text-emerald-800">
                tu bandeja
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-amber-300/40 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Párrafo reducido a máx. 2 líneas */}
            <p className="mt-3 text-sm sm:text-base text-stone-700 font-medium leading-relaxed line-clamp-2">
              Comer en la universidad no debería costarte la concentración de la tarde. Analizamos los platos cotidianos para ayudarte a prevenir la pesadez tras el almuerzo.
            </p>

            {/* Botón Ver Platos */}
            <div className="mt-5">
              <a
                href="#catalogo-platos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>Ver platos</span>
                <span className="text-sm">↓</span>
              </a>
            </div>
          </div>

          {/* Lado derecho: Imagen en lg+ con next/image */}
          <div className="hidden lg:flex items-center justify-center shrink-0 w-72 xl:w-80">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-100">
              <Image
                src="/images/platos/hero.webp"
                alt="Radiografía nutricional de platos universitarios VitalFIIS"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stepper horizontal de las 4 reglas con flex-1 ocupando todo el ancho */}
        <div className="mt-8 pt-6 border-t border-stone-200/80">
          <div className="flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-black uppercase tracking-wider text-stone-800">
              Regla de la Secuencia: La Mínima Dosis Eficaz en el Comedor
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {steps.map((st, idx) => (
              <div key={idx} className="flex-1 flex items-center gap-2 min-w-[200px]">
                <div className="flex-1 flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 shadow-2xs h-full">
                  <span
                    className={`w-7 h-7 rounded-lg ${st.color} text-xs font-black flex items-center justify-center shrink-0`}
                  >
                    {st.num}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{st.title}</h4>
                    <p className="text-xs text-stone-600 leading-snug mt-0.5">{st.desc}</p>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <span className="hidden sm:inline text-stone-300 font-black text-sm shrink-0 px-0.5">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
