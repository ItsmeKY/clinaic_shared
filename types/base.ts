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

// Common Standard Code Systems
export const COMMON_SYSTEMS = {
    SNOMED_CT: "http://snomed.info/sct",
    LOINC: "http://loinc.org",
    RXNORM: "http://www.nlm.nih.gov/research/umls/rxnorm",
    CONTACT_POINT: "phone"
};
