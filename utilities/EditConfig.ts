import { EditingProps } from "../types/editingOptions";

export const EditingOptions: EditingProps[] = [
    {
        isSlider: true,
        name: "Width",
        desc: "The width of the generated image.",
        high: 1024,
        low: 0,
    },
    {
        isSlider: true,
        name: "Height",
        desc: "The height of the generated image.",
        high: 1024,
        low: 0,
    },
    {
        isSlider: true,
        name: "Cfg Scale",
        desc: "Cfg scale adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt.",
        high: 10,
        low: 1,
    },
    {
        isSlider: true,
        name: "Steps",
        desc: "How many steps to spend generating (diffusing) your image",
        high: 300,
        low: 0,
    },
    {
        isSlider: true,
        name: "Number of Images",
        desc: "To generate multiple images from one prompt.",
        high: 10,
        low: 0,
    },
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