import { createMuiTheme, Slider } from '@material-ui/core';
import React, { FC, useState } from 'react'
import { EditingSliderProps } from '../../types/editingOptions';
import { ThemeProvider } from "@material-ui/styles";

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            root: {
                color: "#62D5B0",
                height: 6,
            },
            thumb: {
                height: 18,
                width: 18,
                backgroundColor: "#fff",
                border: "2px solid currentColor",
                marginTop: -6,
                marginLeft: -9,
                "&:focus, &:hover, &$active": {
                    boxShadow: "inherit",
                },
            },
            active: {},
            valueLabel: {
                left: "calc(-50% + 4px)",
            },
            track: {
                height: 6,
                borderRadius: 3,
            },
            rail: {
                height: 6,
                borderRadius: 3,
            },
        },
    },
});

const EditingSlider: FC<EditingSliderProps> = (props) => {
    const { name, desc, high, low } = props;
    const [sliderValue, setSliderValue] = useState(0);

    const handleChange = (event: any, newValue: number | number[]) => {
        setSliderValue(newValue as number);
    };


    return (
        <div className='w-full flex flex-col gap-[0.3rem]'>
            <div className='flex flex-row justify-between'>
                <h5 className='text-gray-3 text-base'>{name}</h5>
                <div className='bg-gray-1 py-[1px] px-[8px] flex items-center'>
                    <h5 className='text-gray-3 text-sm'>{sliderValue}</h5>
                </div>
            </div>
            <div className='text-gray-2'>
                <h6 className='text-sm'>{desc}</h6>
            </div>
            <div>
                <ThemeProvider theme={muiTheme}>
                    <Slider
                        value={sliderValue}
                        onChange={handleChange}
                        step={1}
                        min={low}
                        max={high}
                        valueLabelDisplay='auto'
                    />
                </ThemeProvider>
            </div>
        </div>
    );
};

export default EditingSlider