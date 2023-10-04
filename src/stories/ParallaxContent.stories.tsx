import ParallaxContent from "@/components/ParallaxScrolling/ParallaxContent/ParallaxContent";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ParallaxContent",
  component: ParallaxContent,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ParallaxContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    return (
      <ParallaxContent>
        <ParallaxContent.Item
          speed={1}
          imageUrl="https://picsum.photos/1080/720"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gnome-home.svg/800px-Gnome-home.svg.png"
            alt="img"
          />
        </ParallaxContent.Item>
      </ParallaxContent>
    );
  },
};
