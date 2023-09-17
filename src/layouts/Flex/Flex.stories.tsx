import type {Meta} from "@storybook/react";
import Container from "./Flex.tsx";
import Flex, {FlexProps} from "./Flex.tsx";

const meta = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  args: {
    justify: "center",
    align: "center",
    direction: "row",
    gap: 1,
  },
  argTypes: {
    justify: {
      control: {
        type: "select",
        options: ["center", "start", "end", "flex-start", "flex-end", "left", "right"],
      }
    },
    align: {
      control: {
        type: "select",
        options: ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end"],
      }
    },
    direction: {
      control: {
        type: "select",
        options: ["row", "row-reverse", "column", "column-reverse"],
      }
    },
    gap: {
      control: {
        type: "range",
        min: 0,
        max: 10,
      }
    }
  },
} satisfies Meta<typeof Flex>;

export default meta;

const loremIpsum = `Lorem ipsum`;

const LoremIpsumComponent = () => {
  return (
    <div style={{background: "lightblue"}}>
      <p>{loremIpsum}</p>
    </div>
  );
};


export const Default = (args: FlexProps) => (
  <>
    <Container {...args}>
      {
        Array.from({length: 3}, (_, i) => i).map((i) => (
          <LoremIpsumComponent key={i}/>
        ))
      }
    </Container>
  </>
);

