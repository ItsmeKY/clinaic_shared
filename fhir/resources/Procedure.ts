import type { Reference, CodeableConcept, Annotation, Meta } from '../base';

export const PROCEDURE_SYSTEMS = {
    STATUS: "http://hl7.org/fhir/event-status",
    CODE: "http://snomed.info/sct"
} as const;

export const PROCEDURE_STATUSES = [
    { code: 'preparation', label: 'Preparation' },
    { code: 'in-progress', label: 'In Progress' },
    { code: 'not-done', label: 'Not Done' },
    { code: 'on-hold', label: 'On Hold' },
    { code: 'stopped', label: 'Stopped' },
    { code: 'completed', label: 'Completed' },
    { code: 'entered-in-error', label: 'Entered in Error' },
    { code: 'unknown', label: 'Unknown' },
] as const;
export type ProcedureStatus = typeof PROCEDURE_STATUSES[number]['code'];

export interface Procedure {
    resourceType: 'Procedure';
    meta?: Meta;
    id?: string;
    status: ProcedureStatus;
    code?: CodeableConcept;
    subject: Reference;
    encounter?: Reference;
    performedDateTime?: string;
    note?: Annotation[];
}
