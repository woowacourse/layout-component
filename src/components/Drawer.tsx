import { css, keyframes } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import { createPortal } from 'react-dom';

export interface DrawerProps extends ComponentPropsWithoutRef<React.ElementType> {
  placement: 'left' | 'right' | 'top' | 'bottom';
  isVisible: boolean;
  onClose: () => void;
}

const Drawer = ({ placement = 'left', isVisible, onClose, children }: DrawerProps) => {
  return createPortal(
    <>
      <div css={backdropStyle} onClick={onClose} />
      <div
        css={[
          drawerStyles[placement],
          isVisible ? showSheet[placement] : hideSheet[placement],
          { position: 'fixed', opacity: 0 },
        ]}
      >
        {children}
      </div>
    </>,
    document.body,
  );
};

const backdropStyle = css`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

const SlideOpen = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const showSheet = {
  left: css`
    transform: translateX(-100%);
    animation: ${SlideOpen} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,

  right: css`
    opacity: 0;
    transform: translateX(100%);
    animation: ${SlideOpen} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,

  top: css`
    opacity: 0;
    transform: translateY(-100%);
    animation: ${SlideOpen} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,

  bottom: css`
    opacity: 0;
    transform: translateY(100%);
    animation: ${SlideOpen} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,
};

const hideSheet = {
  left: css`
    opacity: 1;

    @keyframes SlideCloseLeft {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateX(-100%);
      }
    }

    animation: SlideCloseLeft 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,

  right: css`
    opacity: 1;

    @keyframes SlideCloseRight {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateX(100%);
      }
    }

    animation: SlideCloseRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,

  top: css`
    opacity: 1;

    @keyframes SlideCloseTop {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateY(-100%);
      }
    }

    animation: SlideCloseTop 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,

  bottom: css`
    opacity: 1;

    @keyframes SlideCloseBottom {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateY(100%);
      }
    }

    animation: SlideCloseBottom 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s forwards;
  `,
};

const drawerStyles = {
  left: css`
    height: 100vh;
    top: 0;
    left: 0;
  `,

  right: css`
    height: 100vh;
    top: 0;
    right: 0;
  `,

  top: css`
    width: 100vw;
    top: 0;
    left: 0;
  `,

  bottom: css`
    width: 100vw;
    bottom: 0;
    left: 0;
  `,
};

export default Drawer;
