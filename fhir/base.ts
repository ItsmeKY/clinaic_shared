// FHIR Base Types

export interface Reference {
    reference: string;
    display?: string;
    type?: string;
    identifier?: any;
}

export interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}

export interface CodeableConcept {
    coding?: Coding[];
    text?: string;
}

export interface Period {
    start: string; // DateTime
    end?: string; // DateTime
}

export interface Age {
    value: number;
    comparator?: '<' | '<=' | '>=' | '>';
    unit?: string;
    system?: string;
    code?: string;
}

export interface Annotation {
    authorReference?: Reference;
    authorString?: string;
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

export interface Range {
    low?: Quantity;
    high?: Quantity;
}

// Common Standard Code Systems
export const COMMON_SYSTEMS = {
    SNOMED_CT: "http://snomed.info/sct",
    LOINC: "http://loinc.org",
    RXNORM: "http://www.nlm.nih.gov/research/umls/rxnorm",
    ICD_10: "http://hl7.org/fhir/sid/icd-10",
    CONTACT_POINT: "phone",
    GENDER: "http://hl7.org/fhir/administrative-gender"
} as const;

export type CommonSystem = typeof COMMON_SYSTEMS[keyof typeof COMMON_SYSTEMS];

export interface Dosage {
    sequence?: number;
    text?: string;
    patientInstruction?: string;
    timing?: {
        code?: CodeableConcept;
    };
    route?: CodeableConcept;
    method?: CodeableConcept;
    doseAndRate?: {
        type?: CodeableConcept;
        doseQuantity?: {
            value: number;
            unit: string;
            system?: string;
            code?: string;
        }
    }[];
}
