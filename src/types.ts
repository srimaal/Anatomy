export type Language = 'en' | 'si' | 'ta';

export type EducationLevel = 'primary' | 'al' | 'medical';

export type OrganSystemId = 
  | 'fullbody'
  | 'circulatory'
  | 'respiratory'
  | 'nervous'
  | 'skeletal'
  | 'digestive'
  | 'urinary';

export interface LocalizedString {
  en: string;
  si: string;
  ta: string;
}

export interface OrganPart {
  id: string;
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
  systemId: OrganSystemId;
  level: EducationLevel;
  question: LocalizedString;
  clinicalScenario?: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation: LocalizedString;
  relatedPartId?: string;
}
