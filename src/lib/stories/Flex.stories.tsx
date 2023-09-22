import React from 'react';
import styled from 'styled-components';

import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../components/Flex';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
};

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  background-color: skyblue;

  color: white;
`;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    gap: '12px',
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
      </>
    ),
  },
};
