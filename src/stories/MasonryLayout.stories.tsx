import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import MasonryLayout, { _MasonryLayoutProps } from '../lib/MasonryLayout';
import { CommonStyleProps } from '../lib/style/common';
import styled from 'styled-components';

const meta = {
  title: 'MasonryLayout',
  component: MasonryLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      defaultValue: '100%',
      description: '컴포넌트의 너비를 조정할 수 있습니다.',
    },
    as: {
      control: 'text',
      defaultValue: 'div',
      description:
        'HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다.',
    },
    fullScreen: {
      control: 'boolean',
      description: 'true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)',
    },
    css: {
      control: 'object',
      description:
        '디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다.',
    },
  },
} satisfies Meta<typeof MasonryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

type ComponentProps = _MasonryLayoutProps & CommonStyleProps;

const IMAGE_URL = [
  'https://plus.unsplash.com/premium_photo-1668883188879-3a7acd2bec58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1695642579325-5d2d11fd9e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
  'https://images.unsplash.com/photo-1695597778289-fc1f5c715958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  'https://plus.unsplash.com/premium_photo-1695517711308-f71ece6ded77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://plus.unsplash.com/premium_photo-1673435845957-17f7b38f5dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
  'https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://plus.unsplash.com/premium_photo-1695517699512-a8abe3cc07b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1695378201929-c7e68a8102bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80',
  'https://images.unsplash.com/photo-1695235777899-2b422e2a94d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
  'https://images.unsplash.com/photo-1693985319989-7952a07d0e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1682685797365-6f57bbebffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1695378202330-4d0566dfec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
  'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  'https://plus.unsplash.com/premium_photo-1668883188879-3a7acd2bec58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1695642579325-5d2d11fd9e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
  'https://images.unsplash.com/photo-1695597778289-fc1f5c715958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  'https://plus.unsplash.com/premium_photo-1695517711308-f71ece6ded77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://plus.unsplash.com/premium_photo-1673435845957-17f7b38f5dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
  'https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://plus.unsplash.com/premium_photo-1695517699512-a8abe3cc07b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1695378201929-c7e68a8102bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80',
  'https://images.unsplash.com/photo-1695235777899-2b422e2a94d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
  'https://images.unsplash.com/photo-1693985319989-7952a07d0e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1682685797365-6f57bbebffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1695378202330-4d0566dfec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
  'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
];

const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * IMAGE_URL.length);

  return IMAGE_URL[randomIndex];
};

const MOCK_RANDOM_IMAGE_LIST = new Array(IMAGE_URL.length).fill(1).map(() => {
  return getRandomImageUrl();
});

function MasonryLayoutStory(props: ComponentProps) {
  return (
    <MasonryLayout {...props}>
      {MOCK_RANDOM_IMAGE_LIST.map((item) => {
        return <Image loading="lazy" src={item} alt="랜덤 이미지" />;
      })}
    </MasonryLayout>
  );
}

export const ColumnMasonry: Story = {
  render: (props) => <MasonryLayoutStory {...props} />,
  args: {
    direction: 'column',
    itemSize: '25%',
    gap: '10px',
    width: '90%',
    p: '20px',
  },
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  object-fit: cover;
`;
