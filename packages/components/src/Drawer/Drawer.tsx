import React from 'react';
import styled, { css } from 'styled-components';
import DrawerPanel, { DrawerPanelProps } from './DrawerPanel';

export type Anchor = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT';

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  anchor: Anchor;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
}

const Drawer: React.FC<DrawerProps> & {
  Panel: React.FC<DrawerPanelProps>;
} = ({ anchor, isOpen, onClose, children, backgroundColor, ...divProps }) => {
  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={onClose} />
      <Container
        anchor={anchor}
        $isOpen={isOpen}
        $backgroundColor={backgroundColor}
        {...divProps}
      >
        {children}
      </Container>
    </>
  );
};

Drawer.Panel = DrawerPanel;

export default Drawer;

const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
`;

const Container = styled.div<{
  anchor: Anchor;
  $isOpen: boolean;
  $backgroundColor?: string;
}>`
  position: fixed;
  transition: all ease-out 0.4s;

  ${({ anchor }) => positions[anchor]}
  ${({ $isOpen, anchor }) => ($isOpen ? openAnimation : closeAnimation[anchor])}
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : '#333333'}
`;

const positions = {
  TOP: css`
    top: 0;
    left: 0;
    width: 100vw;
  `,
  BOTTOM: css`
    bottom: 0;
    left: 0;
    width: 100vw;
  `,
  RIGHT: css`
    top: 0;
    right: 0;
    height: 100vh;
  `,
  LEFT: css`
    top: 0;
    left: 0;
    height: 100vh;
  `,
};

const openAnimation = css`
  transform: translate(0, 0);
`;

const closeAnimation = {
  TOP: css`
    visibility: hidden;
    transform: translateY(-100%);
  `,
  BOTTOM: css`
    visibility: hidden;
    transform: translateY(100%);
  `,
  RIGHT: css`
    visibility: hidden;
    transform: translateX(100%);
  `,
  LEFT: css`
    visibility: hidden;
    transform: translateX(-100%);
  `,
};
