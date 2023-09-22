import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  title: 'LAYOUT/Container',
  component: Container,
  argTypes: {
    tag: {
      options: ['div', 'span', 'section', 'main'],
      control: {
        type: 'select',
      },
    },
    $maxWidth: {
      control: 'text',
    },
    $minWidth: {
      control: 'text',
    },
    background: {
      control: 'text',
    },
    children: {
      description: 'Container Layout의 자식 요소',
    },
  },
};

export default meta;

export const DefaultContainer: Story = {
  args: {
    children: 'Default',
  },
};

export const XSmallContainer: Story = {
  args: {
    $minWidth: '450px',
    $maxWidth: '450px',
    children: 'X Small Size',
  },
};

export const SmallContainer: Story = {
  args: {
    $minWidth: '600px',
    $maxWidth: '600px',
    children: 'Small Size',
  },
};

export const MediumContainer: Story = {
  args: {
    $minWidth: '900px',
    $maxWidth: '900px',
    children: 'Medium Size',
  },
};

export const LargeContainer: Story = {
  args: {
    $minWidth: '1200px',
    $maxWidth: '1200px',
    children: 'Large Size',
  },
};

export const XLargeContainer: Story = {
  args: {
    $minWidth: '1500px',
    $maxWidth: '1500px',
    children: 'X Large Size',
  },
};

export const BlueContainer: Story = {
  args: {
    $minWidth: '900px',
    $maxWidth: '900px',
    children: 'Blue Background',
    background: '#cfe8fc',
  },
};

export const ImageContainer: Story = {
  args: {
    $minWidth: '900px',
    $maxWidth: '900px',
    children: 'Image Background',
    background:
      "center / cover no-repeat url('https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')",
  },
};

export const CustomContainer: Story = {
  args: {
    $minWidth: '900px',
    $maxWidth: '900px',
    children: 'Custom',
    style: {
      padding: '20px',
      boxSizing: 'border-box',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
  },
};

export const ResponsiveContainer: Story = {
  args: {
    $minWidth: {
      desktop: '900px',
      tablet: '600px',
      mobile: '450px',
    },
    $maxWidth: {
      desktop: '900px',
      tablet: '600px',
      mobile: '450px',
    },
    background: {
      desktop: 'blue',
      tablet: 'yellow',
      mobile: 'red',
    },
    children: 'Responsive',
  },
};

export const CustomResponsiveContainer: Story = {
  args: {
    background: {
      desktop: 'blue',
      tablet: [800, 'yellow'],
      mobile: [400, 'red'],
    },
    children: 'Responsive',
  },
};
