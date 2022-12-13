import axios from "axios";

export const UploadFile = (fileInput: object) => {
    if (fileInput === null)
        return;

    const formData = new FormData();
    formData.append("file", fileInput as Blob);
    formData.append("other", "form data");

    const res = axios.post("/upload-video", formData).then((response) => {
        return response;
    });

    return res;
};