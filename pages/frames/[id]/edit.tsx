/* eslint-disable @next/next/no-img-element */
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import Base64Img from '../../../components/Base64Img';
import EditOptions from '../../../components/EditOptions';
import { ApplyEdits } from '../../../utilities/applyEdits';


const Edit = () => {
    const router = useRouter();        
    const { id, frameId } = router.query;

    const [hasbackdrop, setHasbackdrop] = useState(false);
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
        setHasbackdrop(true);
        if (id && frameId) {
            const res = await ApplyEdits(id as string, Number(frameId), editOptions).then((data) => {
                setHasbackdrop(false);
                return data;
            }).catch((err) => {
                setHasbackdrop(false);
            });
            setEditedFrame(`data:image/png;base64,${res.artifacts[0].base64}`);
        }
    };

    return (
        <div className=' bg-gray-1 flex flex-row items-center'>
            <div className='w-[35%] bg-gray-1 h-screen flex flex-row items-center pt-[5rem] border-r-2 border-solid border-gray-4  px-4'>
                <Base64Img
                    jobId={id as string}
                    frameId={Number(frameId)}
                    classes={"w-fit h-fit"}
                />
            </div>
            <div className='relative w-[35%] bg-gray-1 h-screen flex flex-row items-center pt-[5rem] px-4'>
                <Backdrop className={"!z-[3] !absolute"} open={hasbackdrop}>
                    <CircularProgress color='inherit' />
                </Backdrop>
                {editedFrame ? (
                    <img
                        alt='edited image'
                        src={editedFrame}
                        className={"w-fit h-fit"}
                    />
                ) : (
                    <Base64Img
                        jobId={id as string}
                        frameId={Number(frameId)}
                        classes={"w-fit h-fit"}
                    />
                )}
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