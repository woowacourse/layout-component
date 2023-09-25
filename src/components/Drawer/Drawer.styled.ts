import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { DrawerProps } from '~/components/Drawer/Drawer';

type DrawerRootProps = Omit<DrawerProps, 'isOpen' | 'onClose'> & {
  isTransitionActive: boolean;
};

export const Dimmer = styled.div<{
  isTransitionActive: boolean;
  transitionDurationMS: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  transition: opacity
    ${({ transitionDurationMS }) => `${transitionDurationMS}ms`} ease;
  ${({ isTransitionActive }) => {
    if (!isTransitionActive) {
      return css`
        opacity: 0;
      `;
    }
  }}
`;

export const DrawerRoot = styled.div<DrawerRootProps>`
  position: absolute;
  transition: transform
    ${({ transitionDurationMS }) => `${transitionDurationMS}ms`} ease-in-out;
  ${({ placement }) => {
    if (placement === 'left') {
      return css`
        top: 0;
        left: 0;
        bottom: 0;
        transform: translateX(-100%);
      `;
    }

    if (placement === 'right') {
      return css`
        top: 0;
        right: 0;
        bottom: 0;
        transform: translateX(100%);
      `;
    }

    if (placement === 'top') {
      return css`
        top: 0;
        transform: translateY(-100%);
      `;
    }

    if (placement === 'bottom') {
      return css`
        bottom: 0;
        transform: translateY(100%);
      `;
    }
  }}
  ${({ placement, isTransitionActive }) => {
    if (isTransitionActive) {
      if (placement === 'left' || placement === 'right') {
        return css`
          transform: translateX(0);
        `;
      }

      if (placement === 'top' || placement === 'bottom') {
        return css`
          transform: translateY(0);
        `;
      }
    }
  }}
  ${({ placement, size }) => {
    if (placement === 'left' || placement === 'right') {
      return css`
        width: ${size === 'default' ? '378px' : '736px'};
        height: 100%;
      `;
    }

    if (placement === 'top' || placement === 'bottom') {
      return css`
        width: 100%;
        height: ${size === 'default' ? '378px' : '736px'};
      `;
    }
  }}
  background-color: #fff;
  box-shadow: -6px 0 16px 0 rgba(0, 0, 0, 0.08),
    -3px 0 6px -4px rgba(0, 0, 0, 0.12), -9px 0 28px 8px rgba(0, 0, 0, 0.05);
  ${({ css }) => css}
`;
