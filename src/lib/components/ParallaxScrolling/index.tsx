import { styled } from 'styled-components';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ParallaxScrollingProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}

const ParallaxScrolling = ({ children }: ParallaxScrollingProps) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
};

export default ParallaxScrolling;

const Layout = styled.div`
  height: 100vh;
  overflow-x: hidden;

  perspective: 0;
`;

const Container = styled.div`
  position: relative;

  height: 100%;

  transform-style: preserve-3d;

  z-index: -1;
`;
