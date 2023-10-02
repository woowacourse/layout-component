import type { Meta, StoryObj } from '@storybook/react';

import Drawer from '../components/Drawer';
import { useModal } from '../hooks/useModal';

const meta = {
  title: 'Example/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: '화면의 한쪽에서 슬라이드 형태로 나타나는 메뉴나 사이드바를 제공하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  render() {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <button type="button" onClick={openModal}>
          Drawer 열기
        </button>
        {isOpen && (
          <Drawer placement="left" onClose={closeModal}>
            <div style={{ width: '20vw', height: '100vh', backgroundColor: '#81D4FA' }}>Contents</div>
          </Drawer>
        )}
      </>
    );
  },
};

export const Right: Story = {
  render() {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <button type="button" onClick={openModal}>
          Drawer 열기
        </button>
        {isOpen && (
          <Drawer placement="right" onClose={closeModal}>
            <div style={{ width: '20vw', height: '100vh', backgroundColor: '#81D4FA' }}>Contents</div>
          </Drawer>
        )}
      </>
    );
  },
};

export const Top: Story = {
  render() {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <button type="button" onClick={openModal}>
          Drawer 열기
        </button>
        {isOpen && (
          <Drawer placement="top" onClose={closeModal}>
            <div style={{ width: '100vw', height: '20vh', backgroundColor: '#81D4FA' }}>Contents</div>
          </Drawer>
        )}
      </>
    );
  },
};

export const Bottom: Story = {
  render() {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <button type="button" onClick={openModal}>
          Drawer 열기
        </button>
        {isOpen && (
          <Drawer placement="bottom" onClose={closeModal}>
            <div style={{ width: '100vw', height: '20vh', backgroundColor: '#81D4FA' }}>Contents</div>
          </Drawer>
        )}
      </>
    );
  },
};
