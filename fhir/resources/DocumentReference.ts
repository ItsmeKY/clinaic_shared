import type { Reference, CodeableConcept, Meta } from '../base';

export interface DocumentAttachment {
    contentType?: string;
    data?: string; // base64 encoded content
    title?: string;
    creation?: string;
}

export interface DocumentReferenceContent {
    attachment: DocumentAttachment;
}

export interface DocumentReferenceContext {
    encounter?: Reference[];
}

export type DocumentReferenceStatus = 'current' | 'superseded' | 'entered-in-error';

export interface DocumentReference {
    resourceType: 'DocumentReference';
    id?: string;
    meta?: Meta;
    status: DocumentReferenceStatus;
    subject: Reference;
    date?: string;
    content: DocumentReferenceContent[];
    context?: DocumentReferenceContext;
}

export const DOCUMENT_TYPES = [
    { code: '11488-4', display: 'Consultation note', system: 'http://loinc.org' },
    { code: '34117-2', display: 'History & physical note', system: 'http://loinc.org' },
    { code: '18842-5', display: 'Discharge summary', system: 'http://loinc.org' },
    { code: '11506-3', display: 'Progress note', system: 'http://loinc.org' },
    { code: '57133-1', display: 'Referral note', system: 'http://loinc.org' },
    { code: '34109-9', display: 'Evaluation note', system: 'http://loinc.org' },
    { code: '47039-3', display: 'Inpatient admission history', system: 'http://loinc.org' },
    { code: '28636-9', display: 'Initial evaluation note', system: 'http://loinc.org' },
] as const;
