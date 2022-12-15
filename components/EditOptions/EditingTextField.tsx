import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { EditingTextFieldProps } from "../../types/editingOptions";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    formControl: {
        // marginTop: theme.spacing(1),
        maxWidth: "22vw",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const useOutlinedInputStyles = makeStyles((theme) => ({
    root: {
        "& $notchedOutline": {
            borderColor: "#B2B2B2",
        },
        "&:hover $notchedOutline": {
            borderColor: "#161A20",
        },
        "&$focused $notchedOutline": {
            borderColor: "#45484C",
        },
    },
    focused: {},
    notchedOutline: {},
}));


const EditingTextField:FC<EditingTextFieldProps> = (props) => {
    const { name, id, desc, defaultValue, type, setEditOptions, returnOption } =
        props;
    const classes = useStyles();
    const outlinedInputClasses = useOutlinedInputStyles();
    const [value, setValue] = React.useState(defaultValue);

    const handleChange = (event: any) => {
        setValue(event.target.value);
        if (returnOption && setEditOptions) setEditOptions(event.target.value);
        else if (setEditOptions) {
            setEditOptions((options: any) => {
                const newOptions = {
                    ...options,
                };
                if (event.target.value === "") {
                    Reflect.deleteProperty(newOptions, id);
                } else {
                    newOptions[id] =
                        type === "number"
                            ? Number(event.target.value)
                            : event.target.value;
                }
                return newOptions;
            });
        }
    };

    return (
        <div className='w-full flex flex-col gap-[0.3rem]'>
            <div className='flex flex-row justify-between'>
                <h5 className='text-gray-3 text-base'>{name}</h5>
            </div>
            {desc && (
                <div className='text-gray-2'>
                    <h6 className='text-sm'>{desc}</h6>
                </div>
            )}
            <FormControl variant='outlined' className={classes.formControl}>
                <OutlinedInput
                    id={id}
                    value={value}
                    type={type}
                    onChange={handleChange}
                    className='!text-gray-3'
                    classes={outlinedInputClasses}
                />
            </FormControl>
        </div>
    );
}

export default EditingTextField;
