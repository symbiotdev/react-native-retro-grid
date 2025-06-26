export type RetroGridScheme = 'light' | 'dark';
export type RetroGridColor = {
    pixelActiveColor?: string;
    pixelInactiveColor?: string;
};
export type RetroGridThemeProps = RetroGridColor & {
    scheme?: RetroGridScheme;
} & {
    [key in RetroGridScheme]?: RetroGridColor;
};
export type GridSize = [number, number];
export type AnimatedFrame = [number, number, string?][];
export type AnimatePixels = AnimatedFrame[];
export type PixelType = 'static' | 'animated' | 'debug';
export type RetroGridDimensionsProps = {
    gridSize: GridSize;
    pixelSize?: number;
    pixelsGap?: number;
    pixelsBorderRadius?: number;
};
export type RetroGridAnimationProps = {
    animate: AnimatePixels;
    animateInterval?: number;
    loopCount?: number;
};
export type RetroGridProps = RetroGridDimensionsProps & RetroGridAnimationProps & {
    theme?: RetroGridThemeProps;
    pixelType?: PixelType;
};
