import axios from "axios";
import Frame from "../public/Frame.jpg";

export const ApplyEdits = async (fileInput: string, editOptions: object) => {
    if (fileInput === null) return;

    const headers = {
        "s-api-key": process.env.NEXT_PUBLIC_STABILITYAPI,
        "Content-Type": "multipart/form-data",
    };

    const imageResponse = await axios.get(fileInput, {
        responseType: "arraybuffer",
    });
    const imageFile = new Blob([imageResponse.data]);

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
