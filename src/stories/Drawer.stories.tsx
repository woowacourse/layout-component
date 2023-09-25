import type { Meta, StoryObj } from '@storybook/react'
import Drawer from './Drawer'
import React from 'react'

const meta = {
  title: 'Components/Layout/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const DrawerRight: Story = {
  args: {
    direction: 'right',
    size: 'xs',
  },

  argTypes: {
    direction: {
      description:
        'Drawer가 나타나는 방향을 설정할 수 있습니다. 들어갈 수 있는 값은 "right" / "left" / "top"  /"bottom"가 있습니다.',
    },
    size: {
      description:
        'Drawer의 크기를 설정할 수 있습니다. 들어갈 수 있는 값은 "xs" / "sm" / "md" / "lg" / "xl" / "full"가 있습니다.',
    },
  },
}

export const DrawerLeft: Story = {
  args: {
    direction: 'left',
    size: 'xs',
  },
  render: (args) => {
    return (
      <>
        <Drawer direction={args.direction} size={args.size} />
      </>
    )
  },
}

export const DrawerTop: Story = {
  args: {
    direction: 'top',
    size: 'xs',
  },
  render: (args) => {
    return (
      <>
        <Drawer direction={args.direction} size={args.size} />
      </>
    )
  },
}

export const DrawerBottom: Story = {
  args: {
    direction: 'bottom',
    size: 'xs',
  },
  render: (args) => {
    return (
      <>
        <Drawer direction={args.direction} size={args.size} />
      </>
    )
  },
}