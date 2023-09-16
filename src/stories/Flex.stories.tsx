import Flex from "@components/Flex/Flex";
import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Flex",
  component: Flex,
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const styleList = Array(5)
      .fill("")
      .map(() =>
        css({
          backgroundColor: `#${Math.floor(Math.random() * 999999)}`,
          height: "200px",
        })
      );

    const boxStyle = css({
      backgroundColor: "#ffffff",
      border: "1px solid #000000",
    });

    return (
      <div>
        <h1>Example1 : justify - center, align - center</h1>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap={2}
          css={styleList[0]}
        >
          <div css={boxStyle}>하하하</div>
          <div css={boxStyle}>하하하2</div>
        </Flex>
        <br />
        <h1>Example2 : justify - end, align - center</h1>
        <Flex
          direction="column"
          justify="end"
          align="center"
          gap={2}
          css={styleList[1]}
        >
          <div css={boxStyle}>하하하</div>
          <div css={boxStyle}>하하하2</div>
        </Flex>
        <br />
        <h1>Example3 : justify - space-around, align - center</h1>
        <Flex
          direction="column"
          justify="space-around"
          align="center"
          gap={2}
          css={styleList[2]}
        >
          <div css={boxStyle}>하하하</div>
          <div css={boxStyle}>하하하2</div>
        </Flex>
        <br />
        <h1>
          Example4 : direction - row, justify - space-between, align - inherit
        </h1>
        <Flex
          direction="row"
          justify="space-between"
          align="inherit"
          gap={2}
          css={styleList[3]}
        >
          <div css={boxStyle}>하하하</div>
          <div css={boxStyle}>하하하2</div>
        </Flex>
        <br />
        <h1>Example5 : playground</h1>
        <Flex
          direction={args.direction}
          justify={args.justify}
          align={args.align}
          gap={args.gap}
          css={styleList[4]}
        >
          <div css={boxStyle}>하하하</div>
          <div css={boxStyle}>하하하2</div>
        </Flex>
      </div>
    );
  },
  argTypes: {
    direction: {
      type: "string",
    },
    justify: {
      type: "string",
    },
    align: {
      type: "string",
    },
    gap: {
      type: "number",
    },
  },
};
