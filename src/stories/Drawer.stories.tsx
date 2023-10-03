import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "../components/index";

const meta = {
  title: "common/drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Top: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const open = () => {
        setIsOpen(true);
      };
      const close = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={open}>OPEN</button>
          <Story
            isOpen={isOpen}
            onClose={close}
            args={{
              anchor: "TOP",
              isOpen: isOpen,
              onClose: close,
              children: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20vh",
                    border: "1px solid skyblue",
                    backgroundColor: "lightcyan",
                  }}
                >
                  Drawer
                </div>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: "TOP",
    isOpen: false,
    onClose: () => {},
  },
};

export const Bottom: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const open = () => {
        setIsOpen(true);
      };
      const close = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={open}>OPEN</button>
          <Story
            isOpen={isOpen}
            onClose={close}
            args={{
              anchor: "BOTTOM",
              isOpen: isOpen,
              onClose: close,
              children: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20vh",
                    border: "1px solid skyblue",
                    backgroundColor: "lightcyan",
                  }}
                >
                  Drawer
                </div>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: "BOTTOM",
    isOpen: false,
    onClose: () => {},
  },
};

export const Right: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const open = () => {
        setIsOpen(true);
      };
      const close = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={open}>OPEN</button>
          <Story
            isOpen={isOpen}
            onClose={close}
            args={{
              anchor: "RIGHT",
              isOpen: isOpen,
              onClose: close,
              children: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30vh",
                    height: "100vh",
                    border: "1px solid skyblue",
                    backgroundColor: "lightcyan",
                  }}
                >
                  Drawer
                </div>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: "RIGHT",
    isOpen: false,
    onClose: () => {},
  },
};

export const Left: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const open = () => {
        setIsOpen(true);
      };
      const close = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={open}>OPEN</button>
          <Story
            isOpen={isOpen}
            onClose={close}
            args={{
              anchor: "LEFT",
              isOpen: isOpen,
              onClose: close,
              children: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30vh",
                    height: "100vh",
                    border: "1px solid skyblue",
                    backgroundColor: "lightcyan",
                  }}
                >
                  Drawer
                </div>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: "LEFT",
    isOpen: false,
    onClose: () => {},
  },
};
