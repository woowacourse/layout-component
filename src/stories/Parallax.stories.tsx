import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container, Flex } from '../lib';
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
      <Container>
        <Flex align="center" justify="center" overrideStyle={{ height: '100vh', background: '#ffd280' }}>
          <h1 style={{ color: 'white' }}>welcome to HEAVEN</h1>
        </Flex>
        <Parallax css={{ background: '#2d0a0d' }}>
          <Parallax.Item speed={0} image="http://www.firewatchgame.com/images/parallax/parallax0.png"></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={1}
            image="http://www.firewatchgame.com/images/parallax/parallax1.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={2}
            image="http://www.firewatchgame.com/images/parallax/parallax2.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={3}
            image="http://www.firewatchgame.com/images/parallax/parallax3.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={4}
            image="http://www.firewatchgame.com/images/parallax/parallax4.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={5}
            image="http://www.firewatchgame.com/images/parallax/parallax5.png"
          ></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax6.png"></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax7.png"></Parallax.Item>
        </Parallax>

        <Flex align="center" justify="center" overrideStyle={{ height: '100vh', background: '#ffb835' }}>
          <h1 style={{ color: 'white' }}>...More...High</h1>
        </Flex>

        <Parallax css={{ background: '#2d0a0d' }}>
          <Parallax.Item speed={0} image="http://www.firewatchgame.com/images/parallax/parallax0.png"></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={0.5}
            image="http://www.firewatchgame.com/images/parallax/parallax1.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={2}
            image="http://www.firewatchgame.com/images/parallax/parallax2.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={3}
            image="http://www.firewatchgame.com/images/parallax/parallax3.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={4}
            image="http://www.firewatchgame.com/images/parallax/parallax4.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={5}
            image="http://www.firewatchgame.com/images/parallax/parallax5.png"
          ></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax6.png"></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax7.png"></Parallax.Item>
        </Parallax>
        <Flex align="center" justify="center" overrideStyle={{ height: '100vh', background: '#eba117' }}>
          <h1 style={{ color: 'white' }}>...High</h1>
        </Flex>

        <Parallax css={{ background: '#2d0a0d' }}>
          <Parallax.Item speed={0} image="http://www.firewatchgame.com/images/parallax/parallax0.png"></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={0.5}
            image="http://www.firewatchgame.com/images/parallax/parallax1.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={2}
            image="http://www.firewatchgame.com/images/parallax/parallax2.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={3}
            image="http://www.firewatchgame.com/images/parallax/parallax3.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={4}
            image="http://www.firewatchgame.com/images/parallax/parallax4.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={5}
            image="http://www.firewatchgame.com/images/parallax/parallax5.png"
          ></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax6.png"></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax7.png"></Parallax.Item>
        </Parallax>
        <Flex align="center" justify="center" overrideStyle={{ height: '100vh', background: '#2d0a0d' }}>
          <h1 style={{ color: 'white' }}>...Deep</h1>
        </Flex>
        <Parallax css={{ background: '#2d0a0d' }}>
          <Parallax.Item speed={0} image="http://www.firewatchgame.com/images/parallax/parallax0.png"></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={0.5}
            image="http://www.firewatchgame.com/images/parallax/parallax1.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={2}
            image="http://www.firewatchgame.com/images/parallax/parallax2.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={3}
            image="http://www.firewatchgame.com/images/parallax/parallax3.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={4}
            image="http://www.firewatchgame.com/images/parallax/parallax4.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={5}
            image="http://www.firewatchgame.com/images/parallax/parallax5.png"
          ></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax6.png"></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax7.png"></Parallax.Item>
        </Parallax>
        <Flex align="center" justify="center" overrideStyle={{ height: '100vh', background: '#160d0e' }}>
          <h1 style={{ color: 'white' }}>...More...Deep</h1>
        </Flex>
        <Parallax css={{ background: '#2d0a0d' }}>
          <Parallax.Item speed={0} image="http://www.firewatchgame.com/images/parallax/parallax0.png"></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={0.5}
            image="http://www.firewatchgame.com/images/parallax/parallax1.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={2}
            image="http://www.firewatchgame.com/images/parallax/parallax2.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={3}
            image="http://www.firewatchgame.com/images/parallax/parallax3.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={4}
            image="http://www.firewatchgame.com/images/parallax/parallax4.png"
          ></Parallax.Item>
          <Parallax.Item
            inset="50px 0px"
            speed={5}
            image="http://www.firewatchgame.com/images/parallax/parallax5.png"
          ></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax6.png"></Parallax.Item>
          <Parallax.Item speed={6} image="http://www.firewatchgame.com/images/parallax/parallax7.png"></Parallax.Item>
        </Parallax>
        <Flex align="center" justify="center" overrideStyle={{ height: '100vh', background: '#000000' }}>
          <h1 style={{ color: 'white' }}>Welcome to Hell!</h1>
        </Flex>
      </Container>
    );
  },
};
