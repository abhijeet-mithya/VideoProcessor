/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { VideoStatus, VideoStatusDetails } from "../../../types/videoStatus";
import { GetVideoStatus } from "../../../utilities/getVideoStatus";

const Frames = () => {
    const router = useRouter();
    const [videoStatus, setVideoStatus] = useState<VideoStatusDetails>();

    const { id } = router.query;

    useEffect(() => {
        if (id){
            GetVideoStatus(id as string).then((response) =>{
                setVideoStatus(response?.details?.["frame-count"]);
            });
        }
    }, [id])
    
    
    return (
        <div className='min-h-[100vh] bg-gray-1 flex flex-col items-center pt-[5rem] text-white'>
            <div className='flex flex-col justify-center items-center w-[32rem] text-center'>
                <h1 className='font-bold text-4xl'>Amazing!</h1>
                <p
                    className='font-bold'
                    onClick={() => {
                        // click();
                    }}>
                    {`We have split your video into individual frames. Select one
                    frame that best encapsulates your video, and begin
                    experimenting on that frame for that 'look' you want the
                    video to achieve`}
                </p>
            </div>
            <div className='grid grid-cols-4 gap-[2rem] m-[2rem] mt-[4rem]'>
                {id &&
                    videoStatus &&
                    Array.from(Array(videoStatus).keys()).map(
                        (frameId, key) => {
                            return (
                                <div
                                    key={key}
                                    onClick={() => {
                                        router.push({
                                            pathname: id + "/edit",
                                            query: { frameId: frameId },
                                        });
                                    }}
                                    className='cursor-pointer transition-all duration-300 hover:scale-105 
                            hover:shadow-[0_0px_20px_-12px_rgba(255,255,255)]'>
                                    <img
                                        alt={`frame-${key}`}
                                        src={`${process.env.NEXT_PUBLIC_API}/${id}/frames/${frameId}`}
                                    />
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
};


export default Frames;
