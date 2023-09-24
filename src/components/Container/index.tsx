import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type ContainerTag = 'div' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main';

type Props<Tag extends ContainerTag = 'div'> = {
  /**
   * Flex 컴포넌트의 HTML 태그
   *
   * @default 'div'
   */
  tag?: Tag;
  /**
   * Container의 min-width 속성
   *
   * @default 'auto'
   */
  minWidth?: CSSProperties['minWidth'];
  /**
   * Container의 max-width 속성
   *
   * @default 'auto'
   */
  maxWidth?: CSSProperties['maxWidth'];
} & PropsWithChildren<ComponentPropsWithoutRef<Tag>>;

const Container = <Tag extends ContainerTag>({ children, tag, ...rest }: Props<Tag>) => {
  return (
    <StyledContainer as={tag} {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div<Props>`
  ${({ minWidth, maxWidth }) => css`
    min-width: ${minWidth};
    max-width: ${maxWidth};
  `};

  margin: 0 auto;
`;
