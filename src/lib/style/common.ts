import { CSSProperties } from 'react';
import styled from 'styled-components';

export interface CommonStyleProps {
  /**
   * 컴포넌트의 너비를 조정할 수 있습니다.
   */
  width?: string;
  /**
   * true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)
   */
  fullScreen?: boolean;
  /**
   * margin 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  m?: string;
  /**
   * margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  mx?: string;
  /**
   * margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  my?: string;
  /**
   * margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  ml?: string;
  /**
   * margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  mr?: string;
  /**
   * margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  mb?: string;
  /**
   * margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  mt?: string;
  /**
   * margin에서 가로 옵션을 auto로 조정할 수 있습니다.
   */
  mxAuto?: boolean;
  /**
   * margin에서 세로 옵션을 auto로 조정할 수 있습니다.
   */
  myAuto?: boolean;
  /**
   * padding 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  p?: string;
  /**
   * padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  px?: string;
  /**
   * padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  py?: string;
  /**
   * padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  pl?: string;
  /**
   * padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  pr?: string;
  /**
   * padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
  pb?: string;
  /**
   * padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%
   */
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
