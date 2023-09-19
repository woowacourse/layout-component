import { PropsWithChildren } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface ContainerProps extends PropsWithChildren {
  maxWidth?: number;
  minWidth?: number;
  backgroundColor: CSSProperties['backgroundColor'];
}

const ContainerComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ContainerContentComponent = styled.div<ContainerProps>`
  min-width: ${({ maxWidth, minWidth }) => {
    const maxWidthParams = !maxWidth ? '100%' : `${maxWidth}px`;
    return `${!minWidth ? maxWidthParams : `${minWidth}px`}`;
  }};
  width: ${({ maxWidth }) => (!maxWidth ? '100%' : `${maxWidth}px`)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
`;

const Container = ({
  minWidth,
  maxWidth,
  backgroundColor = 'transparent',
  children,
}: Partial<ContainerProps>) => {
  return (
    <ContainerComponent>
      <ContainerContentComponent
        maxWidth={maxWidth}
        minWidth={minWidth}
        backgroundColor={backgroundColor}
      >
        {children}
      </ContainerContentComponent>
    </ContainerComponent>
  );
};

export default Container;
