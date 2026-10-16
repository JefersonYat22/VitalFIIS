"use client";

import { LifestyleMode } from "./types";

interface RendimientoHeroProps {
  currentMode: LifestyleMode;
  onSelectMode: (mode: LifestyleMode) => void;
}

export function RendimientoHero({ currentMode, onSelectMode }: RendimientoHeroProps) {
  return (
    <div className="w-full pt-8 pb-12 sm:pt-12 sm:pb-16">
      {/* Encabezado Principal */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-stone-900 border border-amber-300/80 text-xs font-black uppercase tracking-wider shadow-2xs">
          <span>⚡</span> Rendimiento, Actividad Física & Sueño
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-950 tracking-tight leading-tight">
          ¿Actualmente llevas una vida sedentaria o haces actividad física?
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
          No hay respuestas incorrectas ni juicios. Presiona tu estilo de vida actual para
          desbloquear protocolos personalizados, micro-hacks de activación o un catálogo completo de
          disciplinas deportivas adaptadas a tu realidad universitaria y a tu descanso.
        </p>
      </div>

      {/* Los 2 Filtros / Cards Grandes Interactivas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Opción 1: Vida Sedentaria */}
        <button
          type="button"
          onClick={() => onSelectMode("sedentario")}
          className={`relative text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 border-2 cursor-pointer flex flex-col justify-between group ${
            currentMode === "sedentario"
              ? "bg-white border-amber-400 shadow-2xl shadow-amber-500/10 scale-[1.02] ring-4 ring-amber-300/40"
              : "bg-white/80 hover:bg-white border-stone-200/90 hover:border-amber-300 shadow-sm hover:shadow-md"
          }`}
        >
          {/* Badge de Selección */}
          {currentMode === "sedentario" && (
            <span className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-amber-400 text-stone-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
              Vista Activa
            </span>
          )}

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-4xl sm:text-5xl p-3 rounded-2xl bg-amber-50 border border-amber-200 group-hover:scale-110 transition-transform">
                🛋️
              </span>
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                8+ hrs sentado
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
              Vida Sedentaria
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Paso largas jornadas frente a pantallas programando, leyendo o en clases, y me cuesta
              encontrar tiempo o ganas para entrenar. Quiero sentirme con más energía y cuidar mi postura
              sin exigirme metas irreales.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                ✓ Micro-pausas activas
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                ✓ Menor niebla mental
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                ✓ Reto progresivo de 7 días
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-black uppercase tracking-wider text-amber-700">
                {currentMode === "sedentario" ? "Mostrando información" : "Clic para ver consejos y hacks"}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                  currentMode === "sedentario"
                    ? "bg-amber-400 text-stone-950 shadow"
                    : "bg-stone-100 text-stone-600 group-hover:bg-amber-300 group-hover:text-stone-950"
                }`}
              >
                →
              </span>
            </div>
          </div>
        </button>

        {/* Opción 2: Actividad Física */}
        <button
          type="button"
          onClick={() => onSelectMode("activo")}
          className={`relative text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 border-2 cursor-pointer flex flex-col justify-between group ${
            currentMode === "activo"
              ? "bg-white border-[#24C741] shadow-2xl shadow-emerald-500/10 scale-[1.02] ring-4 ring-[#24C741]/30"
              : "bg-white/80 hover:bg-white border-stone-200/90 hover:border-[#24C741]/60 shadow-sm hover:shadow-md"
          }`}
        >
          {/* Badge de Selección */}
          {currentMode === "activo" && (
            <span className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-[#24C741] text-stone-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
              Vista Activa
            </span>
          )}

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-4xl sm:text-5xl p-3 rounded-2xl bg-emerald-50 border border-emerald-200 group-hover:scale-110 transition-transform">
                🏃‍♂️
              </span>
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                En movimiento
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2 group-hover:text-[#1da635] transition-colors">
              Hago Actividad Física
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Entreno regularmente en gimnasio, juego pichangas, hago calistenia, salgo a correr o me
              desplazo en bici. Quiero optimizar mi combustible, evitar el bajón post-entreno y explorar
              nuevas disciplinas.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                ✓ Catálogo de 9 disciplinas
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                ✓ Timing de glucógeno y proteína
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                ✓ Protocolo de hidratación y sueño
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#1da635]">
                {currentMode === "activo" ? "Mostrando catálogo" : "Clic para ver actividades y deportes"}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                  currentMode === "activo"
                    ? "bg-[#24C741] text-stone-950 shadow"
                    : "bg-stone-100 text-stone-600 group-hover:bg-[#24C741] group-hover:text-stone-950"
                }`}
              >
                →
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
