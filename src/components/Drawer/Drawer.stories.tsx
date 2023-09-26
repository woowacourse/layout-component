import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Drawer, { Anchor } from './index';

const meta = {
  title: 'Drawer',
  component: Drawer,
  args: {},
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => {
      setState({ ...state, [anchor]: open });
    };

    return (
      <>
        {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <button onClick={() => toggleDrawer(anchor, true)}>{anchor}</button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={() => toggleDrawer(anchor, false)}
            >
              {/* {list(anchor)} */}
              <div>asd</div>
            </Drawer>
          </React.Fragment>
        ))}
      </>
    );
  },
};

export const Variants: Story = {};
