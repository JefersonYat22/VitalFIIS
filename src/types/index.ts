import { ReactNode } from "react";

export interface SlideData {
  id: number;
  tag: string;
  title: string;
  description: string;
  bgGradient: string;
  badgeBg: string;
  accentIcon: string;
  image?: string;
  imageAlt?: string;
}

export interface Expert {
  name: string;
  field: string;
  initials: string;
  url?: string;
}

export interface NarrativeSection {
  content: string | ReactNode;
  buttonText: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageCredit?: string;
  imageCreditUrl?: string;
}

export type CategoriaPlato =
  | "comedor"
  | "al-paso"
  | "desayuno"
  | "tupper";

export type ObjetivoPlato =
  | "anti-sueno"
  | "alta-proteina"
  | "energia-sostenida";

export type RiesgoSomnolencia = "bajo" | "moderado" | "alto";

export interface MacrosPlato {
  proteinas: number; // en gramos
  carbohidratos: number; // en gramos
  grasas: number; // en gramos
  fibra: number; // en gramos
}

export interface VitalHack {
  titulo: string;
  accion: string;
  explicacionCientifica: string;
  ordenIngestaRecomendado?: string[];
}

export interface PlatoNutricional {
  id: string;
  nombre: string;
  categoria: CategoriaPlato;
  categoriaLabel: string;
  objetivos: ObjetivoPlato[];
  porcionGramos: number;
  calorias: number;
  macros: MacrosPlato;
  riesgoSomnolencia: RiesgoSomnolencia;
  riesgoSomnolenciaDetalle: string;
  horasSaciedad: string;
  impactoGlucemico: "Plano y sostenido" | "Moderado" | "Pico alto y abrupto";
  descripcion: string;
  ingredientesPrincipales: string[];
  porQueDaSueno: string;
  vitalHack: VitalHack;
  mejorMomento: string;
  evitarEn: string;
  precioPromedioSol?: string;
  emoji: string;
  imagen?: string;
  imagenAlt?: string;
  imagenIlustrativa?: boolean;
  resumenSueno: string;
  datosEstimados?: boolean;
  codigoTPCA?: string;
  fuenteDato: "tpca-s" | "calculado-ingredientes" | "estimado";
  rangoKcal?: [number, number];
}
