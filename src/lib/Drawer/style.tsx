import styled, { css } from 'styled-components';
import { ANCHOR } from './type';
import {
  popBottom,
  popLeft,
  popRight,
  popTop,
  pushBottom,
  pushLeft,
  pushRight,
  pushTop,
} from './animation';

interface StyledDrawerProps {
  $anchor: ANCHOR;
  $isOpen: boolean;
}

const getDrawerWidth = (props: StyledDrawerProps) => {
  return props.$anchor === 'left' || props.$anchor === 'right' ? '30vw' : '100vw';
};

const getDrawerMaxWidth = (props: StyledDrawerProps) => {
  if (props.$anchor === 'top' || props.$anchor === 'bottom') return '';
  return '300px';
};

const getDrawerHeight = (props: StyledDrawerProps) => {
  return props.$anchor === 'left' || props.$anchor === 'right' ? '100vh' : '30vh';
};

const getAnimationStyle = (props: StyledDrawerProps) => {
  if (!props.$isOpen) {
    switch (props.$anchor) {
      case 'left':
        return css`
          top: 0px;
          left: 0px;
          animation: ${pushLeft} 400ms ease-in-out reverse;
        `;
      case 'top':
        return css`
          top: 0px;
          left: 0px;
          animation: ${pushTop} 400ms ease-in-out reverse;
        `;
      case 'right':
        return css`
          top: 0px;
          right: 0px;
          animation: ${pushRight} 400ms ease-in-out;
        `;
      case 'bottom':
        return css`
          bottom: 0px;
          left: 0px;
          animation: ${pushBottom} 400ms ease-in-out reverse;
        `;
      default:
        return '';
    }
  } else {
    switch (props.$anchor) {
      case 'left':
        return css`
          top: 0px;
          left: 0px;
          animation: ${popLeft} 400ms ease-in-out;
        `;
      case 'top':
        return css`
          top: 0px;
          left: 0px;
          animation: ${popTop} 400ms ease-in-out;
        `;
      case 'right':
        return css`
          top: 0px;
          right: 0px;
          animation: ${popRight} 400ms ease-in-out;
        `;
      case 'bottom':
        return css`
          bottom: 0px;
          left: 0px;
          animation: ${popBottom} 400ms ease-in-out;
        `;
      default:
        return '';
    }
  }
};

export const BaseDrawer = styled.div<StyledDrawerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: ${(props) => getDrawerWidth(props)};
  max-width: ${(props) => getDrawerMaxWidth(props)};
  height: ${(props) => getDrawerHeight(props)};
  ${(props) => getAnimationStyle(props)};
  overflow: scroll;
  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.4);

  z-index: 2;
  background-color: #fff;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    cursor: pointer;
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
