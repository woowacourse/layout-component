import type { Meta, StoryObj } from '@storybook/react';
import ParallaxScrolling from '../components/ParallaxScrolling';
import ParallaxItem from '../components/ParallaxItem';

const meta: Meta<typeof ParallaxScrolling> = {
  title: 'ParallaxScrolling',
  component: ParallaxScrolling,
};

export default meta;

type Story = StoryObj<typeof ParallaxScrolling>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ParallaxItem
          speed={0}
          scale={500}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/galaxy.jpg'}
          objectFit='cover'
        />
        <ParallaxItem
          speed={0.8}
          scale={8}
          right='8000px'
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/neptune.png'}
          objectFit='contain'
        />
        <ParallaxItem
          speed={0.4}
          scale={8}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/mars.png'}
          objectFit='contain'
          left='8000px'
        />
        <ParallaxItem
          speed={0.000001}
          scale={5}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/atmosphere.png'}
          objectFit='contain'
        />
      </>
    ),
  },
};
