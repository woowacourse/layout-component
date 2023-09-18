import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Container from "../lib/Container";
import Grid from "../lib/Grid";

export default {
  title: "Grid",
  component: Grid,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (props) => (
  <Grid rows={"2"} columns={"3"} {...props}>
    {[...Array(12)].map(() => (
      <GridItem />
    ))}
  </Grid>
);

const GridItem = () => (
  <Container minWidth="10px" maxWidth="50px" background="pink">
    item
  </Container>
);

export const Example = Template.bind({});
