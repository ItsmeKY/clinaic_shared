import type { Reference, CodeableConcept, Coding, Dosage } from '../base';

// --- Systems & Value Sets ---

export const MEDICATION_REQUEST_SYSTEMS = {
    STATUS: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    INTENT: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
    PRIORITY: "http://hl7.org/fhir/CodeSystem/request-priority",
    MEDICATION: "http://www.nlm.nih.gov/research/umls/rxnorm"
} as const;

export const MEDICATION_REQUEST_STATUSES = [
    { value: 'active', label: 'Active' },
    { value: 'on-hold', label: 'On Hold' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'completed', label: 'Completed' },
    { value: 'entered-in-error', label: 'Entered in Error' },
    { value: 'stopped', label: 'Stopped' },
    { value: 'draft', label: 'Draft' },
    { value: 'unknown', label: 'Unknown' },
] as const;
export type MedicationRequestStatus = typeof MEDICATION_REQUEST_STATUSES[number]['value'];

export const MEDICATION_REQUEST_INTENTS = [
    { value: 'proposal', label: 'Proposal' },
    { value: 'plan', label: 'Plan' },
    { value: 'order', label: 'Order' },
    { value: 'original-order', label: 'Original Order' },
    { value: 'reflex-order', label: 'Reflex Order' },
    { value: 'filler-order', label: 'Filler Order' },
    { value: 'instance-order', label: 'Instance Order' },
    { value: 'option', label: 'Option' },
] as const;
export type MedicationRequestIntent = typeof MEDICATION_REQUEST_INTENTS[number]['value'];

export const MEDICATION_REQUEST_PRIORITIES = [
    { value: 'routine', label: 'Routine' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'asap', label: 'ASAP' },
    { value: 'stat', label: 'STAT' },
] as const;
export type MedicationRequestPriority = typeof MEDICATION_REQUEST_PRIORITIES[number]['value'];

// --- Interface ---

/**
 * FHIR MedicationRequest Resource
 */
export interface MedicationRequest {
    resourceType: 'MedicationRequest';
    id?: string;

    status: MedicationRequestStatus;
    intent: MedicationRequestIntent;
    priority?: MedicationRequestPriority;

    // The medication being requested
    medicationCodeableConcept: CodeableConcept; // Required if medicationReference is not used

    subject: Reference; // Required (Patient)
    encounter?: Reference; // Optional (Encounter context)

    authoredOn?: string; // DateTime
    requester?: Reference; // Practitioner

    // Instructions
    dosageInstruction?: Dosage[];

    // Reasons
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[]; // Condition or Observation that triggered this request

    note?: { text: string }[];
}
