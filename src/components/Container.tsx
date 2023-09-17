import React from "react";
import styled from "styled-components";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: number | string;
  minWidth?: number | string;
  width?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  height?: number | string;
  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
}

const Container = (props: ContainerProps) => {
  const {
    minWidth,
    maxWidth = "100%",
    width,
    minHeight,
    maxHeight = "100%",
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
    <Wrapper
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
