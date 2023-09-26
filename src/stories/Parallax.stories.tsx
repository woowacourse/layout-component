import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Parallax from '../lib/Parallax/Parallax';

const meta = {
  component: Parallax,
  title: 'Parallax',
} satisfies Meta<typeof Parallax>;

export default meta;
type Story = StoryObj<typeof Parallax>;

export const Default: Story = {
  render: () => {
    return (
      <Parallax>
        <Parallax.Item speed={9} image="https://www.firewatchgame.com/images/parallax/parallax0.png"></Parallax.Item>
        <Parallax.Item speed={8} image="http://www.firewatchgame.com/images/parallax/parallax1.png"></Parallax.Item>
        <Parallax.Item speed={7} image="http://www.firewatchgame.com/images/parallax/parallax2.png"></Parallax.Item>
        <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax3.png"></Parallax.Item>
        <Parallax.Item speed={5} image="http://www.firewatchgame.com/images/parallax/parallax4.png"></Parallax.Item>
        <Parallax.Item speed={4} image="http://www.firewatchgame.com/images/parallax/parallax5.png"></Parallax.Item>
        <Parallax.Item speed={3} image="http://www.firewatchgame.com/images/parallax/parallax6.png"></Parallax.Item>
        <Parallax.Item speed={3} image="http://www.firewatchgame.com/images/parallax/parallax7.png"></Parallax.Item>
      </Parallax>
    );
  },
};
