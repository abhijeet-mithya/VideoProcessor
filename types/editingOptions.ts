export interface EditingSliderProps {
    name: string;
    id: string;
    desc: string;
    high: number;
    low: number;
    defaultValue: number;
    setEditOptions?: (editOptions: object) => void;
}

export interface EditingDropdownProps {
    name: string;
    desc?: string;
    id: string;
    options: string[];
    defaultValue: string;
    setEditOptions?: (editOptions: object) => void;
}

export interface EditingTextFieldProps extends Omit<EditingDropdownProps, "options"> {
    type: 'number' | 'string';
    returnOption?: boolean;
}

export type EditingProps = EditingSliderProps | EditingDropdownProps;