import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styled, { CSSProp, CSSProperties } from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div">, PropsWithChildren {
  direction?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  etc?: CSSProp;
}

const Flex = ({
  children,
  direction,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  etc,
  ...rest
}: Props) => {
  return (
    <S.Wrapper
      $direction={direction}
      $flexWrap={flexWrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      $etc={etc}
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
    $etc: CSSProp;
  }>`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    flex-wrap: ${({ $flexWrap }) => $flexWrap};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-items: ${({ $alignItems }) => $alignItems};
    align-content: ${({ $alignContent }) => $alignContent};
    gap: ${({ $gap }) => $gap};

    ${({ $etc }) => $etc}
  `,
};
