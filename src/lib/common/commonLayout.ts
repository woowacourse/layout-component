import { css } from 'styled-components';

export type CommonLayoutStyleProps = {
  width?: string | number;
  height?: string | number;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
};

export const commonLayoutStyle = css<CommonLayoutStyleProps>`
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || 'auto'};
  height: ${(props) =>
    typeof props.height === 'number'
      ? `${props.height}px`
      : props.height || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;
