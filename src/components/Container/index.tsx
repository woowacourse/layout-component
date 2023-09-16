import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ContainerProps extends PropsWithChildren {
  maxWidth?: number;
  minWidth?: number;
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
  height: 100%;
`;

const Container = ({
  minWidth,
  maxWidth,
  children,
}: Partial<ContainerProps>) => {
  return (
    <ContainerComponent>
      <ContainerContentComponent maxWidth={maxWidth} minWidth={minWidth}>
        {children}
      </ContainerContentComponent>
    </ContainerComponent>
  );
};

export default Container;
