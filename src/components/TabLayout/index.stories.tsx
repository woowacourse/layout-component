import type { Meta, StoryObj } from '@storybook/react';

import TabLayout from '.';
import Container from '../Container';

const tabs = ['1번', '2번', '33333333333333333번', '444444444444444444444444444444444번'];

const meta = {
  title: 'TabLayout',
  component: TabLayout,
  args: {
    tabs,
    width: 400,
    height: 400,
  },
} satisfies Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
        <Container>탭4</Container>
      </TabLayout>
    );
  },
};

export const LongPanel: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} width={400} height={400}>
        <Container>
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
          탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1탭1
        </Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};

export const TabJustifyCenter: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} tabJustify='center' width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};

export const TabJustifyEnd: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} tabJustify='end' width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};

export const TabPositionTop: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} tabPosition='top' width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};

export const TabPositionRight: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} tabPosition='right' width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};

export const TabPositionBottom: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} tabPosition='bottom' width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};

export const TabPositionLeft: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} tabPosition='left' width={400} height={400}>
        <Container>탭1</Container>
        <Container>탭2</Container>
        <Container>탭3</Container>
      </TabLayout>
    );
  },
};
