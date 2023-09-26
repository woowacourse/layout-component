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
          translateZ={-7}
          scale={25}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/galaxy.jpg'}
          objectFit='cover'
        />
        <ParallaxItem
          translateZ={-10}
          scale={3}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/neptune.png'}
          right='10000px'
          objectFit='contain'
        />
        <ParallaxItem
          translateZ={-7}
          scale={8}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/mars.png'}
          objectFit='contain'
          left='8000px'
        />
        <ParallaxItem
          translateZ={-6}
          scale={5}
          imgUrl={'https://d3ex8zhlkii399.cloudfront.net/atmosphere.png'}
          objectFit='contain'
        />
      </>
    ),
  },
};
