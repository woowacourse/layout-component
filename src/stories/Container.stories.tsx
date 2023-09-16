import Container from "@components/Container/Container";
import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Container",
  component: Container,
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Container>;

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

    return (
      <div>
        <Container
          minWidth={args.minWidth}
          maxWidth={args.maxWidth}
          css={styleList[0]}
        >
          하하하
        </Container>
        <Container
          minWidth={args.minWidth}
          maxWidth={args.maxWidth}
          css={styleList[1]}
        >
          하하하
        </Container>
        <Container
          minWidth={args.minWidth}
          maxWidth={args.maxWidth}
          css={styleList[2]}
        >
          하하하
        </Container>
        <Container
          minWidth={args.minWidth}
          maxWidth={args.maxWidth}
          css={styleList[3]}
        >
          하하하
        </Container>
        <Container
          minWidth={args.minWidth}
          maxWidth={args.maxWidth}
          css={styleList[4]}
        >
          하하하
        </Container>
      </div>
    );
  },
  argTypes: {
    minWidth: {
      control: {
        type: "number",
      },
    },
    maxWidth: {
      control: {
        type: "number",
        default: 100,
      },
    },
  },
};
