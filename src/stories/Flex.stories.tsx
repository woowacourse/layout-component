import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../Flex';

const meta: Meta<typeof Flex> = {
  component: Flex,

  argTypes: {
    direction: {
      description: 'flex-direction',
      defaultValue: { summary: 'row' },
    },
    align: {
      description: 'align-items',
      defaultValue: { summary: 'normal' },
    },
    justify: {
      description: 'justify-center',
      defaultValue: { summary: 'normal' },
    },
    inline: {
      description: 'inline-flex를 원할 경우 true로 설정',
      defaultValue: { summary: 'false' },
    },
    wrap: {
      description: 'flex-wrap',
      defaultValue: { summary: 'nowrap' },
    },
    gap: {
      description: '하위 요소들 사이의 간격',
      defaultValue: { summary: '' },
    },
  },

  args: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    gap: '10px',
    wrap: 'nowrap',
    inline: false,
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Line = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <p style={{ margin: '0' }}>{children}</p>;
};

export const Example: Story = {
  render: (args) => (
    <Flex style={{ border: '2px solid hotpink' }} {...args}>
      <Line>가을 커피</Line>
      <Line>용혜원</Line>
      <Line>노란 은행잎이 떨어지는</Line>
      <Line>가을 도시를 바라보며</Line>
      <Line>커피를 마신다</Line>
      <Line>은행잎 하나</Line>
      <Line>띄워 마시면</Line>
      <Line>이 가을을</Line>
      <Line>마실 수 있을까</Line>
      <Line>하늘에서</Line>
      <Line>푸른 물감이</Line>
      <Line>커피잔에 뚝 떨어져</Line>
      <Line>고독에 물든</Line>
      <Line>마음의 색깔을 바꿀 수 있을까</Line>
      <Line>입술에 젖어오는</Line>
      <Line>쓴맛과 단맛</Line>
      <Line>프림의 조화를 이루는</Line>
      <Line>그 날의 커피는</Line>
      <Line>가을색으로 물들었다</Line>
    </Flex>
  ),
};
