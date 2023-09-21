import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import { styled, css } from 'styled-components';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';
import { ResponsiveStyleType } from '../type';

type FlexItemProps = {
  /**
   * HTML Tag를 지정하는 속성
   *
   *  * @default 'div'
   */
  tag?: ElementType;
  /**
   * 자기 자신의 수직 정렬을 지정하는 속성
   *
   *  * @default 'stretch'
   */
  align?:
    | CSSProperties['alignSelf']
    | ResponsiveStyleType<CSSProperties['alignSelf']>;
  /**
   * 자기 자신의 수평 정렬을 지정하는 속성
   *
   *  * @default 'stretch'
   */
  justify?:
    | CSSProperties['justifySelf']
    | ResponsiveStyleType<CSSProperties['justifySelf']>;
} & ComponentPropsWithoutRef<ElementType>;

function FlexItem({
  children,
  tag = 'div',
  align = 'stretch',
  justify = 'stretch',
  ...rest
}: PropsWithChildren<FlexItemProps>) {
  const styleProps = { align, justify };

  return (
    <Item as={tag} {...rest} {...styleProps}>
      {children}
    </Item>
  );
}

export default FlexItem;

const Item = styled.div<FlexItemProps>`
  ${({ align, justify }) => css`
    align-self: ${isCommonStyle<CSSProperties['alignSelf']>(align) && align};
    justify-self: ${isCommonStyle<CSSProperties['justifySelf']>(justify) &&
    justify};

    ${calculateResponsiveStyle('align-self', align)}
    ${calculateResponsiveStyle('justify-self', justify)}
  `}
`;
