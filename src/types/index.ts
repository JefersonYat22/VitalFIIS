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
  href?: string;
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

/* ───────────── Nutrición y Platos ───────────── */
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

export interface IngredientePeso {
  ingrediente: string;
  gramos: number;
  alimentoTPCA?: string;
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
  resumenSueno: string;
  datosEstimados?: boolean;
  codigoTPCA?: string;
  nombreTPCA?: string;
  fuenteDato: "tpca-s" | "estimado-referencia-tpca" | "calculado-ingredientes" | "estimado";
  rangoKcal?: [number, number];
  nFilasTPCA?: number;
  notaTPCA?: string;
  ingredientesPesos?: IngredientePeso[];
}

/* ───────────── Página "Por Contexto" ───────────── */

export type StudentContextId = "cerca" | "lejos" | "foraneo";

export interface MealOption {
  name: string;
  description: string;
  /** Precio referencial en soles */
  price: string;
  where: string;
  prepTime?: string;
}

export interface DayMoment {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContextAccent {
  solid: string;
  soft: string;
  text: string;
  border: string;
  ring: string;
}

export interface StudentContext {
  id: StudentContextId;
  /** Respuesta a la pregunta "¿Dónde vives respecto a la U?" */
  answer: string;
  name: string;
  emoji: string;
  commute: string;
  summary: string;
  reality: string;
  stats: { label: string; value: string }[];
  day: DayMoment[];
  breakfasts: MealOption[];
  lunches: MealOption[];
  snacks: MealOption[];
  pitfalls: string[];
  hacks: string[];
  accent: ContextAccent;
}

export interface EatingSpot {
  id: string;
  name: string;
  emoji: string;
  description: string;
  price: string;
  pros: string[];
  cons: string[];
  tip: string;
  bestFor: StudentContextId[];
}

