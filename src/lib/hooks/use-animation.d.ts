import { RetroGridAnimationProps } from '../types/retro-grid';
export type ActivePixel = {
    coords: string;
    color?: string;
    active: boolean;
};
export declare const useAnimation: (props: RetroGridAnimationProps) => {
    activePixels: ActivePixel[];
    animationDuration: number;
};
