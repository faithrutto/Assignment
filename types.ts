
export enum HairType {
  DRY = 'Dry',
  OILY = 'Oily',
  COMBINATION = 'Combination',
  NORMAL = 'Normal',
  CURLY = 'Curly',
  COILY = 'Coily'
}

export interface RoutineEntry {
  hairType: HairType;
  recommendedRoutine: string;
  suggestedFrequency: string;
}

export interface ConsultationFormData {
  name: string;
  hairType: HairType;
  concern: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
