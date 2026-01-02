/**
 * FHIR Patient Resource (Minimal definition)
 */
export interface Patient {
    resourceType: 'Patient';
    id?: string;
    name?: {
        use?: 'official' | 'usual' | 'nickname';
        text?: string;
        family?: string;
        given?: string[];
        prefix?: string[];
        suffix?: string[];
    }[];
    telecom?: {
        system?: 'phone' | 'email';
        value?: string;
        use?: 'home' | 'work' | 'mobile';
    }[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: string;
    address?: {
        line?: string[];
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
    }[];
}
