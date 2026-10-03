"use client";

import { useState, useEffect, useCallback } from "react";

interface SlideData {
  id: number;
  tag: string;
  title: string;
  description: string;
  bgGradient: string;
  badgeBg: string;
  accentIcon: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    tag: "Energía & Productividad",
    title: "¿Tienes sueño en clase después de almorzar?",
    description:
      "Evita el pico de insulina que te apaga el cerebro. Optimiza tus carbohidratos para mantener la energía al máximo toda la tarde.",
    bgGradient: "from-emerald-900 via-emerald-800 to-teal-950",
    badgeBg: "bg-emerald-700/60 text-emerald-100 border-emerald-500/40",
    accentIcon: "⚡",
  },
  {
    id: 2,
    tag: "Salud Visual & Código",
    title: "Código, pantallas y ojos rojos.",
    description:
      "Instala el parche 'Ojo de Águila'. Descubre qué alimentos económicos actúan como filtro solar interno para tu vista.",
    bgGradient: "from-teal-950 via-cyan-900 to-emerald-950",
    badgeBg: "bg-teal-700/60 text-teal-100 border-teal-500/40",
    accentIcon: "👁️",
  },
  {
    id: 3,
    tag: "Recuperación Rápida",
    title: "Hackea tu amanecida (y la resaca).",
    description:
      "Ya sea por parciales o por el fin de semana, conoce el protocolo exacto para rehidratar tus células y no perder el día.",
    bgGradient: "from-stone-900 via-emerald-950 to-emerald-900",
    badgeBg: "bg-amber-900/60 text-amber-200 border-amber-600/40",
    accentIcon: "🧪",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative w-full h-[540px] md:h-[68vh] md:min-h-[520px] overflow-hidden select-none bg-stone-900 shadow-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-full flex flex-col justify-center items-center text-white px-6 md:px-12 text-center bg-gradient-to-br ${slide.bgGradient} relative overflow-hidden`}
          >
            {/* Ambient subtle glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Título Grande (h1) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight text-white drop-shadow-md">
                {slide.title}
              </h1>

              {/* Párrafo de descripción */}
              <p className="text-base sm:text-lg md:text-xl text-stone-200 mb-8 max-w-2xl leading-relaxed drop-shadow">
                {slide.description}
              </p>

              {/* Botón amarillo "Saber más" */}
              <div>
                <a
                  href="#perfiles"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-extrabold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 shadow-lg shadow-amber-400/20 transition-all text-base group cursor-pointer border border-amber-300"
                >
                  <span>Saber más</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-stone-900/40 hover:bg-stone-900/70 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 z-20"
        aria-label="Slide anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-stone-900/40 hover:bg-stone-900/70 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 z-20"
        aria-label="Slide siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Indicadores / Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20 bg-stone-950/30 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 h-2.5 bg-amber-400"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
