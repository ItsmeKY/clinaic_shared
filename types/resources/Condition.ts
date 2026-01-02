import { Reference, CodeableConcept, Age, Annotation } from '../base';

// --- Systems & Value Sets ---

export const CONDITION_SYSTEMS = {
    CLINICAL: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    VERIFICATION: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    SEVERITY: "http://snomed.info/sct"
};

export const CONDITION_CLINICAL_STATUSES = [
    { code: 'active', label: 'Active' },
    { code: 'recurrence', label: 'Recurrence' },
    { code: 'relapse', label: 'Relapse' },
    { code: 'inactive', label: 'Inactive' },
    { code: 'remission', label: 'Remission' },
    { code: 'resolved', label: 'Resolved' },
];

export const CONDITION_VERIFICATION_STATUSES = [
    { code: 'unconfirmed', label: 'Unconfirmed' },
    { code: 'provisional', label: 'Provisional' },
    { code: 'differential', label: 'Differential' },
    { code: 'confirmed', label: 'Confirmed' },
    { code: 'refuted', label: 'Refuted' },
    { code: 'entered-in-error', label: 'Entered in Error' },
];

export const CONDITION_SEVERITY_STATUSES = [
    { code: '255604002', label: 'Mild', display: 'Mild' },
    { code: '6736007', label: 'Moderate', display: 'Moderate' },
    { code: '24484000', label: 'Severe', display: 'Severe' },
];

// --- Interface ---

/**
 * FHIR Condition Resource
 */
export interface Condition {
    resourceType: 'Condition';
    id?: string;

    // Identifiers & Status
    clinicalStatus: CodeableConcept; // Required
    verificationStatus: CodeableConcept; // Required

    // Categorization
    severity?: CodeableConcept;
    code: CodeableConcept; // Required

    // Subjects
    subject: Reference; // Required
    encounter: Reference; // Required

    // Dates
    onsetDateTime?: string;
    onsetAge?: Age;
    abatementDateTime?: string;
    abatementAge?: Age;
    recordedDate?: string;

    // Additional
    recorder?: Reference;
    note?: Annotation[];
}
