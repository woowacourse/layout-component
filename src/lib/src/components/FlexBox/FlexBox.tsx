import styled from 'styled-components';
import type { FlexBoxLayoutProps, Props } from './type';

function FlexBox({
  width = '100%',
  height = 'fit-content',
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  gap = 0,
  css,
  children,
}: Props) {
  return (
    <FlexBoxLayout
      $width={width}
      $height={height}
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

  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height)};

  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  gap: ${({ $gap }) => (typeof $gap === 'number' ? `${$gap}px` : $gap)};
`;

export default FlexBox;
