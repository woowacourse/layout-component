import styled, { CSSProperties } from 'styled-components';

export interface CommonStyleProps {
  width?: string;
  fullScreen?: boolean;

  m?: string;
  mx?: string;
  my?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  mt?: string;

  mxAuto?: boolean;
  myAuto?: boolean;

  p?: string;
  px?: string;
  py?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;

  fontSize?: string;
  fontWeight?: CSSProperties['fontWeight'];
  textAlign?: CSSProperties['textAlign'] | string;

  border?: string;
  borderRadius?: string;

  color?: string;
  bgColor?: string;
}

const getMarginProperty = ({
  m,
  mx,
  my,
  mxAuto,
  myAuto,
}: {
  m?: string;
  mx?: string;
  my?: string;
  mxAuto?: boolean;
  myAuto?: boolean;
}) => {
  if (m) {
    return m;
  }

  if (mxAuto && myAuto) {
    return 'auto auto';
  }

  if (mxAuto && my) {
    return `${my} auto`;
  }

  if (myAuto && mx) {
    return `auto ${mx}`;
  }

  if (mx && my) {
    return `${my} ${mx}`;
  }

  if (mx) {
    return `0 ${mx}`;
  }

  return `${my} 0`;
};

const getPaddingProperty = ({
  p,
  px,
  py,
}: {
  p?: string;
  px?: string;
  py?: string;
}) => {
  if (p) {
    return p;
  }

  if (px && py) {
    return `${py} ${px}`;
  }

  if (px) {
    return `0 ${px}`;
  }

  return `${py} 0`;
};

const getWidthProperty = ({
  width,
  fullScreen,
}: {
  width?: string;
  fullScreen?: boolean;
}) => {
  if (fullScreen) {
    return '100vw';
  }

  if (width) {
    return width;
  }

  return '100%';
};

export const CommonTag = styled.div<CommonStyleProps>`
  width: ${({ width, fullScreen }) => getWidthProperty({ width, fullScreen })};

  padding: ${({ p, px, py }) => getPaddingProperty({ p, px, py })};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};

  margin: ${({ m, mx, my, mxAuto, myAuto }) =>
    getMarginProperty({ m, mx, mxAuto, my, myAuto })};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};

  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;
