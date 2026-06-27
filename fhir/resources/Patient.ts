import type { Meta } from '../base';

export const PATIENT_GENDERS = [
    { code: 'male', label: 'Male' },
    { code: 'female', label: 'Female' },
    { code: 'other', label: 'Other' },
    { code: 'unknown', label: 'Unknown' },
] as const;
export type PatientGender = typeof PATIENT_GENDERS[number]['code'];

export interface Patient {
    resourceType: 'Patient';
    meta?: Meta;
    id?: string;
    active?: boolean;
    name?: {
        use?: 'official';
        family?: string;
        given?: string[];
    }[];
    telecom?: {
        system?: 'phone';
        value?: string;
        use?: 'mobile';
    }[];
    gender?: PatientGender;
    birthDate?: string;
}
