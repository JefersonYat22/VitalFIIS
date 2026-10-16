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
