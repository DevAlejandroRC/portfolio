import { Meta, StoryObj } from "@storybook/react";
import About from "./About";

const about: Meta<typeof About> = {
    title: 'Test/About',
    component: About,
    parameters: {
        layout: 'fullscreen',
    },
}

export default about;
type Story = StoryObj<typeof About>;

export const TestAbout = {
    args:{
        name: "Hola"
    }
} satisfies Story;