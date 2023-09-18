import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  direction?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  gap?: CSSProperties["gap"];
}

const Flex = ({
  children,
  direction,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  ...rest
}: Props) => {
  return (
    <S.Wrapper
      $direction={direction}
      $flexWrap={flexWrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $gap={gap}
      {...rest}
    >
      {children}
    </S.Wrapper>
  );
};

export default Flex;

const S = {
  Wrapper: styled.div<{
    $direction?: CSSProperties["flexDirection"];
    $flexWrap?: CSSProperties["flexWrap"];
    $justifyContent?: CSSProperties["justifyContent"];
    $alignItems?: CSSProperties["alignItems"];
    $alignContent?: CSSProperties["alignContent"];
    $gap?: CSSProperties["gap"];
  }>`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    flex-wrap: ${({ $flexWrap }) => $flexWrap};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-items: ${({ $alignItems }) => $alignItems};
    align-content: ${({ $alignContent }) => $alignContent};
    gap: ${({ $gap }) => $gap};
  `,
};
