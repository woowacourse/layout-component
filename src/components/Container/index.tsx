import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type OVERFLOW = 'auto' | 'scroll' | 'hidden' | 'visible' | 'clip';

interface CSSContainerProps extends PropsWithChildren {
  minWidth: number;
  maxWidth: number;
  padding?: number;
  overflow?: OVERFLOW;
}

const Container = ({ minWidth, maxWidth, padding, overflow, children }: CSSContainerProps) => {
  return (
    <ContainerLayout minWidth={minWidth} maxWidth={maxWidth} padding={padding} overflow={overflow}>
      {children}
    </ContainerLayout>
  );
};

export default Container;

const ContainerLayout = styled.div<CSSContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  height: 100vh;
  margin: 0 auto;
  min-width: ${(props) => props.minWidth}px;
  max-width: ${(props) => props.maxWidth}px;
  overflow: ${(props) => props.overflow};
  padding: ${(props) => props.padding}px;
`;
