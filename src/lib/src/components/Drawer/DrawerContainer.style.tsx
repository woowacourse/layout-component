import styled, { keyframes } from 'styled-components';
import { DrawerAnchor } from './store/drawerOpenStore';

const slide = (anchor: DrawerAnchor) => {
  switch (anchor) {
    case 'top':
      return keyframes`
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0%);
        }
      `;
    case 'bottom':
      return keyframes`
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        `;
    case 'left':
      return keyframes`
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0%);
            }
          `;
    case 'right':
      return keyframes`
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0%);
              }
            `;
  }
};

export const StyledDrawer = styled.div<{ anchor: DrawerAnchor }>`
  position: fixed;

  ${({ anchor }) => {
    switch (anchor) {
      case 'top':
        return `
          top: 0;
          left: 0;
          width: 100vw;
          height: fit-content;
        `;
      case 'left':
        return `
          top: 0;
          left: 0;
          width: fit-content;
          height: 100vh;
        `;
      case 'right':
        return `
          top: 0;
          right: 0;
          width: fit-content;
          height: 100vh;
        `;
      case 'bottom':
        return `
          bottom: 0;
          left: 0;
          width: 100vw;
          height: fit-content;
        `;
    }
  }}

  animation: ${({ anchor }) => {
    return slide(anchor);
  }}
    0.4s ease-in-out;

  z-index: 999;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #0000005c;
`;
