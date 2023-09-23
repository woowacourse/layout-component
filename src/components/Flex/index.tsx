import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props<Tag extends ElementType = 'div'> = {
  /**
   * Flex 컴포넌트의 HTML 태그
   *
   * @default 'div'
   */
  tag?: Tag;
  /**
   * Flex 컴포넌트의 flex-direction 속성
   *
   * @default 'row'
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * Flex 컴포넌트의 justify-content 속성
   *
   * @default 'center'
   */
  justify?: CSSProperties['justifyContent'];
  /**
   * Flex 컴포넌트의 align-items 속성
   *
   * @default 'center'
   */
  align?: CSSProperties['alignItems'];
  /**
   * Flex 컴포넌트의 gap 속성
   *
   * @default 'normal'
   */
  gap?: CSSProperties['gap'];
} & PropsWithChildren<ComponentPropsWithoutRef<Tag>>;

const Flex = <Tag extends ElementType>({ children, tag, ...rest }: Props<Tag>) => {
  return (
    <StyledFlex as={tag} {...rest}>
      {children}
    </StyledFlex>
  );
};

export default Flex;

const defaultStyle = css<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledFlex = styled.div<Props>`
  ${defaultStyle}
  ${({ direction, justify, align, gap }) => css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `};

  display: flex;
`;
