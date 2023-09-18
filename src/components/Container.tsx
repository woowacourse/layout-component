import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled, { CSSProp, CSSProperties } from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  minWidth?: CSSProperties["minWidth"];
  maxWidth?: CSSProperties["maxWidth"];
  etc?: CSSProp;
}

const Container = ({ children, minWidth, maxWidth, etc, ...rest }: Props) => {
  return (
    <S.Wrapper $minWidth={minWidth} $maxWidth={maxWidth} $etc={etc} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default Container;

const S = {
  Wrapper: styled.div<{
    $minWidth?: CSSProperties["minWidth"];
    $maxWidth?: CSSProperties["maxWidth"];
    $etc?: CSSProp;
  }>`
    min-width: ${({ $minWidth }) => $minWidth};
    max-width: ${({ $maxWidth }) => $maxWidth};

    ${({ $etc }) => $etc}
  `,
};
