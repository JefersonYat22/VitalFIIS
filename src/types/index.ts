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
