/* eslint-disable @next/next/no-img-element */
import React, { useState, FC, useEffect } from "react";
import { GetFrames } from "../../utilities/getFrames";

export interface Base64ImgProps {
    jobId: string;
  frameId: number;
  classes?: string;
  base64?: string;
}

const Base64Img: FC<Base64ImgProps> = ({ jobId, frameId, classes, base64 }) => {
    const [base64Str, setBase64Str] = useState("");

    const getFramesFromUrl = async (jobId: string, frameId: number) => {
        setBase64Str(await GetFrames(jobId, frameId));
    };

    useEffect(() => {
        getFramesFromUrl(jobId, frameId);
    }, [jobId, frameId]);

    if (base64)
        return (
            <img
                className={classes}
                alt={`frame-${frameId}`}
                src={`data:image/png;base64,${base64}`}
            />
        );

    return (
        <img
            className={classes}
            alt={`frame-${frameId}`}
            src={`data:image/png;base64,${base64Str}`}
        />
    );
};

export default Base64Img;