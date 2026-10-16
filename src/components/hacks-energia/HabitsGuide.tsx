"use client";

import { useState } from "react";

const checkItems = [
  "Botella de agua sobre el escritorio al estudiar.",
  "Frutos secos o snacks saludables visibles en la mochila.",
  "Ultraprocesados fuera de la vista en tu cuarto.",
];

const habitStacks = [
  {
    trigger: "Al recibir el almuerzo en la cafetería",
    action: "Comeré primero la ensalada.",
  },
  {
    trigger: "Al terminar la última clase antes del almuerzo",
    action: "Beberé un vaso de agua.",
  },
  {
    trigger: "Al cerrar la laptop después de comer",
    action: "Caminaré 10 minutos por el campus.",
  },
];

const microActions = [
  {
    title: "Solo añade almendras",
    desc: "No cambies toda tu dieta. Solo agrega un puñado de almendras a tu fruta habitual de hoy.",
  },
  {
    title: "Solo 2 minutos de caminata",
    desc: "En vez de 'hacer ejercicio 1 hora', solo sal y camina 2 minutos. El hábito se construye solo.",
  },
  {
    title: "Pon la botella visible ahora",
    desc: "En vez de 'tomar agua todo el día', pon la botella en tu escritorio ahora. Eso es todo.",
  },
];

export function HabitsGuide() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const completedCount = checked.filter(Boolean).length;

  return (
    <section className="w-full py-14 sm:py-16 bg-[#F0FDF4] border-t border-[#28A745]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#28A745] mb-3">
            Metodología Sin Fricción
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 leading-tight">
            De la Teoría a tu Rutina
          </h2>
          <p className="mt-3 text-stone-600 text-base max-w-xl mx-auto">
            Basado en{" "}
            <em className="font-semibold text-stone-800">Hábitos Atómicos</em>{" "}
            de James Clear. Tres pasos para que los hacks se vuelvan
            automáticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* ── PASO 1: Hazlo Obvio ── */}
          <div className="bg-white rounded-2xl border-2 border-[#28A745] p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-full bg-[#28A745] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#28A745]">
                  Paso 1
                </p>
                <h3 className="font-extrabold text-stone-900 text-base leading-snug">
                  Hazlo Obvio 👁️
                </h3>
              </div>
            </div>
            <p className="text-xs text-stone-500 mb-5 leading-relaxed">
              Diseña tu entorno para que el hábito saludable sea la opción más
              visible y fácil de elegir.
            </p>

            {/* Interactive checklist */}
            <div className="space-y-3 flex-1">
              {checkItems.map((item, i) => (
                <button
                  key={i}
                  id={`habit-check-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-3 text-left group"
                >
                  <span
                    className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                      checked[i]
                        ? "bg-[#28A745] border-[#28A745]"
                        : "border-stone-300 group-hover:border-[#28A745]"
                    }`}
                  >
                    {checked[i] && (
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="white"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-sm leading-snug transition-colors ${
                      checked[i] ? "line-through text-stone-400" : "text-stone-700"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-5 pt-4 border-t border-stone-100">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-stone-500">Progreso de entorno</span>
                <span className="font-bold text-[#28A745]">
                  {completedCount}/{checkItems.length}
                </span>
              </div>
              <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#28A745] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(completedCount / checkItems.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* ── PASO 2: Hazlo Fácil ── */}
          <div className="bg-white rounded-2xl border-2 border-[#28A745] p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-full bg-[#28A745] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                2
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#28A745]">
                  Paso 2
                </p>
                <h3 className="font-extrabold text-stone-900 text-base leading-snug">
                  Hazlo Fácil 🔗
                </h3>
              </div>
            </div>
            <p className="text-xs text-stone-500 mb-5 leading-relaxed">
              Encadena un hábito nuevo a uno que ya tienes.{" "}
              <em className="font-medium">"Cuando haga X → haré Y."</em>
            </p>

            {/* Habit stacking formulas */}
            <div className="space-y-3 flex-1">
              {habitStacks.map((stack, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-[#F0FDF4] border border-[#28A745]/15 p-3"
                >
                  <p className="text-xs text-stone-500 italic leading-snug mb-1.5">
                    &ldquo;{stack.trigger}&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#28A745] font-black text-lg leading-none">
                      →
                    </span>
                    <p className="text-sm font-bold text-stone-800 leading-snug">
                      {stack.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PASO 3: Regla de 2 Minutos ── */}
          <div className="bg-white rounded-2xl border-2 border-[#28A745] p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-full bg-[#28A745] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                3
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#28A745]">
                  Paso 3
                </p>
                <h3 className="font-extrabold text-stone-900 text-base leading-snug">
                  Regla de 2 Minutos ⏱️
                </h3>
              </div>
            </div>
            <p className="text-xs text-stone-500 mb-5 leading-relaxed">
              Si el hábito se puede iniciar en menos de 2 minutos, la
              resistencia desaparece. Empieza ridículamente pequeño.
            </p>

            {/* Micro-action cards */}
            <div className="space-y-3 flex-1">
              {microActions.map((action, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F0FDF4] border border-[#28A745]/15"
                >
                  <span className="text-[#28A745] font-black text-sm flex-shrink-0 mt-0.5">
                    ⚡
                  </span>
                  <div>
                    <p className="text-xs font-bold text-stone-800 mb-0.5">
                      {action.title}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {action.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
