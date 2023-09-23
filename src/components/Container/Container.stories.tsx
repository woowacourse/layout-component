import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Container from './index';

const Item = (
  <div style={{ backgroundColor: '#0064ff', height: '50vh' }}>
    컨텐츠를담은텍스트입니다브라우저가Container의minWidth보다작아지면텍스트가더이상보이지않는걸확인할수있습니다
  </div>
);

const meta = {
  title: 'Example/Container',
  component: Container,
  parameters: {},
  args: {
    minWidth: '200px',
    maxWidth: '400px',
    children: Item,
  },
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
  args: {
    minWidth: '100px',
    maxWidth: '300px',
  },
};
