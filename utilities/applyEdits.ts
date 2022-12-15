import axios from "axios";
import Frame from "../public/Frame.jpg";

export const ApplyEdits = async (fileInput: string) => {
    if (fileInput === null) return;

    const headers = {
        "s-api-key": process.env.NEXT_PUBLIC_STABILITYAPI,
        "Content-Type": "multipart/form-data",
    };

    const editOptions = {
        text_prompts: [
            {
                text: "A Lady wearing lab glasses, holding a flask",
                weight: 1,
            },
            {
                text: "((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))",
                weight: -1.3,
            },
        ],
        steps: 50,
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
