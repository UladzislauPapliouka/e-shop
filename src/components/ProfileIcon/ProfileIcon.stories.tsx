import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProfileIcon } from "./ProfileIcon";

export default {
  title: "Header/ProfileIcon",
  component: ProfileIcon,
  argTypes: {
    isAuthorized: { control: "boolean", required: true },
    username: { control: "text", required: false },
    size: { control: "select",options: [ 50,150,250 ],required: true },
    avatarSRC: { control: "text", required: false },
  },
  parameters:{ controls: { sort: "alpha" } }
} as ComponentMeta<typeof ProfileIcon>;

const Template: ComponentStory<typeof ProfileIcon> = (args) => <ProfileIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isAuthorized: true,
  avatarSRC: "https://sun1.velcom-by-minsk.userapi.com/s/v1/ig2/TcYoH2V_UcnvCBwHiW6Vs2chgHnlabq57rSvP__a9TQFxqPqjQNDk1ntDytwCq4aBRcbR5kYBRnfbnfiJLAmzJ0f.jpg?size=200x220&quality=95&crop=0,0,1800,1986&ava=1",
  size: 50,
  username: "Test name"
};
