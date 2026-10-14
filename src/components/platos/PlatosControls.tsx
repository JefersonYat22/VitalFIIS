"use client";

import React from "react";
import { CategoriaPlato, ObjetivoPlato } from "@/types";
import { SearchIcon, XIcon, RefreshCwIcon } from "./Icons";

interface PlatosControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoriaPlato | "todos";
  setSelectedCategory: (category: CategoriaPlato | "todos") => void;
  selectedObjective: ObjetivoPlato | "todos";
  setSelectedObjective: (objective: ObjetivoPlato | "todos") => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalFiltered: number;
  totalAvailable: number;
  onResetFilters: () => void;
}

const CATEGORIES: { id: CategoriaPlato | "todos"; label: string; icon: string }[] = [
  { id: "todos", label: "Todos los Platos", icon: "🍽️" },
  { id: "comedor", label: "Comedor / Menú", icon: "🍱" },
  { id: "al-paso", label: "Al Paso / Económicos", icon: "🛵" },
  { id: "desayuno", label: "Desayunos", icon: "☕" },
  { id: "tupper", label: "Tupper Saludable", icon: "🥗" },
];

const OBJECTIVES: { id: ObjetivoPlato | "todos"; label: string; tag: string }[] = [
  { id: "todos", label: "Cualquier Objetivo", tag: "⚡" },
  { id: "anti-sueno", label: "Anti-Sueño (Clase pesada)", tag: "🧠" },
  { id: "alta-proteina", label: "Alta Proteína (Entreno)", tag: "💪" },
  { id: "energia-sostenida", label: "Energía Sostenida", tag: "🔋" },
];

export function PlatosControls({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedObjective,
  setSelectedObjective,
  sortBy,
  setSortBy,
  totalFiltered,
  totalAvailable,
  onResetFilters,
}: PlatosControlsProps) {
  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedCategory !== "todos" ||
    selectedObjective !== "todos" ||
    sortBy !== "default";

  return (
    <div className="sticky top-16 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 shadow-2xs py-4 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
        {/* Fila 1: Buscador y Ordenamiento */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Buscador */}
          <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <SearchIcon className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar plato o ingrediente (ej. Lentejas, Pollo, Chaufa, Atún, Camote)..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 rounded-xl text-sm font-medium text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-2xs transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                title="Limpiar búsqueda"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Selector de Orden */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-xs font-bold text-stone-600 whitespace-nowrap hidden md:inline">
              Ordenar por:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold text-stone-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="default">Orden Recomendado</option>
              <option value="sueno-menor">Menor Riesgo de Sueño (Primero)</option>
              <option value="proteina-mayor">Mayor Proteína (g)</option>
              <option value="calorias-menor">Menor Calorías (kcal)</option>
              <option value="fibra-mayor">Mayor Fibra (g)</option>
            </select>

            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-stone-200/80 text-stone-800 hover:bg-stone-300 transition cursor-pointer"
                title="Restablecer todos los filtros"
              >
                <RefreshCwIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Limpiar</span>
              </button>
            )}
          </div>
        </div>

        {/* Fila 2: Filtros por Categoría */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="font-extrabold text-stone-500 uppercase tracking-wider text-[10px] mr-1 whitespace-nowrap">
            Contexto:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                    : "bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Fila 3: Filtros por Objetivo Cognitivo/Físico y Contador */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-200/60 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="font-extrabold text-stone-500 uppercase tracking-wider text-[10px] mr-1 whitespace-nowrap">
              Objetivo:
            </span>
            {OBJECTIVES.map((obj) => {
              const isSelected = selectedObjective === obj.id;
              return (
                <button
                  key={obj.id}
                  onClick={() => setSelectedObjective(obj.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-amber-500 text-stone-950 border-amber-500 shadow-xs"
                      : "bg-white text-stone-700 border-stone-200 hover:border-amber-300 hover:bg-amber-50/50"
                  }`}
                >
                  <span>{obj.tag}</span>
                  <span>{obj.label}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-bold text-stone-600">
            Mostrando <span className="text-emerald-700 font-extrabold">{totalFiltered}</span> de {totalAvailable} platos radiografiados
          </div>
        </div>
      </div>
    </div>
  );
}
