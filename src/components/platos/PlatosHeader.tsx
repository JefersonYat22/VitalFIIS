"use client";

import React from "react";
import Image from "next/image";
import { SparklesIcon } from "./Icons";

interface PlatosHeaderProps {
  onOpenSequenceModal: () => void;
}

export function PlatosHeader({ onOpenSequenceModal }: PlatosHeaderProps) {
  const handleScrollToPlatos = () => {
    const el = document.getElementById("catalogo-platos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#f7f3ec] to-[#FAF8F5] pt-10 pb-10 border-b border-stone-200/70">
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Lado izquierdo: Textos y llamadas a la acción */}
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

            {/* Párrafo explicativo */}
            <p className="mt-3 text-sm sm:text-base text-stone-700 font-medium leading-relaxed line-clamp-2">
              Comer en la universidad no debería costarte la concentración de la tarde. Analizamos los platos cotidianos para ayudarte a prevenir la pesadez tras el almuerzo.
            </p>

            {/* Botones de Acción */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleScrollToPlatos}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>Ver platos</span>
                <span className="text-sm">↓</span>
              </button>

              <button
                type="button"
                onClick={onOpenSequenceModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs uppercase tracking-wider border border-stone-200/90 hover:border-emerald-400 transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <SparklesIcon className="w-4 h-4 text-amber-600" />
                <span>¿En qué orden como?</span>
              </button>
            </div>
          </div>

          {/* Lado derecho: Mascota sin recuadro, transparente, con blob suave y flotación */}
          <div className="flex items-center justify-center shrink-0 w-64 h-64 sm:w-80 sm:h-72 lg:w-96 lg:h-84 xl:w-[420px] xl:h-96 relative">
            {/* Blob suave detrás */}
            <div className="absolute inset-4 bg-gradient-to-tr from-amber-200/45 via-emerald-200/40 to-amber-100/30 rounded-full blur-2xl -z-10 pointer-events-none scale-90" />

            {/* Mascota con animación sutil de flotar que respeta prefers-reduced-motion */}
            <div className="relative w-full h-full mascot-float">
              <Image
                src="/images/platos/hero.webp"
                alt="Mascota VitalFIIS explorando la radiografía nutricional de platos"
                fill
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 384px, 320px"
                className="object-contain drop-shadow-md select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales para flotación con respeto a prefers-reduced-motion */}
      <style jsx>{`
        @keyframes subtleFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .mascot-float {
            animation: subtleFloat 3.8s ease-in-out infinite;
          }
        }
      `}</style>
    </header>
  );
}
