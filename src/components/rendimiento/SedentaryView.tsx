"use client";

import { useState } from "react";
import { SEDENTARY_MICRO_HACKS, SEDENTARY_CHALLENGE_STEPS } from "@/data/rendimientoData";

export function SedentaryView() {
  const [activeHackId, setActiveHackId] = useState<string>(SEDENTARY_MICRO_HACKS[0].id);
  const [completedDays, setCompletedDays] = useState<number[]>([0]);

  const activeHack =
    SEDENTARY_MICRO_HACKS.find((h) => h.id === activeHackId) || SEDENTARY_MICRO_HACKS[0];

  const toggleDay = (idx: number) => {
    if (completedDays.includes(idx)) {
      setCompletedDays(completedDays.filter((d) => d !== idx));
    } else {
      setCompletedDays([...completedDays, idx]);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-300">
      {/* Mensaje de Empatía & Alerta Saludable */}
      <section className="bg-white rounded-2xl border border-amber-200/80 p-6 sm:p-8 shadow-xs">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
            <span>⚠️</span> Realidad Universitaria & Salud
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-snug">
            Pasar 10 horas sentado es común en la universidad,{" "}
            <span className="text-amber-800 underline decoration-amber-400 decoration-wavy">
              pero tu cuerpo no fue diseñado para la inmovilidad.
            </span>
          </h3>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Entre clases continuas, sesiones de código, lecturas densas y el tiempo en transporte
            público, es muy fácil caer en una rutina sedentaria. No se trata de culparte: la exigencia
            académica empuja a la silla. Pero{" "}
            <strong className="text-stone-950 font-bold">
              permanecer inmóvil todo el día apaga progresivamente tu función cognitiva y daña tu sueño nocturno
            </strong>
            : disminuye la oxigenación al cerebro, provoca niebla mental, resistencia a la insulina y
            pesadez vespertina.
          </p>

          {/* Comparativa visual de impacto con estilo limpio de cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-rose-50/60 border border-rose-200/80 shadow-2xs space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <span>❌</span> El Costo del Sedentarismo Continuo
              </span>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc pl-4">
                <li>Menor flujo sanguíneo al córtex prefrontal (te cuesta retener fórmulas y código).</li>
                <li>Picos y caídas de glucosa tras comer (sueño incontrolable en clase).</li>
                <li>Glúteos desactivados y tensión acumulada en cuello y zona lumbar.</li>
                <li>Falta de cansancio muscular real para conciliar el sueño de noche.</li>
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 shadow-2xs space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <span>✅</span> La Magia de los Micro-Estímulos (1%)
              </span>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc pl-4">
                <li>3 minutos de movimiento activan transportadores GLUT4 para procesar la glucosa.</li>
                <li>Se reactiva el retorno venoso y tus ojos reciben descanso neural.</li>
                <li>Aumenta la dopamina y la concentración sin requerir energizantes artificiales.</li>
                <li>Sincroniza tu ritmo circadiano para lograr un sueño profundo y reparador.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Interactiva: Micro-Hacks de Movimiento (Sin sudar ni ir al gym) */}
      <section className="space-y-6 sm:space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#1d6e32] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            La Mínima Dosis Eficaz
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
            Micro-Hacks de Movimiento: Muévete sin cambiarte de ropa
          </h3>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            No necesitas pagar un gimnasio ni sudar en clase. Aplica estos estímulos discretos para
            mantener tu metabolismo encendido mientras estudias.
          </p>
        </div>

        {/* Selector de Hacks por Pestañas */}
        <div className="flex flex-wrap gap-2 justify-center">
          {SEDENTARY_MICRO_HACKS.map((hack) => {
            const isSelected = hack.id === activeHackId;
            return (
              <button
                key={hack.id}
                onClick={() => setActiveHackId(hack.id)}
                type="button"
                className={`flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#28A745] text-white border-[#28A745] shadow-xs scale-102"
                    : "bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-stone-50"
                }`}
              >
                <span>{hack.icon}</span>
                <span>{hack.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detalle del Hack Seleccionado con estilo limpio */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  {activeHack.icon}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {activeHack.badgeText} • {activeHack.frequency}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-stone-900">
                    {activeHack.title}
                  </h4>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
                {activeHack.subtitle}
              </p>

              {/* Por qué funciona cientificamente */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-stone-800 leading-relaxed">
                <strong className="text-amber-950 font-bold block mb-1">
                  🔬 La explicación biológica:
                </strong>
                {activeHack.scientificWhy}
              </div>

              {/* Paso a paso */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-900 block">
                  Cómo ejecutarlo hoy mismo:
                </span>
                <ol className="space-y-2">
                  {activeHack.instructions.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Tarjeta de Resumen / Métrica */}
            <div className="w-full lg:w-72 bg-[#FAF8F5] rounded-xl p-5 border border-stone-200 flex flex-col justify-between space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500 block mb-1">
                  Beneficio Principal
                </span>
                <p className="text-sm font-bold text-stone-900 leading-snug">
                  {activeHack.benefit}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 text-stone-600">
                <p>
                  💡 <strong>Tip pro:</strong> Vincula este micro-hack a un hábito existente:
                  cada vez que termines de compilar código o cada vez que finalice una clase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrición Especial para Bajo Gasto Energético */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Guía de Alimentación Sostenible
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900">
              ¿Qué comer si pasas el día sentado?
            </h3>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 w-fit">
            Ajuste calórico & glucosa estable
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
            <div className="text-2xl">🥑</div>
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              Menos carbohidratos simples sin fibra
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Si tus músculos no se están contrayendo intensamente, un exceso de harinas o galletas
              refinadas terminará acumulándose y provocando sueño pesado. Reduce porciones de arroz o
              fideos y añade verduras frescas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
            <div className="text-2xl">🥚</div>
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              Prioriza proteína & saciedad
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Huevos sancochados, lentejas, queso fresco o atún. La proteína modula los neurotransmisores
              del apetito (grelina) y mantiene el cerebro enfocado sin subidones nerviosos.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
            <div className="text-2xl">🍵</div>
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              Infusiones & Té Verde vs. Gaseosas
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              El té verde contiene L-teanina, un aminoácido que promueve ondas cerebrales alfa (calma
              atenta). Reemplaza las bebidas azucaradas que solo elevan la insulina y causan somnolencia.
            </p>
          </div>
        </div>
      </section>

      {/* Desafío Progresivo de Activación (Formato Claro en Card Blanca, sin fondo negro) */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Hábitos Progresivos
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900">
              Desafío de Activación Semanal: De 0 a 1
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5 max-w-xl">
              No intentes correr una maratón de inmediato. Haz un pequeño ajuste acumulativo cada dos
              días y experimenta cómo mejora tu lucidez y tu descanso nocturno.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-center self-start sm:self-auto">
            <span className="text-[11px] text-emerald-800 block font-semibold">Progreso actual</span>
            <span className="text-base font-black text-[#1d6e32]">
              {completedDays.length} de {SEDENTARY_CHALLENGE_STEPS.length} completados
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEDENTARY_CHALLENGE_STEPS.map((step, idx) => {
            const isDone = completedDays.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleDay(idx)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isDone
                    ? "bg-emerald-50/70 border-[#28A745] shadow-xs"
                    : "bg-[#FAF8F5] border-stone-200 hover:border-emerald-300 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">
                      {step.day}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isDone ? "bg-[#28A745] text-white" : "bg-stone-200 text-stone-600"
                      }`}
                    >
                      {isDone ? "✓" : "+"}
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">{step.desc}</p>
                </div>

                <div className="pt-2.5 border-t border-stone-200/70 flex items-center justify-between text-[11px]">
                  <span className="text-stone-500 font-medium">Recompensa:</span>
                  <span className="font-bold text-[#1d6e32]">{step.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase de Cierre / Motivación Científica */}
        <div className="pt-3 border-t border-stone-100 text-center">
          <p className="text-xs text-stone-600 italic">
            &ldquo;No tienes que ser un atleta olímpico para que tu cuerpo responda. El cambio del 1%
            en tu movimiento diario produce una ganancia exponencial en tu memoria y lucidez académica.&rdquo;{" "}
            <span className="font-bold text-stone-800">— James Clear & Dr. Andy Galpin</span>
          </p>
        </div>
      </section>
    </div>
  );
}
