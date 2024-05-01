import { Meta, StoryObj } from "@storybook/react";
import Showcases from "./Showcases";

const showcase: Meta<typeof Showcases> = {
    title: 'Test/Showcases',
    component: Showcases,
    parameters: {
        layout: 'fullscreen',
    },
}

export default showcase;
type Story = StoryObj<typeof Showcases>;

export const TestShowcases = {
    
} satisfies Story;