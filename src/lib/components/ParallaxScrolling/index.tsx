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

type LayoutProps = Omit<ParallaxScrollingProps, 'children'>;

const Layout = styled.div<LayoutProps>`
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
