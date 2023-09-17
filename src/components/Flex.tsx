import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  direction?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: string;
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
    $direction?: string;
    $flexWrap?: string;
    $justifyContent?: string;
    $alignItems?: string;
    $alignContent?: string;
    $gap?: string;
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
