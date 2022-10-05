import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react"
import { SearchBar } from "./SearchBar";

export default {
    title: "Header/SearchBar",
    componnent: SearchBar,
    argType: {
        writtenString: {control: "text"},
        choosenCategories: {control: "text"}
    }
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> =(args) => <SearchBar {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    writtenString:"",
    choosenCategories: "All categories"
}
