import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Container from '../components/Container';

const Content = styled.div`
  width: 100%;
  height: 300px;

  background-color: #11b1f0;
`;

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    minWidth: '1/2',
    maxWidth: '1/3',
    children: <Content />,
  },
};
