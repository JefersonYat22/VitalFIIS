import { SparklesIcon } from "./Icons";

export function PlatosHeader() {
  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#f7f3ec] to-[#FAF8F5] pt-12 pb-10 border-b border-stone-200/70">
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge Superior */}
        <div className="flex items-center justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-stone-900 border border-amber-300/80 text-xs font-black uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>RADIOGRAFÍA NUTRICIONAL</span>
          </div>
        </div>

        {/* Título Principal y Subtítulo */}
        <div className="mt-5 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.15]">
            Lo que realmente hay en{" "}
            <span className="relative inline-block text-emerald-800">
              tu bandeja
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-amber-300/40 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-700 font-medium leading-relaxed max-w-3xl">
            Comer en la universidad no debería costarte la concentración de la tarde. Analizamos los platos más comunes del comedor universitario, la carretilla y el tupper foráneo bajo el lente del <strong className="text-stone-950 font-bold">Pragmatismo Empático</strong> y la bioquímica de la glucosa (inspirada en Jessie Inchauspé). Descubre cómo hackear su impacto sin dejar de comer lo que te gusta.
          </p>
        </div>

        {/* Las 4 Reglas de Oro del Comedor */}
        <div className="mt-8 pt-6 border-t border-stone-200/80">
          <div className="flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-black uppercase tracking-wider text-stone-800">
              La Mínima Dosis Eficaz en el Comedor (Regla de la Secuencia)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-amber-300 transition-colors">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                1°
              </span>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Fibra Primero</h4>
                <p className="text-[11px] text-stone-600 leading-snug">
                  Come la ensalada o sarsa criolla antes del arroz para crear una barrera gástrica.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-amber-300 transition-colors">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 text-xs font-black flex items-center justify-center shrink-0">
                2°
              </span>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Proteínas y Grasas</h4>
                <p className="text-[11px] text-stone-600 leading-snug">
                  Pollo, huevo, pescado o menestras activan la saciedad y frenan el vaciamiento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-amber-300 transition-colors">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 text-xs font-black flex items-center justify-center shrink-0">
                3°
              </span>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Carbohidratos al Final</h4>
                <p className="text-[11px] text-stone-600 leading-snug">
                  El arroz o fideos al final aplanan la curva de glucosa hasta en un 40%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-amber-300 transition-colors">
              <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 text-xs font-black flex items-center justify-center shrink-0">
                4°
              </span>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Caminar 10 Minutos</h4>
                <p className="text-[11px] text-stone-600 leading-snug">
                  Caminar al pabellón absorbe glucosa en los músculos sin disparar insulina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
