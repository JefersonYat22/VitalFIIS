"use client";

import { useState } from "react";
import { PhysicalActivityItem } from "./types";

interface ActivityCardProps {
  activity: PhysicalActivityItem;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIntensityBadge = (intensity: PhysicalActivityItem["intensity"]) => {
    switch (intensity) {
      case "Baja":
        return "bg-teal-100 text-teal-800 border-teal-300";
      case "Moderada":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "Alta":
        return "bg-rose-100 text-rose-900 border-rose-300";
      default:
        return "bg-sky-100 text-sky-900 border-sky-300";
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:border-[#24C741]/50">
      {/* Top Banner & Icon */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-3xl shadow-xs group-hover:scale-110 group-hover:bg-amber-50 group-hover:border-amber-300 transition-transform">
            {activity.icon}
          </div>
          <div className="flex flex-wrap gap-1.5 justify-end">
            <span
              className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${getIntensityBadge(
                activity.intensity
              )}`}
            >
              Intensidad {activity.intensity}
            </span>
            <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
              {activity.duration}
            </span>
          </div>
        </div>

        {/* Categoria */}
        <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
          {activity.categoryLabel}
        </span>

        {/* Titulo */}
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight mb-2 group-hover:text-[#1da635] transition-colors">
          {activity.title}
        </h3>

        {/* Tagline */}
        <p className="text-stone-600 text-sm leading-relaxed mb-5">
          {activity.tagline}
        </p>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 gap-2.5 py-3 px-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 mb-5 text-xs text-stone-700">
          <div>
            <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wider text-stone-500">
              Ubicación
            </span>
            <span className="truncate block font-medium" title={activity.location}>
              {activity.location}
            </span>
          </div>
          <div>
            <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wider text-stone-500">
              Costo Estudiantil
            </span>
            <span className="font-semibold text-emerald-800">
              {activity.cost}
            </span>
          </div>
        </div>

        {/* Beneficio Cognitivo Destacado */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
            <span className="text-amber-500">🧠</span> Impacto en tu Cerebro Universitario:
          </div>
          <p className="text-xs text-stone-700 leading-relaxed bg-amber-50/70 p-3 rounded-xl border border-amber-200/70">
            {activity.cognitiveBenefit}
          </p>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <div className="pt-4 border-t border-stone-100 space-y-4 animate-in fade-in duration-200">
            {/* Beneficio Fisico */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <span className="text-emerald-600">💪</span> Beneficio Físico & Postural:
              </span>
              <p className="text-xs text-stone-600 leading-relaxed pl-5">
                {activity.physicalBenefit}
              </p>
            </div>

            {/* Nutrición & Timing */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <span className="text-amber-600">🍱</span> Qué comer antes y después:
              </span>
              <p className="text-xs text-stone-600 leading-relaxed pl-5">
                {activity.nutritionTip}
              </p>
            </div>

            {/* Hack para el estudiante de la FIIS */}
            <div className="space-y-1 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
              <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <span>🎓</span> Hack Universitario:
              </span>
              <p className="text-xs text-emerald-900 leading-relaxed">
                {activity.studentTip}
              </p>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{isExpanded ? "Ocultar detalles" : "Ver nutrición y consejos prácticos"}</span>
            <span
              className={`transform transition-transform text-stone-500 text-xs ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
