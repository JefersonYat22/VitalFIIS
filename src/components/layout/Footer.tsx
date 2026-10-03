import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#C7965A] border-t border-[#b38247] text-stone-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna Marca */}
          <div className="md:col-span-2 space-y-3">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-200/80 border border-amber-400/80 text-xs font-bold text-stone-950 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Enfoque en Salud y Rendimiento Intelectual
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-extrabold text-stone-950 text-sm tracking-wide uppercase mb-3">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm text-stone-900 font-medium">
              <li>
                <Link href="#perfiles" className="hover:text-black hover:underline transition-colors">
                  Perfiles de Rendimiento
                </Link>
              </li>
              <li>
                <Link href="#combos" className="hover:text-black hover:underline transition-colors">
                  Combos Diarios
                </Link>
              </li>
              <li>
                <Link href="#tips" className="hover:text-black hover:underline transition-colors">
                  Protocolos & Hacks
                </Link>
              </li>
              <li>
                <Link href="#comedor" className="hover:text-black hover:underline transition-colors">
                  Guía del Comedor Universitario
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto / Proyecto */}
          <div>
            <h3 className="font-extrabold text-stone-950 text-sm tracking-wide uppercase mb-3">
              Comunidad
            </h3>
            <p className="text-xs text-stone-900 font-semibold mb-3">
              Proyecto colaborativo estudiantil - Grupo 7.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="#perfiles"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-extrabold rounded-lg bg-amber-300 hover:bg-amber-200 text-stone-950 shadow-sm transition-colors text-center border border-amber-400"
              >
                Elegir Perfil Nutricional
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#b38247] flex flex-col sm:flex-row justify-between items-center text-xs text-stone-900 font-semibold gap-2">
          <p>© {new Date().getFullYear()} VitalFIIS - Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado para estudiantes universitarios con energía al 100%.
          </p>
        </div>
      </div>
    </footer>
  );
}
