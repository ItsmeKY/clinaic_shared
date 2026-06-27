import type { Reference, CodeableConcept, Annotation, Meta } from '../base';

export const ALLERGY_INTOLERANCE_SYSTEMS = {
    CLINICAL_STATUS: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
    VERIFICATION_STATUS: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    CODE: "http://snomed.info/sct"
} as const;

export const ALLERGY_CLINICAL_STATUSES = [
    { code: 'active', label: 'Active' },
    { code: 'inactive', label: 'Inactive' },
    { code: 'resolved', label: 'Resolved' }
] as const;
export type AllergyClinicalStatus = typeof ALLERGY_CLINICAL_STATUSES[number]['code'];

export const ALLERGY_VERIFICATION_STATUSES = [
    { code: 'unconfirmed', label: 'Unconfirmed' },
    { code: 'confirmed', label: 'Confirmed' },
    { code: 'refuted', label: 'Refuted' },
    { code: 'entered-in-error', label: 'Entered in Error' }
] as const;
export type AllergyVerificationStatus = typeof ALLERGY_VERIFICATION_STATUSES[number]['code'];

export const ALLERGY_REACTION_SEVERITIES = [
    { code: 'mild', label: 'Mild' },
    { code: 'moderate', label: 'Moderate' },
    { code: 'severe', label: 'Severe' }
] as const;
export type AllergyReactionSeverity = typeof ALLERGY_REACTION_SEVERITIES[number]['code'];

export interface AllergyIntoleranceReaction {
    manifestation: CodeableConcept[];
    severity?: AllergyReactionSeverity;
}

export interface AllergyIntolerance {
    resourceType: 'AllergyIntolerance';
    meta?: Meta;
    id?: string;
    clinicalStatus?: CodeableConcept;
    verificationStatus?: CodeableConcept;
    code?: CodeableConcept;
    patient: Reference;
    encounter?: Reference;
    onsetDateTime?: string;
    recordedDate?: string;
    note?: Annotation[];
    reaction?: AllergyIntoleranceReaction[];
}
