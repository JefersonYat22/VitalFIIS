"use client";

import { useState } from "react";
import { LifestyleMode } from "./types";
import { RendimientoHero } from "./RendimientoHero";
import { SedentaryView } from "./SedentaryView";
import { ActiveView } from "./ActiveView";
import Link from "next/link";

export function RendimientoClient() {
  const [currentMode, setCurrentMode] = useState<LifestyleMode>("sedentario");

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Selector de Modo Hero */}
        <RendimientoHero currentMode={currentMode} onSelectMode={setCurrentMode} />

        {/* Barra de Navegación Rápida entre Modos */}
        <div className="sticky top-18 z-40 bg-[#FAF8F5]/90 backdrop-blur-md py-3 border-y border-stone-200/80 -mx-4 px-4 sm:mx-0 sm:px-0 sm:rounded-2xl">
          <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 hidden sm:inline">
              Modo en pantalla:
            </span>

            <div className="inline-flex p-1 rounded-2xl bg-stone-200/80 border border-stone-300 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setCurrentMode("sedentario")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-2 px-5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  currentMode === "sedentario"
                    ? "bg-amber-400 text-stone-950 shadow-sm"
                    : "text-stone-700 hover:text-stone-950"
                }`}
              >
                <span>🛋️</span>
                <span>Vida Sedentaria</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentMode("activo")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-2 px-5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  currentMode === "activo"
                    ? "bg-[#24C741] text-stone-950 shadow-sm"
                    : "text-stone-700 hover:text-stone-950"
                }`}
              >
                <span>🏃‍♂️</span>
                <span>Actividad Física</span>
              </button>
            </div>

            <span className="text-xs text-stone-500 font-semibold hidden md:inline">
              {currentMode === "sedentario"
                ? "Micro-hacks & motivación"
                : "Catálogo de 9 actividades"}
            </span>
          </div>
        </div>

        {/* Vista Condicional Según la Elección */}
        <main id="contenido-estilo-de-vida">
          {currentMode === "sedentario" ? <SedentaryView /> : <ActiveView />}
        </main>

        {/* Navegación y Enlaces a Otras Páginas */}
        <section className="pt-12 border-t border-stone-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Continúa explorando VitalFIIS
              </span>
              <h4 className="text-lg sm:text-xl font-black text-stone-900">
                ¿Buscas optimizar tu energía diaria y tu alimentación?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                Aprende hacks de glucosa o combos nutricionales específicos para el estudiante de la FIIS.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/hacks-energia"
                className="py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs transition-colors"
              >
                Ver Hacks de Energía →
              </Link>
              <Link
                href="/nutricion"
                className="py-2.5 px-4 rounded-xl bg-amber-300 hover:bg-amber-400 text-stone-950 font-extrabold text-xs transition-colors shadow-xs"
              >
                Ver Combustible & Nutrición →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
