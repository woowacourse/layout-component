import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  minWidth?: CSSProperties["minWidth"];
  maxWidth?: CSSProperties["maxWidth"];
}

const Container = ({ children, minWidth, maxWidth, ...rest }: Props) => {
  return (
    <S.Wrapper $minWidth={minWidth} $maxWidth={maxWidth} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default Container;

const S = {
  Wrapper: styled.div<{
    $minWidth?: CSSProperties["minWidth"];
    $maxWidth?: CSSProperties["maxWidth"];
  }>`
    min-width: ${({ $minWidth }) => $minWidth};
    max-width: ${({ $maxWidth }) => $maxWidth};
  `,
};
