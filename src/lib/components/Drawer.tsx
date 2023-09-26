import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import usePortal from '../hooks/usePortal';

type Props = {
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  isOpen: boolean;
  toggleDrawer: () => void;
};

const Drawer = ({ anchor = 'left', isOpen, toggleDrawer, children }: PropsWithChildren<Props>) => {
  const { portalRootRef } = usePortal('drawer-root');

  return createPortal(
    <Backdrop isOpen={isOpen} onClick={toggleDrawer}>
      <Container isOpen={isOpen} anchor={anchor}>
        {children}
      </Container>
    </Backdrop>,
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

  background-color: ${props => `rgba(0, 0, 0, ${props.isOpen ? 0.5 : 0})`};
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => `${props.anchor === 'bottom' ? 'flex-end' : 'flex-start'}`};

  position: fixed;
  ${props => (props.anchor === 'left' ? 'left: 0;' : '')}
  ${props => (props.anchor === 'right' ? 'right: 0;' : '')}
  ${props => (props.anchor === 'top' ? 'top: 0;' : '')}
  ${props => (props.anchor === 'bottom' ? 'bottom: 0;' : '')}
  z-index: 3;

  width: ${props => `${props.anchor === 'left' || props.anchor === 'right' ? 'auto' : '100%'}`};
  height: ${props => `${props.anchor === 'left' || props.anchor === 'right' ? '100vh' : 'auto'}`};

  transform: ${props =>
    props.isOpen
      ? props.anchor === 'left' || props.anchor === 'right'
        ? 'translateX(0)'
        : 'translateY(0)'
      : props.anchor === 'left' || props.anchor === 'right'
      ? `translateX(${props.anchor === 'left' ? '-110%' : '100%'})`
      : `translateY(${props.anchor === 'top' ? '-110%' : '100%'})`};
  transition: transform 0.2s ease-in-out;

  background-color: white;
`;
