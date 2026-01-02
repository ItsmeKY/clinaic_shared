import { Reference, Period, Coding } from '../base';

// --- Systems & Value Sets ---

export const ENCOUNTER_SYSTEMS = {
    ACT_CODE: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
};

export const ENCOUNTER_CLASSES = [
    { code: 'AMB', display: 'ambulatory', label: 'Ambulatory' },
    { code: 'IMP', display: 'inpatient encounter', label: 'Inpatient' },
    { code: 'EMER', display: 'emergency', label: 'Emergency' },
    { code: 'VR', display: 'virtual', label: 'Virtual' },
    { code: 'HH', display: 'home health', label: 'Home Health' },
];

export const ENCOUNTER_STATUSES = [
    { value: 'planned', label: 'Planned' },
    { value: 'arrived', label: 'Arrived' },
    { value: 'triaged', label: 'Triaged' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'onleave', label: 'On Leave' },
    { value: 'finished', label: 'Finished' },
    { value: 'cancelled', label: 'Cancelled' },
];

// --- Interface ---

/**
 * FHIR Encounter Resource
 */
export interface Encounter {
    resourceType: 'Encounter';
    id?: string;

    status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled';

    class: Coding; // Required (ActCode)
    subject: Reference; // Required
    period: Period; // Required

    // Additional fields might be added here if needed, but keeping it strict as requested.
}
