"use client";

import { useEffect, useRef, useState } from "react";
import { eatingSpots, studentContexts } from "@/data/contexto";
import type { MealOption, StudentContext, StudentContextId } from "@/types";

type TabId = "dia" | "desayunos" | "almuerzos" | "snacks";

const tabs: { id: TabId; label: string; emoji: string }[] = [
  { id: "dia", label: "Tu día", emoji: "🕒" },
  { id: "desayunos", label: "Desayunos", emoji: "🍳" },
  { id: "almuerzos", label: "Almuerzos", emoji: "🍛" },
  { id: "snacks", label: "Snacks", emoji: "🍌" },
];

/* ───────────── Sub-componentes ───────────── */

function MealGrid({ meals, accent }: { meals: MealOption[]; accent: StudentContext["accent"] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal, idx) => (
        <article
          key={meal.name}
          style={{ animationDelay: `${idx * 70}ms` }}
          className="animate-fade-up flex flex-col rounded-2xl border border-stone-200 bg-[#FAF8F5] p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white"
        >
          <span className={`self-start mb-3 rounded-lg px-2.5 py-1 text-xs font-black ${accent.soft} ${accent.text}`}>
            {meal.price}
          </span>
          <h4 className="text-lg font-extrabold text-stone-900 mb-1.5 leading-snug">{meal.name}</h4>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">{meal.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 text-[11px] font-semibold text-stone-600">
            <span className="rounded-full bg-white border border-stone-200 px-2.5 py-1">📍 {meal.where}</span>
            {meal.prepTime && (
              <span className="rounded-full bg-white border border-stone-200 px-2.5 py-1">⏱️ {meal.prepTime}</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function DayTimeline({ context }: { context: StudentContext }) {
  return (
    <ol className="relative ml-4 border-l-2 border-dashed border-stone-200 space-y-7">
      {context.day.map((moment, idx) => (
        <li
          key={moment.time + moment.title}
          style={{ animationDelay: `${idx * 60}ms` }}
          className="animate-fade-up relative pl-9"
        >
          <span
            className={`absolute -left-[19px] top-0 flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-white text-base ${context.accent.soft}`}
          >
            {moment.icon}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
            <span className={`text-xs font-black uppercase tracking-wider ${context.accent.text}`}>{moment.time}</span>
            <h4 className="font-bold text-stone-900">{moment.title}</h4>
          </div>
          <p className="text-sm text-stone-600 mt-1 leading-relaxed max-w-2xl">{moment.description}</p>
        </li>
      ))}
    </ol>
  );
}

/* ───────────── Componente principal ───────────── */

export function ContextExplorer() {
  const [selectedId, setSelectedId] = useState<StudentContextId | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("dia");
  const panelRef = useRef<HTMLDivElement>(null);

  const selected = studentContexts.find((c) => c.id === selectedId) ?? null;

  useEffect(() => {
    if (selectedId) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedId]);

  function handleSelect(id: StudentContextId) {
    setSelectedId(id);
    setActiveTab("dia");
  }

  return (
    <>
      {/* ───── Pregunta ───── */}
      <section id="pregunta" className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Paso 1</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
              ¿Dónde vives respecto a la U?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600">
              Elige la opción que más se parece a tu realidad. No hay respuesta incorrecta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {studentContexts.map((ctx) => {
              const isSelected = ctx.id === selectedId;
              return (
                <button
                  key={ctx.id}
                  id={`contexto-${ctx.id}`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(ctx.id)}
                  className={`group relative flex flex-col text-left p-6 sm:p-7 rounded-3xl border-2 bg-white transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `${ctx.accent.border} shadow-xl scale-[1.02] ring-4 ${ctx.accent.ring}`
                      : "border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                  } ${selectedId && !isSelected ? "opacity-70 hover:opacity-100" : ""}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className={`text-5xl p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                        isSelected ? ctx.accent.soft : "bg-stone-100"
                      }`}
                    >
                      {ctx.emoji}
                    </span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                        isSelected ? `${ctx.accent.solid} border-transparent text-white` : "border-stone-300 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-stone-900 mb-1">{ctx.answer}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                    🕒 {ctx.commute}
                  </span>
                  <p className="text-sm text-stone-600 leading-relaxed">{ctx.summary}</p>
                </button>
              );
            })}
          </div>

          {!selected && (
            <p className="mt-10 text-center text-sm font-semibold text-stone-500 animate-pulse">
              👆 Selecciona una opción para ver tu plan personalizado
            </p>
          )}
        </div>
      </section>

      {/* ───── Panel personalizado ───── */}
      {selected && (
        <section
          ref={panelRef}
          key={selected.id}
          aria-live="polite"
          className="w-full px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 scroll-mt-20 animate-fade-up"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
            {/* Cabecera */}
            <div className={`relative p-6 sm:p-10 ${selected.accent.soft}`}>
              <div className={`absolute top-0 left-0 h-full w-2 ${selected.accent.solid}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${selected.accent.text}`}>
                Paso 2 · Tu realidad
              </span>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-4xl">{selected.emoji}</span>
                <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">{selected.name}</h2>
              </div>
              <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed max-w-4xl">{selected.reality}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
                {selected.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/80 backdrop-blur border border-white px-3 sm:px-4 py-3 shadow-sm">
                    <dt className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">{stat.label}</dt>
                    <dd className="mt-0.5 text-base sm:text-xl font-black text-stone-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Cuerpo */}
            <div className="grid lg:grid-cols-[1fr_320px]">
              <div className="p-6 sm:p-10 lg:border-r border-stone-100">
                {/* Tabs */}
                <div role="tablist" aria-label="Plan por momento del día" className="flex gap-2 overflow-x-auto pb-1 mb-8 -mx-1 px-1">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        id={`tab-${tab.id}`}
                        role="tab"
                        type="button"
                        aria-selected={isActive}
                        aria-controls={`panel-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                        className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                          isActive
                            ? "bg-stone-950 text-white shadow-md"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        <span>{tab.emoji}</span>
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} key={activeTab}>
                  {activeTab === "dia" && <DayTimeline context={selected} />}
                  {activeTab === "desayunos" && <MealGrid meals={selected.breakfasts} accent={selected.accent} />}
                  {activeTab === "almuerzos" && <MealGrid meals={selected.lunches} accent={selected.accent} />}
                  {activeTab === "snacks" && <MealGrid meals={selected.snacks} accent={selected.accent} />}
                </div>
              </div>

              {/* Lateral: errores y hacks */}
              <aside className="p-6 sm:p-8 bg-[#FAF8F5] space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-rose-700 mb-3">
                    <span>⚠️</span> Errores comunes
                  </h3>
                  <ul className="space-y-2">
                    {selected.pitfalls.map((pitfall) => (
                      <li key={pitfall} className="flex gap-2 rounded-xl bg-white border border-rose-100 p-3 text-sm text-stone-700 leading-snug">
                        <span className="text-rose-500 font-black">✕</span>
                        {pitfall}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-emerald-700 mb-3">
                    <span>💡</span> Hacks para ti
                  </h3>
                  <ul className="space-y-2">
                    {selected.hacks.map((hack) => (
                      <li key={hack} className="flex gap-2 rounded-xl bg-white border border-emerald-100 p-3 text-sm text-stone-700 leading-snug">
                        <span className="text-emerald-600 font-black">✓</span>
                        {hack}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* ───── ¿Dónde comes? ───── */}
      <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">El mapa de la comida en la U</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">¿Dónde comes en la UNI?</h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600">
              Cada opción tiene su lado bueno y su trampa.{" "}
              {selected ? "Resaltamos las más útiles para tu contexto." : "Elige tu contexto arriba para ver cuáles te convienen más."}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eatingSpots.map((spot) => {
              const isKey = selected ? spot.bestFor.includes(selected.id) : false;
              return (
                <article
                  key={spot.id}
                  id={`lugar-${spot.id}`}
                  className={`relative flex flex-col rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isKey && selected
                      ? `${selected.accent.border} ${selected.accent.soft} shadow-md`
                      : "border-stone-200 bg-[#FAF8F5]"
                  }`}
                >
                  {isKey && selected && (
                    <span className={`absolute -top-3 right-5 rounded-full px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-white shadow ${selected.accent.solid}`}>
                      Clave para ti
                    </span>
                  )}
                  <span className="text-4xl mb-3">{spot.emoji}</span>
                  <h3 className="text-lg font-extrabold text-stone-900 leading-snug">{spot.name}</h3>
                  <span className="mt-1 text-xs font-bold text-stone-500">{spot.price}</span>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{spot.description}</p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <ul className="space-y-1">
                      {spot.pros.map((pro) => (
                        <li key={pro} className="text-emerald-800 font-semibold">+ {pro}</li>
                      ))}
                    </ul>
                    <ul className="space-y-1">
                      {spot.cons.map((con) => (
                        <li key={con} className="text-rose-700 font-semibold">− {con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-5">
                    <p className="rounded-xl bg-white border border-stone-200 p-3 text-xs text-stone-700 leading-relaxed">
                      <strong className="text-stone-900">Tip:</strong> {spot.tip}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
