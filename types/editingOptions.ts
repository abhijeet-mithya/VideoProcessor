export interface EditingSliderProps {
    isSlider: true;
    name: string;
    id: string;
    desc: string;
    high: number;
    low: number;
    default: number;
}

export type EditingProps = EditingSliderProps;