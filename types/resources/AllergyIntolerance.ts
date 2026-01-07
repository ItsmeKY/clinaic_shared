import type { Reference, CodeableConcept, Annotation, Period, Age } from '../base';

// --- Systems & Value Sets ---

export const ALLERGY_INTOLERANCE_SYSTEMS = {
    CLINICAL_STATUS: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
    VERIFICATION_STATUS: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    TYPE: "http://hl7.org/fhir/allergy-intolerance-type",
    CATEGORY: "http://hl7.org/fhir/allergy-intolerance-category",
    CODE: "http://snomed.info/sct" // Taking SNOMED as default for substances
};

export const ALLERGY_CLINICAL_STATUSES = [
    { code: 'active', label: 'Active' },
    { code: 'inactive', label: 'Inactive' },
    { code: 'resolved', label: 'Resolved' }
];

export const ALLERGY_VERIFICATION_STATUSES = [
    { code: 'unconfirmed', label: 'Unconfirmed' },
    { code: 'confirmed', label: 'Confirmed' },
    { code: 'refuted', label: 'Refuted' },
    { code: 'entered-in-error', label: 'Entered in Error' }
];

export const ALLERGY_TYPES = [
    { code: 'allergy', label: 'Allergy' },
    { code: 'intolerance', label: 'Intolerance' }
];

export const ALLERGY_CATEGORIES = [
    { code: 'food', label: 'Food' },
    { code: 'medication', label: 'Medication' },
    { code: 'environment', label: 'Environment' },
    { code: 'biologic', label: 'Biologic' }
];

// --- Interface ---

export interface AllergyIntoleranceReaction {
    substance?: CodeableConcept;
    manifestation: CodeableConcept[];
    description?: string;
    onset?: string;
    severity?: 'mild' | 'moderate' | 'severe';
    exposureRoute?: CodeableConcept;
    note?: Annotation[];
}

export interface AllergyIntolerance {
    resourceType: 'AllergyIntolerance';
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
