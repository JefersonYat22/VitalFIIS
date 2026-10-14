"use client";

import Image from "next/image";
import { PlatoNutricional } from "@/types";
import {
  FlameIcon,
  ClockIcon,
  ScaleIcon,
} from "./Icons";

interface PlatoCardProps {
  plato: PlatoNutricional;
  isSelectedForCompare: boolean;
  onToggleCompare: (id: string) => void;
  canCompare: boolean;
  onOpenDetail: (plato: PlatoNutricional) => void;
}

export function PlatoCard({
  plato,
  isSelectedForCompare,
  onToggleCompare,
  canCompare,
  onOpenDetail,
}: PlatoCardProps) {
  // Semáforo Cognitivo en etiquetas cortas
  const sleepConfig = {
    bajo: {
      label: "Riesgo bajo",
      bgBadge: "bg-emerald-50 text-emerald-800 border-emerald-300",
      dot: "bg-emerald-500",
    },
    moderado: {
      label: "Riesgo moderado",
      bgBadge: "bg-amber-50 text-amber-900 border-amber-300",
      dot: "bg-amber-500",
    },
    alto: {
      label: "Riesgo alto",
      bgBadge: "bg-rose-50 text-rose-800 border-rose-300",
      dot: "bg-rose-500",
    },
  }[plato.riesgoSomnolencia];

  // Cálculo de proporciones relativas para la barra de macros
  const totalMacrosGramos =
    plato.macros.proteinas +
    plato.macros.carbohidratos +
    plato.macros.grasas;

  const protPct = Math.min(100, Math.round((plato.macros.proteinas / totalMacrosGramos) * 100));
  const carbPct = Math.min(100, Math.round((plato.macros.carbohidratos / totalMacrosGramos) * 100));
  const fatPct = Math.min(100, Math.round((plato.macros.grasas / totalMacrosGramos) * 100));

  return (
    <article
      className={`group h-full flex flex-col justify-between bg-white rounded-2xl border transition-all duration-200 shadow-xs hover:shadow-md overflow-hidden ${
        isSelectedForCompare
          ? "border-emerald-500 ring-2 ring-emerald-400/50"
          : "border-stone-200/90 hover:border-amber-300"
      }`}
    >
      {/* 1. Foto con aspect-[4/3] y badges flotantes */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-stone-100 to-amber-50/60 overflow-hidden shrink-0">
        {plato.imagen ? (
          <Image
            src={plato.imagen}
            alt={plato.imagenAlt || plato.nombre}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50 select-none">
            <span className="text-5xl drop-shadow-xs" role="img" aria-label={plato.nombre}>
              {plato.emoji}
            </span>
          </div>
        )}

        {/* Chip de categoría (arriba izquierda) */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/95 text-stone-800 shadow-xs backdrop-blur-xs border border-stone-200/80">
            {plato.categoriaLabel}
          </span>
        </div>

        {/* Etiqueta Imagen Ilustrativa si aplica */}
        {plato.imagenIlustrativa && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-black/60 text-white backdrop-blur-xs">
              Imagen ilustrativa
            </span>
          </div>
        )}

        {/* Chip de kcal (abajo derecha) */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <div className="inline-flex items-center gap-1 text-xs font-black text-amber-950 bg-amber-100/95 px-2.5 py-1 rounded-xl border border-amber-300/80 shadow-xs backdrop-blur-xs">
            <FlameIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>{plato.calorias} kcal</span>
          </div>
        </div>
      </div>

      {/* 2. Cuerpo de la tarjeta: Título, resumen, semáforo y macros */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-black text-stone-900 tracking-tight leading-snug line-clamp-2 min-h-[3rem]">
              {plato.nombre}
            </h3>
            {plato.precioPromedioSol && (
              <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap mt-0.5">
                {plato.precioPromedioSol}
              </span>
            )}
          </div>
          <p
            className="mt-1.5 text-xs text-stone-600 font-medium line-clamp-2 leading-relaxed min-h-[2.25rem]"
            title={plato.resumenSueno}
          >
            {plato.resumenSueno}
          </p>
        </div>

        {/* Semáforo en un solo pill y saciedad en una línea */}
        <div className="flex items-center justify-between gap-2 pt-1 text-xs">
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-bold ${sleepConfig.bgBadge}`}
          >
            <span className={`w-2 h-2 rounded-full ${sleepConfig.dot} shrink-0`} />
            <span className="whitespace-nowrap">{sleepConfig.label}</span>
          </div>

          <div className="inline-flex items-center gap-1 text-stone-600 font-bold whitespace-nowrap">
            <ClockIcon className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>{plato.horasSaciedad} saciedad</span>
          </div>
        </div>

        {/* Barra de macros combinada + valores */}
        <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1.5">
          <div className="w-full h-2 rounded-full overflow-hidden flex bg-stone-200">
            <div
              style={{ width: `${protPct}%` }}
              className="bg-emerald-600 transition-all"
              title={`Proteína: ${plato.macros.proteinas}g`}
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

          <div className="grid grid-cols-4 gap-1 text-center text-xs">
            <div>
              <span className="text-stone-500 font-medium block">Prot</span>
              <span className="font-black text-emerald-700">{plato.macros.proteinas}g</span>
            </div>
            <div>
              <span className="text-stone-500 font-medium block">Carb</span>
              <span className="font-black text-amber-700">{plato.macros.carbohidratos}g</span>
            </div>
            <div>
              <span className="text-stone-500 font-medium block">Grasa</span>
              <span className="font-black text-rose-700">{plato.macros.grasas}g</span>
            </div>
            <div>
              <span className="text-stone-500 font-medium block">Fibra</span>
              <span className="font-black text-teal-700">{plato.macros.fibra}g</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Botones: Ver radiografía y Comparar */}
      <div className="p-3 bg-stone-50/80 border-t border-stone-200/70 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenDetail(plato)}
          className="flex-1 py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors cursor-pointer text-center"
        >
          Ver radiografía
        </button>

        <button
          type="button"
          disabled={!isSelectedForCompare && !canCompare}
          onClick={() => onToggleCompare(plato.id)}
          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            isSelectedForCompare
              ? "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
              : canCompare
              ? "bg-white text-stone-800 border border-stone-300 hover:border-emerald-500 hover:text-emerald-700"
              : "bg-stone-200 text-stone-400 border border-stone-200 cursor-not-allowed opacity-60"
          }`}
          title={
            isSelectedForCompare
              ? "Quitar de comparación"
              : canCompare
              ? "Agregar a duelo de menús"
              : "Máximo 2 platos en comparación"
          }
        >
          {isSelectedForCompare ? (
            <span>✓ En el duelo</span>
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
