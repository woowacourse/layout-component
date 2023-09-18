import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { css, styled } from 'styled-components';

type ContainerProps = {
  $maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  $minWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  background?: CSSProperties['background'];
} & HTMLAttributes<HTMLElement>;

const DEFAULT = {
  maxWidth: '100%',
  minWidth: '100%',
  background: 'rgba(250, 250, 250)',
} as const;

const WIDTH_SIZE = {
  xs: '450px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1500px',
} as const;

const WIDTH_SIZES = Object.keys(WIDTH_SIZE);

function Container(props: PropsWithChildren<ContainerProps>) {
  const { children, ...layoutProps } = props;

  if (
    layoutProps.$maxWidth &&
    layoutProps.$minWidth &&
    WIDTH_SIZES.indexOf(layoutProps.$maxWidth) <
      WIDTH_SIZES.indexOf(layoutProps.$minWidth)
  ) {
    throw new Error('최소 폭은 최대 폭 보다 클 수 없습니다.');
  }

  return <Layout {...layoutProps}>{children}</Layout>;
}

export default Container;

const Layout = styled.div<ContainerProps>`
  min-height: 100vh;
  margin: 0 auto;

  ${({ $maxWidth, $minWidth, background }) => css`
    max-width: ${$maxWidth ? WIDTH_SIZE[$maxWidth] : DEFAULT.maxWidth};
    min-width: ${$minWidth ? WIDTH_SIZE[$minWidth] : DEFAULT.minWidth};
    background: ${background || DEFAULT.background};
  `}
`;
