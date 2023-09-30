import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import usePortal from '../hooks/usePortal';

type Props = {
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  isOpen: boolean;
  toggleDrawer: () => void;
};

const Drawer = ({ anchor = 'left', isOpen, toggleDrawer, children }: PropsWithChildren<Props>) => {
  const { portalRootRef } = usePortal('drawer-root');

  return createPortal(
    <>
      {isOpen && <Backdrop isOpen={isOpen} onClick={toggleDrawer} />}
      <Container isOpen={isOpen} anchor={anchor}>
        {children}
      </Container>
    </>,
    portalRootRef.current,
  );
};

export default Drawer;

type BackdropProps = Pick<Props, 'isOpen'>;

type ContainerProps = Omit<Props, 'toggleDrawer'>;

const Backdrop = styled.div<BackdropProps>`
  visibility: ${props => `${props.isOpen ? 'visible' : 'hidden'}`};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div<ContainerProps>`
  position: fixed;
  transition: transform 0.2s ease-in-out;
  background-color: white;

  ${({ anchor, isOpen }) => {
    const leftAndRightStyles = css`
      top: 0;
      width: auto;
      height: 100vh;
    `;

    const topAndBottomStyles = css`
      left: 0;
      right: 0;
      width: 100%;
      height: auto;
    `;

    switch (anchor) {
      case 'left':
        return css`
          ${leftAndRightStyles}
          left: 0;
          transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        `;
      case 'right':
        return css`
          ${leftAndRightStyles}
          right: 0;
          transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
        `;
      case 'bottom':
        return css`
          ${topAndBottomStyles}
          bottom: 0;
          transform: ${isOpen ? 'translateY(0)' : 'translateY(100%)'};
        `;
      case 'top':
        return css`
          ${topAndBottomStyles}
          top: 0;
          transform: ${isOpen ? 'translateY(0)' : 'translateY(-100%)'};
        `;
      default:
        return;
    }
  }};
`;
