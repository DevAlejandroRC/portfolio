import { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const profile: Meta<typeof Profile> = {
    title: 'Test/Profile',
    component: Profile,
    parameters: {
        layout: 'fullscreen',
    },
}

export default profile;
type Story = StoryObj<typeof Profile>;

export const TestShowcases = {

} satisfies Story;