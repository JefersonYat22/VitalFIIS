import type { Metadata } from "next";
import { RendimientoClient } from "@/components/rendimiento/RendimientoClient";

export const metadata: Metadata = {
  title: "Rendimiento y Sueño: Sedentario vs Actividad Física | VitalFIIS",
  description:
    "Elige tu ritmo de vida universitario: consejos y micro-hacks para salir del sedentarismo sin culpa, o descubre el catálogo de actividades físicas con recomendaciones nutricionales y de sueño.",
};

export default function RendimientoPage() {
  return <RendimientoClient />;
}
