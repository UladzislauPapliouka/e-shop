import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  argType: {}
} as ComponentMeta<typeof Header>;

const Template:ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};
