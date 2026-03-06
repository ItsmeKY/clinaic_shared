import type { CodeableConcept, Reference, Annotation, Quantity } from '../base';

export interface ReferenceRange {
    low?: { value: number; unit?: string; system?: string; code?: string };
    high?: { value: number; unit?: string; system?: string; code?: string };
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: { low?: number; high?: number };
    text?: string;
}

export interface Observation {
    resourceType: 'Observation';
    id?: string;
    status: ObservationStatus;
    category: CodeableConcept[];
    code: CodeableConcept;
    subject: Reference;
    encounter: Reference;
    effectiveDateTime?: string;


    // value[x] - FHIR supports multiple value types
    valueString?: string;
    valueQuantity?: Quantity;

    referenceRange?: ReferenceRange[];
    note?: Annotation[];
}

export const OBSERVATION_STATUSES = [
    { value: 'registered', label: 'Registered' },
    { value: 'preliminary', label: 'Preliminary' },
    { value: 'final', label: 'Final' },
    { value: 'amended', label: 'Amended' },
    { value: 'corrected', label: 'Corrected' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'entered-in-error', label: 'Entered in Error' },
    { value: 'unknown', label: 'Unknown' },
] as const;
export type ObservationStatus = typeof OBSERVATION_STATUSES[number]['value'];

export const OBSERVATION_Categories = [
    { code: 'vital-signs', display: 'Vital Signs' },
    { code: 'laboratory', display: 'Laboratory' },
    { code: 'exam', display: 'Exam' },
    { code: 'social-history', display: 'Social History' },

    // Extended
    { code: 'symptom', display: 'Symptom' },
    { code: 'negative-symptom', display: 'Negative Symptom' },
    { code: 'chief-complaint', display: 'Chief Complaint' }
] as const;
export type ObservationCategoryCode = typeof OBSERVATION_Categories[number]['code'];

export const OBSERVATION_SYSTEMS = {
    // Using LOINC for observations is standard, but user uses SNOMED often. 
    // I'll stick to a common one or just label it generic.
    CODE: 'http://snomed.info/sct',
    CATEGORY: 'http://hl7.org/fhir/observation-category', // Base, extended in app logic
    UNIT: 'http://unitsofmeasure.org' // We are using ucum units but the system name is arbitary, we set it
} as const;

// Common UCUM units for Observations
export const COMMON_UCUM_UNITS = [
    { label: 'mg/dL', code: 'mg/dL' },
    { label: 'mmol/L', code: 'mmol/L' },
    { label: 'mmHg', code: 'mm[Hg]' },
    { label: 'bpm', code: '/min' },
    { label: '%', code: '%' },
    { label: 'kg', code: 'kg' },
    { label: 'lbs', code: '[lb_av]' },
    { label: 'cm', code: 'cm' },
    { label: '°C', code: 'Cel' },
    { label: '°F', code: '[degF]' },
    { label: 'g/dL', code: 'g/dL' },
] as const;
export type CommonUcumUnit = typeof COMMON_UCUM_UNITS[number]['code'];
