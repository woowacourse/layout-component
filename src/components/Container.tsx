import type { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Container 컴포넌트의 최대 너비
   */
  maxWidth?: number | string;
  /**
   * Container 컴포넌트의 최소 너비
   */
  minWidth?: number | string;
  /**
   * Container 컴포넌트의 너비
   */
  width?: number | string;
  /**
   * Container 컴포넌트의 최대 높이
   */
  maxHeight?: number | string;
  /**
   * Container 컴포넌트의 최소 높이
   */
  minHeight?: number | string;
  /**
   * Container 컴포넌트의 높이
   */
  height?: number | string;
  /**
   * Container 컴포넌트의 margin 크기
   */
  margin?: number | string;
  /**
   * Container 컴포넌트의 margin top 크기
   */
  marginTop?: number | string;
  /**
   * Container 컴포넌트의 margin bottom 크기
   */
  marginBottom?: number | string;
  /**
   * Container 컴포넌트의 margin left 크기
   */
  marginLeft?: number | string;
  /**
   * Container 컴포넌트의 margin right 크기
   */
  marginRight?: number | string;
  /**
   * Container 컴포넌트의 padding 크기
   */
  padding?: number | string;
  /**
   * Container 컴포넌트의 padding top 크기
   */
  paddingTop?: number | string;
  /**
   * Container 컴포넌트의 padding bottom 크기
   */
  paddingBottom?: number | string;
  /**
   * Container 컴포넌트의 padding left 크기
   */
  paddingLeft?: number | string;
  /**
   * Container 컴포넌트의 padding right 크기
   */
  paddingRight?: number | string;
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const {
    maxWidth = "100%",
    minWidth,
    width,
    maxHeight = "100%",
    minHeight,
    height,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    children,
    style,
    ...rest
  } = props;

  return (
    <ContainerWrapper
      style={{
        minWidth,
        maxWidth,
        width,
        minHeight,
        maxHeight,
        height,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        ...style,
      }}
      {...rest}
    >
      {children}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
