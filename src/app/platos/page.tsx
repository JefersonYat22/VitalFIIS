import type { Metadata } from "next";
import { PlatosView } from "@/components/platos/PlatosView";

export const metadata: Metadata = {
  title: "Radiografía Nutricional de Platos Universitarios | VitalFIIS",
  description:
    "Catálogo nutricional empático y datos crudos de los platos más comunes de la vida universitaria peruana. Evita la somnolencia en clase y optimiza tu energía cognitiva.",
  keywords: [
    "nutricion universitaria",
    "platos peruanos",
    "coma alimenticio",
    "somnolencia postprandial",
    "comedor universitario",
    "tupper universitario",
    "vitalfiis",
  ],
};

export default function PlatosPage() {
  return <PlatosView />;
}
