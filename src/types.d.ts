import { CSSProperties, React } from "react";

export interface CatImage {
  id: string;
  width: number;
  height: number;
  url: string;
  adoptionStatus?: string;
  breeds: Breed[];
}

export interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  description: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
}

export type ImageResponse = CatImage[];

export type BreedResponse = Breed[];

export type CategorizedCats = {
  [key: string]: CatImage[];
};

export interface AdoptionQueue {
  id: string;
  status: "waiting" | "approved" | "";
}

export interface WorkHistory extends Pick<Category, "category"> {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  date: string;
}

export interface ThemeConfig {
  [key: string]: {
    style: CSSProperties;
    iconCorrection?: CSSProperties;
    icon?: React.FC;
  };
}

export interface ProjectDetails extends Pick<Category, "category"> {
  technologies: string[];
  title: string;
  subheader: string;
  description: string;
}

interface Category {
  category:
    | "react"
    | "ruby"
    | "file"
    | "redux"
    | "watir"
    | "wdio"
    | "playwright"
    | "cypress";
}
