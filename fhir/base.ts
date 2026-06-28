// FHIR Base Types

export interface Reference {
    reference: string;
    display?: string;
    type?: string;
}

export interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
}

export interface CodeableConcept {
    coding?: Coding[];
    text?: string;
}

export interface Period {
    start: string;
    end?: string;
}

export interface Age {
    value: number;
}

export interface Annotation {
    time?: string;
    text: string;
}

export interface Quantity {
    value?: number;
    comparator?: '<' | '<=' | '>=' | '>';
    unit?: string;
    system?: string;
    code?: string;
}

export interface Meta {
    security?: Coding[];
    lastUpdated?: string;
}

// HL7 confidentiality system — used for patient-PIN-gated sensitive resources
export const CONFIDENTIALITY_SYSTEM = 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality';

/** Returns a meta object that marks a FHIR resource as Very Restricted (requires patient PIN). */
export const buildSensitiveMeta = (): Meta => ({
    security: [{ system: CONFIDENTIALITY_SYSTEM, code: 'V', display: 'Very Restricted' }],
});

/** Returns true if a FHIR resource has a V or R confidentiality security label. */
export const isSensitiveResource = (resource: { meta?: Meta }): boolean => {
    return (resource.meta?.security ?? []).some(
        (c) => c.system === CONFIDENTIALITY_SYSTEM && (c.code === 'V' || c.code === 'R'),
    );
};

export const COMMON_SYSTEMS = {
    SNOMED_CT: "http://snomed.info/sct",
    LOINC: "http://loinc.org",
    RXNORM: "http://www.nlm.nih.gov/research/umls/rxnorm",
    ICD_10: "http://hl7.org/fhir/sid/icd-10",
    GENDER: "http://hl7.org/fhir/administrative-gender"
} as const;

export type CommonSystem = typeof COMMON_SYSTEMS[keyof typeof COMMON_SYSTEMS];

export interface Dosage {
    text?: string;
}
