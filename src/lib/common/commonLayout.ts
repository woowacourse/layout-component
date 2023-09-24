import { css } from 'styled-components';

export type CommonLayoutStyleProps = {
  width?: string | number;
  height?: string | number;
  padding?: string;
  margin?: string;
  bgcolor?: string;
};

export const commonLayoutStyle = css<CommonLayoutStyleProps>`
  ${(props) =>
    props.width !== undefined &&
    `
    width: ${
      typeof props.width === 'number' ? `${props.width}px` : props.width
    };
  `}
  ${(props) =>
    props.height !== undefined &&
    `
    height: ${
      typeof props.height === 'number' ? `${props.height}px` : props.height
    };
  `}
  ${(props) => props.padding !== undefined && `padding: ${props.padding};`}
  ${(props) => props.margin !== undefined && `margin: ${props.margin};`}
  ${(props) =>
    props.bgcolor !== undefined && `background-color: ${props.bgcolor};`}
`;
