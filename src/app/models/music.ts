export interface Music {
    thumbnailUrl: string;
    title: string;
    description: string;
    audioSrc?: string;
    providers: MusicProvider[];
}

export interface MusicProvider {
    thumbnailUrl: string;
    name: string;
    url: string;
}