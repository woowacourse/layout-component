import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "../lib";

type Story = StoryObj<typeof Drawer>;

type Direction = "left" | "right" | "top" | "bottom";

const MyDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState<Direction>("left");

  const handleClickLeft = () => {
    setIsOpen(true);
    setDirection("left");
  };

  const handleClickRight = () => {
    setIsOpen(true);
    setDirection("right");
  };

  const handleClickTop = () => {
    setIsOpen(true);
    setDirection("top");
  };

  const handleClickBottom = () => {
    setIsOpen(true);
    setDirection("bottom");
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      <button onClick={handleClickTop}>top</button>
      <button onClick={handleClickBottom}>bottom</button>

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
  component: MyDrawer,
};

export default meta;

export const Default: Story = {};
