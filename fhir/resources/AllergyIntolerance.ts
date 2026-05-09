import type { Reference, CodeableConcept, Annotation, Period, Age, Range, Meta } from '../base';

// --- Systems & Value Sets ---

export const ALLERGY_INTOLERANCE_SYSTEMS = {
    CLINICAL_STATUS: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
    VERIFICATION_STATUS: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    TYPE: "http://hl7.org/fhir/allergy-intolerance-type",
    CATEGORY: "http://hl7.org/fhir/allergy-intolerance-category",
    CODE: "http://snomed.info/sct" // Taking SNOMED as default for substances
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

export const ALLERGY_TYPES = [
    { code: 'allergy', label: 'Allergy' },
    { code: 'intolerance', label: 'Intolerance' }
] as const;
export type AllergyType = typeof ALLERGY_TYPES[number]['code'];

export const ALLERGY_CATEGORIES = [
    { code: 'food', label: 'Food' },
    { code: 'medication', label: 'Medication' },
    { code: 'environment', label: 'Environment' },
    { code: 'biologic', label: 'Biologic' }
] as const;
export type AllergyCategory = typeof ALLERGY_CATEGORIES[number]['code'];

export const ALLERGY_REACTION_SEVERITIES = [
    { code: 'mild', label: 'Mild' },
    { code: 'moderate', label: 'Moderate' },
    { code: 'severe', label: 'Severe' }
] as const;
export type AllergyReactionSeverity = typeof ALLERGY_REACTION_SEVERITIES[number]['code'];

// --- Interface ---

export interface AllergyIntoleranceReaction {
    substance?: CodeableConcept;
    manifestation: CodeableConcept[];
    description?: string;
    onset?: string;
    severity?: AllergyReactionSeverity;
    exposureRoute?: CodeableConcept;
    note?: Annotation[];
}

export interface AllergyIntolerance {
    resourceType: 'AllergyIntolerance';
    meta?: Meta;
    id?: string;

    clinicalStatus?: CodeableConcept;
    verificationStatus?: CodeableConcept;

    type?: 'allergy' | 'intolerance';
    category?: ('food' | 'medication' | 'environment' | 'biologic')[];

    code?: CodeableConcept; // The substance/product

    patient: Reference;
    encounter?: Reference;

    onsetDateTime?: string;
    onsetAge?: Age;
    onsetPeriod?: Period;
    onsetRange?: Range;
    onsetString?: string;

    recordedDate?: string; // Date recorded
    recorder?: Reference; // Practitioner
    asserter?: Reference; // Patient or Practitioner

    lastOccurrence?: string;
    note?: Annotation[];

    reaction?: AllergyIntoleranceReaction[];
}
