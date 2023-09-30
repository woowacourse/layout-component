import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

export type Anchor = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT';

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  anchor: Anchor;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
}

const Drawer = ({
  anchor,
  isOpen,
  onClose,
  children,
  backgroundColor,
  ...divProps
}: DrawerProps) => {
  const handleClose = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleClose);
    }

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [isOpen]);

  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={onClose} />
      <Container
        $anchor={anchor}
        $isOpen={isOpen}
        $backgroundColor={backgroundColor}
        {...divProps}
      >
        {children}
      </Container>
    </>
  );
};

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
  $anchor: Anchor;
  $isOpen: boolean;
  $backgroundColor?: string;
}>`
  position: fixed;
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s;

  ${({ $anchor }) => positions[$anchor]}
  ${({ $isOpen, $anchor }) =>
    $isOpen ? openAnimation : closeAnimation[$anchor]}
  
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : '#ffffff'};

  box-shadow: 1px 0px 4px #333333;
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
