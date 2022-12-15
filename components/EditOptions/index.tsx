import { Button, IconButton } from '@material-ui/core';
import React, { FC, useState } from 'react'
import {
    EditingSliderProps,
    EditingDropdownProps,
    EditingTextFieldProps,
} from "../../types/editingOptions";
import AddIcon from "@material-ui/icons/Add";
import {
    DropdownEditOptions,
    EditingOptions,
    TextFieldEditOptions,
    PromptEditOptions,
} from "../../utilities/EditConfig";
import EditingDropdown from './EditingDropdown';
import EditingSlider from './EditingSlider';
import EditingTextField from './EditingTextField';

export interface EditOptionsProps {
    handleEdit: () => void;
    setEditOptions: (editOptions: object) => void;
    editOptions: object;
}

const EditOptions: FC<EditOptionsProps> = ({
    handleEdit,
    setEditOptions,
    editOptions
}) => {

    const AddPrompt = () => {
        setEditOptions((editOp: any) => {
            const newEditOp = {...editOp};
            newEditOp["text_prompts"] = [
                ...editOp["text_prompts"],
                {
                    text: "",
                    weight: 0,
                },
            ];
            return newEditOp;
        });
    };

    const setPromptValue = (promptNum: number, promptKeyNum: number, promptVal: string) => {
        const promptType = PromptEditOptions[promptKeyNum];
        setEditOptions((options: any) => {
                const newOptions = {
                    ...options,
                };
                newOptions["text_prompts"][promptNum][promptType.id] =
                    promptType.type === "number"
                        ? Number(promptVal)
                        : promptVal;
                return newOptions;
            });
    }

    return (
        <div className='flex flex-col gap-[0.8rem] h-full pt-[5rem] p-[2rem] '>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-between'>
                    <h5 className='text-gray-3 text-base'>Text Prompt</h5>
                    <IconButton
                        className='!text-gray-3 !p-0'
                        component='label'
                        onClick={AddPrompt}>
                        <AddIcon />
                    </IconButton>
                </div>
                {editOptions["text_prompts"].map((data, promptNum) => {
                    return (
                        <div className='flex gap-4 pb-[0.8rem]' key={promptNum}>
                            {PromptEditOptions.map((options, id) => {
                                return (
                                    <div
                                        key={id}
                                        className={
                                            id === 0 ? "flex-[2]" : "flex-1"
                                        }>
                                        <EditingTextField
                                            {...({
                                                ...options,
                                                setEditOptions: (e) => {
                                                    setPromptValue(
                                                        promptNum,
                                                        id,
                                                        e
                                                    );
                                                },
                                                returnOption: true,
                                            } as EditingTextFieldProps)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            {EditingOptions.map((options, id) => {
                return (
                    <EditingSlider
                        {...({
                            ...options,
                            setEditOptions: setEditOptions,
                        } as EditingSliderProps)}
                        key={id}
                    />
                );
            })}

            {DropdownEditOptions.map((options, id) => {
                return (
                    <EditingDropdown
                        key={id}
                        {...({
                            ...options,
                            setEditOptions: setEditOptions,
                        } as EditingDropdownProps)}
                    />
                );
            })}

            {TextFieldEditOptions.map((options, id) => {
                return (
                    <EditingTextField
                        key={id}
                        {...({
                            ...options,
                            setEditOptions: setEditOptions,
                        } as EditingTextFieldProps)}
                    />
                );
            })}

            <div className='w-full pb-[5rem]'>
                <Button
                    className='w-full !mt-12  mb-[2rem] !rounded-none !text-white !bg-black hover:!border-2 hover:bg-black hover:border-solid hover:border-white'
                    variant='contained'
                    onClick={handleEdit}>
                    Apply
                </Button>
            </div>
        </div>
    );
};

export default EditOptions;