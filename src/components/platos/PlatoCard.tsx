"use client";

import React, { useState } from "react";
import { PlatoNutricional } from "@/types";
import {
  FlameIcon,
  ClockIcon,
  BrainIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  ScaleIcon,
  SparklesIcon,
} from "./Icons";

interface PlatoCardProps {
  plato: PlatoNutricional;
  isSelectedForCompare: boolean;
  onToggleCompare: (id: string) => void;
  canCompare: boolean; // false if 2 items already selected and this is not one of them
}

export function PlatoCard({
  plato,
  isSelectedForCompare,
  onToggleCompare,
  canCompare,
}: PlatoCardProps) {
  const [showFullHack, setShowFullHack] = useState(false);

  // Semáforo Cognitivo
  const sleepConfig = {
    bajo: {
      label: "Riesgo Bajo de Sueño",
      sublabel: "Mente Despierta",
      bgBadge: "bg-emerald-50 text-emerald-800 border-emerald-300",
      dot: "bg-emerald-500",
      accentBorder: "hover:border-emerald-400",
    },
    moderado: {
      label: "Riesgo Moderado",
      sublabel: "Regula los Carbos",
      bgBadge: "bg-amber-50 text-amber-900 border-amber-300",
      dot: "bg-amber-500",
      accentBorder: "hover:border-amber-400",
    },
    alto: {
      label: "Riesgo Alto de Coma",
      sublabel: "Peligro en Clase 2PM",
      bgBadge: "bg-rose-50 text-rose-800 border-rose-300",
      dot: "bg-rose-500",
      accentBorder: "hover:border-rose-400",
    },
  }[plato.riesgoSomnolencia];

  // Cálculo de porcentajes visuales relativos de macronutrientes (referencia: plato de ~100g de macros combinados)
  const totalMacrosGramos =
    plato.macros.proteinas +
    plato.macros.carbohidratos +
    plato.macros.grasas;

  const protPct = Math.min(100, Math.round((plato.macros.proteinas / totalMacrosGramos) * 100));
  const carbPct = Math.min(100, Math.round((plato.macros.carbohidratos / totalMacrosGramos) * 100));
  const fatPct = Math.min(100, Math.round((plato.macros.grasas / totalMacrosGramos) * 100));

  return (
    <article
      className={`relative flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 shadow-xs hover:shadow-md ${
        isSelectedForCompare
          ? "border-emerald-500 ring-2 ring-emerald-400/50 scale-[1.01]"
          : `border-stone-200/90 ${sleepConfig.accentBorder}`
      }`}
    >
      {/* Top Banner en caso de estar seleccionado */}
      {isSelectedForCompare && (
        <div className="bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 text-center rounded-t-2xl flex items-center justify-center gap-1.5 shadow-inner">
          <CheckIcon className="w-3.5 h-3.5" />
          <span>Seleccionado para Duelo de Menús</span>
        </div>
      )}

      {/* Contenido Principal */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Cabecera: Emojis, Categoría, Precio y Calorías */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xl" role="img" aria-label={plato.nombre}>
              {plato.emoji}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200">
              {plato.categoriaLabel}
            </span>
            {plato.precioPromedioSol && (
              <span className="text-[11px] font-bold text-stone-500 bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200/60">
                {plato.precioPromedioSol}
              </span>
            )}
          </div>

          {/* Calorías Destacadas */}
          <div className="flex flex-col items-end shrink-0">
            <div className="inline-flex items-center gap-1 text-sm font-black text-amber-950 bg-amber-100/80 px-2.5 py-1 rounded-xl border border-amber-300/80 shadow-2xs">
              <FlameIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>{plato.calorias}</span>
              <span className="text-[10px] font-extrabold text-amber-800">kcal</span>
            </div>
            <span className="text-[10px] text-stone-400 font-bold mt-0.5">
              ~{plato.porcionGramos}g porción
            </span>
          </div>
        </div>

        {/* Título y Descripción */}
        <div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 tracking-tight leading-snug">
            {plato.nombre}
          </h3>
          <p className="mt-1.5 text-xs text-stone-600 font-medium leading-relaxed line-clamp-2">
            {plato.descripcion}
          </p>
        </div>

        {/* Semáforo Cognitivo & Saciedad */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Somnolencia */}
          <div className={`p-2.5 rounded-xl border flex flex-col justify-between ${sleepConfig.bgBadge}`}>
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${sleepConfig.dot} shrink-0`} />
              <span className="text-[10px] font-black uppercase tracking-wider truncate">
                {sleepConfig.label}
              </span>
            </div>
            <span className="text-xs font-extrabold text-stone-900 mt-1">
              {sleepConfig.sublabel}
            </span>
          </div>

          {/* Saciedad */}
          <div className="p-2.5 rounded-xl border border-stone-200 bg-stone-50/80 flex flex-col justify-between">
            <div className="flex items-center gap-1 text-stone-500">
              <ClockIcon className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-wider">
                Saciedad Aprox.
              </span>
            </div>
            <span className="text-xs font-extrabold text-stone-900 mt-1">
              {plato.horasSaciedad}
            </span>
          </div>
        </div>

        {/* Barras de Macronutrientes Visuales */}
        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-extrabold text-stone-700">
            <span>Radiografía de Macronutrientes</span>
            <span className="text-[10px] font-bold text-stone-400">
              Glucosa: {plato.impactoGlucemico}
            </span>
          </div>

          {/* Barra segmentada combinada */}
          <div className="w-full h-2 rounded-full overflow-hidden flex bg-stone-200">
            <div
              style={{ width: `${protPct}%` }}
              className="bg-emerald-600 transition-all"
              title={`Proteínas: ${plato.macros.proteinas}g`}
            />
            <div
              style={{ width: `${carbPct}%` }}
              className="bg-amber-400 transition-all"
              title={`Carbohidratos: ${plato.macros.carbohidratos}g`}
            />
            <div
              style={{ width: `${fatPct}%` }}
              className="bg-rose-400 transition-all"
              title={`Grasas: ${plato.macros.grasas}g`}
            />
          </div>

          {/* Leyenda de valores */}
          <div className="grid grid-cols-4 gap-1 text-center pt-0.5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-stone-500">Proteína</span>
              <span className="text-xs font-black text-emerald-700">
                {plato.macros.proteinas}g
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-stone-500">Carbos</span>
              <span className="text-xs font-black text-amber-700">
                {plato.macros.carbohidratos}g
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-stone-500">Grasas</span>
              <span className="text-xs font-black text-rose-700">
                {plato.macros.grasas}g
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-stone-500">Fibra</span>
              <span className="text-xs font-black text-teal-700">
                {plato.macros.fibra}g
              </span>
            </div>
          </div>
        </div>

        {/* Sección: ¿Por qué te da sueño? (Científico y empático) */}
        <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/70 text-xs">
          <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-1">
            <BrainIcon className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-wider">
              ¿Por qué te apaga el cerebro a las 2PM?
            </span>
          </div>
          <p className="text-stone-700 text-[11px] leading-relaxed">
            {plato.porQueDaSueno}
          </p>
        </div>

        {/* El Hack VitalFIIS (Caja Destacada / Desplegable) */}
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 overflow-hidden transition-all">
          <button
            type="button"
            onClick={() => setShowFullHack(!showFullHack)}
            className="w-full p-3 flex items-center justify-between text-left cursor-pointer hover:bg-emerald-100/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block">
                  El Hack VitalFIIS
                </span>
                <span className="text-xs font-black text-emerald-950">
                  {plato.vitalHack.titulo}
                </span>
              </div>
            </div>
            <span className="text-emerald-800 text-xs font-bold p-1">
              {showFullHack ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
            </span>
          </button>

          {/* Contenido expandido o resumido */}
          <div className="px-3 pb-3 space-y-2">
            <p className="text-xs text-stone-800 font-medium leading-relaxed">
              👉 <strong className="font-bold text-stone-950">{plato.vitalHack.accion}</strong>
            </p>

            {/* Secuencia recomendada en pills */}
            {plato.vitalHack.ordenIngestaRecomendado && (
              <div className="pt-1.5 border-t border-emerald-200/60">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block mb-1">
                  Secuencia Biológica Recomendada:
                </span>
                <div className="flex flex-wrap gap-1">
                  {plato.vitalHack.ordenIngestaRecomendado.map((paso, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white border border-emerald-300 text-emerald-950 font-bold text-[10px] shadow-2xs"
                    >
                      {paso}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {showFullHack && (
              <div className="pt-2 text-[11px] text-emerald-950/80 leading-relaxed border-t border-emerald-200/60">
                <strong className="font-bold text-emerald-950">Explicación Bioquímica: </strong>
                {plato.vitalHack.explicacionCientifica}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer de la Card: Botón Comparar */}
      <div className="p-4 bg-stone-50 border-t border-stone-200/70 rounded-b-2xl flex items-center justify-between gap-2">
        <span className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider">
          Duelo de Platos
        </span>

        <button
          type="button"
          disabled={!isSelectedForCompare && !canCompare}
          onClick={() => onToggleCompare(plato.id)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isSelectedForCompare
              ? "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
              : canCompare
              ? "bg-white text-stone-800 border border-stone-300 hover:border-emerald-500 hover:text-emerald-700 shadow-2xs"
              : "bg-stone-200 text-stone-400 border border-stone-200 cursor-not-allowed opacity-60"
          }`}
        >
          {isSelectedForCompare ? (
            <>
              <CheckIcon className="w-3.5 h-3.5" />
              <span>En Comparación</span>
            </>
          ) : (
            <>
              <ScaleIcon className="w-3.5 h-3.5" />
              <span>Comparar</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
