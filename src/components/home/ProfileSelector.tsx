"use client";

import { useState } from "react";

interface ProfileItem {
  id: string;
  name: string;
  tag: string;
  emoji: string;
  description: string;
  keyNutrients: string[];
  quickHack: string;
  suggestedCombo: string;
  colorAccent: string;
}

const profiles: ProfileItem[] = [
  {
    id: "sedentario",
    name: "Sedentario / Tecnología",
    tag: "Horas frente a la pantalla & bajo gasto",
    emoji: "💻",
    description:
      "Diseñado para estudiantes que pasan 8+ horas sentados programando, redactando o en clases. El foco está en evitar la inflamación celular, proteger la retina y prevenir la somnolencia postprandial sin exceso calórico innecesario.",
    keyNutrients: ["Luteína & Zeaxantina (salud ocular)", "Magnesio", "Omega 3 (antiinflamatorio)", "Fibra saciante"],
    quickHack: "Reemplaza el snack ultraprocesado por 1 puñado de maní tostado y zanahoria baby mientras compilas código.",
    suggestedCombo: "Bowl de lentejas con espinaca + huevo escalfado + infusión de té verde (cero bajón de glucosa).",
    colorAccent: "border-teal-500",
  },
  {
    id: "cognitiva",
    name: "Alta Demanda Cognitiva",
    tag: "Parciales, entregas & memoria activa",
    emoji: "🧠",
    description:
      "Ideal para semanas de exámenes finales o proyectos intensivos. Requiere precursores de neurotransmisores para concentración prolongada, memoria de trabajo y resistencia al burnout mental sin depender únicamente de energizantes.",
    keyNutrients: ["Colina (precursor de acetilcolina)", "Flavonoides de cacao", "Vitaminas del complejo B", "Carbohidratos complejos"],
    quickHack: "Combina café o té con 1 cuadradito de chocolate negro al 70%: la teobromina suaviza el pico y caída de la cafeína.",
    suggestedCombo: "Avena cocida con rodajas de plátano, semillas de chía, huevo revuelto y té negro matutino.",
    colorAccent: "border-emerald-600",
  },
  {
    id: "deportivo",
    name: "Deportivo",
    tag: "Entrenamientos, gimnasio & alta energía",
    emoji: "🏃‍♂️",
    description:
      "Para quienes entrenan en la selección de la facultad, van al gym o se trasladan en bicicleta. Requiere optimización en el timing de proteínas accesibles, recarga de glucógeno y balance de electrolitos para no decaer en clase.",
    keyNutrients: ["Proteína de alto valor biológico", "Electrolitos (Sodio/Potasio)", "Creatina / Glucosa limpia", "Zinc & Hierro"],
    quickHack: "Prepara un suero casero económico para entrenar: 500ml de agua + pizca de sal marina + 1 limón exprimido + 1 cdta de miel.",
    suggestedCombo: "Arroz con atún o pollo deshilachado, camote al horno y ensalada mixta con aceite vegetal de calidad.",
    colorAccent: "border-amber-500",
  },
];

export function ProfileSelector() {
  const [selectedProfileId, setSelectedProfileId] = useState<string>("cognitiva");

  const selectedProfile = profiles.find((p) => p.id === selectedProfileId) || profiles[0];

  return (
    <section id="perfiles" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-stone-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            Personalización Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
            Optimiza tu rendimiento: Elige tu perfil
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
            No existe una fórmula única. Selecciona tu ritmo de vida universitario y
            descubre los nutrientes, protocolos y hacks económicos que tu cuerpo necesita hoy.
          </p>
        </div>

        {/* 3 Botones Grandes / Cards Interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {profiles.map((profile) => {
            const isSelected = profile.id === selectedProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`relative flex flex-col text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 border-2 cursor-pointer group ${
                  isSelected
                    ? "bg-white border-amber-400 shadow-xl shadow-amber-400/10 scale-[1.02] ring-2 ring-amber-300/60"
                    : "bg-white/80 hover:bg-white border-stone-200/90 hover:border-amber-300 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Indicador de activo */}
                {isSelected && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-amber-400 text-stone-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
                    Seleccionado
                  </span>
                )}

                {/* Icono y Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-4xl p-2 rounded-xl bg-stone-100 group-hover:scale-110 transition-transform">
                    {profile.emoji}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                    {profile.tag}
                  </span>
                </div>

                {/* Nombre de Perfil */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mb-2 group-hover:text-emerald-900 transition-colors">
                  {profile.name}
                </h3>

                {/* Breve introducción */}
                <p className="text-stone-600 text-sm line-clamp-3 mb-6">
                  {profile.description}
                </p>

                {/* Botón visual de selección */}
                <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {isSelected ? "Perfil en vista" : "Ver protocolo"}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      isSelected
                        ? "bg-amber-400 text-stone-950 shadow"
                        : "bg-stone-100 text-stone-600 group-hover:bg-amber-300 group-hover:text-stone-950"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel Interactivo Detallado del Perfil Seleccionado */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-400" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedProfile.emoji}</span>
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
                    Plan Recomendado para:
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-stone-900">
                    {selectedProfile.name}
                  </h4>
                </div>
              </div>
              
              <p className="text-stone-700 text-base leading-relaxed">
                {selectedProfile.description}
              </p>

              {/* Nutrientes Clave */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Nutrientes Clave para este perfil:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.keyNutrients.map((nutrient, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold"
                    >
                      ✓ {nutrient}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna de Combo & Hack */}
            <div className="w-full lg:w-96 bg-[#FAF8F5] rounded-2xl p-5 border border-stone-200 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <span className="text-amber-500">💡</span> Hack Económico
                </div>
                <p className="text-xs text-stone-700 leading-relaxed bg-white p-3 rounded-xl border border-stone-200/80">
                  {selectedProfile.quickHack}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <span className="text-amber-500">🍱</span> Combo Sugerido
                </div>
                <p className="text-xs text-stone-700 leading-relaxed bg-white p-3 rounded-xl border border-stone-200/80">
                  {selectedProfile.suggestedCombo}
                </p>
              </div>

              <a
                href="#combos"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all text-center"
              >
                Ver todos los combos para este perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
