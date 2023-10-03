import Drawer from './Drawer';
import type { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer isOpen={isOpen} handleDrawerClose={handleDrawerClose} {...args}>
        <div>Drawer 컴포넌트</div>
      </Drawer>
      <button onClick={handleDrawerClose}>Drawer 토글 버튼</button>
    </>
  );
};

export const TopDrawer = Template.bind({});
TopDrawer.args = {
  direction: 'top',
};

export const LeftDrawer = Template.bind({});
LeftDrawer.args = {
  direction: 'left',
};

export const BottomDrawer = Template.bind({});
BottomDrawer.args = {
  direction: 'bottom',
};

export const RightDrawer = Template.bind({});
RightDrawer.args = {
  direction: 'right',
};
