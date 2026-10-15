"use client";

import React, { useState, useEffect } from "react";
import { CategoriaPlato, ObjetivoPlato } from "@/types";
import { SearchIcon, XIcon, RefreshCwIcon, SlidersIcon } from "./Icons";

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
  { id: "todos", label: "Todos", icon: "🍽️" },
  { id: "comedor", label: "Comedor / Menú", icon: "🍱" },
  { id: "al-paso", label: "Al Paso", icon: "🛵" },
  { id: "desayuno", label: "Desayunos", icon: "☕" },
  { id: "tupper", label: "Tupper Saludable", icon: "🥗" },
];

const OBJECTIVES: { id: ObjetivoPlato | "todos"; label: string; tag: string }[] = [
  { id: "todos", label: "Cualquiera", tag: "⚡" },
  { id: "anti-sueno", label: "Anti-Sueño", tag: "🧠" },
  { id: "alta-proteina", label: "Alta Proteína", tag: "💪" },
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
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  const activeFiltersCount =
    (selectedCategory !== "todos" ? 1 : 0) +
    (selectedObjective !== "todos" ? 1 : 0) +
    (sortBy !== "default" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const isFiltered = activeFiltersCount > 0;

  // Cerrar panel móvil con tecla Escape
  useEffect(() => {
    if (!isMobilePanelOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobilePanelOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobilePanelOpen]);

  return (
    <div
      id="catalogo-platos"
      className="sticky top-16 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 shadow-2xs py-2.5 sm:py-3 transition-all scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
        {/* Fila 1: Buscador, Botón Filtros móvil, Ordenar y Conteo */}
        <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
          {/* Buscador + Botón Móvil "Filtros (n)" */}
          <div className="flex items-center gap-2 flex-1 max-w-xl">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <SearchIcon className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar plato o ingrediente (lentejas, sangrecita, pollo)..."
                className="w-full pl-10 pr-9 py-2 bg-white border border-stone-200 rounded-xl text-xs font-medium text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-2xs transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Botón Filtros en móvil */}
            <button
              type="button"
              onClick={() => setIsMobilePanelOpen(true)}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-stone-200 font-bold text-xs text-stone-800 shadow-2xs cursor-pointer active:scale-95 shrink-0"
              aria-label="Abrir panel de filtros"
            >
              <SlidersIcon className="w-3.5 h-3.5 text-emerald-700" />
              <span>Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-black">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Ordenar, Conteo y Limpiar (visible en sm+) */}
          <div className="hidden sm:flex items-center gap-2 justify-end">
            <div className="flex items-center gap-1.5">
              <label htmlFor="sort-select" className="text-xs font-bold text-stone-600 whitespace-nowrap">
                Ordenar:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-stone-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="default">Recomendado</option>
                <option value="sueno-menor">Menor Riesgo de Sueño</option>
                <option value="proteina-mayor">Mayor Proteína (g)</option>
                <option value="calorias-menor">Menor Calorías (kcal)</option>
                <option value="fibra-mayor">Mayor Fibra (g)</option>
              </select>
            </div>

            <div className="text-xs font-bold text-stone-500 whitespace-nowrap pl-1">
              {totalFiltered} de {totalAvailable} platos
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-stone-200 text-stone-800 hover:bg-stone-300 transition cursor-pointer"
                title="Restablecer filtros"
              >
                <RefreshCwIcon className="w-3.5 h-3.5" />
                <span>Limpiar</span>
              </button>
            )}
          </div>
        </div>

        {/* Fila 2: Chips con flex-wrap para evitar cualquier recorte en 375, 768 y 1280px */}
        <div className="hidden sm:flex flex-col gap-2 pt-2 border-t border-stone-200/60">
          {/* Fila A: Tipo de Plato */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-extrabold text-stone-500 uppercase tracking-wider text-xs mr-1 shrink-0">
              Tipo:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer border text-xs ${
                    isSelected
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-white text-stone-700 border-stone-200 hover:border-emerald-300"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Fila B: Objetivo */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-extrabold text-stone-500 uppercase tracking-wider text-xs mr-1 shrink-0">
              Objetivo:
            </span>
            {OBJECTIVES.map((obj) => {
              const isSelected = selectedObjective === obj.id;
              return (
                <button
                  key={obj.id}
                  type="button"
                  onClick={() => setSelectedObjective(obj.id)}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer border text-xs ${
                    isSelected
                      ? "bg-amber-500 text-stone-950 border-amber-500 shadow-xs"
                      : "bg-white text-stone-700 border-stone-200 hover:border-amber-300"
                  }`}
                >
                  <span>{obj.tag}</span>
                  <span>{obj.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* En móvil: Vista previa de filtros activos cuando hay alguno */}
        <div className="sm:hidden flex items-center justify-between text-xs pt-1">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[11px] font-bold text-stone-500">Activo:</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[11px] whitespace-nowrap">
              {CATEGORIES.find((c) => c.id === selectedCategory)?.label || "Todos"}
            </span>
            {selectedObjective !== "todos" && (
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 font-bold text-[11px] whitespace-nowrap">
                {OBJECTIVES.find((o) => o.id === selectedObjective)?.label}
              </span>
            )}
          </div>
          <span className="text-[11px] font-bold text-stone-500 shrink-0 pl-2">
            {totalFiltered} platos
          </span>
        </div>
      </div>

      {/* PANEL INFERIOR MÓVIL (BOTTOM SHEET ACCESIBLE) */}
      {isMobilePanelOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-filter-title"
          className="sm:hidden fixed inset-0 z-50 flex items-end justify-center bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobilePanelOpen(false);
          }}
        >
          <div className="w-full bg-white rounded-t-3xl border-t border-stone-200 p-5 shadow-2xl max-h-[85vh] overflow-y-auto space-y-5 animate-in slide-in-from-bottom duration-200">
            {/* Header del Panel */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <h3 id="mobile-filter-title" className="text-base font-black text-stone-900">
                  Filtros del Catálogo
                </h3>
                <p className="text-xs text-stone-500">
                  {totalFiltered} de {totalAvailable} platos disponibles
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobilePanelOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 cursor-pointer"
                aria-label="Cerrar panel de filtros"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Grupo 1: Tipo de Menú */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-stone-600">
                Tipo de Menú
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs border transition cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grupo 2: Objetivo */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-stone-600">
                Objetivo
              </label>
              <div className="flex flex-wrap gap-2">
                {OBJECTIVES.map((obj) => (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setSelectedObjective(obj.id)}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs border transition cursor-pointer ${
                      selectedObjective === obj.id
                        ? "bg-amber-500 text-stone-950 border-amber-500 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    <span>{obj.tag}</span>
                    <span>{obj.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grupo 3: Ordenamiento */}
            <div className="space-y-2">
              <label htmlFor="mobile-sort-select" className="text-xs font-black uppercase tracking-wider text-stone-600">
                Ordenar por
              </label>
              <select
                id="mobile-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold text-stone-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="default">Recomendado</option>
                <option value="sueno-menor">Menor Riesgo de Sueño</option>
                <option value="proteina-mayor">Mayor Proteína (g)</option>
                <option value="calorias-menor">Menor Calorías (kcal)</option>
                <option value="fibra-mayor">Mayor Fibra (g)</option>
              </select>
            </div>

            {/* Acciones del panel */}
            <div className="pt-2 flex items-center gap-3">
              {isFiltered && (
                <button
                  type="button"
                  onClick={() => {
                    onResetFilters();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition cursor-pointer"
                >
                  Limpiar filtros
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsMobilePanelOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider transition cursor-pointer shadow-xs text-center"
              >
                Ver {totalFiltered} platos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
