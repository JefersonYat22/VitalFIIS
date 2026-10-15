import type { Metadata } from "next";
import { HeroSection } from "@/components/hacks-energia/HeroSection";
import { HacksGrid } from "@/components/hacks-energia/HacksGrid";
import { GlucoseSimulator } from "@/components/hacks-energia/GlucoseSimulator";
import { HabitsGuide } from "@/components/hacks-energia/HabitsGuide";

export const metadata: Metadata = {
  title: "Hacks de Energía para el Campus | VitalFIIS",
  description:
    "6 estrategias respaldadas por la ciencia para eliminar la somnolencia post-almuerzo, estabilizar tu glucosa y mantener el enfoque mental durante todo el día.",
};

export default function HacksEnergiaPage() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <HacksGrid />
      <GlucoseSimulator />
      <HabitsGuide />
    </div>
  );
}
