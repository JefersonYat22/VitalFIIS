"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import { SlideData } from "@/types";

const slides: SlideData[] = [
  {
    id: 1,
    tag: "Energía & Productividad",
    title: "¿Tienes sueño en clase después de almorzar?",
    description:
      "Evita el pico de insulina que te apaga el cerebro. Optimiza tus carbohidratos para mantener la energía al máximo toda la tarde.",
    bgGradient: "from-emerald-950 via-slate-900 to-teal-950",
    badgeBg: "bg-emerald-700/60 text-emerald-100 border-emerald-500/40",
    accentIcon: "⚡",
    image: "/images/slide-sueno.jpg",
    imageAlt: "Estudiante con sueño frente al computador en clase",
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
      className="relative w-full h-[540px] md:h-[68vh] md:min-h-[520px] overflow-hidden select-none bg-black shadow-md"
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
            className="min-w-full h-full flex items-center relative overflow-hidden bg-black"
          >
            {/* Imagen que ocupa la pantalla en el fondo / lado derecho */}
            {slide.image ? (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt || slide.title}
                  fill
                  className="object-cover object-center md:object-right"
                  priority={slide.id === 1}
                  unoptimized
                />
              </div>
            ) : (
              /* Fondo con gradiente de respaldo si la pantalla aún no tiene foto */
              <div
                className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slide.bgGradient}`}
              />
            )}

            {/* Difuminado negro desde la izquierda hacia la derecha */}
            {/* Cubre el lado izquierdo con negro sólido para que el texto resalte, y se corta suavemente hacia la derecha mostrando la imagen */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-35% md:via-black/80 md:via-45% to-transparent z-10 pointer-events-none" />

            {/* Ambient subtle glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-10" />

            {/* Contenedor del texto llamativo a la izquierda */}
            <div className="relative z-20 max-w-7xl mx-auto w-full h-full flex items-center px-10 sm:px-16 md:px-20 lg:px-24">
              <div className="max-w-2xl flex flex-col items-start text-left py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight text-white drop-shadow-2xl">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-stone-200 mb-8 max-w-xl leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>

                <div>
                  <a
                    href="#perfiles"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-extrabold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 shadow-xl shadow-amber-400/20 transition-all text-base group cursor-pointer border border-amber-300"
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
          </div>
        ))}
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-stone-900/50 hover:bg-stone-900/80 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 z-30"
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
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-stone-900/50 hover:bg-stone-900/80 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 z-30"
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
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30 bg-stone-950/40 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
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
