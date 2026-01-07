import type { Reference, CodeableConcept, Period, Annotation } from '../base';

// --- Systems & Value Sets ---

export const PROCEDURE_SYSTEMS = {
    STATUS: "http://hl7.org/fhir/event-status",
    CODE: "http://snomed.info/sct" // Common for procedures
};

export const PROCEDURE_STATUSES = [
    { code: 'preparation', label: 'Preparation' },
    { code: 'in-progress', label: 'In Progress' },
    { code: 'not-done', label: 'Not Done' },
    { code: 'on-hold', label: 'On Hold' },
    { code: 'stopped', label: 'Stopped' },
    { code: 'completed', label: 'Completed' },
    { code: 'entered-in-error', label: 'Entered in Error' },
    { code: 'unknown', label: 'Unknown' },
];

// --- Interface ---

/**
 * FHIR Procedure Resource
 * https://www.hl7.org/fhir/procedure.html
 */
export interface Procedure {
    resourceType: 'Procedure';
    id?: string;

    // Identifiers & Status
    status: 'preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown'; // Required
    statusReason?: CodeableConcept;

    // Categorization
    code?: CodeableConcept; // Specific procedure code

    // Subjects
    subject: Reference; // Required (Patient)
    encounter?: Reference; // Encounter context

    // Timing
    performedDateTime?: string;
    performedPeriod?: Period;

    // Participants (simplified)
    recorder?: Reference;
    asserter?: Reference;
    performer?: {
        function?: CodeableConcept;
        actor: Reference;
        onBehalfOf?: Reference;
    }[];

    // Whys & Wheres
    reasonCode?: CodeableConcept[];
    bodySite?: CodeableConcept[];
    outcome?: CodeableConcept;

    note?: Annotation[];
}
