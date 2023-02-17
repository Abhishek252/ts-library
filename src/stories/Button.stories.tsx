import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "../GlobalStyles";
import Button from "../components/button/Button";

export default {
  title: "UI Components / Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AllButton = () => {
  return (
    <div>
      <Button {...Primary.args}>primary</Button>
      <Button {...Secondary.args}>Secondary</Button>
      <Button {...Tertiary.args}>Tertiary</Button>
    </div>
  );
};

AllButton.storyName = "All Buttons";

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  bgColor: theme.button.color.primary,
  outline: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  bgColor: theme.button.color.secondary,
  outline: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  bgColor: theme.button.color.tertiary,
  outline: false,
};
