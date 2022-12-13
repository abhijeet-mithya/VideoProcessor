import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetFrames } from "../../../utilities/getFrames";
import Frame from "../../../../VideoImprover/videos/0275ee8b-7a38-445e-b409-803aacef5406/data/frame-0.jpg";
import Image from "next/image";

const Frames = () => {
    const router = useRouter();
    const [frames, setFrames] = useState<any>(null);

    const { id } = router.query;
    
    async function fetchFrames(jobId: string) {
        const response = await GetFrames(jobId);
        return response;
    }

    useEffect(() => {
        let mounted = true;
        
        fetchFrames(id as string).then((items) => {
            if (items.status==200 && mounted) {
                setFrames(items.data);
                console.log(items.data);
            } else {
                //Error
            }
        });

        return () => {
            mounted = false
        };
    }, [id])
    
    return (
        <div className=' bg-gray-1 flex flex-col items-center pt-[5rem] text-white'>
            <div className='flex flex-col justify-center items-center w-[32rem] text-center'>
                <h1 className='font-bold text-4xl'>Amazing!</h1>
                <p className='font-bold'>
                    {`We have split your video into individual frames. Select one
                    frame that best encapsulates your video, and begin
                    experimenting on that frame for that 'look' you want the
                    video to achieve`}
                </p>
            </div>
            <div className='grid grid-cols-4 gap-[2rem] m-[2rem] mt-[4rem]'>
                {Array.apply(null, Array(50)).map((data, key) => {
                    return (
                        <div
                            key={key}
                            onClick={() => {
                                router.push(id + "/edit");
                            }}
                            className='cursor-pointer transition-all duration-300	hover:scale-105 hover:shadow-[0_0px_20px_-12px_rgba(255,255,255)]'>
                            <Image alt={`frame-${key}`} src={Frame} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default Frames;
