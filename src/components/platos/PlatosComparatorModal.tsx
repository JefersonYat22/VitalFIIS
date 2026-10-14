"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PlatoNutricional } from "@/types";
import {
  XIcon,
  ScaleIcon,
  SparklesIcon,
} from "./Icons";

interface PlatosComparatorModalProps {
  selectedPlatos: PlatoNutricional[];
  onRemovePlato: (id: string) => void;
  onClearAll: () => void;
  isDetailOpen?: boolean;
}

export function PlatosComparatorModal({
  selectedPlatos,
  onRemovePlato,
  onClearAll,
  isDetailOpen = false,
}: PlatosComparatorModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar con Escape y bloquear scroll cuando el modal de comparación esté abierto
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (selectedPlatos.length === 0) return null;

  const platoA = selectedPlatos[0];
  const platoB = selectedPlatos[1] || null;

  // Cálculos comparativos
  const diffKcal = platoB ? Math.abs(platoA.calorias - platoB.calorias) : 0;
  const riskScore = { bajo: 1, moderado: 2, alto: 3 };

  // Mejor en riesgo de sueño
  const bestSleep =
    platoB
      ? riskScore[platoA.riesgoSomnolencia] < riskScore[platoB.riesgoSomnolencia]
        ? "A"
        : riskScore[platoA.riesgoSomnolencia] > riskScore[platoB.riesgoSomnolencia]
        ? "B"
        : "igual"
      : "A";

  // Mejor en proteína
  const bestProtein =
    platoB
      ? platoA.macros.proteinas > platoB.macros.proteinas
        ? "A"
        : platoA.macros.proteinas < platoB.macros.proteinas
        ? "B"
        : "igual"
      : "A";

  // Mejor en fibra
  const bestFiber =
    platoB
      ? platoA.macros.fibra > platoB.macros.fibra
        ? "A"
        : platoA.macros.fibra < platoB.macros.fibra
        ? "B"
        : "igual"
      : "A";

  return (
    <>
      {/* 1. BARRA FLOTANTE DE COMPARACIÓN COMPACTA Y CLARA (Oculta si el drawer de detalle está abierto) */}
      {!isDetailOpen && (
        <div className="fixed bottom-3 sm:bottom-4 inset-x-0 z-40 px-3 sm:px-4 pointer-events-none pb-[env(safe-area-inset-bottom,0px)]">
          <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200 p-2 sm:p-2.5 pointer-events-auto flex items-center justify-between gap-2 animate-in fade-in slide-in-from-bottom-3 duration-250">
            {/* Dos casillas */}
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              {/* Casilla 1: Plato A */}
              <div className="flex items-center gap-1.5 p-1 pr-1.5 rounded-xl bg-stone-50 border border-stone-200 min-w-0 flex-1">
                {platoA.imagen ? (
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-stone-200">
                    <Image
                      src={platoA.imagen}
                      alt={platoA.nombre}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-base shrink-0 border border-stone-200">
                    {platoA.emoji}
                  </span>
                )}
                <span className="text-xs font-bold text-stone-900 truncate flex-1">
                  {platoA.nombre}
                </span>
                <button
                  type="button"
                  onClick={() => onRemovePlato(platoA.id)}
                  className="w-5 h-5 rounded-full hover:bg-stone-200 text-stone-400 hover:text-stone-700 flex items-center justify-center shrink-0 cursor-pointer"
                  title="Quitar plato"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Casilla 2: Plato B o Casilla punteada */}
              {platoB ? (
                <div className="flex items-center gap-1.5 p-1 pr-1.5 rounded-xl bg-stone-50 border border-stone-200 min-w-0 flex-1">
                  {platoB.imagen ? (
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-stone-200">
                      <Image
                        src={platoB.imagen}
                        alt={platoB.nombre}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-base shrink-0 border border-stone-200">
                      {platoB.emoji}
                    </span>
                  )}
                  <span className="text-xs font-bold text-stone-900 truncate flex-1">
                    {platoB.nombre}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemovePlato(platoB.id)}
                    className="w-5 h-5 rounded-full hover:bg-stone-200 text-stone-400 hover:text-stone-700 flex items-center justify-center shrink-0 cursor-pointer"
                    title="Quitar plato"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-1 p-1.5 rounded-xl border border-dashed border-stone-300 text-stone-400 text-xs font-bold min-w-0 flex-1 truncate">
                  <span>+</span>
                  <span className="truncate">Elige otro plato</span>
                </div>
              )}
            </div>

            {/* A la derecha: Botón Comparar y texto Limpiar */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={onClearAll}
                className="px-2 py-1 text-xs font-bold text-stone-400 hover:text-stone-700 transition cursor-pointer"
              >
                Limpiar
              </button>

              <button
                type="button"
                disabled={!platoB}
                onClick={() => setIsOpen(true)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  platoB
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-95"
                    : "bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-200"
                }`}
              >
                <ScaleIcon className="w-3.5 h-3.5" />
                <span>Comparar</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL DEL COMPARADOR (Encabezado claro, sticky headers y filas alineadas) */}
      {isOpen && platoA && platoB && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="duelo-modal-title"
        >
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[92vh] flex flex-col focus:outline-none">
            {/* Encabezado Claro (sin bloque negro) */}
            <div className="px-5 py-4 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
                  <ScaleIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="duelo-modal-title" className="text-base sm:text-lg font-black text-stone-950 tracking-tight">
                    Duelo Nutricional
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    Comparativa frente a frente para optimizar tu energía cognitiva
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition cursor-pointer"
                aria-label="Cerrar comparador"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-header Sticky con nombres de ambos platos */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-2.5 border-b border-stone-200 grid grid-cols-2 gap-3 text-xs font-black text-stone-900 shadow-2xs">
              <div className="flex items-center gap-1.5 truncate">
                <span>{platoA.emoji}</span>
                <span className="truncate">{platoA.nombre}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <span>{platoB.emoji}</span>
                <span className="truncate">{platoB.nombre}</span>
              </div>
            </div>

            {/* Contenido scrolleable de comparación */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              {/* Resumen arriba con el veredicto y diferencia de kcal */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/70 via-stone-50 to-emerald-50/70 border border-stone-200/90 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-black text-stone-900 uppercase tracking-wider text-xs">
                  <SparklesIcon className="w-4 h-4 text-amber-600" />
                  <span>Resumen Estratégico</span>
                </div>
                <p className="text-stone-700 leading-relaxed font-medium">
                  {bestSleep === "A" ? (
                    <>
                      <strong className="text-emerald-800 font-bold">{platoA.nombre}</strong> suele asociarse a menor riesgo de somnolencia postprandial.
                    </>
                  ) : bestSleep === "B" ? (
                    <>
                      <strong className="text-emerald-800 font-bold">{platoB.nombre}</strong> suele asociarse a menor riesgo de somnolencia postprandial.
                    </>
                  ) : (
                    "Ambos platos presentan un nivel semejante de impacto glucémico estimado."
                  )}
                  {diffKcal > 0 && (
                    <span className="block mt-0.5 text-stone-600">
                      Diferencia calórica: <strong className="text-stone-900">{diffKcal} kcal</strong> entre ambas opciones.
                    </span>
                  )}
                </p>
              </div>

              {/* Cabecera con fotos de cada columna (aspect-[16/9]) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[platoA, platoB].map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-2xs bg-stone-100">
                      {item.imagen ? (
                        <Image
                          src={item.imagen}
                          alt={item.imagenAlt || item.nombre}
                          fill
                          sizes="350px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-emerald-50">
                          <span className="text-4xl">{item.emoji}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-bold text-stone-500">
                      {item.categoriaLabel} • ~{item.porcionGramos}g
                    </div>
                  </div>
                ))}
              </div>

              {/* FILAS ALINEADAS POR ATRIBUTOS */}

              {/* Fila 1: Calorías */}
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
                  Calorías Totales
                </span>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-black text-amber-950">
                        {platoA.calorias} kcal
                      </span>
                      {platoA.calorias <= platoB.calorias && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          ✓ Menos calórico
                        </span>
                      )}
                    </div>
                    {platoA.calorias !== platoB.calorias && (
                      <span className="text-xs text-stone-500 font-medium block mt-0.5">
                        {platoA.calorias > platoB.calorias
                          ? `${diffKcal} kcal más que el otro plato`
                          : `${diffKcal} kcal menos que el otro plato`}
                      </span>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-black text-amber-950">
                        {platoB.calorias} kcal
                      </span>
                      {platoB.calorias < platoA.calorias && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          ✓ Menos calórico
                        </span>
                      )}
                    </div>
                    {platoA.calorias !== platoB.calorias && (
                      <span className="text-xs text-stone-500 font-medium block mt-0.5">
                        {platoB.calorias > platoA.calorias
                          ? `${diffKcal} kcal más que el otro plato`
                          : `${diffKcal} kcal menos que el otro plato`}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Fila 2: Riesgo de Somnolencia (Coma Alimenticio) */}
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
                  Riesgo de Somnolencia en Clase
                </span>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div
                    className={`p-3 rounded-xl border text-xs ${
                      platoA.riesgoSomnolencia === "bajo"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : platoA.riesgoSomnolencia === "moderado"
                        ? "bg-amber-50 border-amber-300 text-amber-950"
                        : "bg-rose-50 border-rose-300 text-rose-950"
                    }`}
                  >
                    <div className="flex items-center justify-between font-black">
                      <span className="capitalize">{platoA.riesgoSomnolencia}</span>
                      {bestSleep === "A" && <span className="text-emerald-700 font-bold">✓ Menor riesgo</span>}
                    </div>
                    <p className="mt-1 text-xs text-stone-700 font-medium leading-snug">
                      {platoA.resumenSueno}
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-xs ${
                      platoB.riesgoSomnolencia === "bajo"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : platoB.riesgoSomnolencia === "moderado"
                        ? "bg-amber-50 border-amber-300 text-amber-950"
                        : "bg-rose-50 border-rose-300 text-rose-950"
                    }`}
                  >
                    <div className="flex items-center justify-between font-black">
                      <span className="capitalize">{platoB.riesgoSomnolencia}</span>
                      {bestSleep === "B" && <span className="text-emerald-700 font-bold">✓ Menor riesgo</span>}
                    </div>
                    <p className="mt-1 text-xs text-stone-700 font-medium leading-snug">
                      {platoB.resumenSueno}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fila 3: Saciedad e Impacto en Glucosa */}
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
                  Saciedad y Curva Glucémica
                </span>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-bold text-stone-900">
                      Saciedad: <strong>{platoA.horasSaciedad}</strong>
                    </div>
                    <div className="text-stone-600 font-medium">
                      Glucosa: <strong>{platoA.impactoGlucemico}</strong>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-bold text-stone-900">
                      Saciedad: <strong>{platoB.horasSaciedad}</strong>
                    </div>
                    <div className="text-stone-600 font-medium">
                      Glucosa: <strong>{platoB.impactoGlucemico}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fila 4: Desglose de Macronutrientes (Proteína, Carbos, Grasas, Fibra) */}
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
                  Macronutrientes por Porción
                </span>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-bold">Proteína:</span>
                      <span className="font-black text-emerald-800">
                        {platoA.macros.proteinas}g {bestProtein === "A" && "✓"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-bold">Carbohidratos:</span>
                      <span className="font-black text-amber-800">{platoA.macros.carbohidratos}g</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-bold">Grasas:</span>
                      <span className="font-black text-rose-800">{platoA.macros.grasas}g</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                      <span className="text-stone-600 font-bold">Fibra:</span>
                      <span className="font-black text-teal-800">
                        {platoA.macros.fibra}g {bestFiber === "A" && "✓"}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-bold">Proteína:</span>
                      <span className="font-black text-emerald-800">
                        {platoB.macros.proteinas}g {bestProtein === "B" && "✓"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-bold">Carbohidratos:</span>
                      <span className="font-black text-amber-800">{platoB.macros.carbohidratos}g</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-bold">Grasas:</span>
                      <span className="font-black text-rose-800">{platoB.macros.grasas}g</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                      <span className="text-stone-600 font-bold">Fibra:</span>
                      <span className="font-black text-teal-800">
                        {platoB.macros.fibra}g {bestFiber === "B" && "✓"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fila 5: Hack VitalFIIS de cada uno */}
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
                  Hack Estratégico Recomendado
                </span>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                    <span className="font-black text-emerald-950 block">
                      {platoA.vitalHack.titulo}
                    </span>
                    <p className="text-stone-800 font-medium leading-relaxed">
                      {platoA.vitalHack.accion}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                    <span className="font-black text-emerald-950 block">
                      {platoB.vitalHack.titulo}
                    </span>
                    <p className="text-stone-800 font-medium leading-relaxed">
                      {platoB.vitalHack.accion}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs font-bold text-stone-500 hover:text-rose-600 transition cursor-pointer"
              >
                Limpiar duelo
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition cursor-pointer"
              >
                Cerrar comparador
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
