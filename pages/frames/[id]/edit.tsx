/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import EditOptions from '../../../components/EditOptions';
import { ApplyEdits } from '../../../utilities/applyEdits';


const Edit = () => {
    const router = useRouter();        
    const { id, frameId } = router.query;

    const [editedFrame, setEditedFrame] = useState<string | null>(null);
    const [editOptions, setEditOptions] = useState<object>({
        text_prompts: [
            {
                text: "A Lady wearing lab glasses, holding a flask",
                weight: 1,
            },
        ],
        steps: 50,
    });

    useEffect(() => {
      console.log("editOptions: ", editOptions);
    }, [editOptions])
    

    const ref = useRef<HTMLImageElement | null>(null);

    const handleEdit = async () => {
        if (id && frameId) {
            const res = await ApplyEdits("/" + id + "/frames/" + frameId, editOptions);
            setEditedFrame(`data:image/png;base64,${res.artifacts[0].base64}`);
        }
    };

    return (
        <div className=' bg-gray-1 flex flex-row items-center'>
            <div className='w-[35%] bg-gray-1 h-screen flex flex-row items-center pt-[5rem] border-r-2 border-solid border-gray-4  px-4'>
                <img
                    src={`${process.env.NEXT_PUBLIC_API}/${id}/frames/${frameId}`}
                    alt={"Original Image"}
                    className='w-fit h-fit'
                />
            </div>
            <div className='w-[35%] bg-gray-1 h-screen flex flex-row items-center pt-[5rem] px-4'>
                <img
                    ref={ref}
                    src={
                        editedFrame ||
                        `${process.env.NEXT_PUBLIC_API}/${id}/frames/${frameId}`
                    }
                    alt={"Edited Image"}
                    className='w-fit h-fit'
                />
            </div>
            <div className='w-[30%] bg-gray-4 h-screen flex flex-row items-center overflow-y-auto'>
                <EditOptions
                    handleEdit={handleEdit}
                    setEditOptions={(op) => setEditOptions(op)}
                    editOptions={editOptions}
                />
            </div>
        </div>
    );
}

export default Edit