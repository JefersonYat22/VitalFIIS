export type LifestyleMode = "sedentario" | "activo";

export type ActivityCategory = "todos" | "fuerza" | "cardio" | "equipo" | "movilidad";

export interface PhysicalActivityItem {
  id: string;
  title: string;
  category: ActivityCategory;
  categoryLabel: string;
  tagline: string;
  icon: string;
  intensity: "Baja" | "Moderada" | "Alta" | "Adaptable";
  duration: string;
  location: string;
  cost: "Gratuito" | "Bajo costo" | "Inversión moderada";
  cognitiveBenefit: string;
  physicalBenefit: string;
  nutritionTip: string;
  studentTip: string;
}

export interface SedentaryMicroHack {
  id: string;
  title: string;
  subtitle: string;
  frequency: string;
  benefit: string;
  instructions: string[];
  scientificWhy: string;
  icon: string;
  badgeText: string;
}
