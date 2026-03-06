import type { Reference, CodeableConcept, Annotation } from '../base';

export interface FamilyMemberHistoryCondition {
    code: CodeableConcept;
    outcome?: CodeableConcept;
    contributedToDeath?: boolean;
    onsetAge?: { value: number; unit: string; system: string; code: string };
    note?: Annotation[];
}

export interface FamilyMemberHistory {
    resourceType: 'FamilyMemberHistory';
    id?: string;
    status: FamilyHistoryStatus;
    patient: Reference;
    date?: string;
    name?: string;
    relationship: CodeableConcept;
    sex?: CodeableConcept;
    bornDate?: string;
    ageAge?: { value: number; unit: string; system: string; code: string };
    deceasedBoolean?: boolean;
    deceasedDate?: string;
    reasonCode?: CodeableConcept[];
    note?: Annotation[];
    condition?: FamilyMemberHistoryCondition[];
}

export const FAMILY_HISTORY_STATUSES = [
    { code: 'partial', label: 'Partial' },
    { code: 'completed', label: 'Completed' },
    { code: 'entered-in-error', label: 'Entered in Error' },
    { code: 'health-unknown', label: 'Health Unknown' }
] as const;
export type FamilyHistoryStatus = typeof FAMILY_HISTORY_STATUSES[number]['code'];

export const RELATIONSHIP_CODES = [
    { code: 'FTH', display: 'father', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'MTH', display: 'mother', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'BRO', display: 'brother', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'SIS', display: 'sister', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'GRFTH', display: 'grandfather', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'GRMTH', display: 'grandmother', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'UNCLE', display: 'uncle', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' },
    { code: 'AUNT', display: 'aunt', system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode' }
] as const;
export type RelationshipCode = typeof RELATIONSHIP_CODES[number]['code'];
