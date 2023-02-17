import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "../components/navbar/Navbar";

export default {
  title: "UI Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};
