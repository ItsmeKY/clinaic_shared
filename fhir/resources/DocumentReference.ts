import type { Reference, Meta } from '../base';

export interface DocumentAttachment {
    contentType?: string;
    data?: string; // base64 encoded
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
