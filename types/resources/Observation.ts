import type { CodeableConcept, Reference, Annotation } from '../base';

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
    status: 'final';
    category: CodeableConcept[];
    code: CodeableConcept;
    subject: Reference;
    encounter: Reference;
    effectiveDateTime?: string;


    // value[x]
    // value[x]
    valueString?: string;

    referenceRange?: ReferenceRange[];
    note?: Annotation[];
}

export const OBSERVATION_Categories = [
    { code: 'vital-signs', display: 'Vital Signs' },
    { code: 'laboratory', display: 'Laboratory' },
    { code: 'exam', display: 'Exam' },
    { code: 'social-history', display: 'Social History' },

    // Extended
    { code: 'symptom', display: 'Symptom' },
    { code: 'negative-symptom', display: 'Negative Symptom' },
    { code: 'chief-complaint', display: 'Chief Complaint' }
];

export const OBSERVATION_SYSTEMS = {
    // Using LOINC for observations is standard, but user uses SNOMED often. 
    // I'll stick to a common one or just label it generic.
    CODE: 'http://snomed.info/sct',
    CATEGORY: 'http://hl7.org/fhir/observation-category' // Base, extended in app logic
};
