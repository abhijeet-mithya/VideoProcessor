import axios from "axios";

export const GetFrames = (jobId: string) => {
    const res = axios.get(`/${jobId}/frames`).then((response) => {
        return response;
    });

    return res;
};
