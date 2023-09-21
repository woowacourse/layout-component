import styled from 'styled-components';

import type { ContainerLayoutProps, Props } from './type';

function Container({ minWidth = 'fit-content', maxWidth = '100%', children, css }: Props) {
  return (
    <ContainerLayout $minWidth={minWidth} $maxWidth={maxWidth} css={css}>
      {children}
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div<ContainerLayoutProps>`
  ${({ css }) => css}

  margin: 0 auto;

  min-width: ${({ $minWidth }) => (typeof $minWidth === 'string' ? $minWidth : `${$minWidth}px`)};
  max-width: ${({ $maxWidth }) => (typeof $maxWidth === 'string' ? $maxWidth : `${$maxWidth}px`)};
`;

export default Container;
