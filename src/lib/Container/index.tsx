import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type OVERFLOW = 'auto' | 'scroll' | 'hidden' | 'visible' | 'clip';

interface CSSContainerProps extends PropsWithChildren {
  minWidth?: number | string;
  maxWidth?: number | string;
  padding?: number;
  overflow?: OVERFLOW;
  borderRadius?: number | string;
  background?: string;
}

const Container = ({
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

export default Container;

const ContainerLayout = styled.div<CSSContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  margin: 0 auto;
  min-width: ${(props) => props.minWidth}px;
  max-width: ${(props) => props.maxWidth}px;
  overflow: ${(props) => props.overflow};
  background: ${(props) => props.background};

  ${(props) => props.padding && `padding: ${props.padding}px`};
  ${(props) =>
    props.borderRadius
      ? typeof props.borderRadius === 'number'
        ? `border-radius: ${props.borderRadius}px`
        : `border-radius: ${props.borderRadius}`
      : null};
`;
