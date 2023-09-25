import type { Meta, StoryObj } from '@storybook/react';

import TabLayout from '.';
import Container from '../Container';

const tabs = ['1번', '2번', '3번'];

const meta = {
  title: 'TabLayout',
  component: TabLayout,
  args: {
    tabs,
    width: 400,
    height: 400,
    backgroundColor: '#139eca',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <TabLayout tabs={tabs} width={400} height={400} backgroundColor='#23272f'>
        <Container color='white' backgroundColor='inherit'>
          탭1
        </Container>
        <Container color='white' backgroundColor='inherit'>
          탭2
        </Container>
        <Container color='white' backgroundColor='inherit'>
          탭3
        </Container>
      </TabLayout>
    );
  },
};
