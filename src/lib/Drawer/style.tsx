import styled, { css } from 'styled-components';
import { ANCHOR } from './type';

interface StyledDrawerProps {
  $anchor: ANCHOR;
  $isOpen: boolean;
  $padding: number;
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
  const commonCloseStyle = css`
    display: flex;
    transition: transform 400ms ease-in-out;
    box-shadow: none;
  `;

  const commonOpenStyle = css`
    display: flex;
    transition: transform 400ms ease-in-out;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.4);
  `;

  if (!props.$isOpen) {
    switch (props.$anchor) {
      case 'left':
        return css`
          ${commonCloseStyle}
          top: 0;
          left: 0;
          transform: translateX(-100%);
        `;
      case 'top':
        return css`
          ${commonCloseStyle}
          top: 0;
          left: 0;
          transform: translateY(-100%);
        `;
      case 'right':
        return css`
          ${commonCloseStyle}
          top: 0;
          right: 0;
          transform: translateX(100%);
        `;
      case 'bottom':
        return css`
          ${commonCloseStyle}
          bottom: 0;
          left: 0;
          transform: translateY(100%);
        `;
      default:
        return '';
    }
  } else {
    switch (props.$anchor) {
      case 'left':
        return css`
          ${commonOpenStyle}
          top: 0;
          left: 0;
          transform: translateX(0);
        `;
      case 'top':
        return css`
          ${commonOpenStyle}
          top: 0;
          left: 0;
          transform: translateY(0);
        `;
      case 'right':
        return css`
          ${commonOpenStyle}
          top: 0;
          right: 0;
          transform: translateX(0);
        `;
      case 'bottom':
        return css`
          ${commonOpenStyle}
          bottom: 0;
          left: 0;
          transform: translateY(0);
        `;
      default:
        return '';
    }
  }
};

export const BaseDrawer = styled.div<StyledDrawerProps>`
  position: absolute;
  display: none;
  flex-direction: column;
  width: ${(props) => getDrawerWidth(props)};
  max-width: ${(props) => getDrawerMaxWidth(props)};
  height: ${(props) => getDrawerHeight(props)};
  ${(props) => getAnimationStyle(props)};

  overflow: scroll;
  padding: 8px 0;

  z-index: 2;
  background-color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2rem;
    margin: 0 8px;
    padding: ${(props) => props.$padding}px;
    border-radius: 8px;
    cursor: pointer;
  }

  & > :hover {
    transition: all 300ms ease-in-out;
    background-color: rgb(0, 0, 0, 0.1);
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
