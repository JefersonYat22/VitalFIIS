import React from "react";

import { Expert } from "@/types";

const experts: Expert[] = [
  {
    name: "Jessie Inchauspé",
    field: "Bioquímica y gestión de energía",
    initials: "JI",
    url: "https://www.youtube.com/@GlucoseRevolution",
  },
  {
    name: "Dr. Andy Galpin",
    field: "Kinesiología, rendimiento físico e hidratación",
    initials: "AG",
    url: "https://www.andygalpin.com",
  },
  {
    name: "Dr. Andrew Huberman",
    field: "Neurobiología, sueño y ritmo circadiano",
    initials: "AH",
    url: "https://www.youtube.com/@hubermanlab",
  },
  {
    name: "James Clear",
    field: "Psicología de hábitos y cambios sostenibles",
    initials: "JC",
    url: "https://jamesclear.com/atomic-habits",
  },
  {
    name: "Tim Ferriss",
    field: "Optimización de sistemas y Mínima Dosis Eficaz",
    initials: "TF",
    url: "https://www.youtube.com/@timferriss",
  },
];

export function ScientificBacking() {
  return (
    <section className="w-full pt-12 pb-20 sm:pt-16 sm:pb-24 bg-[#FAF8F5] border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado sin card exterior, integrado fluidamente */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold italic text-stone-950 tracking-tight">
            Ciencia Real, Cero Dietas Fantasiosas
          </h3>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Toda la información de esta plataforma está construida sobre las investigaciones y métodos de referentes internacionales en bioquímica, rendimiento físico y hábitos:
          </p>
        </div>

        {/* Cards individuales de los autores/referentes para futuros enlaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experts.map((expert, idx) => {
            const CardTag = expert.url ? "a" : "div";
            return (
              <CardTag
                key={idx}
                {...(expert.url
                  ? {
                      href: expert.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all duration-200 ${
                  expert.url
                    ? "hover:border-amber-400 hover:shadow-xs hover:-translate-y-0.5 cursor-pointer group"
                    : ""
                } ${idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Monograma de iniciales */}
                <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-stone-800 shadow-2xs group-hover:bg-amber-100 group-hover:border-amber-300 transition-colors">
                  {expert.initials}
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 truncate group-hover:text-amber-800 transition-colors">
                      {expert.name}
                    </h4>
                    {expert.url && (
                      <span className="text-stone-400 group-hover:text-amber-600 text-xs transition-colors">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 font-medium leading-snug">
                    {expert.field}
                  </p>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
