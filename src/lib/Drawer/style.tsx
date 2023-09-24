import styled, { css } from 'styled-components';
import { ANCHOR } from './type';
import { popBottom, popLeft, popRight, popTop } from './animation';

interface StyledDrawerProps {
  $anchor: ANCHOR;
}

export const BaseDrawer = styled.div<StyledDrawerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.$anchor === 'left' || props.$anchor === 'right' ? '180px' : '100vw')};
  height: ${(props) => (props.$anchor === 'left' || props.$anchor === 'right' ? '100vh' : '180px')};

  ${(props) =>
    props.$anchor === 'left' &&
    css`
      left: 0px;
      animation: ${popLeft} 400ms ease-in-out;
    `}

  ${(props) =>
    props.$anchor === 'top' &&
    css`
      top: 0px;
      animation: ${popTop} 400ms ease-in-out;
    `}

    ${(props) =>
    props.$anchor === 'right' &&
    css`
      right: 0px;
      animation: ${popRight} 400ms ease-in-out;
    `}

    ${(props) =>
    props.$anchor === 'bottom' &&
    css`
      bottom: 0px;
      animation: ${popBottom} 400ms ease-in-out;
    `}



  
  background-color: red;
`;
