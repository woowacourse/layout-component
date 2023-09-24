import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Container from "../lib/Container";

export default {
  title: "Container",
  component: Container,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (props) => (
  <Container {...props}>container</Container>
);

export const Example = Template.bind({});
Example.args = {
  background: "gray",
  mediaTarget: "mobile",
};
