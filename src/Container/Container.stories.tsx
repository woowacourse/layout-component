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
    minWidth: "200px",
    maxWidth: "400px",
    children: (
      <section
        style={{
          background: "lightblue",
          padding: "20px",
          border: "1px solid gray",
        }}
      >
        <h1>Container Example</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          lacus et viverra.
        </p>
      </section>
    ),
  },
};
