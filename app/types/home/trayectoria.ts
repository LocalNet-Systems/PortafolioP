export interface Highlight {
    year: string;
    text: string;
}

export interface TrajectoryVideo {
    src: string;
    title: string;
}

export interface TrajectoryData {
    title: string;
    intro: string;
    video?: TrajectoryVideo;
    eslogon? : string;
    highlights: Highlight[];
    approachTitle: string;
    approach: string[];
    valuesTitle: string;
    values: string[];
    footer: string;
}

export interface Props {
    trajectory: TrajectoryData;
}