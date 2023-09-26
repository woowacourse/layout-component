import ParallaxZoom from "@components/ParallaxScrolling/Zoom/ParallaxZoom";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ParallaxZoom",
  args: {
    imageURL:
      "https://img.freepik.com/free-photo/landscape-with-a-tree_1048-4891.jpg",
    speed: 1,
    width: "50vh",
    height: "50vh",
  },
  component: ParallaxZoom,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ParallaxZoom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    return (
      <div>
        <ParallaxZoom
          speed={0.05}
          imageURL={
            "https://img.freepik.com/free-photo/landscape-with-a-tree_1048-4891.jpg"
          }
        >
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </ParallaxZoom>
      </div>
    );
  },
};
