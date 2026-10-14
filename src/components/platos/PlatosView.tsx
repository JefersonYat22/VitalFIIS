"use client";

import React, { useState, useMemo } from "react";
import { PLATOS_DATA } from "@/data/platos";
import { CategoriaPlato, ObjetivoPlato, PlatoNutricional } from "@/types";
import { PlatosHeader } from "./PlatosHeader";
import { PlatosControls } from "./PlatosControls";
import { PlatoCard } from "./PlatoCard";
import { PlatoDetailModal } from "./PlatoDetailModal";
import { PlatosComparatorModal } from "./PlatosComparatorModal";
import { BrainIcon, SparklesIcon } from "./Icons";

export function PlatosView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoriaPlato | "todos">("todos");
  const [selectedObjective, setSelectedObjective] = useState<ObjetivoPlato | "todos">("todos");
  const [sortBy, setSortBy] = useState<string>("default");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [selectedPlatoForDetail, setSelectedPlatoForDetail] = useState<PlatoNutricional | null>(null);

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Nota Visible Requerida */}
        <div className="mb-6 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-sm">ℹ️</span>
            <span className="font-bold">
              Valores estimados por porción promedio según preparaciones universitarias habituales; no sustituye asesoría nutricional profesional.
            </span>
          </div>
          <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider hidden sm:inline shrink-0">
            CENAN / INS
          </span>
        </div>

        {filteredPlatos.length === 0 ? (
          <div className="text-center py-20 px-4 max-w-md mx-auto bg-white rounded-3xl border border-stone-200 shadow-sm">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-xl font-black text-stone-900">
              No encontramos platos con esos criterios
            </h3>
            <p className="mt-2 text-xs text-stone-600 font-medium leading-relaxed">
              Prueba buscando por otro ingrediente o restablece los filtros activos para explorar todo el catálogo.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider transition cursor-pointer shadow-sm"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredPlatos.map((plato) => (
              <PlatoCard
                key={plato.id}
                plato={plato}
                isSelectedForCompare={compareIds.includes(plato.id)}
                onToggleCompare={handleToggleCompare}
                canCompare={compareIds.length < 2 || compareIds.includes(plato.id)}
                onOpenDetail={(p) => setSelectedPlatoForDetail(p)}
              />
            ))}
          </div>
        )}

        {/* 4. Fuentes y Metodología */}
        <section className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5">
            <SparklesIcon className="w-5 h-5 text-amber-600" />
            <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
              Fuentes y Metodología Nutricional
            </h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed font-normal">
            Esta radiografía nutricional no busca satanizar alimentos tradicionales, sino aplicar el <strong className="text-stone-950 font-bold">Pragmatismo Empático</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
              <strong className="font-bold text-stone-900 block mb-1">
                Bioquímica de la Glucosa (Jessie Inchauspé)
              </strong>
              Investigaciones sobre el impacto de la secuencia de ingesta (fibra → proteína/grasa → almidón) para regular el vaciado gástrico y atenuar picos glucémicos postprandiales.
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
              <strong className="font-bold text-stone-900 block mb-1">
                Tablas Peruanas de Composición de Alimentos (CENAN / INS)
              </strong>
              Estimaciones de macronutrientes, fibra y calorías adaptadas a raciones habituales servidas en comedores universitarios, carretillas y preparaciones para tupper.
            </div>
          </div>
        </section>

        {/* 5. Glosario Bioquímico */}
        <section className="mt-6 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5">
            <BrainIcon className="w-5 h-5 text-emerald-700" />
            <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
              Conceptos Clave para Estudiar con Energía
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1">
              <h4 className="font-extrabold text-stone-900 flex items-center gap-1.5">
                <span className="text-emerald-700">●</span> Somnolencia Postprandial
              </h4>
              <p className="text-stone-600 leading-relaxed font-normal">
                Ocurre tras comidas con almidón rápido que provocan una rápida elevación de insulina, facilitando el ingreso de triptófano cerebral y la síntesis de melatonina.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1">
              <h4 className="font-extrabold text-stone-900 flex items-center gap-1.5">
                <span className="text-amber-600">●</span> La Malla de Fibra Gástrica
              </h4>
              <p className="text-stone-600 leading-relaxed font-normal">
                Comer ensalada antes del arroz genera una barrera viscosa en el intestino que hace gradual la absorción de los azúcares en la sangre.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1">
              <h4 className="font-extrabold text-stone-900 flex items-center gap-1.5">
                <span className="text-blue-600">●</span> Almidón Resistente
              </h4>
              <p className="text-stone-600 leading-relaxed font-normal">
                Alimentos como camote o papa cocidos y enfriados convierten parte de sus almidones en fibra prebiótica que nutre a las bacterias del colon sin generar picos de glucosa.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Modal de Detalle Crudo (Drawer/Bottom sheet) */}
      <PlatoDetailModal
        plato={selectedPlatoForDetail}
        onClose={() => setSelectedPlatoForDetail(null)}
      />

      {/* 7. Comparador Flotante y Modal Side-by-Side */}
      <PlatosComparatorModal
        selectedPlatos={selectedPlatosForModal}
        onRemovePlato={handleRemoveCompare}
        onClearAll={handleClearAllCompare}
      />
    </div>
  );
}
