import type { Reference, CodeableConcept, Annotation, Meta } from '../base';

export const CONDITION_SYSTEMS = {
    CLINICAL: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    VERIFICATION: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    SEVERITY: "http://snomed.info/sct"
} as const;

export const CONDITION_CLINICAL_STATUSES = [
    { code: 'active', label: 'Active' },
    { code: 'recurrence', label: 'Recurrence' },
    { code: 'relapse', label: 'Relapse' },
    { code: 'inactive', label: 'Inactive' },
    { code: 'remission', label: 'Remission' },
    { code: 'resolved', label: 'Resolved' },
] as const;
export type ConditionClinicalStatus = typeof CONDITION_CLINICAL_STATUSES[number]['code'];

export const CONDITION_VERIFICATION_STATUSES = [
    { code: 'unconfirmed', label: 'Unconfirmed' },
    { code: 'provisional', label: 'Provisional' },
    { code: 'differential', label: 'Differential' },
    { code: 'confirmed', label: 'Confirmed' },
    { code: 'refuted', label: 'Refuted' },
    { code: 'entered-in-error', label: 'Entered in Error' },
] as const;
export type ConditionVerificationStatus = typeof CONDITION_VERIFICATION_STATUSES[number]['code'];

export const CONDITION_SEVERITY_STATUSES = [
    { code: '255604002', label: 'Mild', display: 'Mild' },
    { code: '6736007', label: 'Moderate', display: 'Moderate' },
    { code: '24484000', label: 'Severe', display: 'Severe' },
] as const;
export type ConditionSeverityStatus = typeof CONDITION_SEVERITY_STATUSES[number]['code'];

export interface Condition {
    resourceType: 'Condition';
    meta?: Meta;
    id?: string;
    clinicalStatus: CodeableConcept;
    verificationStatus: CodeableConcept;
    severity?: CodeableConcept;
    code: CodeableConcept;
    subject: Reference;
    encounter?: Reference;
    onsetDateTime?: string;
    note?: Annotation[];
}
