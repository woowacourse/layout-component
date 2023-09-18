import { css } from 'styled-components';

export type CommonLayoutStyleProps = {
  width?: string | number;
  height?: string | number;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
};

export const commonLayoutStyle = css<CommonLayoutStyleProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.margin || 'transparent'};
`;
