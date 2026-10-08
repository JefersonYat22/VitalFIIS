import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#24C741] border-b border-[#1da635] shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nombre de marca */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2.5 group transition-transform hover:scale-105"
            >
              {/* Cuadradito con bordes redondeados conteniendo el logo */}
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white shadow-sm border border-stone-900/20 p-0.5 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="VitalFIIS Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  unoptimized
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-stone-950">
                  Vital<span className="text-stone-900">FIIS</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-stone-900/80 -mt-1">
                  Nutrición Universitaria
                </span>
              </div>
            </Link>
          </div>

          {/* Navegación Simple */}
          <nav className="flex items-center space-x-6 sm:space-x-8">
            <Link
              href="/hacks-energia"
              className="text-stone-900 hover:text-stone-950 font-semibold text-sm sm:text-base transition-colors py-1"
            >
              Hacks de Energía
            </Link>
            <Link
              href="/nutricion"
              className="text-stone-900 hover:text-stone-950 font-semibold text-sm sm:text-base transition-colors py-1"
            >
              Combustible y Nutrición
            </Link>
            <Link
              href="/rendimiento"
              className="text-stone-900 hover:text-stone-950 font-semibold text-sm sm:text-base transition-colors py-1"
            >
              Rendimiento y Sueño
            </Link>
            <Link
              href="/contexto"
              className="text-stone-900 hover:text-stone-950 font-semibold text-sm sm:text-base transition-colors py-1"
            >
              Por Contexto
            </Link>
            <Link
              href="/platos"
              className="text-stone-900 hover:text-stone-950 font-semibold text-sm sm:text-base transition-colors py-1"
            >
              Platos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
