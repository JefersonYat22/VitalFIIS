import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#C7965A] border-t border-[#b38247] text-stone-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Columna Marca & Proyecto (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white shadow-sm border border-stone-900/20 p-0.5 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="VitalFIIS Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-stone-950">
                Vital<span className="text-stone-900">FIIS</span>
              </span>
            </div>
            <p className="text-stone-900 text-sm leading-relaxed max-w-md font-medium">
              Plataforma de orientación nutricional creada por y para estudiantes
              universitarios. Optimizamos recursos, energía y función cognitiva
              con hacks accesibles para el día a día académico.
            </p>
            <p className="text-xs font-bold text-stone-950/80 pt-1">
              Proyecto colaborativo estudiantil — Grupo 7
            </p>
          </div>

          {/* Enlaces Principales / Explorar (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="font-extrabold text-stone-950 text-sm tracking-wider uppercase mb-3.5">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm text-stone-900 font-semibold">
              <li>
                <Link href="/hacks-energia" className="hover:text-black hover:underline transition-colors">
                  Hacks de Energía
                </Link>
              </li>
              <li>
                <Link href="/nutricion" className="hover:text-black hover:underline transition-colors">
                  Combustible y Nutrición
                </Link>
              </li>
              <li>
                <Link href="/rendimiento" className="hover:text-black hover:underline transition-colors">
                  Rendimiento y Sueño
                </Link>
              </li>
              <li>
                <Link href="/contexto" className="hover:text-black hover:underline transition-colors">
                  Soluciones por Contexto
                </Link>
              </li>
              <li>
                <Link href="/platos" className="hover:text-black hover:underline transition-colors">
                  Platos Peruanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Fuentes y Referencias como texto limpio (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="font-extrabold text-stone-950 text-sm tracking-wider uppercase mb-3.5">
              Fuentes & Referentes
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-900 font-medium">
              <li>
                <strong className="font-bold text-stone-950">Jessie Inchauspé</strong> — Bioquímica y glucosa
              </li>
              <li>
                <strong className="font-bold text-stone-950">Dr. Andy Galpin</strong> — Rendimiento físico e hidratación
              </li>
              <li>
                <strong className="font-bold text-stone-950">Dr. Andrew Huberman</strong> — Neurobiología y descanso
              </li>
              <li>
                <strong className="font-bold text-stone-950">James Clear</strong> — Psicología de hábitos sostenibles
              </li>
              <li>
                <strong className="font-bold text-stone-950">Tim Ferriss</strong> — Mínima Dosis Eficaz
              </li>
            </ul>
          </div>
        </div>

        {/* Descargo de Responsabilidad Médico */}
        <div className="pt-6 border-t border-[#b38247] text-xs text-stone-900 leading-relaxed font-normal mb-6">
          <p>
            <strong className="font-bold text-stone-950">Descargo de responsabilidad:</strong> La información presentada en este sitio web tiene fines estrictamente educativos e informativos y ha sido elaborada por estudiantes universitarios. No constituye asesoramiento médico, nutricional ni diagnóstico profesional. Consulta siempre con un profesional de la salud o nutricionista colegiado antes de realizar cambios drásticos en tu dieta.
          </p>
        </div>

        {/* Barra Inferior de Derechos */}
        <div className="pt-4 border-t border-[#b38247]/60 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-950 font-semibold gap-2">
          <p>© {new Date().getFullYear()} VitalFIIS — Todos los derechos reservados.</p>
          <p>Diseñado para estudiantes universitarios con mucho cariño.</p>
        </div>
      </div>
    </footer>
  );
}
