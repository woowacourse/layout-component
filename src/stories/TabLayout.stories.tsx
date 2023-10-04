import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import TabLayout from "../lib/TabLayout";

export default {
  title: "TabLayout",
  component: TabLayout,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (props) => (
  <TabLayout tabsMenu={["tab1", "tab2", "tab3"]} {...props}>
    <div>첫번째 탭입니다.</div>
    <div>두번째 탭입니다.</div>
    <div>세번째 탭입니다.</div>
  </TabLayout>
);

export const Example = Template.bind({});
Example.args = {
  tabsMenu: ["tab1", "tab2", "tab3"],
  tabWidth: "80%",
  tabMenuHeight: "45px",
  defaultTabIndex: 1,
  tabMenuFontSize: "16px",
};
