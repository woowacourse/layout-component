import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';
import { CSSProperties, css } from 'styled-components';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    minWidth: '780px',
    maxWidth: '1920px',
    minHeight: '100px',
    maxHeight: '1920px',
    width: '100px',
    height: '100px',
    children: <div>Container</div>,
    css: css`
      font-size: 2rem;
      font-weight: bold;
    `,
  },

  render: (args) => {
    return (
      <>
        <Container {...args} backgroundColor={hexToRgba(args.backgroundColor, 0.2) || '#bffff5'} />
        <Container {...args} backgroundColor={hexToRgba(args.backgroundColor, 0.4) || '#98fff0'} />
        <Container {...args} backgroundColor={hexToRgba(args.backgroundColor, 0.6) || '#64e3d0'} />
        <Container {...args} backgroundColor={hexToRgba(args.backgroundColor, 0.8) || '#49b9a8'} />
        <Container {...args} backgroundColor={args.backgroundColor || '#2c9484'} />
      </>
    );
  },
};

const hexToRgba = (hex?: CSSProperties['backgroundColor'], opacity: number = 1) => {
  if (!hex) return;

  // #을 제거하고 앞에 '0x'를 붙여 16진수를 10진수로 변환
  const r = parseInt(String(hex).slice(1, 3), 16);
  const g = parseInt(String(hex).slice(3, 5), 16);
  const b = parseInt(String(hex).slice(5, 7), 16);

  // RGBA 문자열로 반환
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
