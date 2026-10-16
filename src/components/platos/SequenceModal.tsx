"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { XIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

interface SequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StepData {
  id: number;
  nombre: string;
  subtitulo: string;
  badge: string;
  color: string;
  borderColor: string;
  activeFill: string;
  texto: string; // máx 140 caracteres
  icono: string;
}

const STEPS: StepData[] = [
  {
    id: 1,
    nombre: "1° Ensalada y Fibra",
    subtitulo: "La malla protectora digestiva",
    badge: "PASO 1",
    color: "bg-emerald-500 text-white",
    borderColor: "border-emerald-500",
    activeFill: "#10b981",
    texto:
      "La fibra soluble crea un recubrimiento en el intestino que puede atenuar la velocidad con la que los azúcares pasan a la sangre.",
    icono: "🥗",
  },
  {
    id: 2,
    nombre: "2° Proteína y Grasas",
    subtitulo: "Saciedad y vaciado pausado",
    badge: "PASO 2",
    color: "bg-blue-600 text-white",
    borderColor: "border-blue-600",
    activeFill: "#2563eb",
    texto:
      "Proteínas y lípidos saludables favorecen hormonas de saciedad y pueden ralentizar el vaciamiento gástrico de forma progresiva.",
    icono: "🍗",
  },
  {
    id: 3,
    nombre: "3° Carbohidratos al Final",
    subtitulo: "Almidones dosificados",
    badge: "PASO 3",
    color: "bg-amber-500 text-stone-950",
    borderColor: "border-amber-500",
    activeFill: "#f59e0b",
    texto:
      "Consumir el arroz o fideos al final de la comida puede modular el pico de glucosa e insulina, previniendo el sopor en clase.",
    icono: "🍚",
  },
  {
    id: 4,
    nombre: "4° Caminata de 10-15 min",
    subtitulo: "Actividad ligera postcomida",
    badge: "PASO 4",
    color: "bg-purple-600 text-white",
    borderColor: "border-purple-600",
    activeFill: "#9333ea",
    texto:
      "Un paseo suave hacia el pabellón estimula la contracción muscular para modular la respuesta glucémica.",
    icono: "🚶",
  },
];

export function SequenceModal({ isOpen, onClose }: SequenceModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"guia" | "juego">("guia");
  
  // Estado para el modo interactivo "Ordénalo tú"
  const [gameOrder, setGameOrder] = useState<number[]>([]);
  const [gameFeedback, setGameFeedback] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus lock and Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Foco inicial
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Auto-play timer
  useEffect(() => {
    if (!isOpen || !isPlaying || activeTab !== "guia") return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STEPS.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, activeTab]);

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % STEPS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  }, []);

  // Lógica del mini-juego "Ordénalo tú"
  const handleSelectGameItem = (id: number) => {
    if (gameOrder.includes(id)) {
      setGameOrder((prev) => prev.filter((item) => item !== id));
      setGameFeedback(null);
      return;
    }

    if (gameOrder.length < 4) {
      const nextOrder = [...gameOrder, id];
      setGameOrder(nextOrder);

      if (nextOrder.length === 4) {
        const isCorrect = nextOrder.every((val, idx) => val === idx + 1);
        if (isCorrect) {
          setGameFeedback("¡Excelente! Has configurado la secuencia óptima para una tarde con energía estable.");
        } else {
          setGameFeedback("Casi lo tienes. Recuerda la regla: Fibra primero, luego proteína/grasa, carbohidrato al final y caminata.");
        }
      } else {
        setGameFeedback(null);
      }
    }
  };

  const handleResetGame = () => {
    setGameOrder([]);
    setGameFeedback(null);
  };

  if (!isOpen) return null;

  const current = STEPS[currentStep];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sequence-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Cabecera Clara */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between gap-3 bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <SparklesIcon className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 id="sequence-modal-title" className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
                ¿En qué orden comer en el comedor?
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                La mínima dosis eficaz para prevenir la pesadez de la tarde
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal de secuencia"
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition cursor-pointer shrink-0"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Selector de Pestañas: Guía Visual vs Ordénalo Tú */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-4 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab("guia")}
            className={`py-2.5 px-4 border-b-2 transition cursor-pointer ${
              activeTab === "guia"
                ? "border-emerald-600 text-emerald-800 bg-white"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            Bandeja Interactiva (Guía)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("juego")}
            className={`py-2.5 px-4 border-b-2 transition cursor-pointer ${
              activeTab === "juego"
                ? "border-emerald-600 text-emerald-800 bg-white"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            Modo Práctico: &quot;Ordénalo tú&quot;
          </button>
        </div>

        {/* Contenido Principal con Scroll */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {activeTab === "guia" ? (
            <>
              {/* BANDEJA ILUSTRADA SVG */}
              <div className="relative w-full aspect-[16/10] max-h-64 sm:max-h-72 mx-auto rounded-3xl bg-gradient-to-b from-stone-100 to-stone-50 p-3 sm:p-4 border border-stone-200/90 shadow-inner flex items-center justify-center">
                <svg
                  viewBox="0 0 600 360"
                  className="w-full h-full max-h-60"
                  aria-label="Bandeja universitaria con 4 compartimentos nutricionales"
                >
                  <defs>
                    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
                    </filter>
                  </defs>

                  {/* Bandeja externa de acero/polímero */}
                  <rect
                    x="10"
                    y="10"
                    width="580"
                    height="340"
                    rx="28"
                    fill="#F1EDE6"
                    stroke="#D6CFC4"
                    strokeWidth="4"
                    filter="url(#softShadow)"
                  />
                  <rect
                    x="22"
                    y="22"
                    width="556"
                    height="316"
                    rx="22"
                    fill="#FAF8F5"
                    stroke="#E8E2D8"
                    strokeWidth="2"
                  />

                  {/* 1. ZONA FIBRA (Arriba Izquierda) */}
                  <g
                    onClick={() => setCurrentStep(0)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <rect
                      x="38"
                      y="38"
                      width="250"
                      height="130"
                      rx="18"
                      fill={currentStep === 0 ? "#ECFDF5" : "#FFFFFF"}
                      stroke={currentStep === 0 ? "#059669" : "#E2DCD5"}
                      strokeWidth={currentStep === 0 ? "3.5" : "1.5"}
                    />
                    <text
                      x="56"
                      y="70"
                      fontSize="14"
                      fontWeight="900"
                      fill={currentStep === 0 ? "#065F46" : "#78716C"}
                    >
                      1° FIBRA / ENSALADA
                    </text>
                    <text x="56" y="94" fontSize="11" fill="#78716C">
                      Lechuga, tomate, verduras crudas
                    </text>
                    <text x="235" y="80" fontSize="28">
                      🥗
                    </text>
                    {currentStep === 0 && (
                      <circle cx="270" cy="52" r="6" fill="#10B981" />
                    )}
                  </g>

                  {/* 2. ZONA PROTEÍNA Y GRASAS (Arriba Derecha) */}
                  <g
                    onClick={() => setCurrentStep(1)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <rect
                      x="312"
                      y="38"
                      width="250"
                      height="130"
                      rx="18"
                      fill={currentStep === 1 ? "#EFF6FF" : "#FFFFFF"}
                      stroke={currentStep === 1 ? "#2563EB" : "#E2DCD5"}
                      strokeWidth={currentStep === 1 ? "3.5" : "1.5"}
                    />
                    <text
                      x="330"
                      y="70"
                      fontSize="14"
                      fontWeight="900"
                      fill={currentStep === 1 ? "#1E40AF" : "#78716C"}
                    >
                      2° PROTEÍNA Y GRASAS
                    </text>
                    <text x="330" y="94" fontSize="11" fill="#78716C">
                      Pollo, pescado, huevo, queso
                    </text>
                    <text x="508" y="80" fontSize="28">
                      🍗
                    </text>
                    {currentStep === 1 && (
                      <circle cx="544" cy="52" r="6" fill="#3B82F6" />
                    )}
                  </g>

                  {/* 3. ZONA CARBOHIDRATOS (Abajo Izquierda) */}
                  <g
                    onClick={() => setCurrentStep(2)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <rect
                      x="38"
                      y="190"
                      width="250"
                      height="130"
                      rx="18"
                      fill={currentStep === 2 ? "#FFFBEB" : "#FFFFFF"}
                      stroke={currentStep === 2 ? "#D97706" : "#E2DCD5"}
                      strokeWidth={currentStep === 2 ? "3.5" : "1.5"}
                    />
                    <text
                      x="56"
                      y="222"
                      fontSize="14"
                      fontWeight="900"
                      fill={currentStep === 2 ? "#92400E" : "#78716C"}
                    >
                      3° ALMIDÓN AL FINAL
                    </text>
                    <text x="56" y="246" fontSize="11" fill="#78716C">
                      Arroz blanco, fideos, papas
                    </text>
                    <text x="235" y="232" fontSize="28">
                      🍚
                    </text>
                    {currentStep === 2 && (
                      <circle cx="270" cy="204" r="6" fill="#F59E0B" />
                    )}
                  </g>

                  {/* 4. ZONA CAMINATA (Abajo Derecha) */}
                  <g
                    onClick={() => setCurrentStep(3)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <rect
                      x="312"
                      y="190"
                      width="250"
                      height="130"
                      rx="18"
                      fill={currentStep === 3 ? "#FAF5FF" : "#FFFFFF"}
                      stroke={currentStep === 3 ? "#9333EA" : "#E2DCD5"}
                      strokeWidth={currentStep === 3 ? "3.5" : "1.5"}
                    />
                    <text
                      x="330"
                      y="222"
                      fontSize="14"
                      fontWeight="900"
                      fill={currentStep === 3 ? "#6B21A8" : "#78716C"}
                    >
                      4° PASEO DE 10-15 MIN
                    </text>
                    <text x="330" y="246" fontSize="11" fill="#78716C">
                      Caminata al pabellón o biblioteca
                    </text>
                    <text x="508" y="232" fontSize="28">
                      🚶
                    </text>
                    {currentStep === 3 && (
                      <circle cx="544" cy="204" r="6" fill="#A855F7" />
                    )}
                  </g>
                </svg>
              </div>

              {/* TARJETA DEL PASO ACTIVO */}
              <div
                className={`p-4 rounded-2xl border-2 transition-all duration-300 ${current.borderColor} bg-white shadow-xs`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider ${current.color}`}
                    >
                      {current.badge}
                    </span>
                    <span className="text-base font-black text-stone-900">
                      {current.nombre}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-stone-400">
                    Paso {currentStep + 1} de {STEPS.length}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                  {current.texto}
                </p>
                <p className="mt-1 text-[11px] text-stone-400 italic">
                  * Evidencia basada en modelos de vaciamiento gástrico y absorción intestinal.
                </p>
              </div>

              {/* CONTROLES DEL STEPPER */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition cursor-pointer"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                {/* Dots de navegación y Auto-play */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {STEPS.map((step, idx) => (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setCurrentStep(idx)}
                        aria-label={`Ir al paso ${idx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === currentStep
                            ? "w-6 bg-emerald-600"
                            : "bg-stone-300 hover:bg-stone-400"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-xs font-bold px-2 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                  >
                    {isPlaying ? "⏸ Pausa" : "▶ Auto"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer shadow-xs"
                >
                  <span>Siguiente</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* MODO INTERACTIVO: ORDÉNALO TÚ */
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
                👉 Selecciona las 4 fases en el orden en que deberías consumirlas durante tu almuerzo para evitar la pesadez en clase:
              </div>

              {/* Opciones disponibles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STEPS.map((step) => {
                  const selectedIndex = gameOrder.indexOf(step.id);
                  const isSelected = selectedIndex !== -1;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => handleSelectGameItem(step.id)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-emerald-50 border-emerald-500 shadow-xs"
                          : "bg-white border-stone-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{step.icono}</span>
                        <div>
                          <div className="text-xs font-bold text-stone-900">
                            {step.nombre.replace(/^\d+°\s*/, "")}
                          </div>
                          <div className="text-[11px] text-stone-500 font-normal">
                            {step.subtitulo}
                          </div>
                        </div>
                      </div>

                      {isSelected ? (
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                          {selectedIndex + 1}°
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full border border-stone-300 text-stone-400 font-bold text-xs flex items-center justify-center shrink-0">
                          +
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback del juego */}
              {gameFeedback && (
                <div
                  className={`p-3.5 rounded-2xl text-xs font-bold leading-relaxed border animate-in fade-in ${
                    gameFeedback.startsWith("¡Excelente")
                      ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                      : "bg-amber-50 border-amber-400 text-amber-900"
                  }`}
                >
                  {gameFeedback}
                </div>
              )}

              {gameOrder.length > 0 && (
                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleResetGame}
                    className="px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
                  >
                    Reiniciar orden
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pie de modal con nota científica */}
        <div className="p-3.5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-1 px-5">
          <span>Fuente metodológica: Shukla et al. (2015) • Javierre et al. (1996)</span>
          <span className="font-semibold text-emerald-800">Prudencia clínica: la respuesta metabólica puede variar entre personas</span>
        </div>
      </div>
    </div>
  );
}
