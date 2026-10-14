"use client";

import React, { useState, useMemo } from "react";
import { PLATOS_DATA } from "@/data/platos";
import { CategoriaPlato, ObjetivoPlato, PlatoNutricional } from "@/types";
import { PlatosHeader } from "./PlatosHeader";
import { PlatosControls } from "./PlatosControls";
import { PlatoCard } from "./PlatoCard";
import { PlatoDetailModal } from "./PlatoDetailModal";
import { PlatosComparatorModal } from "./PlatosComparatorModal";
import { BrainIcon, SparklesIcon, ChevronDownIcon, ChevronUpIcon } from "./Icons";

export function PlatosView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoriaPlato | "todos">("todos");
  const [selectedObjective, setSelectedObjective] = useState<ObjetivoPlato | "todos">("todos");
  const [sortBy, setSortBy] = useState<string>("default");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [selectedPlatoForDetail, setSelectedPlatoForDetail] = useState<PlatoNutricional | null>(null);
  const [isSourcesExpanded, setIsSourcesExpanded] = useState(false);

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
    <div className="w-full min-h-screen bg-[#FAF8F5] pb-36 sm:pb-32">
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
          <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider hidden sm:inline shrink-0">
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

        {/* 4. Sección Unificada de Fuentes, Metodología y Conceptos Científicos con Acordeón */}
        <section className="mt-16 rounded-3xl bg-white border border-stone-200/90 shadow-2xs overflow-hidden">
          <button
            type="button"
            onClick={() => setIsSourcesExpanded(!isSourcesExpanded)}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <BrainIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
                  Fuentes, Metodología y Conceptos Científicos
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Bases bioquímicas de la glucosa, tablas oficiales del INS y glosario cognitivo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-stone-400 hidden sm:inline">
                {isSourcesExpanded ? "Ocultar" : "Ver detalles"}
              </span>
              <span className="text-stone-400">
                {isSourcesExpanded ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
              </span>
            </div>
          </button>

          {isSourcesExpanded && (
            <div className="px-5 pb-6 sm:px-6 space-y-6 border-t border-stone-100 animate-in fade-in duration-200 pt-5">
              {/* Fuentes y Metodología */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900">
                    <SparklesIcon className="w-4 h-4 text-amber-600" />
                    <span>Bioquímica de la Glucosa (Jessie Inchauspé)</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed font-normal">
                    Modelos sobre la secuencia de ingesta (fibra vegetal → proteína/grasas → almidones) para regular la tasa de vaciamiento gástrico y aplanar la curva insulínica postprandial sin dietas restrictivas.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900">
                    <span>🇵🇪</span>
                    <span>Tablas Peruanas de Composición de Alimentos</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed font-normal">
                    Valores de macronutrientes, fibra y energía referenciados en las publicaciones oficiales del{" "}
                    <a
                      href="https://web.ins.gob.pe/es/alimentacion-y-nutricion/ciencia-y-tecnologia-de-alimentos/tabla-de-composicion-de-alimentos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 underline font-bold hover:text-emerald-900"
                    >
                      CENAN / Instituto Nacional de Salud (INS) ↗
                    </a>
                    , adaptados a raciones usuales universitarias.
                  </p>
                </div>
              </div>

              {/* Conceptos Clave */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-800 mb-2.5">
                  Glosario de Fisiología y Rendimiento en Aula
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1">
                    <h5 className="font-extrabold text-stone-900 flex items-center gap-1.5">
                      <span className="text-emerald-700">●</span> Somnolencia Postprandial
                    </h5>
                    <p className="text-stone-600 leading-relaxed font-normal">
                      Ocurre cuando un pico abrupto de glucosa estimula una descarga de insulina, facilitando el transporte de triptófano al cerebro y la síntesis subsecuente de melatonina.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1">
                    <h5 className="font-extrabold text-stone-900 flex items-center gap-1.5">
                      <span className="text-amber-600">●</span> La Malla de Fibra Gástrica
                    </h5>
                    <p className="text-stone-600 leading-relaxed font-normal">
                      Ingerir ensalada o legumbres antes de los almidones genera un recubrimiento viscoso en la mucosa intestinal que modula la entrada de azúcares al torrente sanguíneo.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-1">
                    <h5 className="font-extrabold text-stone-900 flex items-center gap-1.5">
                      <span className="text-blue-600">●</span> Almidón Resistente
                    </h5>
                    <p className="text-stone-600 leading-relaxed font-normal">
                      Almidones cocidos y enfriados (tubérculos en ensalada o tupper) se retrogradan a fibra prebiótica indigerible, reduciendo su impacto glucémico neto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Metadato de última revisión */}
              <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-medium gap-1">
                <span>Plataforma estudiantil VitalFIIS • Grupo 7</span>
                <span>Última revisión: Octubre 2026</span>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* 5. Modal de Detalle Crudo (Drawer/Bottom sheet) */}
      <PlatoDetailModal
        plato={selectedPlatoForDetail}
        onClose={() => setSelectedPlatoForDetail(null)}
        isSelectedForCompare={
          selectedPlatoForDetail ? compareIds.includes(selectedPlatoForDetail.id) : false
        }
        onToggleCompare={handleToggleCompare}
        canCompare={
          compareIds.length < 2 ||
          (selectedPlatoForDetail ? compareIds.includes(selectedPlatoForDetail.id) : false)
        }
      />

      {/* 6. Comparador Flotante y Modal Side-by-Side (Oculto cuando el detalle está abierto) */}
      <PlatosComparatorModal
        selectedPlatos={selectedPlatosForModal}
        onRemovePlato={handleRemoveCompare}
        onClearAll={handleClearAllCompare}
        isDetailOpen={selectedPlatoForDetail !== null}
      />
    </div>
  );
}
