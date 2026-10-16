"use client";

import { useState, useMemo } from "react";
import { PHYSICAL_ACTIVITIES } from "@/data/rendimientoData";
import { ActivityCard } from "./ActivityCard";
import { ActivityCategory } from "./types";

export function ActiveView() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { key: ActivityCategory; label: string; icon: string }[] = [
    { key: "todos", label: "Todas", icon: "✨" },
    { key: "fuerza", label: "Fuerza & Musculación", icon: "🏋️‍♂️" },
    { key: "cardio", label: "Cardio & Resistencia", icon: "🏃‍♂️" },
    { key: "equipo", label: "Deportes en Equipo", icon: "⚽" },
    { key: "movilidad", label: "Movilidad & Recuperación", icon: "🧘‍♀️" },
  ];

  const filteredActivities = useMemo(() => {
    return PHYSICAL_ACTIVITIES.filter((activity) => {
      const matchesCategory =
        selectedCategory === "todos" || activity.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.cognitiveBenefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-14 animate-in fade-in duration-300">
      {/* Intro para el Estudiante Activo */}
      <section className="bg-gradient-to-br from-emerald-600/10 via-white to-teal-500/10 rounded-3xl p-6 sm:p-10 border-2 border-[#24C741]/50 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-black uppercase tracking-wider">
            <span>⚡</span> Atleta Estudiantil & Rendimiento
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-snug">
            El ejercicio no te quita tiempo de estudio:{" "}
            <span className="text-[#1da635] underline decoration-[#24C741] decoration-wavy">
              es el acelerador biológico de tu cerebro y tu sueño.
            </span>
          </h3>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Hacer actividad física regular multiplica la síntesis de{" "}
            <strong className="text-stone-950 font-bold">BDNF</strong>, la molécula que consolida
            conceptos complejos en la memoria a largo plazo. Además, reduce el cortisol y previene el
            desgaste mental. A continuación tienes un catálogo completo de actividades adaptadas a
            la vida universitaria, con consejos de nutrición económica, timing y sueño reparador para rendir al
            máximo tanto en el deporte como en los exámenes.
          </p>
        </div>
      </section>

      {/* Controles de Filtros & Búsqueda */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Pestañas de Categoría */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`flex items-center gap-2 py-2.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#24C741] text-stone-950 border-[#1da635] shadow-md scale-105"
                      : "bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-stone-50"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Campo de Búsqueda Rápida */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por deporte o beneficio..."
              className="w-full py-2.5 pl-9 pr-4 rounded-2xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#24C741] focus:border-transparent transition-all placeholder:text-stone-400"
            />
            <span className="absolute left-3 top-2.5 text-stone-400 text-sm">🔍</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2 text-stone-400 hover:text-stone-700 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Resumen de Resultados */}
        <div className="flex items-center justify-between text-xs font-bold text-stone-500 px-1">
          <span>
            Mostrando {filteredActivities.length} de {PHYSICAL_ACTIVITIES.length} actividades disponibles
          </span>
          {selectedCategory !== "todos" && (
            <button
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="text-[#1da635] hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Grid de Actividades Físicas */}
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <span className="text-4xl block mb-3">🔍</span>
            <h4 className="text-xl font-bold text-stone-900 mb-1">
              No encontramos actividades con ese criterio
            </h4>
            <p className="text-stone-600 text-sm mb-4">
              Prueba buscando otro término o restablece los filtros para ver todo el catálogo.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs"
            >
              Ver todas las actividades
            </button>
          </div>
        )}
      </section>

      {/* Protocolos de Nutrición, Rendimiento & Sueño (Formato Claro) */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="max-w-3xl space-y-1.5 border-b border-stone-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Respaldado por el Dr. Andy Galpin & Dr. Andrew Huberman
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900">
            Protocolos Clave: Cómo Entrenar sin Quedarte Dormido en Clase
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            El error más común del universitario que entrena es terminar la sesión, no hidratarse
            bien o comer un exceso de grasas pesadas, terminando con somnolencia en su siguiente clase
            y un mal descanso nocturno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
              💧
            </div>
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              Fórmula de Hidratación Deportiva
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Toma tu peso en kg y divídelo entre 30: ese es tu mínimo de litros diarios en reposo. Por
              cada hora de deporte intenso, añade entre 500 y 750ml con una pizca de sal marina para
              mantener el volumen plasmático y no perder concentración.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
              🍌
            </div>
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              Timing Post-Entreno Accesible
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              No requieres suplementos caros. 2 huevos sancochados + 1 plátano o 1 taper pequeño de
              arroz con atún dentro de las primeras dos horas post-entrenamiento reponen el glucógeno y
              aportan aminoácidos esenciales a costo universitario.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
              💤
            </div>
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              El Músculo y la Memoria se Crean de Noche
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              El ejercicio es el estímulo de ruptura; el sueño es la fase donde la hormona de crecimiento
              repara tus tejidos y el cerebro limpia toxinas metabólicas mediante el sistema glinfático.
              Prioriza al menos 7 horas de descanso continuo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
