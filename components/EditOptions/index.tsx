import { Button } from '@material-ui/core';
import React, { FC } from 'react'
import { ApplyEdits } from '../../utilities/applyEdits';
import { EditingOptions } from '../../utilities/EditConfig';
import EditingDropdown from './EditingDropdown';
import EditingSlider from './EditingSlider';

export interface EditOptionsProps {
    handleEdit: ()=>void;
}

const EditOptions:FC<EditOptionsProps> = ({ handleEdit }) => {

    return (
        <div className='flex flex-col gap-[0.6rem]'>
            {EditingOptions.map((option, id) => {
                if (option?.isSlider)
                    return <EditingSlider {...option} key={id} />;
                else return null;
            })}
            
            <EditingDropdown />
            
            <div></div>
            <Button
                className='w-full !mt-12 !rounded-none !text-white !bg-black hover:!border-2 hover:bg-black hover:border-solid hover:border-white'
                variant='contained'
                onClick={handleEdit}>
                Apply
            </Button>
        </div>
    );
};

export default EditOptions;