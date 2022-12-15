import axios from "axios";

export const GetFrames = async (jobId: string, frameId: number) => {
    try {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_API}/${jobId}/frames/${frameId}`)
            .then((response) => {
                return response;
            });
        return response.data["image_base64"];
    } catch (error) {
        console.error(error);
    }
};
