import { HeroCarousel } from "@/components/home/HeroCarousel";
import { IntroPhilosophy } from "@/components/home/IntroPhilosophy";
import { ScientificBacking } from "@/components/home/ScientificBacking";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section con Carrusel */}
      <HeroCarousel />

      {/* Filosofía y Propuesta de Valor Fluida */}
      <IntroPhilosophy />

      {/* Sección Discreta de Respaldo Científico */}
      <ScientificBacking />
    </div>
  );
}
