import React from 'react';
import styled from 'styled-components';

import type { Meta, StoryObj } from '@storybook/react';
import Grid from '../components/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
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

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </>
    ),
  },
};
