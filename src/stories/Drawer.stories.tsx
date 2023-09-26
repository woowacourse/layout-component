import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "../lib";

type Story = StoryObj<typeof Drawer>;

type Direction = "left" | "right" | "top" | "bottom";

type Props = {
  direction: Direction;
};

const DrawerWithOpenState = ({ direction }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openDrawer}>open drawer</button>

      <Drawer direction={direction} isOpen={isOpen} onClose={closeDrawer}>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
      </Drawer>
    </div>
  );
};

const meta: Meta<typeof Drawer> = {
  title: "LAYOUT/Drawer",
  tags: ["autodocs"],
  component: Drawer,
};

export default meta;

export const LeftDrawer: Story = {
  render: () => <DrawerWithOpenState direction="left" />,
};

export const RightDrawer: Story = {
  render: () => <DrawerWithOpenState direction="right" />,
};

export const TopDrawer: Story = {
  render: () => <DrawerWithOpenState direction="top" />,
};

export const BottomDrawer: Story = {
  render: () => <DrawerWithOpenState direction="bottom" />,
};
