import ParallaxContainer from "@components/ParallaxScrolling/Container/ParallaxContainer";
import ParallaxItem from "@components/ParallaxScrolling/Item/ParallaxItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ParallaxContainer",
  args: {
    bodyHeight: "100vh",
  },
  component: ParallaxContainer,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ParallaxContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    return (
      <ParallaxContainer bodyHeight={args.bodyHeight}>
        <ParallaxItem
          imageUrl={
            "https://images.pexels.com/photos/3081487/pexels-photo-3081487.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3081487.jpg&fm=jpg"
          }
        >
          hahaha
        </ParallaxItem>
        <ParallaxItem imageUrl="https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80">
          hahaha
        </ParallaxItem>
        <ParallaxItem
          imageUrl={
            "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
          }
        >
          hahaha
        </ParallaxItem>
      </ParallaxContainer>
    );
  },
};
