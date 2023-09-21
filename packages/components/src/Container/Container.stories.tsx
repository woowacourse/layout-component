import { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta = {
  title: "Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minWidth: 600,
    maxWidth: 960,
    children: (
      <div
        style={{
          background: `hsl(153, 100%, 90%)`,
        }}
      >
        <h1>Default Container</h1>
        <p>
          You can set <code>minWidth</code> and <code>maxWidth</code>
        </p>
      </div>
    ),
  },
};
