export type Language = 'en' | 'si' | 'ta';

export type EducationLevel = 'primary' | 'al' | 'medical';

export type SpeciesId = 'human' | 'frog' | 'dog' | 'cat' | 'bird';

export type OrganSystemId = 
  | 'fullbody'
  | 'circulatory'
  | 'respiratory'
  | 'nervous'
  | 'skeletal'
  | 'digestive'
  | 'urinary'
  | 'muscular'
  | 'endocrine'
  | 'lymphatic'
  | 'integumentary'
  | 'reproductive';

export interface LocalizedString {
  en: string;
  si: string;
  ta: string;
}

export interface SpeciesInfo {
  id: SpeciesId;
  name: LocalizedString;
  commonName: LocalizedString;
  scientificName: string;
  taxonomicClass: LocalizedString;
  habitat: LocalizedString;
  iconName: string;
  accentColor: string;
  tagline: LocalizedString;
  overview: {
    primary: LocalizedString;
    al: LocalizedString;
    medical: LocalizedString;
  };
  keyAdaptations: LocalizedString[];
  comparativeHighlights: {
    feature: LocalizedString;
    human: LocalizedString;
    animal: LocalizedString;
  }[];
  statistics: {
    label: LocalizedString;
    value: string;
  }[];
}

export interface OrganPart {
  id: string;
  speciesId?: SpeciesId;
  name: LocalizedString;
  latinName?: string;
  systemId: OrganSystemId;
  category: string;
  position3D: [number, number, number];
  scale3D?: [number, number, number];
  color: string;
  description: {
    primary: LocalizedString;
    al: LocalizedString;
    medical: LocalizedString;
  };
  funFact?: LocalizedString;
  clinicalNotes?: LocalizedString;
  neurovascular?: {
    arterial?: string;
    venous?: string;
    innervation?: string;
    lymphatic?: string;
  };
  keyFunctions: {
    primary: LocalizedString[];
    al: LocalizedString[];
    medical: LocalizedString[];
  };
}

export interface SystemInfo {
  id: OrganSystemId;
  name: LocalizedString;
  tagline: LocalizedString;
  iconName: string;
  accentColor: string;
  modelType: string;
  overview: {
    primary: LocalizedString;
    al: LocalizedString;
    medical: LocalizedString;
  };
  statistics: {
    label: LocalizedString;
    value: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  speciesId?: SpeciesId;
  systemId: OrganSystemId;
  level: EducationLevel;
  question: LocalizedString;
  clinicalScenario?: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation: LocalizedString;
  relatedPartId?: string;
}
