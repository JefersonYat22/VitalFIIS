import type { Metadata } from "next";
import { ContextHero } from "@/components/contexto/ContextHero";
import { ContextExplorer } from "@/components/contexto/ContextExplorer";
import { PlateRule } from "@/components/contexto/PlateRule";

export const metadata: Metadata = {
  title: "Soluciones por Contexto | VitalFIIS",
  description:
    "¿Vives cerca, lejos o eres foráneo? Descubre qué desayunar, qué almorzar y dónde comer en la UNI según tu realidad universitaria.",
};

export default function ContextoPage() {
  return (
    <div className="w-full flex flex-col bg-[#FAF8F5]">
      <ContextHero />
      <ContextExplorer />
      <PlateRule />
    </div>
  );
}
