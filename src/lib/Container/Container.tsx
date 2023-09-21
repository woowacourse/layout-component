import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import { css, styled } from 'styled-components';
import { ResponsiveStyleType } from '../type';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';

type ContainerProps = {
  /**
   * HTML Tag를 지정하는 속성
   *
   *  * @default 'div'
   */
  tag?: ElementType;
  /**
   * Container의 최대 너비를 지정하는 속성
   *
   *  * @default '100%'
   */
  $maxWidth?:
    | CSSProperties['maxWidth']
    | ResponsiveStyleType<CSSProperties['maxWidth']>;
  /**
   * Container의 최소 너비를 지정하는 속성
   *
   *  * @default '100%'
   */
  $minWidth?:
    | CSSProperties['minWidth']
    | ResponsiveStyleType<CSSProperties['minWidth']>;
  /**
   * Container의 배경을 지정하는 속성
   *
   *  * @default 'rgba(250, 250, 250)%'
   */
  background?:
    | CSSProperties['background']
    | ResponsiveStyleType<CSSProperties['background']>;
} & ComponentPropsWithoutRef<ElementType>;

function Container({
  children,
  tag = 'div',
  $maxWidth = '100%',
  $minWidth = '100%',
  background = 'rgba(250, 250, 250)',
  ...rest
}: PropsWithChildren<ContainerProps>) {
  const styleProps = { $maxWidth, $minWidth, background };

  return (
    <Layout as={tag} {...rest} {...styleProps}>
      {children}
    </Layout>
  );
}

export default Container;

const Layout = styled.div<ContainerProps>`
  min-height: 100vh;
  margin: 0 auto;

  ${({ $maxWidth, $minWidth, background = 'rgba(250, 250, 250)' }) => css`
    max-width: ${isCommonStyle<CSSProperties['maxWidth']>($maxWidth) &&
    $maxWidth};
    min-width: ${isCommonStyle<CSSProperties['minWidth']>($minWidth) &&
    $minWidth};
    background: ${isCommonStyle<CSSProperties['background']>(background) &&
    background};

    ${calculateResponsiveStyle('max-width', $maxWidth)}
    ${calculateResponsiveStyle('min-width', $minWidth)}
    ${calculateResponsiveStyle('background', background)}
  `}
`;
