import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAnimation } from '~/hooks/useAnimation';
import type { CSSInterpolation } from '@emotion/serialize';
import * as S from './Drawer.styled';

export interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'default' | 'large';
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  transitionDurationMS?: number;
  zIndex?: number;
  css?: CSSInterpolation;
}

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    isOpen,
    onClose,
    placement = 'right',
    size = 'default',
    width,
    height,
    transitionDurationMS = 300,
    zIndex = 1000,
    css,
  } = props;
  const [shouldRender, isTransitionActive, handleTransitionEnd] =
    useAnimation(isOpen);

  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [shouldRender]);

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
      {shouldRender && (
        <>
          <S.Dimmer
            isTransitionActive={isTransitionActive}
            transitionDurationMS={transitionDurationMS}
            onClick={onClose}
            onTransitionEnd={handleTransitionEnd}
            zIndex={zIndex}
          />
          <S.DrawerRoot
            role="dialog"
            aria-modal
            placement={placement}
            size={size}
            width={width}
            height={height}
            css={css}
            transitionDurationMS={transitionDurationMS}
            isTransitionActive={isTransitionActive}
            onTransitionEnd={handleTransitionEnd}
            zIndex={zIndex}
          >
            {children}
          </S.DrawerRoot>
        </>
      )}
    </>,
    document.body,
  );
};
