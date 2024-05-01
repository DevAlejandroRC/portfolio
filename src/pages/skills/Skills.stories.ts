import { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";

const skills: Meta<typeof Skills> = {
    title: 'Test/Skills',
    component: Skills,
    parameters: {
        layout: 'fullscreen',
    },
}

export default skills;
type Story = StoryObj<typeof Skills>;

export const TestSkills = {
    args:{
        label: 'Skills'
    }
} satisfies Story;