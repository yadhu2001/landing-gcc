export type FormType = 'counselling' | 'brochure' | 'syllabus';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  workExperience: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}