import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    Partial<
      Pick<
        CSSProperties,
        | "maxWidth"
        | "minWidth"
        | "width"
        | "maxHeight"
        | "minHeight"
        | "height"
        | "margin"
        | "marginTop"
        | "marginBottom"
        | "marginLeft"
        | "marginRight"
        | "padding"
        | "paddingTop"
        | "paddingBottom"
        | "paddingLeft"
        | "paddingRight"
      >
    > {}

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
