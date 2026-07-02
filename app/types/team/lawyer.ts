export interface Highlight {
    year: string;
    text: string;
}

export interface LawyerVideo {
    src: string;
    title: string;
}

export interface LawyerProfile {
    title: string;
    intro: string;
    video?: LawyerVideo;
    eslogan?: string;
    highlights: Highlight[];
    approachTitle: string;
    approach: string[];
    valuesTitle: string;
    values: string[];
    footer: string;
}

export interface LawyerProfileProps {
    profile: LawyerProfile;
}