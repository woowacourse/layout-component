import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  minWidth?: string;
  maxWidth?: string;
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
    $minWidth?: string;
    $maxWidth?: string;
  }>`
    min-width: ${({ $minWidth }) => $minWidth};
    max-width: ${({ $maxWidth }) => $maxWidth};
  `,
};
