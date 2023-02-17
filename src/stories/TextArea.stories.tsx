import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextArea from "../components/textarea/TextArea";

export default {
  title: "UI Components / Textarea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const TextAreaField = Template.bind({});
TextAreaField.args = {
  cols: 35,
  rows: 15,
};
