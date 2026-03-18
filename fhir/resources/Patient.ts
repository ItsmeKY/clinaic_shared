export const PATIENT_GENDERS = [
    { code: 'male', label: 'Male' },
    { code: 'female', label: 'Female' },
    { code: 'other', label: 'Other' },
    { code: 'unknown', label: 'Unknown' },
] as const;
export type PatientGender = typeof PATIENT_GENDERS[number]['code'];

export const PATIENT_NAME_USES = [
    { code: 'official', label: 'Official' },
    { code: 'usual', label: 'Usual' },
    { code: 'nickname', label: 'Nickname' }
] as const;
export type PatientNameUse = typeof PATIENT_NAME_USES[number]['code'];

export const PATIENT_TELECOM_SYSTEMS = [
    { code: 'phone', label: 'Phone' },
    { code: 'email', label: 'Email' }
] as const;
export type PatientTelecomSystem = typeof PATIENT_TELECOM_SYSTEMS[number]['code'];

export const PATIENT_TELECOM_USES = [
    { code: 'home', label: 'Home' },
    { code: 'work', label: 'Work' },
    { code: 'mobile', label: 'Mobile' }
] as const;
export type PatientTelecomUse = typeof PATIENT_TELECOM_USES[number]['code'];

/**
 * FHIR Patient Resource (Minimal definition)
 */
export interface Patient {
    resourceType: 'Patient';
    id?: string;
    name?: {
        use?: PatientNameUse;
        text?: string;
        family?: string;
        given?: string[];
        prefix?: string[];
        suffix?: string[];
    }[];
    telecom?: {
        system?: PatientTelecomSystem;
        value?: string;
        use?: PatientTelecomUse;
    }[];
    gender?: PatientGender;
    birthDate?: string;
    address?: {
        line?: string[];
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
    }[];
}
