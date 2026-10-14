"use client";

import React, { useState, useMemo } from "react";
import { PLATOS_DATA } from "@/data/platos";
import { CategoriaPlato, ObjetivoPlato, PlatoNutricional } from "@/types";
import { PlatosHeader } from "./PlatosHeader";
import { PlatosControls } from "./PlatosControls";
import { PlatoCard } from "./PlatoCard";
import { PlatosComparatorModal } from "./PlatosComparatorModal";
import { BrainIcon } from "./Icons";

export function PlatosView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoriaPlato | "todos">("todos");
  const [selectedObjective, setSelectedObjective] = useState<ObjetivoPlato | "todos">("todos");
  const [sortBy, setSortBy] = useState<string>("default");
  const [compareIds, setCompareIds] = useState<string[]>([]);

  // Filtrado y Ordenamiento
  const filteredPlatos = useMemo(() => {
    let list = PLATOS_DATA.filter((plato) => {
      // Filtro de Búsqueda
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = plato.nombre.toLowerCase().includes(q);
        const matchesDesc = plato.descripcion.toLowerCase().includes(q);
        const matchesIngredients = plato.ingredientesPrincipales.some((ing) =>
          ing.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }

      // Filtro de Categoría
      if (selectedCategory !== "todos" && plato.categoria !== selectedCategory) {
        return false;
      }

      // Filtro de Objetivo
      if (selectedObjective !== "todos" && !plato.objetivos.includes(selectedObjective)) {
        return false;
      }

      return true;
    });

    // Ordenamiento
    if (sortBy === "sueno-menor") {
      const riskOrder = { bajo: 1, moderado: 2, alto: 3 };
      list = [...list].sort(
        (a, b) => riskOrder[a.riesgoSomnolencia] - riskOrder[b.riesgoSomnolencia]
      );
    } else if (sortBy === "proteina-mayor") {
      list = [...list].sort((a, b) => b.macros.proteinas - a.macros.proteinas);
    } else if (sortBy === "calorias-menor") {
      list = [...list].sort((a, b) => a.calorias - b.calorias);
    } else if (sortBy === "fibra-mayor") {
      list = [...list].sort((a, b) => b.macros.fibra - a.macros.fibra);
    }

    return list;
  }, [searchQuery, selectedCategory, selectedObjective, sortBy]);

  // Manejo de Comparador (Máximo 2 platos)
  const handleToggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 2) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleRemoveCompare = (id: string) => {
    setCompareIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearAllCompare = () => {
    setCompareIds([]);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("todos");
    setSelectedObjective("todos");
    setSortBy("default");
  };

  const selectedPlatosForModal = useMemo(() => {
    return compareIds
      .map((id) => PLATOS_DATA.find((p) => p.id === id))
      .filter((p): p is PlatoNutricional => p !== undefined);
  }, [compareIds]);

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] pb-28">
      {/* 1. Header / Hero de Sección */}
      <PlatosHeader />

      {/* 2. Barra de Control Interactiva Sticky */}
      <PlatosControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedObjective={selectedObjective}
        setSelectedObjective={setSelectedObjective}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalFiltered={filteredPlatos.length}
        totalAvailable={PLATOS_DATA.length}
        onResetFilters={handleResetFilters}
      />

      {/* 3. Grid de Tarjetas de Platos */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filteredPlatos.length === 0 ? (
          <div className="text-center py-20 px-4 max-w-md mx-auto bg-white rounded-3xl border border-stone-200 shadow-sm">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-xl font-black text-stone-900">
              No encontramos platos con esos criterios
            </h3>
            <p className="mt-2 text-sm text-stone-600 font-medium">
              Prueba buscando por otro ingrediente o restablece los filtros activos para ver todo el catálogo.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider transition cursor-pointer shadow-sm"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlatos.map((plato) => (
              <PlatoCard
                key={plato.id}
                plato={plato}
                isSelectedForCompare={compareIds.includes(plato.id)}
                onToggleCompare={handleToggleCompare}
                canCompare={compareIds.length < 2 || compareIds.includes(plato.id)}
              />
            ))}
          </div>
        )}

        {/* 4. Glosario Bioquímico & Principios Científicos al Pie de Página */}
        <section className="mt-20 p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <BrainIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-stone-900 tracking-tight">
                Diccionario Rápido del Estudiante Consciente
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Conceptos clave detrás de la radiografía de nuestros platos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
              <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-1.5">
                <span className="text-emerald-700">●</span> Somnolencia Postprandial (&ldquo;Coma&rdquo;)
              </h4>
              <p className="text-stone-600 leading-relaxed font-normal">
                No es debilidad mental ni falta de café. Ocurre cuando un pico abrupto de glucosa activa una oleada de insulina que despeja la sangre de otros aminoácidos, permitiendo que el triptófano entre sin competencia a tu cerebro y se transforme en melatonina (sueño).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
              <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-1.5">
                <span className="text-amber-600">●</span> La Malla de Fibra Gástrica
              </h4>
              <p className="text-stone-600 leading-relaxed font-normal">
                Comer ensalada o legumbres antes de los almidones (arroz, papas) crea un recubrimiento viscoso en el intestino delgado. La glucosa pasa a la sangre lentamente, permitiéndote mantenerte despierto y alerta en clase de 2:00 PM.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
              <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-1.5">
                <span className="text-blue-600">●</span> Almidón Resistente
              </h4>
              <p className="text-stone-600 leading-relaxed font-normal">
                Alimentos como la papa o camote sancochados que se enfrían (como en tuppers o ensaladas) transforman parte de sus almidones en fibra prebiótica indigerible, reduciendo sus calorías netas y alimentando tu microbiota.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Comparador Flotante y Modal Side-by-Side */}
      <PlatosComparatorModal
        selectedPlatos={selectedPlatosForModal}
        onRemovePlato={handleRemoveCompare}
        onClearAll={handleClearAllCompare}
      />
    </div>
  );
}
