export type PixelComponentProps = {
    coords: string;
    active: boolean;
    borderRadius: number;
    duration: number;
    size: number;
    activeColor: string;
    inactiveColor: string;
    textColor: string;
};
export declare const AnimatedPixel: import("react").MemoExoticComponent<({ active, borderRadius, duration, size, activeColor, inactiveColor, }: PixelComponentProps) => import("react/jsx-runtime").JSX.Element>;
export declare const StaticPixel: import("react").MemoExoticComponent<({ active, borderRadius, size, activeColor, inactiveColor, }: PixelComponentProps) => import("react/jsx-runtime").JSX.Element>;
export declare const DebugPixel: import("react").MemoExoticComponent<({ coords, active, borderRadius, size, activeColor, inactiveColor, textColor, }: PixelComponentProps) => import("react/jsx-runtime").JSX.Element>;
