import { styled } from 'styled-components';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ParallaxScrollingProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  perspective?: number;
}

const ParallaxScrolling = ({
  children,
  perspective,
}: ParallaxScrollingProps) => {
  return (
    <Layout perspective={perspective}>
      <Container>{children}</Container>
    </Layout>
  );
};

export default ParallaxScrolling;

const Layout = styled.div<{ perspective?: number }>`
  height: 100vh;
  overflow-x: hidden;

  perspective: ${({ perspective }) =>
    perspective ? `${perspective}px` : '0px'};
`;

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  transform-style: preserve-3d;

  z-index: -1;
`;
