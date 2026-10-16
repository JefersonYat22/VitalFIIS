"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/hacks-energia", label: "Hacks de Energía" },
    { href: "/nutricion", label: "Combustible y Nutrición" },
    { href: "/rendimiento", label: "Rendimiento y Sueño" },
    { href: "/contexto", label: "Por Contexto" },
    { href: "/platos", label: "Platos" },
  ];

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
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white shadow-sm border border-stone-900/20 p-0.5 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="VitalFIIS Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
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

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-900 hover:text-stone-950 font-semibold text-sm lg:text-base transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botón Hamburguesa Móvil (< md) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-stone-950 hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900/40"
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil (< md) */}
      {isOpen && (
        <div className="md:hidden bg-[#24C741] border-b border-[#1da635] px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-bold text-stone-950 hover:bg-black/10 transition-colors text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
