import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { css, styled } from 'styled-components';
import { ResponsiveStyleType } from '../type';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';

type ContainerProps = {
  $maxWidth?:
    | CSSProperties['maxWidth']
    | ResponsiveStyleType<CSSProperties['maxWidth']>;
  $minWidth?:
    | CSSProperties['minWidth']
    | ResponsiveStyleType<CSSProperties['minWidth']>;
  background?:
    | CSSProperties['background']
    | ResponsiveStyleType<CSSProperties['background']>;
} & HTMLAttributes<HTMLElement>;

function Container(props: PropsWithChildren<ContainerProps>) {
  const { children, ...layoutProps } = props;

  return <Layout {...layoutProps}>{children}</Layout>;
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
