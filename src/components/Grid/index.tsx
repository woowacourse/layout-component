import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props<Tag extends ElementType = 'div'> = {
  /**
   * Flex 컴포넌트의 HTML 태그
   *
   * @default 'div'
   */
  tag?: Tag;
  rows: number;
  columns: number;
  gap?: CSSProperties['gap'];
} & PropsWithChildren<ComponentPropsWithoutRef<Tag>>;

const Grid = <Tag extends ElementType>({
  children,
  tag,
  ...rest
}: PropsWithChildren<Props<Tag>>) => {
  return (
    <StyledGrid as={tag} {...rest}>
      {children}
    </StyledGrid>
  );
};

export default Grid;

const StyledGrid = styled.div<Props>`
  ${({ rows, columns, gap }) => css`
    grid-template-rows: repeat(${rows}, 1fr);
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: ${gap};
  `};

  display: grid;
`;
