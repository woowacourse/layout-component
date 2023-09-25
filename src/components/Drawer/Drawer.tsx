import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useToggleTransition } from '~/hooks/useToggleTransition';
import type { CSSInterpolation } from '@emotion/serialize';
import * as S from './Drawer.styled';

export interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'default' | 'large';
  transitionDurationMS?: number;
  css?: CSSInterpolation;
}

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    isOpen,
    onClose,
    placement = 'right',
    size = 'default',
    transitionDurationMS = 300,
    css,
  } = props;
  const [shouldRenderDrawer, isTransitionActive, handleTransitionEnd] =
    useToggleTransition(isOpen);

  useEffect(() => {
    if (shouldRenderDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [shouldRenderDrawer]);

  useEffect(() => {
    const handleEscapeKeydown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') {
        return;
      }

      onClose();
    };

    document.addEventListener('keydown', handleEscapeKeydown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown);
    };
  }, [onClose]);

  return createPortal(
    <>
      {shouldRenderDrawer && (
        <>
          <S.Dimmer
            isTransitionActive={isTransitionActive}
            transitionDurationMS={transitionDurationMS}
            onClick={onClose}
            onTransitionEnd={handleTransitionEnd}
          />
          <S.DrawerRoot
            role="dialog"
            aria-modal
            placement={placement}
            size={size}
            css={css}
            transitionDurationMS={transitionDurationMS}
            isTransitionActive={isTransitionActive}
            onTransitionEnd={handleTransitionEnd}
          >
            {children}
          </S.DrawerRoot>
        </>
      )}
    </>,
    document.body,
  );
};
