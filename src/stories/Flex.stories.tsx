import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Container from "../lib/Container";
import Flex from "../lib/Container";

export default {
  title: "Flex",
  component: Flex,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (props) => (
  <Flex {...props}>
    {[...Array(3)].map(() => (
      <FlexItem />
    ))}
  </Flex>
);

const FlexItem = () => (
  <Container minWidth="10px" maxWidth="50px" background="pink">
    item
  </Container>
);

export const Example = Template.bind({});
Example.args = {
  direction: "column",
  align: "center",
};
