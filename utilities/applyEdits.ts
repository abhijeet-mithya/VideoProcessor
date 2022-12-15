import axios from "axios";
import Frame from "../public/Frame.jpg";
import { GetFrames } from "./getFrames";

export const ApplyEdits = async (
    jobId: string,
    frameId: number,
    editOptions: object
) => {
    const headers = {
        "s-api-key": process.env.NEXT_PUBLIC_STABILITYAPI,
        "Content-Type": "multipart/form-data",
    };

    const base64Str = await GetFrames(jobId, frameId);

    var bufferStr = Buffer.from(base64Str, "base64");
    const imageFile = new Blob([bufferStr]);

    const formData = new FormData();
    formData.append("init_image", imageFile);
    formData.append("engine_id", "stable-diffusion-512-v2-1");
    formData.append("options", JSON.stringify(editOptions));

    const res = axios
        .post(
            "https://video-processor-api.mithyalabs.com/api/image2image",
            formData,
            { headers }
        )
        .then((response) => {
            return response.data;
        });

    return res;
};
