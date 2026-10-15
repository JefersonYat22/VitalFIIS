"use client";

import { useState } from "react";

interface Hack {
  icon: string;
  title: string;
  badge: string;
  science: string;
  action: string;
  tip: string;
}

const hacks: Hack[] = [
  {
    icon: "🍳",
    title: "Desayuno Salado Proteico",
    badge: "Poder Cognitivo",
    science:
      "Evita la montaña rusa de azúcar desde la primera hora del día. Un desayuno dulce genera un pico de glucosa seguido de un crash que te deja sin energía en plena mañana.",
    action: "Cambia jugos/galletas por huevos, queso, yogur griego o palta.",
    tip: "Si comes en casa: prepara 2 huevos revueltos + queso. Si compras en el campus: busca sándwich de jamón y queso, sin jugos. En 5 minutos estás listo y con el cerebro activo.",
  },
  {
    icon: "🥗",
    title: "El Orden de los Alimentos",
    badge: "-73% Pico de Glucosa",
    science:
      "La fibra crea un filtro intestinal que ralentiza la absorción de azúcares. Comer primero los vegetales y proteínas antes que los carbohidratos puede reducir el pico glucémico hasta un 73%.",
    action: "Come primero la ensalada/verdura antes de tocar el arroz o los carbohidratos.",
    tip: "En la cafetería: pide o sirve primero la ensalada y el segundo (proteína). Déjate el arroz o papa para el final. Es el mismo menú de siempre, solo en distinto orden.",
  },
  {
    icon: "🥑",
    title: '"Vestir" tus Carbohidratos',
    badge: "Sin Bajón Energético",
    science:
      "Consumir carbohidratos solos genera picos violentos de glucosa e insulina. Combinarlos con grasa o proteína ralentiza la digestión y mantiene la energía constante.",
    action: "Acompaña el pan o la fruta siempre con frutos secos, palta o proteína.",
    tip: "Plátano + mantequilla de maní. Pan + palta. Fruta + yogur. Galletas + queso. Ninguna de estas combos requiere cocinar; solo juntarlas en tu lonchera o al pedir.",
  },
  {
    icon: "🧪",
    title: "El Shot de Vinagre Pre-Comida",
    badge: "-30% Impacto Glucémico",
    science:
      "El ácido acético del vinagre inhibe enzimas que descomponen almidones, reduciendo y retrasando el pico glucémico hasta un 30% cuando se toma antes de comer.",
    action: "1 cucharada de vinagre en agua (o limón) 10 min antes de almorzar.",
    tip: "Si el sabor es fuerte: mézclalo con agua y un poco de stevia. En la cafetería: pide aderezo de limón para la ensalada y cómela primero. Mismo efecto, cero esfuerzo extra.",
  },
  {
    icon: "🚶",
    title: "Walk & Study (Movimiento Post-Comida)",
    badge: "Captura de Glucosa",
    science:
      "La contracción muscular absorbe la glucosa sanguínea sin exigir insulina extra. Una caminata de 10-15 min tras comer puede reducir el pico glucémico hasta un 30% adicional.",
    action: "Camina 10 a 15 minutos por el campus o los pasillos tras comer.",
    tip: "Usa este tiempo para escuchar un podcast académico, repasar apuntes en el celular o caminar con un compañero. Estudias y tu cuerpo trabaja al mismo tiempo.",
  },
  {
    icon: "💧",
    title: "Hidratación Estratégica con Sorbos",
    badge: "Claridad Mental",
    science:
      "La deshidratación leve del 2% reduce drásticamente la atención y la memoria. Tu cerebro es 73% agua y necesita hidratación constante para mantener la sinapsis neuronal activa.",
    action: "Un vaso de agua al despertar + sorbos continuos durante las clases.",
    tip: "Pon la botella visible sobre tu escritorio o carpeta, nunca en la mochila. El solo hecho de verla te hace beber más. Es la herramienta más barata y subestimada de todas.",
  },
];

export function HacksGrid() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <section className="w-full py-14 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
            Los 6 Hacks
          </h2>
          <p className="mt-2 text-stone-500 text-base">
            Expande cada card para ver el truco de aplicación sin fricción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hacks.map((hack, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden"
                style={{ borderTop: "4px solid #28A745" }}
              >
                {/* Header */}
                <div className="p-5 pb-3">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl leading-none flex-shrink-0 mt-0.5">
                      {hack.icon}
                    </span>
                    <h3 className="font-extrabold text-stone-900 text-base leading-snug">
                      {hack.title}
                    </h3>
                  </div>
                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-[#28A745]/10 text-[#1d6e32] border border-[#28A745]/20">
                    {hack.badge}
                  </span>
                </div>

                {/* Science */}
                <div className="px-5 pb-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 mb-1.5">
                    El Porqué Científico
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {hack.science}
                  </p>
                </div>

                {/* Action */}
                <div className="px-5 pb-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 mb-1.5">
                    Acción en el Campus
                  </p>
                  <p className="text-sm text-stone-800 font-semibold leading-relaxed">
                    {hack.action}
                  </p>
                </div>

                {/* Accordion trigger */}
                <div className="mt-auto border-t border-stone-100">
                  <button
                    id={`hack-accordion-btn-${idx}`}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-bold text-[#28A745] hover:bg-[#28A745]/5 transition-colors text-left"
                  >
                    <span>Ver truco de aplicación sin fricción</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Accordion content */}
                  <div
                    style={{
                      maxHeight: isOpen ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.25s ease",
                    }}
                  >
                    <p className="px-5 py-4 text-sm text-stone-700 leading-relaxed bg-[#F0FDF4] border-t border-[#28A745]/10">
                      {hack.tip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
