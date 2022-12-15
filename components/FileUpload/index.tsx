import { Backdrop, Button, CardMedia, CircularProgress, Input } from "@material-ui/core";
import Head from "next/head";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { UploadFile } from "../../utilities/uploadFile";
import { useRouter } from "next/router";
import { DropzoneArea } from "material-ui-dropzone";
import CloseIcon from "@material-ui/icons/Close";
import { GetVideoStatus } from "../../utilities/getVideoStatus";
import { VideoStatus } from "../../types/videoStatus";

const FileUpload = () => {
    const [videoFile, setVideFile] = useState(null);
    const [video, setVideo] = useState<string | null>(null);
    const [hasbackdrop, setHasbackdrop] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        if (videoFile) {
            const res = await UploadFile(videoFile);        
            if (res?.status === 200) {
                setHasbackdrop(true);
                let videoStatus: VideoStatus | null = null;
                const interval = setInterval(async () => {
                    if (
                        videoStatus &&
                        (videoStatus as any).status === "Processed"
                    ) {
                        clearInterval(interval);
                        setHasbackdrop(false);
                        router.push(`frames/${res.data["job-id"]}`);
                    } else {
                        videoStatus = await GetVideoStatus(res.data["job-id"]);
                    }
                }, 5000);
                
            }
        }
    }

    const handleDrop = (drop: any) => {
        console.log(drop);
        setVideFile(drop[0]);
        if (drop[0]) {
            console.log(URL.createObjectURL(drop[0]));
            setVideo(URL.createObjectURL(drop[0]));
        }
    };

    function EmptyIcon() {
        return <div/>
    }

    return (
        <div>
            <Backdrop className={"!z-[3]"} open={hasbackdrop}>
                <CircularProgress color='inherit' />
            </Backdrop>
            {video === null ? (
                <DropzoneArea
                    acceptedFiles={["video/*"]}
                    dropzoneClass={
                        "!rounded-none text-gray-3 !bg-gray-2 !w-[30rem] h-[30rem] !border-2 !border-solid !border-gray-3 uppercase  flex flex-col justify-center items-center"
                    }
                    maxFileSize={50000000}
                    Icon={EmptyIcon as unknown as ReactElement}
                    dropzoneText={"Drop Video Here"}
                    filesLimit={1}
                    onChange={(e) => {
                        handleDrop(e);
                    }}
                />
            ) : (
                <div className='relative !rounded-none text-gray-3 !bg-gray-2 !w-[30rem] h-[30rem] !border-2 !border-solid !border-gray-3 uppercase  flex flex-col justify-center items-center'>
                    <div
                        className='absolute top-[1rem] right-[1rem] bg-white cursor-pointer	z-[1]'
                        onClick={() => {
                            setVideo(null);
                        }}>
                        <CloseIcon className='text-black' />
                    </div>
                    <video src={video} controls className='h-full w-full '>
                        {`Sorry, your browser doesn't support embedded videos.`}
                    </video>
                </div>
            )}

            <Button
                className='w-full !mt-12 !rounded-none !text-white !bg-black hover:!border-2 hover:bg-black hover:border-solid hover:border-white'
                variant='contained'
                onClick={handleSubmit}>
                Upload a Video
            </Button>
        </div>
    );
};

export default FileUpload;
