import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../components/input/Input";

export default {
  title: "UI Components / Input Field",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "text",
};
