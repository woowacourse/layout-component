import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { genResponsiveStyle } from '../../util';
import type { DeviceAndValue } from '../../type';

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
  direction?: CSSProperties['flexDirection'] | DeviceAndValue<CSSProperties['flexDirection']>;
  /**
   * Flex 컴포넌트의 justify-content 속성
   *
   * @default 'center'
   */
  justify?: CSSProperties['justifyContent'] | DeviceAndValue<CSSProperties['justifyContent']>;
  /**
   * Flex 컴포넌트의 align-items 속성
   *
   * @default 'center'
   */
  align?: CSSProperties['alignItems'] | DeviceAndValue<CSSProperties['alignItems']>;
  /**
   * Flex 컴포넌트의 gap 속성
   *
   * @default 'normal'
   */
  gap?: CSSProperties['gap'] | DeviceAndValue<CSSProperties['gap']>;
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
    flex-direction: ${typeof direction !== 'object' && direction};
    justify-content: ${typeof justify !== 'object' && justify};
    align-items: ${typeof align !== 'object' && align};
    gap: ${typeof gap !== 'object' && gap};

    ${genResponsiveStyle('flex-direction', direction)}
    ${genResponsiveStyle('justify-content', justify)}
    ${genResponsiveStyle('align-items', align)}
    ${genResponsiveStyle('gap', gap)}
  `};
`;
