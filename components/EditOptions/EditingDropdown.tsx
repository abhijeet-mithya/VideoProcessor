import { createMuiTheme, FormControl, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, Slider, Theme } from "@material-ui/core";
import React, { FC, useState } from "react";
import { EditingSliderProps } from "../../types/editingOptions";
import { createStyles, ThemeProvider } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    "& $notchedOutline": {
      borderColor: "red"
    },
    "&:hover $notchedOutline": {
      borderColor: "blue"
    },
    "&$focused $notchedOutline": {
      borderColor: "green"
    }
  },
  focused: {},
  notchedOutline: {}
}));


const EditingDropdown = () => {
    // const classes = useStyles();
    // const outlinedInputClasses = useOutlinedInputStyles();

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);
    // const [editOption, setEditOption] = useState("");

    // const handleChange = (event: any) => {
    //     setEditOption(event.target.value as string);
    // };

    return (
        <div className='w-full flex flex-col gap-[0.3rem]'>
            <div className='flex flex-row justify-between'>
                <h5 className='text-gray-3 text-base'>{"name"}</h5>
            </div>
            <div className='text-gray-2'>
                <h6 className='text-sm'>{"desc"}</h6>
            </div>
            <div>
                {/* <FormControl variant='outlined' className={classes.formControl}>
                    <InputLabel ref={inputLabel} htmlFor='outlined-age-simple'>
                        Age
                    </InputLabel>
                    <Select
                        value={editOption}
                        onChange={handleChange}
                        input={
                            <OutlinedInput
                                labelWidth={labelWidth}
                                name='age'
                                id='outlined-age-simple'
                                className={"border-red hover:border-blue"}
                            />
                        }>
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl> */}
            </div>
        </div>
    );
};

export default EditingDropdown;
