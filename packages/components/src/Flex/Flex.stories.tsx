import { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";

const meta = {
  title: 'Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'column',
    align: 'center',
    gap: 10,
    children: (
      <>
        <h1>Hello Flex!</h1>
        <p>Awesome flex container component</p>
      </>
    ),
  }
}
