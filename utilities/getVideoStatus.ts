import axios from "axios";

export const GetVideoStatus = async (jobId: string) => {
    try {
        const response = await axios
            .get(`/${jobId}/status`)
            .then((response) => {
                return response;
            });
        return response.data.status;
    } catch (error) {
        console.error(error);
    }
};
