import {
    EditingDropdownProps,
    EditingProps,
    EditingTextFieldProps,
} from "../types/editingOptions";

export const EditingOptions: EditingProps[] = [
    {
        name: "Width",
        id: "width",
        desc: "The width of the generated image.",
        high: 2048,
        low: 512,
        defaultValue: 512,
    },
    {
        name: "Height",
        id: "height",
        desc: "The height of the generated image.",
        high: 2048,
        low: 512,
        defaultValue: 512,
    },
    {
        name: "Cfg Scale",
        id: "cfg_scale",
        desc: "Cfg scale adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt.",
        high: 35,
        low: 0,
        defaultValue: 7,
    },
    {
        name: "Samples",
        id: "samples",
        desc: "",
        high: 10,
        low: 1,
        defaultValue: 1,
    },
    {
        name: "Steps",
        id: "steps",
        desc: "How many steps to spend generating (diffusing) your image",
        high: 150,
        low: 10,
        defaultValue: 50,
    },
];

export const DropdownEditOptions: EditingDropdownProps[] = [
    {
        name: "Clip Guidance Preset",
        id: "clip_guidance_preset",
        options: [
            "SIMPLE",
            "FAST_BLUE",
            "FAST_GREEN",
            "SLOW",
            "SLOWER",
            "SLOWEST",
            "NONE",
        ],
        defaultValue: "NONE",
    },
    {
        name: "Sampler",
        id: "sampler",
        options: [
            "K_EULER",
            "K_DPM_2",
            "K_LMS",
            "K_DPMPP_2S_ANCESTRAL",
            "K_DPMPP_2M",
            "DDIM",
            "DDPM",
            "K_EULER_ANCESTRAL",
            "K_HEUN",
            "K_DPM_2_ANCESTRAL",
            "NONE",
        ],
        defaultValue: "NONE",
    },
];

export const TextFieldEditOptions: EditingTextFieldProps[] = [
    {
        name: "Seeds",
        id: "seed",
        defaultValue: "0",
        type: 'number',
    },
];

export const PromptEditOptions: EditingTextFieldProps[] = [
    {
        name: "Text",
        id: "text",
        defaultValue: " ",
        type: "string",
    },
    {
        name: "Weight",
        id: "weight",
        defaultValue: "0",
        type: "number",
    },
];
