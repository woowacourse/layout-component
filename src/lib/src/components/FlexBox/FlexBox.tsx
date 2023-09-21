import styled from 'styled-components';
import type { FlexBoxLayoutProps, Props } from './type';

function FlexBox({
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  gap = 0,
  css,
  children,
}: Props) {
  return (
    <FlexBoxLayout $direction={direction} $justify={justify} $align={align} $gap={gap} css={css}>
      {children}
    </FlexBoxLayout>
  );
}

const FlexBoxLayout = styled.div<FlexBoxLayoutProps>`
  ${({ css }) => css}

  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  gap: ${({ $gap }) => (typeof $gap === 'number' ? `${$gap}px` : $gap)};
`;

export default FlexBox;
