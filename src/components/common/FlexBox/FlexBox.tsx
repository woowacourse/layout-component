import styled from "styled-components";
import type { FlexBoxLayoutProps, FlexBoxProps } from "./type";

function FlexBox({
  direction,
  justify,
  align,
  gap,
  css,
  children,
}: FlexBoxProps) {
  return (
    <FlexBoxLayout
      $direction={direction}
      $justify={justify}
      $align={align}
      $gap={gap}
      css={css}
    >
      {children}
    </FlexBoxLayout>
  );
}

const FlexBoxLayout = styled.div<FlexBoxLayoutProps>`
  ${({ css }) => css}
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === undefined ? "row" : $direction};
  justify-content: ${({ $justify }) =>
    $justify === undefined ? "flex-start" : $justify};
  align-items: ${({ $align }) =>
    $align === undefined ? "flex-start" : $align};
  gap: ${({ $gap }) => ($gap === undefined ? 0 : $gap)}px;
`;

export default FlexBox;
