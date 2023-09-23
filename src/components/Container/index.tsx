import { PropsWithChildren } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface ContainerProps extends PropsWithChildren {
  maxwidth?: number;
  minwidth?: number;
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
  min-width: ${({ maxwidth, minwidth }) => {
    const maxWidthParams = !maxwidth ? '100%' : `${maxwidth}px`;
    return `${!minwidth ? maxWidthParams : `${minwidth}px`}`;
  }};
  width: ${({ maxwidth }) => (!maxwidth ? '100%' : `${maxwidth}px`)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
`;

const Container = ({
  minwidth,
  maxwidth,
  backgroundColor = 'transparent',
  children,
}: Partial<ContainerProps>) => {
  return (
    <ContainerComponent>
      <ContainerContentComponent
        maxwidth={maxwidth}
        minwidth={minwidth}
        backgroundColor={backgroundColor}
      >
        {children}
      </ContainerContentComponent>
    </ContainerComponent>
  );
};

export default Container;
