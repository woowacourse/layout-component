import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type OVERFLOW = 'auto' | 'scroll' | 'hidden' | 'visible' | 'clip';

interface CSSContainerProps extends PropsWithChildren {
  as?: string;
  minWidth?: number | string;
  maxWidth?: number | string;
  padding?: number;
  overflow?: OVERFLOW;
  borderRadius?: number | string;
  background?: string;
}

export const Container = ({
  as = 'div',
  minWidth = '100%',
  maxWidth = '100%',
  padding,
  overflow,
  borderRadius,
  background = 'white',
  children,
}: CSSContainerProps) => {
  return (
    <ContainerLayout
      as={as}
      minWidth={minWidth}
      maxWidth={maxWidth}
      padding={padding}
      overflow={overflow}
      borderRadius={borderRadius}
      background={background}
    >
      {children}
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div<CSSContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  margin: 0 auto;
  min-width: ${(props) =>
    typeof props.minWidth === 'number' ? `${props.minWidth}px` : props.minWidth};
  max-width: ${(props) =>
    typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth};
  overflow: ${(props) => props.overflow};
  background: ${(props) => props.background};

  padding: ${(props) => props.padding}px;

  border-radius: ${(props) =>
    props.borderRadius && typeof props.borderRadius === 'number'
      ? `${props.borderRadius}px`
      : `${props.borderRadius}`};
`;
