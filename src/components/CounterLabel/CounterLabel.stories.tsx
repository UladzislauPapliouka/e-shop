import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import { CounterLabel } from "./CounterLabel";
import { CartIcon } from "../CartIcon/CartIcon";
export default {
    title: "Header/CartIconWithBadge",
    component: CounterLabel,
    argType: {
        counter: {control: "number", required: true},
    }
} as ComponentMeta<typeof CounterLabel>;

const Template: ComponentStory<typeof CounterLabel> = (args) => <CounterLabel {...args}><CartIcon size={50}bgColor={"#000"} color={"#fff"}/></CounterLabel>;

export const Primary = Template.bind({});
Primary.args = {
    counter: 50
};