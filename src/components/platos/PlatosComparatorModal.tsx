"use client";

import React, { useState } from "react";
import { PlatoNutricional } from "@/types";
import {
  XIcon,
  ScaleIcon,
  FlameIcon,
  ClockIcon,
  BrainIcon,
  SparklesIcon,
} from "./Icons";

interface PlatosComparatorModalProps {
  selectedPlatos: PlatoNutricional[];
  onRemovePlato: (id: string) => void;
  onClearAll: () => void;
}

export function PlatosComparatorModal({
  selectedPlatos,
  onRemovePlato,
  onClearAll,
}: PlatosComparatorModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (selectedPlatos.length === 0) return null;

  const platoA = selectedPlatos[0];
  const platoB = selectedPlatos[1] || null;

  return (
    <>
      {/* BANNER FLOTANTE INFERIOR */}
      <div className="fixed bottom-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-3xl mx-auto bg-stone-900/95 text-white backdrop-blur-lg rounded-2xl shadow-2xl border border-stone-700/80 p-3 sm:p-4 pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Info de selección */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
              <ScaleIcon className="w-5 h-5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  Duelo de Menús ({selectedPlatos.length}/2)
                </span>
                {platoB && (
                  <span className="text-[10px] font-bold bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full">
                    ¡Listo para comparar!
                  </span>
                )}
              </div>

              <div className="text-xs font-bold text-stone-200 truncate mt-0.5">
                <span>{platoA.nombre}</span>
                {platoB ? (
                  <span className="text-amber-400 font-black"> vs {platoB.nombre}</span>
                ) : (
                  <span className="text-stone-400 italic"> — Selecciona 1 plato más en el catálogo</span>
                )}
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClearAll}
              className="px-3 py-2 text-xs font-bold text-stone-400 hover:text-white transition cursor-pointer"
            >
              Limpiar
            </button>

            <button
              disabled={!platoB}
              onClick={() => setIsOpen(true)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black tracking-wide uppercase flex items-center gap-2 transition-all cursor-pointer ${
                platoB
                  ? "bg-emerald-500 hover:bg-emerald-400 text-stone-950 shadow-lg shadow-emerald-500/20 active:scale-95"
                  : "bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700"
              }`}
            >
              <ScaleIcon className="w-4 h-4" />
              <span>{platoB ? "Abrir Duelo Comparativo" : "Falta 1 plato"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL COMPARADOR COMPLETO */}
      {isOpen && platoA && platoB && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Cabecera del Modal */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white flex items-center justify-between border-b border-stone-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
                  <ScaleIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                    Duelo Nutricional Universitario
                  </h3>
                  <p className="text-xs text-stone-300 font-medium">
                    Radiografía frente a frente para tu decisión estratégica de hoy
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                title="Cerrar ventana"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido scrolleable de la comparativa */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              {/* Tarjetas lado a lado de los 2 platos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[platoA, platoB].map((item, index) => {
                  const isFirst = index === 0;
                  const other = isFirst ? platoB : platoA;
                  const calDiff = item.calorias - other.calorias;

                  return (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-2xs space-y-4"
                    >
                      {/* Cabecera plato */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl">{item.emoji}</span>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 block">
                              {item.categoriaLabel}
                            </span>
                            <h4 className="text-base sm:text-lg font-black text-stone-950 leading-tight">
                              {item.nombre}
                            </h4>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onRemovePlato(item.id);
                            if (selectedPlatos.length <= 2) {
                              setIsOpen(false);
                            }
                          }}
                          className="text-stone-400 hover:text-rose-600 transition p-1"
                          title="Remover de comparador"
                        >
                          <XIcon className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Métricas Principales */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Calorías */}
                        <div className="p-3 rounded-xl bg-white border border-stone-200">
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 block">
                            Calorías Totales
                          </span>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-xl font-black text-amber-900">
                              {item.calorias}
                            </span>
                            <span className="text-[11px] font-bold text-stone-500">kcal</span>
                          </div>
                          {calDiff !== 0 && (
                            <span className={`text-[10px] font-bold ${calDiff > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                              {calDiff > 0 ? `+${calDiff} kcal vs rival` : `${calDiff} kcal vs rival`}
                            </span>
                          )}
                        </div>

                        {/* Saciedad */}
                        <div className="p-3 rounded-xl bg-white border border-stone-200">
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 block">
                            Saciedad
                          </span>
                          <span className="text-sm font-black text-stone-900 block mt-1">
                            {item.horasSaciedad}
                          </span>
                          <span className="text-[10px] font-medium text-stone-500">
                            Duración estimada
                          </span>
                        </div>
                      </div>

                      {/* Semáforo de Sueño */}
                      <div
                        className={`p-3 rounded-xl border ${
                          item.riesgoSomnolencia === "bajo"
                            ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                            : item.riesgoSomnolencia === "moderado"
                            ? "bg-amber-50 border-amber-300 text-amber-900"
                            : "bg-rose-50 border-rose-300 text-rose-900"
                        }`}
                      >
                        <span className="text-[10px] font-black uppercase tracking-wider block">
                          Impacto en Clase (Coma Alimenticio)
                        </span>
                        <div className="font-extrabold text-xs mt-0.5">
                          {item.riesgoSomnolenciaDetalle}
                        </div>
                      </div>

                      {/* Macros Detallados */}
                      <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-stone-600 block">
                          Desglose Nutricional
                        </span>
                        <div className="grid grid-cols-4 gap-1 text-center">
                          <div className="p-1.5 rounded-lg bg-emerald-50">
                            <span className="text-[10px] text-stone-500 font-bold block">Prot</span>
                            <span className="text-xs font-black text-emerald-800">{item.macros.proteinas}g</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-amber-50">
                            <span className="text-[10px] text-stone-500 font-bold block">Carb</span>
                            <span className="text-xs font-black text-amber-800">{item.macros.carbohidratos}g</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-rose-50">
                            <span className="text-[10px] text-stone-500 font-bold block">Grasa</span>
                            <span className="text-xs font-black text-rose-800">{item.macros.grasas}g</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-teal-50">
                            <span className="text-[10px] text-stone-500 font-bold block">Fibra</span>
                            <span className="text-xs font-black text-teal-800">{item.macros.fibra}g</span>
                          </div>
                        </div>
                      </div>

                      {/* El Hack Recomendado */}
                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block mb-1">
                          Hack Rápido:
                        </span>
                        <p className="text-stone-800 font-medium leading-snug">
                          {item.vitalHack.accion}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* VEREDICTO VITALFIIS: Cuál elegir según tu situación */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-2 border-amber-300/80 space-y-4">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-amber-600" />
                  <h4 className="text-base font-black text-stone-950 uppercase tracking-tight">
                    El Veredicto Estratégico VitalFIIS
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Escenario 1: Clase pesada 2pm */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-black text-stone-900 mb-1">
                      <BrainIcon className="w-4 h-4 text-emerald-600" />
                      <span>Para Examen / Clase 2PM</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Elige{" "}
                      <strong className="text-emerald-800 font-black">
                        {platoA.riesgoSomnolencia === "bajo"
                          ? platoA.nombre
                          : platoB.riesgoSomnolencia === "bajo"
                          ? platoB.nombre
                          : platoA.macros.fibra >= platoB.macros.fibra
                          ? platoA.nombre
                          : platoB.nombre}
                      </strong>
                      . Su perfil glucémico y mayor aporte de fibra mantienen la glucosa sin picos, evitando la somnolencia en clase.
                    </p>
                  </div>

                  {/* Escenario 2: Entrenamiento / Gym */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-black text-stone-900 mb-1">
                      <FlameIcon className="w-4 h-4 text-amber-600" />
                      <span>Para Entreno / Alta Demanda</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Elige{" "}
                      <strong className="text-amber-800 font-black">
                        {platoA.macros.proteinas >= platoB.macros.proteinas ? platoA.nombre : platoB.nombre}
                      </strong>
                      . Con{" "}
                      {Math.max(platoA.macros.proteinas, platoB.macros.proteinas)}g de proteína bruta, ofrece la mejor base de aminoácidos para recuperación muscular.
                    </p>
                  </div>

                  {/* Escenario 3: Saciedad Prolongada */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-black text-stone-900 mb-1">
                      <ClockIcon className="w-4 h-4 text-purple-600" />
                      <span>Para Jornada Corrida</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Elige{" "}
                      <strong className="text-purple-800 font-black">
                        {platoA.macros.fibra >= platoB.macros.fibra ? platoA.nombre : platoB.nombre}
                      </strong>
                      . El contenido de fibra retrasa la grelina (hormona del hambre) manteniéndote enfocado sin pensar en comida durante horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-bold">
                VitalFIIS • Herramienta de Decisión Alimentaria Universitaria
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-black tracking-wide cursor-pointer transition"
              >
                Cerrar Comparador
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
