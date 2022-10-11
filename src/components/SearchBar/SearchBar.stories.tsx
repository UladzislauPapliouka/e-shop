import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchBar } from "./SearchBar";

export default {
    title: "Header/SearchBar",
    componnent: SearchBar,
    argType: {
        writtenString: { control: "text" },
        choosenCategories: { control: "text" },
    },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} 
categoriesOptions={[ "Phones","Computers" ]}
/>;

export const Primary = Template.bind({});
Primary.args = {
    writtenString:"",
    choosenCategories: "All categories",
    setChoosenCategor:action("chacgeCategory")
};
