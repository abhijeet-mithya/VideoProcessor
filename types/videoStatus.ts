export interface VideoStatusDetails {
    fps: number;
    duration: number;
    frameCount: number;
    frameHeight: number;
    frameWidth: number;
}

export interface VideoStatus {
    status: string;
    details: VideoStatusDetails;
}