import React from 'react'
import { EditingOptions } from '../../utilities/EditConfig';
import EditingSlider from './EditingSlider';

const EditOptions = () => {
    return (
        <div className='flex flex-col gap-[0.6rem]'>
            {EditingOptions.map((option, id) => {
                if (option?.isSlider)
                    return <EditingSlider {...option} />;
                else
                    return null;
            })}
        </div>
    );
};

export default EditOptions;