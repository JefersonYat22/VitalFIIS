"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlatoNutricional } from "@/types";
import {
  XIcon,
  FlameIcon,
  ClockIcon,
  BrainIcon,
  SparklesIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon,
  ScaleIcon,
  CheckIcon,
} from "./Icons";

interface PlatoDetailModalProps {
  plato: PlatoNutricional | null;
  onClose: () => void;
  isSelectedForCompare?: boolean;
  onToggleCompare?: (id: string) => void;
  canCompare?: boolean;
}

export function PlatoDetailModal({
  plato,
  onClose,
  isSelectedForCompare = false,
  onToggleCompare,
  canCompare = true,
}: PlatoDetailModalProps) {
  const [showBioquimica, setShowBioquimica] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Bloqueo de scroll del body y manejo de tecla Escape
  useEffect(() => {
    if (!plato) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [plato, onClose]);

  if (!plato) return null;

  const sleepConfig = {
    bajo: {
      label: "Riesgo Bajo de Somnolencia",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-300",
      dot: "bg-emerald-500",
    },
    moderado: {
      label: "Riesgo Moderado de Somnolencia",
      badge: "bg-amber-50 text-amber-900 border-amber-300",
      dot: "bg-amber-500",
    },
    alto: {
      label: "Riesgo Alto de Coma Alimenticio",
      badge: "bg-rose-50 text-rose-800 border-rose-300",
      dot: "bg-rose-500",
    },
  }[plato.riesgoSomnolencia];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-stretch md:justify-end bg-stone-950/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="plato-detail-title"
    >
      {/* Panel: Bottom sheet en móvil, Drawer lateral derecho en desktop */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full md:max-w-xl bg-white shadow-2xl flex flex-col max-h-[90vh] md:max-h-full md:h-full rounded-t-3xl md:rounded-t-none md:rounded-l-3xl overflow-hidden focus:outline-none animate-in slide-in-from-bottom md:slide-in-from-right duration-250"
      >
        {/* Barra superior de control */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-stone-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
              {plato.categoriaLabel}
            </span>
            <span className="text-xs font-bold text-stone-500">
              ~{plato.porcionGramos}g {plato.datosEstimados ? "(estimado)" : ""}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar radiografía"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Cabecera con Foto o Emoji */}
          <div className="space-y-3">
            {plato.imagen ? (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
                <Image
                  src={plato.imagen}
                  alt={plato.imagenAlt || plato.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50 flex items-center justify-center border border-stone-200/80">
                <span className="text-6xl">{plato.emoji}</span>
              </div>
            )}

            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id="plato-detail-title" className="text-2xl font-black text-stone-950 tracking-tight leading-tight">
                  {plato.nombre}
                </h2>
                <p className="mt-1 text-xs text-stone-600 font-medium">
                  {plato.resumenSueno}
                </p>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <div className="inline-flex items-center gap-1 text-sm font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-xl border border-amber-300">
                  <FlameIcon className="w-4 h-4 text-amber-600" />
                  <span>{plato.calorias} kcal</span>
                </div>
                {plato.precioPromedioSol && (
                  <span className="text-xs font-bold text-stone-500 mt-1">
                    {plato.precioPromedioSol}
                  </span>
                )}
              </div>
            </div>

            {/* Fila de macros resumidos */}
            <div className="grid grid-cols-4 gap-2 pt-1 text-center text-xs">
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200/60">
                <span className="text-stone-500 font-medium block">Proteína</span>
                <span className="text-sm font-black text-emerald-800">{plato.macros.proteinas}g</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50 border border-amber-200/60">
                <span className="text-stone-500 font-medium block">Carbos</span>
                <span className="text-sm font-black text-amber-800">{plato.macros.carbohidratos}g</span>
              </div>
              <div className="p-2 rounded-xl bg-rose-50 border border-rose-200/60">
                <span className="text-stone-500 font-medium block">Grasas</span>
                <span className="text-sm font-black text-rose-800">{plato.macros.grasas}g</span>
              </div>
              <div className="p-2 rounded-xl bg-teal-50 border border-teal-200/60">
                <span className="text-stone-500 font-medium block">Fibra</span>
                <span className="text-sm font-black text-teal-800">{plato.macros.fibra}g</span>
              </div>
            </div>
          </div>

          {/* SECCIÓN (a): Qué lleva el plato */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2.5">
            <h3 className="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <span>🍽️</span>
              <span>Qué lleva este plato</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed font-medium">
              {plato.descripcion}
            </p>
            <div className="pt-2 border-t border-stone-200">
              <span className="text-xs font-bold text-stone-600 block mb-1.5">
                Ingredientes principales:
              </span>
              <ul className="space-y-1 text-xs text-stone-700 font-medium">
                {plato.ingredientesPrincipales.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black shrink-0">•</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECCIÓN (b): ¿Por qué puede darte sueño? */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                <BrainIcon className="w-4 h-4 text-amber-700 shrink-0" />
                <span>¿Por qué puede darte sueño en clase?</span>
              </h3>
              <div className={`px-2 py-0.5 rounded-full border text-xs font-bold ${sleepConfig.badge}`}>
                {sleepConfig.label}
              </div>
            </div>

            <p className="text-xs text-stone-800 leading-relaxed font-medium">
              {plato.porQueDaSueno}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-amber-200/70 text-xs">
              <span className="text-stone-600 font-bold">
                Impacto en glucosa: <strong className="text-stone-900">{plato.impactoGlucemico}</strong>
              </span>
              <span className="text-stone-600 font-bold inline-flex items-center gap-1">
                <ClockIcon className="w-3.5 h-3.5 text-stone-400" />
                <span>Saciedad aprox.: <strong className="text-stone-900">{plato.horasSaciedad}</strong></span>
              </span>
            </div>
          </div>

          {/* SECCIÓN (c): Hack VitalFIIS (Acción + Pasos 1→2→3) */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-3">
            <div className="flex items-center gap-1.5">
              <SparklesIcon className="w-4 h-4 text-emerald-700 shrink-0" />
              <h3 className="text-xs font-black uppercase tracking-wider text-emerald-950">
                Hack VitalFIIS: {plato.vitalHack.titulo}
              </h3>
            </div>

            <p className="text-xs text-stone-900 font-bold leading-relaxed">
              👉 {plato.vitalHack.accion}
            </p>

            {/* Secuencia recomendada en pasos 1 → 2 → 3 con flechas */}
            {plato.vitalHack.ordenIngestaRecomendado && (
              <div className="pt-2 border-t border-emerald-200/80">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-900 block mb-2">
                  Secuencia biológica recomendada:
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 text-xs">
                  {plato.vitalHack.ordenIngestaRecomendado.map((paso, idx, arr) => (
                    <React.Fragment key={idx}>
                      <div className="flex-1 p-2 rounded-xl bg-white border border-emerald-300 text-stone-900 font-bold text-center shadow-2xs">
                        {paso}
                      </div>
                      {idx < arr.length - 1 && (
                        <span className="text-emerald-700 font-black self-center rotate-90 sm:rotate-0 text-sm">
                          →
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECCIÓN (d): Explicación bioquímica (Colapsada por defecto) */}
          <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
            <button
              type="button"
              onClick={() => setShowBioquimica(!showBioquimica)}
              className="w-full p-3.5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <InfoIcon className="w-4 h-4 text-stone-500" />
                <span className="text-xs font-bold text-stone-800">
                  Explicación bioquímica del hack
                </span>
              </div>
              <span className="text-stone-400">
                {showBioquimica ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
              </span>
            </button>

            {showBioquimica && (
              <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100">
                {plato.vitalHack.explicacionCientifica}
              </div>
            )}
          </div>

          {/* SECCIÓN (e): Dos tarjetas estratégicas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-900 block mb-1">
                ✅ Mejor momento para consumirlo
              </span>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                {plato.mejorMomento}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/80">
              <span className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-1">
                ⚠️ Cuándo conviene evitarlo
              </span>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                {plato.evitarEn}
              </p>
            </div>
          </div>

          {/* Nota al pie metodológica */}
          <div className="p-3 rounded-xl bg-stone-100 text-stone-500 text-xs text-center font-medium leading-relaxed">
            Valores estimados por porción promedio según tablas CENAN/INS; no sustituye asesoría nutricional individual.
          </div>
        </div>

        {/* Barra inferior fija del modal: Botón principal "Agregar al duelo" */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-bold text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
          >
            Cerrar
          </button>

          {onToggleCompare && (
            <button
              type="button"
              disabled={!isSelectedForCompare && !canCompare}
              onClick={() => onToggleCompare(plato.id)}
              className={`flex-1 max-w-xs py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                isSelectedForCompare
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : canCompare
                  ? "bg-stone-900 hover:bg-stone-800 text-white"
                  : "bg-stone-200 text-stone-400 border border-stone-200 cursor-not-allowed opacity-60"
              }`}
            >
              {isSelectedForCompare ? (
                <>
                  <CheckIcon className="w-4 h-4" />
                  <span>✓ En el duelo (quitar)</span>
                </>
              ) : (
                <>
                  <ScaleIcon className="w-4 h-4" />
                  <span>Agregar al duelo</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
