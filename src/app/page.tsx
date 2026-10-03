import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ProfileSelector } from "@/components/home/ProfileSelector";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section con Carrusel */}
      <HeroCarousel />

      {/* Sección Principal con Filtros y Cards Interactivas */}
      <ProfileSelector />
    </div>
  );
}
