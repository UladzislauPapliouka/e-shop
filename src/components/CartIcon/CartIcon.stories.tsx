import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CartIcon } from "./CartIcon";

export default {
  title: "Header/CartIcon",
  component: CartIcon,
  argTypes: {
    size: { control: "select",options: [ 50,150,250 ],required: true },
    color: { control: { type: "color" }, required: true },
    bgColor: { control: { type: "color" }, required: true }
  },
  parameters:{ controls: { sort: "alpha" } }
} as ComponentMeta<typeof CartIcon>;

const Template: ComponentStory<typeof CartIcon> = (args) => <CartIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size:50,
    color: "#d0d0d0d",
    bgColor: "#000"
};
