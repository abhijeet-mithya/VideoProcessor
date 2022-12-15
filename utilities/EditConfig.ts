import { EditingProps } from "../types/editingOptions";

export const EditingOptions: EditingProps[] = [
    {
        isSlider: true,
        name: "Width",
        id: "width",
        desc: "The width of the generated image.",
        high: 2048,
        low: 512,
        default: 512,
    },
    {
        isSlider: true,
        name: "Height",
        id: "height",
        desc: "The height of the generated image.",
        high: 2048,
        low: 512,
        default: 512,
    },
    {
        isSlider: true,
        name: "Cfg Scale",
        id: "cfg_scale",
        desc: "Cfg scale adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt.",
        high: 35,
        low: 0,
        default: 7,
    },
    {
        isSlider: true,
        name: "Samples",
        id: "samples",
        desc: "",
        high: 10,
        low: 1,
        default: 1,
    },
    {
        isSlider: true,
        name: "Steps",
        id: "steps",
        desc: "How many steps to spend generating (diffusing) your image",
        high: 150,
        low: 10,
        default: 50,
    },
    // {
    //     isSlider: true,
    //     name: "Number of Images",
    //     desc: "To generate multiple images from one prompt.",
    //     high: 10,
    //     low: 1,
    // },
    // {
    //     name: "Sampler",
    //     desc: "",
    //     high: 10,
    //     low: 0,
    // },
    // {
    //     name: "Model",
    //     desc: "",
    //     high: 10,
    //     low: 0,
    // },
    // {
    //     name: "Seed",
    //     desc: "",
    //     high: 10,
    //     low: 0,
    // },
];

export const DropdownEditOptions = [
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
        default: "NONE",
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
        ],
        default: '',
    },
];

export const TextFieldEditOptions = [
    {
        name: "Seeds",
        id: 'seed',
        default: '0',
    },
]
