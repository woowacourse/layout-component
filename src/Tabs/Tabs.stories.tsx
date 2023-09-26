import Tabs from './Tabs';
import { Meta } from '@storybook/react';

export default {
  title: 'Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      description:
        'defaultValue 프로퍼티는 기본적으로 활성화 할 탭을 설정합니다',
    },
    onValueChange: {
      description: 'onValueChange 프로퍼티는 탭이 변경될 때 실행됩니다',
    },
    asChild: {
      description:
        'asChild 프로퍼티가 true인 경우 현재 엘리먼트를 자식 엘리먼트로 대체합니다',
    },
  },
} satisfies Meta<typeof Tabs>;

export const Basic = () => (
  <Tabs defaultValue="tab1">
    <Tabs.List>
      <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">panel1</Tabs.Content>
    <Tabs.Content value="tab2">panel2</Tabs.Content>
  </Tabs>
);
