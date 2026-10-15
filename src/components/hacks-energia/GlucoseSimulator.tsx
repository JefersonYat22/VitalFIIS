"use client";

import { useState } from "react";

// ─── SVG Paths ─────────────────────────────────────────────────────────────────
// ViewBox: 0 0 700 210 | Chart area x:[55,645] y:[20,185] | X-axis at y=190
// Hours: 8AM=55 10AM=153 12PM=251 2PM=349 4PM=447 6PM=545 8PM=643

const WITHOUT_PATH =
  "M 55,122 C 75,122 92,40 104,40 C 116,40 138,163 153,165 C 168,167 186,112 202,112 C 220,112 238,103 251,103 C 275,103 322,35 349,33 C 360,31 382,170 398,172 C 412,174 432,160 447,160 C 462,160 480,72 496,70 C 512,68 530,142 545,144 C 560,146 576,154 594,155 C 610,156 630,163 643,165";

const WITH_PATH =
  "M 55,122 C 75,118 92,88 104,83 C 116,78 136,74 153,73 C 170,72 188,70 202,70 C 218,70 236,70 251,70 C 282,70 322,79 349,79 C 366,79 384,83 398,83 C 416,83 432,86 447,86 C 462,86 480,89 496,89 C 512,89 530,95 545,96 C 560,97 576,102 594,103 C 610,104 628,111 643,112";

const WITHOUT_AREA = WITHOUT_PATH + " L 643,190 L 55,190 Z";
const WITH_AREA = WITH_PATH + " L 643,190 L 55,190 Z";

const X_HOURS = ["8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"];
const X_POS = [55, 153, 251, 349, 447, 545, 643];

const WITHOUT_DOTS = [
  { cx: 104, cy: 40 },
  { cx: 349, cy: 33 },
  { cx: 398, cy: 172 },
  { cx: 496, cy: 70 },
];

const WITH_DOTS = [
  { cx: 251, cy: 70 },
  { cx: 447, cy: 86 },
];

export function GlucoseSimulator() {
  const [mode, setMode] = useState<"without" | "with">("without");
  const isWithout = mode === "without";
  const fade = (show: boolean) => ({
    opacity: show ? 1 : 0,
    transition: "opacity 0.4s ease",
  });

  return (
    <section className="w-full py-14 sm:py-16 bg-white border-y border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 mb-2">
            Simulador: Tu Curva de Energía
          </h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">
            Compara cómo tus decisiones nutricionales afectan tu nivel de
            energía y enfoque de 8AM a 8PM.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-stone-200 bg-stone-50 p-1 gap-1 shadow-xs">
            <button
              id="glucose-toggle-without"
              onClick={() => setMode("without")}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${
                isWithout
                  ? "bg-red-500 text-white shadow-sm"
                  : "text-stone-500 hover:bg-stone-100"
              }`}
            >
              🔴 Sin Hacks
            </button>
            <button
              id="glucose-toggle-with"
              onClick={() => setMode("with")}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${
                !isWithout
                  ? "bg-[#28A745] text-white shadow-sm"
                  : "text-stone-500 hover:bg-stone-100"
              }`}
            >
              🟢 Con Hacks VitalFIIS
            </button>
          </div>
        </div>

        {/* Chart container */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 px-4 sm:px-6 pt-5 pb-4 shadow-xs">
          {/* Legend bar */}
          <div className="flex items-center gap-2 mb-3 px-1">
            <span
              className="inline-block w-6 h-[3px] rounded-full flex-shrink-0"
              style={{ backgroundColor: isWithout ? "#EF4444" : "#28A745" }}
            />
            <span className="text-xs text-stone-500 font-medium leading-snug">
              {isWithout
                ? "Desayuno dulce · carbohidratos solos · sedentarismo post-almuerzo"
                : "Desayuno salado · orden de alimentos · caminata de 10 min"}
            </span>
          </div>

          {/* SVG */}
          <svg
            viewBox="0 0 700 210"
            className="w-full"
            role="img"
            aria-label="Curva de glucosa y energía durante el día"
          >
            <defs>
              <linearGradient id="grd-red" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="grd-green" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#28A745" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#28A745" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Y-axis label */}
            <text
              x="13"
              y="105"
              transform="rotate(-90 13 105)"
              textAnchor="middle"
              fontSize="8.5"
              fill="#94a3b8"
              fontFamily="system-ui,sans-serif"
            >
              Nivel de Energía
            </text>

            {/* Grid */}
            {[45, 85, 125, 165].map((y) => (
              <line
                key={y}
                x1="55"
                y1={y}
                x2="648"
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="5 4"
              />
            ))}

            {/* Axes */}
            <line x1="55" y1="190" x2="648" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="55" y1="20" x2="55" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y-axis range labels */}
            <text x="48" y="24" textAnchor="end" fontSize="7.5" fill="#94a3b8" fontFamily="system-ui,sans-serif">Alto</text>
            <text x="48" y="188" textAnchor="end" fontSize="7.5" fill="#94a3b8" fontFamily="system-ui,sans-serif">Bajo</text>

            {/* X-axis hour labels */}
            {X_HOURS.map((h, i) => (
              <text
                key={h}
                x={X_POS[i]}
                y="204"
                textAnchor="middle"
                fontSize="8.5"
                fill="#94a3b8"
                fontFamily="system-ui,sans-serif"
              >
                {h}
              </text>
            ))}

            {/* ── WITHOUT HACKS (Red) ── */}
            <path d={WITHOUT_AREA} fill="url(#grd-red)" style={fade(isWithout)} />
            <path
              d={WITHOUT_PATH}
              fill="none"
              stroke="#EF4444"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={fade(isWithout)}
            />
            {/* Without labels */}
            {(
              [
                { x: 104, y: 26, text: "📈 Pico 9AM" },
                { x: 349, y: 20, text: "📈 Pico 2PM" },
                { x: 440, y: 181, text: "😴 Somnolencia 3PM" },
                { x: 496, y: 57, text: "🍫 Antojo 5PM" },
              ] as { x: number; y: number; text: string }[]
            ).map((l, i) => (
              <text
                key={i}
                x={l.x}
                y={l.y}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="700"
                fill="#DC2626"
                fontFamily="system-ui,sans-serif"
                style={fade(isWithout)}
              >
                {l.text}
              </text>
            ))}
            {/* Without dots */}
            {WITHOUT_DOTS.map((d, i) => (
              <circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r="4"
                fill="#EF4444"
                stroke="white"
                strokeWidth="1.5"
                style={fade(isWithout)}
              />
            ))}

            {/* ── WITH HACKS (Green) ── */}
            <path d={WITH_AREA} fill="url(#grd-green)" style={fade(!isWithout)} />
            <path
              d={WITH_PATH}
              fill="none"
              stroke="#28A745"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={fade(!isWithout)}
            />
            {/* With labels */}
            {(
              [
                { x: 300, y: 58, text: "✅ Enfoque constante" },
                { x: 520, y: 77, text: "📚 Energía activa" },
              ] as { x: number; y: number; text: string }[]
            ).map((l, i) => (
              <text
                key={i}
                x={l.x}
                y={l.y}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="700"
                fill="#15803d"
                fontFamily="system-ui,sans-serif"
                style={fade(!isWithout)}
              >
                {l.text}
              </text>
            ))}
            {/* With dots */}
            {WITH_DOTS.map((d, i) => (
              <circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r="4"
                fill="#28A745"
                stroke="white"
                strokeWidth="1.5"
                style={fade(!isWithout)}
              />
            ))}
          </svg>
        </div>

        {/* Summary banner */}
        <div
          className={`mt-4 px-5 py-4 rounded-xl text-sm font-medium leading-relaxed border transition-colors duration-300 ${
            isWithout
              ? "bg-red-50 border-red-100 text-red-800"
              : "bg-[#F0FDF4] border-[#28A745]/20 text-[#1a5c2a]"
          }`}
        >
          {isWithout ? (
            <span>
              ⚠️{" "}
              <strong>Sin hacks:</strong> Tu energía sube y cae violentamente.
              Somnolencia garantizada en clase a las 3PM, antojos de azúcar a
              las 5PM y cerebro apagado para estudiar en la tarde.
            </span>
          ) : (
            <span>
              ✅{" "}
              <strong>Con Hacks VitalFIIS:</strong> Energía estable durante
              todo el día. Sin bajones, sin somnolencia post-almuerzo y sin
              ataques de hambre. Tu cerebro funciona a máxima capacidad.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
